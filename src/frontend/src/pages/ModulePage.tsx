import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Link, useNavigate, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle,
  ChevronLeft,
  Eye,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { findZone } from "../data/allZones";
import { levelColors } from "../data/levelColors";
import { allModules } from "../data/tradeContent";
import { useActor } from "../hooks/useActor";

export default function ModulePage() {
  const { tradeId, moduleId } = useParams({ strict: false }) as {
    tradeId: string;
    moduleId: string;
  };
  const navigate = useNavigate();
  const { actor } = useActor();
  const [currentStep, setCurrentStep] = useState(0);
  const [completing, setCompleting] = useState(false);

  const module = allModules.find(
    (m) => m.id === moduleId && m.tradeId === tradeId,
  );

  const zone = findZone(tradeId);
  const tradeName = zone?.shortName ?? tradeId;

  if (!module) {
    return (
      <div
        className="max-w-2xl mx-auto px-4 py-16 text-center"
        data-ocid="module.error_state"
      >
        <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <h1 className="font-display text-2xl font-bold text-foreground">
          Module not found
        </h1>
        <p className="text-muted-foreground mt-2">
          That module doesn't exist or hasn't been published yet.
        </p>
        <Button asChild className="mt-6" variant="outline">
          <Link to="/trade/$tradeId" params={{ tradeId }}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to {tradeName}
          </Link>
        </Button>
      </div>
    );
  }

  const step = module.steps[currentStep];
  const isLast = currentStep === module.steps.length - 1;
  const progress = ((currentStep + 1) / module.steps.length) * 100;

  async function handleComplete() {
    setCompleting(true);
    try {
      if (actor) {
        await actor.completeModule(tradeId, moduleId, tradeId, 100n);
      }
      navigate({
        to: "/trade/$tradeId/quiz/$moduleId",
        params: { tradeId, moduleId },
      });
    } catch {
      toast.error("Failed to record completion. Please try again.");
      setCompleting(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4 lg:px-6 py-8 space-y-6">
      {/* Back link */}
      <Button
        asChild
        variant="ghost"
        size="sm"
        className="-ml-2"
        data-ocid="module.back_link"
      >
        <Link to="/trade/$tradeId" params={{ tradeId }}>
          <ChevronLeft className="mr-1 h-4 w-4" /> Back to {tradeName}
        </Link>
      </Button>

      {/* Module title */}
      <h1 className="font-display text-xl font-bold text-foreground">
        {module.title}
      </h1>

      {/* Module header */}
      <div
        className="opacity-0 animate-fade-up"
        style={{ animationFillMode: "forwards" }}
      >
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${
              levelColors[module.level]
            }`}
          >
            Level {module.level}
          </span>
          <Badge variant="secondary" className="text-xs">
            {module.durationMinutes} min
          </Badge>
        </div>
        <p className="text-muted-foreground text-sm">{module.summary}</p>

        {/* Key concepts */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {module.keyConcepts.map((concept) => (
            <span
              key={concept}
              className="inline-flex items-center px-2 py-0.5 rounded bg-accent/10 text-accent-foreground text-xs font-medium border border-accent/20"
            >
              {concept}
            </span>
          ))}
        </div>
      </div>

      {/* Step progress */}
      <div
        className="opacity-0 animate-fade-up animate-stagger-2"
        style={{ animationFillMode: "forwards" }}
      >
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-medium text-foreground">
            Step {currentStep + 1} of {module.steps.length}
          </p>
          <p className="text-xs text-muted-foreground">
            {Math.round(progress)}% complete
          </p>
        </div>
        <Progress value={progress} className="h-2.5" />
      </div>

      {/* Step card */}
      <div
        className="opacity-0 animate-fade-up animate-stagger-3"
        style={{ animationFillMode: "forwards" }}
        key={step.id}
      >
        <Card className="shadow-card border-border">
          <CardContent className="p-6 lg:p-8 space-y-5">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <h2 className="font-display text-xl font-bold text-foreground leading-snug">
                {step.title}
              </h2>
            </div>

            <p className="text-foreground leading-relaxed text-sm lg:text-base">
              {step.body}
            </p>

            {/* Visual cue callout */}
            <div className="rounded-lg bg-accent/10 border border-accent/25 p-4 flex gap-3">
              <Eye className="h-4 w-4 text-accent-foreground shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-accent-foreground uppercase tracking-wide mb-1">
                  Visual Cue
                </p>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {step.visualCue}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Navigation buttons */}
      <div
        className="opacity-0 animate-fade-up animate-stagger-4 flex items-center justify-between gap-3 pt-2"
        style={{ animationFillMode: "forwards" }}
      >
        <Button
          variant="outline"
          onClick={() => setCurrentStep((s) => Math.max(0, s - 1))}
          disabled={currentStep === 0}
          data-ocid="module.prev_button"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Previous
        </Button>

        {isLast ? (
          <Button
            onClick={handleComplete}
            disabled={completing}
            className="bg-primary text-primary-foreground"
            data-ocid="module.complete_button"
          >
            {completing ? (
              "Saving\u2026"
            ) : (
              <>
                <CheckCircle className="mr-2 h-4 w-4" /> Complete &amp; Take
                Quiz
              </>
            )}
          </Button>
        ) : (
          <Button
            onClick={() =>
              setCurrentStep((s) => Math.min(module.steps.length - 1, s + 1))
            }
            data-ocid="module.next_button"
          >
            Next <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
