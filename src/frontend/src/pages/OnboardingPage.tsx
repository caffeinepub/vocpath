import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  GraduationCap,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { allZones } from "../data/allZones";
import { useInternetIdentity } from "../hooks/useInternetIdentity";
import {
  useCompleteOnboarding,
  useCreateOrUpdateProfile,
  useSaveSkillAssessment,
} from "../hooks/useQueries";

type Purpose = "learning" | "upskilling" | "exploring" | "teaching" | null;
type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | null;

const purposes = [
  {
    id: "learning",
    label: "Learning a trade",
    description: "Starting fresh in a skilled trade",
  },
  {
    id: "upskilling",
    label: "Upskilling in my trade",
    description: "Building on existing knowledge",
  },
  {
    id: "exploring",
    label: "Exploring options",
    description: "Discovering which trade suits me",
  },
  {
    id: "teaching",
    label: "Teaching / supervising",
    description: "Developing others in the trade",
  },
];

const skillLevels = [
  {
    id: "Beginner",
    label: "Beginner",
    description: "New to this trade. I have little or no hands-on experience.",
  },
  {
    id: "Intermediate",
    label: "Intermediate",
    description:
      "Some experience under my belt. I can perform common tasks with guidance.",
  },
  {
    id: "Advanced",
    label: "Advanced",
    description:
      "Experienced tradesperson. I work independently and mentor others.",
  },
];

// Group zones by cluster for display
const clusterGroups = [
  {
    label: "Construction & Trades",
    ids: [
      "carpentry",
      "electrical",
      "plumbing",
      "masonry",
      "hvac",
      "concreting",
      "steel-fabrication",
      "metalworking",
      "machining",
      "construction-management",
    ],
  },
  {
    label: "Automotive & Transport",
    ids: [
      "auto-mechanics",
      "diesel-engines",
      "auto-electrical",
      "brakes-suspension",
      "heavy-vehicle",
      "logistics",
    ],
  },
  {
    label: "Information Technology",
    ids: [
      "pc-hardware",
      "networking",
      "cybersecurity",
      "help-desk",
      "web-dev-basics",
    ],
  },
];

export default function OnboardingPage() {
  const navigate = useNavigate();
  const { login, identity, isLoggingIn } = useInternetIdentity();
  const [step, setStep] = useState(1);
  const [purpose, setPurpose] = useState<Purpose>(null);
  const [selectedTrades, setSelectedTrades] = useState<string[]>([]);
  const [skillLevel, setSkillLevel] = useState<SkillLevel>(null);
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");

  const saveSkillAssessment = useSaveSkillAssessment();
  const createProfile = useCreateOrUpdateProfile();
  const completeOnboarding = useCompleteOnboarding();

  const isSubmitting =
    saveSkillAssessment.isPending ||
    createProfile.isPending ||
    completeOnboarding.isPending;

  const toggleTrade = (tradeId: string) => {
    setSelectedTrades((prev) =>
      prev.includes(tradeId)
        ? prev.filter((id) => id !== tradeId)
        : [...prev, tradeId],
    );
  };

  const handleSubmit = async () => {
    if (selectedTrades.length === 0 || !skillLevel) return;
    try {
      await Promise.all([
        ...selectedTrades.map((tradeId) =>
          saveSkillAssessment.mutateAsync({ tradeId, level: skillLevel }),
        ),
        createProfile.mutateAsync({
          displayName: displayName || "Learner",
          email,
        }),
      ]);
      await completeOnboarding.mutateAsync(selectedTrades[0] ?? "");
      navigate({ to: "/dashboard" });
    } catch {
      toast.error("Failed to save. Please try again.");
    }
  };

  return (
    <div
      className="min-h-screen bg-background flex flex-col"
      data-ocid="onboarding.page"
    >
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-accent flex items-center justify-center">
            <GraduationCap className="h-4 w-4 text-accent-foreground" />
          </div>
          <span className="font-display font-bold text-lg text-foreground tracking-tight">
            Voc<span className="text-accent">Path</span>
          </span>
        </div>
        <p className="text-sm text-muted-foreground">Step {step} of 3</p>
      </header>

      {/* Progress bar */}
      <div className="h-1 bg-muted">
        <div
          className="h-full bg-primary transition-all duration-500"
          style={{ width: `${(step / 3) * 100}%` }}
        />
      </div>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-10">
        <div className="w-full max-w-lg space-y-6">
          {/* Step 1: Purpose + Sign In */}
          {step === 1 && (
            <>
              <div>
                <h1 className="font-display text-2xl font-bold text-foreground">
                  Welcome to VocPath
                </h1>
                <p className="text-muted-foreground mt-1 text-sm">
                  Let's personalise your learning pathway. Sign in first to save
                  your progress.
                </p>
              </div>

              {/* Sign-in card */}
              {!identity ? (
                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="p-5 flex items-center justify-between gap-4">
                    <div>
                      <p className="font-semibold text-foreground text-sm">
                        Sign in to get started
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Required to save your progress
                      </p>
                    </div>
                    <Button
                      onClick={login}
                      disabled={isLoggingIn}
                      size="sm"
                      data-ocid="onboarding.sign_in_button"
                    >
                      {isLoggingIn ? "Signing in…" : "Sign In"}
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-emerald-500/30 bg-emerald-500/5">
                  <CardContent className="p-4 flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                    <p className="text-sm font-medium text-foreground">
                      Signed in and ready to go
                    </p>
                  </CardContent>
                </Card>
              )}

              <div>
                <p className="text-sm font-medium text-foreground mb-3">
                  What brings you here?
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {purposes.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setPurpose(p.id as Purpose)}
                      className={`text-left p-3 rounded-lg border transition-all ${
                        purpose === p.id
                          ? "border-primary bg-primary/5 ring-1 ring-primary"
                          : "border-border hover:border-border/60"
                      }`}
                      data-ocid={`onboarding.purpose.${p.id}`}
                    >
                      <p className="text-sm font-medium text-foreground">
                        {p.label}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {p.description}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              <Button
                className="w-full"
                onClick={() => setStep(2)}
                data-ocid="onboarding.next_step1_button"
              >
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </>
          )}

          {/* Step 2: Select trades */}
          {step === 2 && (
            <>
              <div>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors"
                  data-ocid="onboarding.back_step2_button"
                >
                  <ArrowLeft className="h-3.5 w-3.5" /> Back
                </button>
                <h1 className="font-display text-2xl font-bold text-foreground">
                  Choose your pathways
                </h1>
                <p className="text-muted-foreground mt-1 text-sm">
                  Select one or more trades you want to learn. You can change
                  this later.
                </p>
              </div>

              <div className="space-y-5">
                {clusterGroups.map((group) => {
                  const groupZones = allZones.filter((z) =>
                    group.ids.includes(z.id),
                  );
                  if (groupZones.length === 0) return null;
                  return (
                    <div key={group.label}>
                      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                        {group.label}
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {groupZones.map((zone) => {
                          const selected = selectedTrades.includes(zone.id);
                          return (
                            <button
                              key={zone.id}
                              type="button"
                              onClick={() => toggleTrade(zone.id)}
                              className={`text-left p-3 rounded-lg border transition-all ${
                                selected
                                  ? "border-primary bg-primary/5 ring-1 ring-primary"
                                  : "border-border hover:border-border/60"
                              }`}
                              data-ocid={`onboarding.trade.${zone.id}`}
                            >
                              <div className="flex items-center justify-between gap-2">
                                <p className="text-sm font-medium text-foreground leading-tight">
                                  {zone.shortName}
                                </p>
                                {selected && (
                                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                                )}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              <Button
                className="w-full"
                onClick={() => setStep(3)}
                disabled={selectedTrades.length === 0}
                data-ocid="onboarding.next_step2_button"
              >
                Continue ({selectedTrades.length} selected){" "}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </>
          )}

          {/* Step 3: Skill level + profile */}
          {step === 3 && (
            <>
              <div>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors"
                  data-ocid="onboarding.back_step3_button"
                >
                  <ArrowLeft className="h-3.5 w-3.5" /> Back
                </button>
                <h1 className="font-display text-2xl font-bold text-foreground">
                  Your experience level
                </h1>
                <p className="text-muted-foreground mt-1 text-sm">
                  This helps us tailor the difficulty of your learning modules.
                </p>
              </div>

              <div className="space-y-2">
                {skillLevels.map((level) => (
                  <button
                    key={level.id}
                    type="button"
                    onClick={() => setSkillLevel(level.id as SkillLevel)}
                    className={`w-full text-left p-4 rounded-lg border transition-all ${
                      skillLevel === level.id
                        ? "border-primary bg-primary/5 ring-1 ring-primary"
                        : "border-border hover:border-border/60"
                    }`}
                    data-ocid={`onboarding.skill_level.${level.id.toLowerCase()}`}
                  >
                    <p className="font-medium text-foreground">{level.label}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {level.description}
                    </p>
                  </button>
                ))}
              </div>

              <div className="space-y-3">
                <div>
                  <Label htmlFor="displayName" className="text-sm">
                    Your name (optional)
                  </Label>
                  <Input
                    id="displayName"
                    placeholder="e.g. Alex"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    className="mt-1"
                    autoComplete="name"
                    data-ocid="onboarding.name_input"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm">
                    Email (optional)
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1"
                    autoComplete="email"
                    data-ocid="onboarding.email_input"
                  />
                </div>
              </div>

              {!identity && (
                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="p-4 flex items-center justify-between gap-4">
                    <div>
                      <p className="font-semibold text-foreground text-sm">
                        Sign in to save your progress
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Required to start learning
                      </p>
                    </div>
                    <Button
                      onClick={login}
                      disabled={isLoggingIn}
                      size="sm"
                      data-ocid="onboarding.sign_in_step3_button"
                    >
                      {isLoggingIn ? "Signing in…" : "Sign In"}
                    </Button>
                  </CardContent>
                </Card>
              )}

              <Button
                className="w-full"
                onClick={handleSubmit}
                disabled={
                  !identity ||
                  !skillLevel ||
                  selectedTrades.length === 0 ||
                  isSubmitting
                }
                data-ocid="onboarding.submit_button"
              >
                {isSubmitting ? "Saving…" : "Start Learning"}
                {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>

              {!identity && (
                <p className="text-xs text-center text-muted-foreground">
                  You need to sign in above to save your selections and start
                  learning.
                </p>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
}
