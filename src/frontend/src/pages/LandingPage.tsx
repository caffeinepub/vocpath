import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Briefcase,
  Car,
  GraduationCap,
  HardHat,
  Heart,
  MapPin,
  Monitor,
  Sparkles,
  UtensilsCrossed,
  Wrench,
} from "lucide-react";

const CLUSTERS = [
  {
    id: "construction",
    label: "Construction & Trades",
    Icon: Wrench,
    color: "amber",
    progress: 40,
    delay: 0,
  },
  {
    id: "automotive",
    label: "Automotive & Transport",
    Icon: Car,
    color: "blue",
    progress: 60,
    delay: 0.25,
  },
  {
    id: "it",
    label: "Information Technology",
    Icon: Monitor,
    color: "violet",
    progress: 30,
    delay: 0.5,
  },
  {
    id: "health",
    label: "Health & Care",
    Icon: Heart,
    color: "rose",
    progress: 80,
    delay: 0.75,
  },
  {
    id: "hospitality",
    label: "Hospitality",
    Icon: UtensilsCrossed,
    color: "orange",
    progress: 50,
    delay: 1.0,
  },
  {
    id: "business",
    label: "Business & Finance",
    Icon: Briefcase,
    color: "emerald",
    progress: 70,
    delay: 1.25,
  },
];

const COLOR_MAP: Record<
  string,
  { icon: string; bar: string; glow: string; bg: string }
> = {
  amber: {
    icon: "text-amber-400",
    bar: "bg-amber-400",
    glow: "shadow-amber-400/40",
    bg: "bg-amber-400/10",
  },
  blue: {
    icon: "text-blue-400",
    bar: "bg-blue-400",
    glow: "shadow-blue-400/40",
    bg: "bg-blue-400/10",
  },
  violet: {
    icon: "text-violet-400",
    bar: "bg-violet-400",
    glow: "shadow-violet-400/40",
    bg: "bg-violet-400/10",
  },
  rose: {
    icon: "text-rose-400",
    bar: "bg-rose-400",
    glow: "shadow-rose-400/40",
    bg: "bg-rose-400/10",
  },
  orange: {
    icon: "text-orange-400",
    bar: "bg-orange-400",
    glow: "shadow-orange-400/40",
    bg: "bg-orange-400/10",
  },
  emerald: {
    icon: "text-emerald-400",
    bar: "bg-emerald-400",
    glow: "shadow-emerald-400/40",
    bg: "bg-emerald-400/10",
  },
};

function AnimatedPathwayMap() {
  return (
    <div className="relative w-full max-w-sm mx-auto lg:max-w-md">
      <style>{`
        @keyframes map-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
        @keyframes tile-fade-in {
          from { opacity: 0; transform: translateY(10px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0px)  scale(1); }
        }
        @keyframes bar-fill-0  { 0%,10% { width:0% } 30%,80% { width:40% } 100% { width:40% } }
        @keyframes bar-fill-1  { 0%,20% { width:0% } 40%,80% { width:60% } 100% { width:60% } }
        @keyframes bar-fill-2  { 0%,30% { width:0% } 50%,80% { width:30% } 100% { width:30% } }
        @keyframes bar-fill-3  { 0%,40% { width:0% } 60%,80% { width:80% } 100% { width:80% } }
        @keyframes bar-fill-4  { 0%,50% { width:0% } 70%,80% { width:50% } 100% { width:50% } }
        @keyframes bar-fill-5  { 0%,60% { width:0% } 80%,90% { width:70% } 100% { width:70% } }
      `}</style>
      <div
        className="relative rounded-2xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-sm"
        style={{ animation: "map-float 5s ease-in-out infinite" }}
      >
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-semibold text-white/60 uppercase tracking-widest">
            Skill Pathway Map
          </span>
          <span className="rounded-full bg-accent/20 px-2 py-0.5 text-xs font-bold text-accent">
            4 Clusters Live
          </span>
        </div>
        <div className="space-y-2">
          {CLUSTERS.map((c, i) => {
            const colors = COLOR_MAP[c.color];
            const Icon = c.Icon;
            return (
              <div
                key={c.id}
                className="flex items-center gap-2.5 rounded-lg bg-white/5 p-2"
                style={{
                  animation: `tile-fade-in 0.5s ease-out ${c.delay}s both`,
                }}
              >
                <div
                  className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 ${colors.bg}`}
                >
                  <Icon className={`h-3.5 w-3.5 ${colors.icon}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-white/80 truncate">
                    {c.label}
                  </p>
                  <div className="mt-1 h-1 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${colors.bar}`}
                      style={{
                        animation: `bar-fill-${i} 3s ease-out 0.5s both`,
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3">
          <span className="text-[11px] text-white/50">VocPath by EdUnite</span>
          <span className="text-[11px] font-semibold text-white/70">
            120+ Modules
          </span>
        </div>
      </div>
    </div>
  );
}

const STATS = [
  {
    id: "trades",
    value: "24+",
    label: "Vocational Trades",
    sub: "Across 4 clusters",
  },
  {
    id: "modules",
    value: "120+",
    label: "Learning Modules",
    sub: "Across all trades",
  },
  {
    id: "quizzes",
    value: "500+",
    label: "Quiz Questions",
    sub: "Knowledge checks",
  },
];

const FEATURES = [
  {
    id: "map",
    icon: MapPin,
    title: "Visual Skill Maps",
    description:
      "Watch your real-world capabilities grow on an interactive map. Progress you can see and show employers.",
    accent: "bg-primary/10 text-primary",
  },
  {
    id: "modules",
    icon: BookOpen,
    title: "Structured Pathways",
    description:
      "120+ modules across 24 trades. Every lesson builds the practical skills hiring managers actually want.",
    accent: "bg-accent/10 text-accent-foreground",
  },
  {
    id: "ai",
    icon: Brain,
    title: "Future-Proof Learning",
    description:
      "Every pathway is chosen for long-term career durability. Skills that grow in value as AI reshapes the workforce.",
    accent: "bg-emerald-500/10 text-emerald-700",
  },
];

export default function LandingPage() {
  return (
    <div
      className="h-screen overflow-y-scroll snap-y snap-mandatory"
      data-ocid="landing.page"
    >
      {/* ── Fixed nav ─────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex h-14 items-center justify-between px-5 lg:px-10 bg-foreground/80 backdrop-blur-md border-b border-white/10">
        <Link
          to="/"
          className="flex items-center gap-2"
          data-ocid="landing.logo.link"
        >
          <div className="w-7 h-7 rounded-md bg-accent flex items-center justify-center shrink-0">
            <GraduationCap className="h-4 w-4 text-accent-foreground" />
          </div>
          <span className="font-display font-bold text-lg text-white tracking-tight">
            Voc<span className="text-accent">Path</span>
          </span>
          <span className="hidden sm:inline text-white/60 text-xs ml-1 font-normal">
            by EdUnite
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="text-white hover:text-white hover:bg-white/10"
            data-ocid="landing.login_button"
          >
            <Link to="/onboarding">Sign In</Link>
          </Button>
          <Button
            size="sm"
            asChild
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
            data-ocid="landing.primary_button"
          >
            <Link to="/onboarding">
              Get Started <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>
      </nav>

      {/* ── Section 1: Hero ────────────────────────────────────────── */}
      <section
        className="relative h-screen snap-start flex flex-col justify-center bg-foreground text-background overflow-hidden"
        data-ocid="landing.hero.section"
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.5) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.5) 40px)",
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto w-full px-6 lg:px-10 pt-14">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full mb-8">
                <Sparkles className="h-3 w-3 text-accent" />
                24+ Trades · 4 Clusters · Powered by EdUnite
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                Skills that
                <br />
                <span className="text-accent">AI can&apos;t</span>
                <br />
                replace.
              </h1>
              <p className="mt-6 text-lg text-white/80 max-w-md leading-relaxed">
                Build hands-on expertise in the trades, health care, and service
                industries that automation can&apos;t touch. Your skills, mapped
                and proven.
              </p>
              <div
                className="mt-8 flex flex-col sm:flex-row gap-3"
                data-ocid="landing.cta.section"
              >
                <Button
                  size="lg"
                  asChild
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 text-base"
                  data-ocid="landing.start_learning.primary_button"
                >
                  <Link to="/onboarding">
                    Start Learning Free <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-white/40 text-white bg-transparent hover:bg-white/10 hover:text-white px-8 text-base"
                  data-ocid="landing.explore_map.secondary_button"
                >
                  <Link to="/map">Explore the Map</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <AnimatedPathwayMap />
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/40">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* ── Section 2: Features ────────────────────────────────────── */}
      <section
        className="h-screen snap-start flex flex-col justify-center bg-background"
        data-ocid="landing.features.section"
      >
        <div className="max-w-5xl mx-auto w-full px-6 lg:px-10">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              Why VocPath
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Skills you can see.
              <br />
              <span className="text-muted-foreground">
                Progress you can prove.
              </span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
            {FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.id}
                  className="group p-6 lg:p-8 rounded-2xl border border-border bg-card hover:border-accent/30 hover:shadow-lg transition-all duration-300"
                  data-ocid={`landing.feature.card.${i + 1}`}
                >
                  <div
                    className={`inline-flex p-3 rounded-xl mb-5 ${f.accent}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display font-bold text-foreground text-lg mb-3 leading-snug">
                    {f.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {f.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Section 3: Social Proof ─────────────────────────────────── */}
      <section
        className="h-screen snap-start flex flex-col justify-center bg-primary text-primary-foreground"
        data-ocid="landing.social_proof.section"
      >
        <div className="max-w-4xl mx-auto w-full px-6 lg:px-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/70 mb-10">
            By the numbers
          </p>
          <div className="grid grid-cols-3 gap-6 lg:gap-16 mb-16">
            {STATS.map((s) => (
              <div key={s.id} className="space-y-1">
                <p className="font-display text-5xl lg:text-7xl font-bold text-accent leading-none">
                  {s.value}
                </p>
                <p className="font-display text-base lg:text-xl font-semibold text-primary-foreground mt-3">
                  {s.label}
                </p>
                <p className="text-sm text-primary-foreground/70">{s.sub}</p>
              </div>
            ))}
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="text-5xl text-accent/30 font-serif leading-none mb-4">
              &ldquo;
            </div>
            <blockquote className="font-display text-xl lg:text-2xl font-medium text-primary-foreground/90 leading-relaxed">
              In a world where AI is taking over software jobs, VocPath helped
              me find a trade I&apos;m proud of — and get qualified fast.
            </blockquote>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center">
                <HardHat className="h-5 w-5 text-accent" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-primary-foreground">
                  James T.
                </p>
                <p className="text-xs text-primary-foreground/70">
                  Electrical Apprentice, VocPath
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Final CTA ─────────────────────────────────────── */}
      <section
        className="h-screen snap-start flex flex-col justify-between bg-accent"
        data-ocid="landing.final_cta.section"
      >
        <div className="flex-1 flex flex-col items-center justify-center px-6 lg:px-10 text-center">
          <div className="inline-flex items-center gap-2 bg-accent-foreground/10 border border-accent-foreground/20 text-accent-foreground/80 text-xs font-medium px-3 py-1.5 rounded-full mb-8">
            <Sparkles className="h-3 w-3" />
            Free to start. No credit card needed.
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-accent-foreground leading-[1.05] tracking-tight max-w-3xl">
            Your career path
            <br />
            starts here.
          </h2>
          <p className="mt-6 text-lg text-accent-foreground/80 max-w-lg leading-relaxed">
            While AI reshapes office work, skilled trades, healthcare, and
            hands-on service roles are growing faster than ever. Join thousands
            upskilling for the jobs that matter.
          </p>
          <Button
            size="lg"
            asChild
            className="mt-10 bg-accent-foreground text-accent hover:bg-accent-foreground/90 font-bold px-12 text-base h-14 rounded-full shadow-xl"
            data-ocid="landing.final_cta.primary_button"
          >
            <Link to="/onboarding">
              Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <p className="mt-4 text-xs text-accent-foreground/70">
            4 clusters live · 120+ modules · Skills AI can&apos;t automate
          </p>
        </div>
        <footer className="py-6 px-6 lg:px-10 border-t border-accent-foreground/10">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-accent-foreground/20 flex items-center justify-center">
                <GraduationCap className="h-3.5 w-3.5 text-accent-foreground" />
              </div>
              <span className="font-display font-bold text-sm text-accent-foreground">
                VocPath
              </span>
              <span className="text-accent-foreground/40 text-xs">
                by EdUnite
              </span>
            </div>
            <p className="text-xs text-accent-foreground/60 text-center">
              © {new Date().getFullYear()} VocPath by EdUnite. Built with ♥
              using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-accent-foreground/80"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </footer>
      </section>
    </div>
  );
}
