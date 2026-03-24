import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Clock,
  Construction,
  Loader2,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import Footer from "../components/layout/Footer";
import { findZone } from "../data/allZones";
import { levelColors } from "../data/levelColors";
import { getModulesForTrade } from "../data/tradeContent";
import { useActor } from "../hooks/useActor";
import { useMyEnrollments, useMyProgress } from "../hooks/useQueries";

export default function TradeOverviewPage() {
  const { tradeId } = useParams({ strict: false }) as { tradeId: string };
  const zone = findZone(tradeId);
  const { actor } = useActor();
  const { data: enrollments, refetch: refetchEnrollments } = useMyEnrollments();
  const { data: progress } = useMyProgress();
  const [enrolling, setEnrolling] = useState(false);

  if (!zone) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h1 className="font-display text-2xl font-bold text-foreground">
          Trade not found
        </h1>
        <p className="text-muted-foreground mt-2">
          That trade zone doesn't exist.
        </p>
        <Button asChild className="mt-4" variant="outline">
          <Link to="/dashboard">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
          </Link>
        </Button>
      </div>
    );
  }

  const modules = getModulesForTrade(tradeId);
  const hasModules = modules.length > 0;
  const isEnrolled = enrollments?.some((e) => e.tradeId === tradeId) ?? false;
  const completedModuleIds = new Set(
    (progress ?? [])
      .filter((p) => p.tradeId === tradeId)
      .map((p) => p.moduleId),
  );

  async function handleEnroll() {
    if (!actor) {
      toast.error("Please log in to enroll.");
      return;
    }
    setEnrolling(true);
    try {
      await actor.enrollInPathway(tradeId, tradeId);
      await refetchEnrollments();
      toast.success("Enrolled in pathway!");
    } catch {
      toast.error("Failed to enroll. Please try again.");
    } finally {
      setEnrolling(false);
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-4 lg:px-6 py-8 space-y-6">
      {/* Back */}
      <div className="flex items-center gap-2">
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="-ml-2"
          data-ocid="trade.back_button"
        >
          <Link to="/dashboard">
            <ArrowLeft className="mr-1.5 h-4 w-4" /> Back
          </Link>
        </Button>
      </div>

      {/* Header */}
      <div
        className="opacity-0 animate-fade-up"
        style={{ animationFillMode: "forwards" }}
      >
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex items-start gap-4">
            <div
              className="w-10 h-10 rounded-lg shrink-0"
              style={{ backgroundColor: zone.color }}
            />
            <div>
              <h1 className="font-display text-xl font-bold text-foreground">
                {zone.tradeName}
              </h1>
              <p className="text-muted-foreground mt-0.5 text-sm">
                {zone.description}
              </p>
            </div>
          </div>

          {/* Enroll / Enrolled badge */}
          {hasModules && (
            <div className="shrink-0">
              {isEnrolled ? (
                <Badge className="bg-emerald-500/15 text-emerald-700 border border-emerald-500/30 px-3 py-1">
                  <CheckCircle2 className="mr-1.5 h-3.5 w-3.5" />
                  Enrolled
                </Badge>
              ) : (
                <Button
                  onClick={handleEnroll}
                  disabled={enrolling}
                  size="sm"
                  data-ocid="trade.enroll_button"
                >
                  {enrolling && (
                    <Loader2 className="mr-2 h-3.5 w-3.5 animate-spin" />
                  )}
                  Enroll in Pathway
                </Button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Modules OR placeholder */}
      {hasModules ? (
        <div
          className="opacity-0 animate-fade-up animate-stagger-2 space-y-3"
          style={{ animationFillMode: "forwards" }}
        >
          <h2 className="font-display text-lg font-semibold text-foreground">
            Learning Modules
          </h2>
          {modules.map((mod, idx) => {
            const done = completedModuleIds.has(mod.id);
            return (
              <Card
                key={mod.id}
                className="shadow-card border-border hover:border-primary/30 transition-colors"
                data-ocid={`trade.module.card.${idx + 1}`}
              >
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold border ${
                          levelColors[mod.level]
                        }`}
                      >
                        Level {mod.level}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {mod.durationMinutes} min
                      </span>
                      {done && (
                        <Badge className="bg-emerald-500/15 text-emerald-700 border border-emerald-500/30 text-xs">
                          <CheckCircle2 className="mr-1 h-3 w-3" />
                          Completed
                        </Badge>
                      )}
                    </div>
                    <p className="font-medium text-sm text-foreground">
                      {mod.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                      {mod.summary}
                    </p>
                  </div>
                  <Button
                    asChild
                    variant={done ? "outline" : "default"}
                    size="sm"
                    className="shrink-0"
                    data-ocid={`trade.module.start_button.${idx + 1}`}
                  >
                    <Link
                      to="/trade/$tradeId/module/$moduleId"
                      params={{ tradeId, moduleId: mod.id }}
                    >
                      {done ? "Review" : "Start"}
                      <ChevronRight className="ml-1 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      ) : (
        <Card className="shadow-card" data-ocid="trade.no_modules.card">
          <CardContent className="p-8 text-center">
            <Construction className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
            <h2 className="font-display text-lg font-semibold text-foreground">
              Content Coming Soon
            </h2>
            <p className="text-sm text-muted-foreground mt-1 max-w-sm mx-auto">
              Modules for this trade are being developed. Check back soon.
            </p>
          </CardContent>
        </Card>
      )}

      <Footer />
    </div>
  );
}
