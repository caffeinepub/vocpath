import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useQueryClient } from "@tanstack/react-query";
import { Link, useParams } from "@tanstack/react-router";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  RefreshCw,
  Trophy,
  XCircle,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { allModules, getModulesForTrade } from "../data/tradeContent";
import { useActor } from "../hooks/useActor";

const OPTION_LABELS = ["A", "B", "C", "D"] as const;

interface QuizState {
  currentQ: number;
  selectedIndex: number | null;
  answers: (number | null)[];
  finished: boolean;
}

export default function QuizPage() {
  const { tradeId, moduleId } = useParams({ strict: false }) as {
    tradeId: string;
    moduleId: string;
  };
  const { actor } = useActor();
  const queryClient = useQueryClient();

  const module = allModules.find(
    (m) => m.id === moduleId && m.tradeId === tradeId,
  );

  const [state, setState] = useState<QuizState>({
    currentQ: 0,
    selectedIndex: null,
    answers: module ? new Array(module.quiz.length).fill(null) : [],
    finished: false,
  });
  const [submitting, setSubmitting] = useState(false);

  if (!module) {
    return (
      <div
        className="max-w-2xl mx-auto px-4 py-16 text-center"
        data-ocid="quiz.error_state"
      >
        <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <h1 className="font-display text-2xl font-bold text-foreground">
          Quiz not found
        </h1>
        <p className="text-muted-foreground mt-2">
          That quiz doesn't exist or hasn't been published yet.
        </p>
        <Button asChild className="mt-6" variant="outline">
          <Link to="/trade/$tradeId" params={{ tradeId }}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Trade
          </Link>
        </Button>
      </div>
    );
  }

  const { currentQ, selectedIndex, answers, finished } = state;
  const question = module.quiz[currentQ];
  const isAnswered = selectedIndex !== null;
  const isLast = currentQ === module.quiz.length - 1;
  const correctCount = answers.filter(
    (a, i) => a === module.quiz[i]?.correctIndex,
  ).length;
  const progress = ((currentQ + 1) / module.quiz.length) * 100;

  // Compute next module for results screen
  const sortedTradeModules = getModulesForTrade(tradeId).sort(
    (a, b) => a.level - b.level,
  );
  const currentModuleIndex = sortedTradeModules.findIndex(
    (m) => m.id === moduleId,
  );
  const nextModule =
    currentModuleIndex >= 0
      ? sortedTradeModules[currentModuleIndex + 1]
      : undefined;

  function handleSelect(idx: number) {
    if (isAnswered) return;
    const newAnswers = [...answers];
    newAnswers[currentQ] = idx;
    setState((s) => ({
      ...s,
      selectedIndex: idx,
      answers: newAnswers,
    }));
  }

  function handleNext() {
    if (!isLast) {
      setState((s) => ({
        ...s,
        currentQ: s.currentQ + 1,
        selectedIndex: null,
      }));
    } else {
      handleFinish();
    }
  }

  async function handleFinish() {
    setSubmitting(true);
    try {
      if (actor) {
        await actor.recordQuizResult(
          `${tradeId}-${moduleId}`,
          BigInt(correctCount),
          BigInt(module?.quiz.length ?? 5),
        );
        await queryClient.invalidateQueries({ queryKey: ["myProgress"] });
      }
    } catch {
      toast.error("Failed to save quiz result.");
    } finally {
      setSubmitting(false);
      setState((s) => ({ ...s, finished: true }));
    }
  }

  if (finished) {
    const passed = correctCount >= Math.ceil(module.quiz.length * 0.6);
    return (
      <div
        className="max-w-2xl mx-auto px-4 lg:px-6 py-8"
        data-ocid="quiz.results.section"
      >
        <div className="text-center space-y-4 mb-8">
          <div
            className={`inline-flex p-4 rounded-full ${
              passed ? "bg-emerald-500/15" : "bg-orange-500/15"
            }`}
          >
            {passed ? (
              <Trophy className="h-10 w-10 text-emerald-600" />
            ) : (
              <AlertCircle className="h-10 w-10 text-orange-500" />
            )}
          </div>
          <h1 className="font-display text-2xl font-bold text-foreground">
            {passed ? "Well done!" : "Keep practising"}
          </h1>
          <p className="text-4xl font-display font-bold text-foreground">
            {correctCount}/{module.quiz.length}
          </p>
          <p className="text-muted-foreground">
            {passed
              ? "You've passed this module quiz."
              : "You need 60% to pass. Review the module and try again."}
          </p>
        </div>

        {/* Answer review */}
        <div className="space-y-3 mb-8">
          {module.quiz.map((q, i) => {
            const userAnswer = answers[i];
            const correct = userAnswer === q.correctIndex;
            return (
              <Card
                key={q.id}
                className={`border ${
                  correct ? "border-emerald-500/30" : "border-orange-500/30"
                }`}
                data-ocid={`quiz.review.item.${i + 1}`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    {correct ? (
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground">
                        {q.question}
                      </p>
                      {!correct && (
                        <p className="text-xs text-emerald-700 mt-1">
                          Correct: {q.options[q.correctIndex]}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            asChild
            className="flex-1"
            data-ocid="quiz.retake_button"
          >
            <Link
              to="/trade/$tradeId/quiz/$moduleId"
              params={{ tradeId, moduleId }}
            >
              <RefreshCw className="mr-2 h-4 w-4" /> Retake Quiz
            </Link>
          </Button>
          {nextModule ? (
            <Button
              asChild
              className="flex-1"
              data-ocid="quiz.next_module_button"
            >
              <Link
                to="/trade/$tradeId/module/$moduleId"
                params={{ tradeId, moduleId: nextModule.id }}
              >
                Next Module <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          ) : (
            <Button
              asChild
              className="flex-1"
              data-ocid="quiz.back_to_trade_button"
            >
              <Link to="/trade/$tradeId" params={{ tradeId }}>
                Back to Trade <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 lg:px-6 py-8 space-y-6">
      {/* Back to module — always visible */}
      <Button
        asChild
        variant="ghost"
        size="sm"
        className="-ml-2"
        data-ocid="quiz.back_link"
      >
        <Link
          to="/trade/$tradeId/module/$moduleId"
          params={{ tradeId, moduleId }}
        >
          <ChevronLeft className="mr-1 h-4 w-4" /> Back to Module
        </Link>
      </Button>

      {/* Progress */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-medium text-foreground">
            Question {currentQ + 1} of {module.quiz.length}
          </p>
          <Badge variant="secondary" className="text-xs">
            {module.title}
          </Badge>
        </div>
        <Progress value={progress} className="h-2" data-ocid="quiz.progress" />
      </div>

      {/* Question card */}
      <Card className="shadow-card" data-ocid="quiz.question.card">
        <CardContent className="p-6 space-y-5">
          <p className="font-display font-semibold text-foreground leading-snug text-base lg:text-lg">
            {question.question}
          </p>
          <div className="space-y-2.5">
            {question.options.map((opt, idx) => {
              let extraClass = "";
              if (isAnswered) {
                if (idx === question.correctIndex) {
                  extraClass =
                    "border-emerald-500 bg-emerald-500/10 text-emerald-700";
                } else if (idx === selectedIndex) {
                  extraClass =
                    "border-orange-500 bg-orange-500/10 text-orange-700";
                }
              }
              return (
                <button
                  key={opt}
                  type="button"
                  disabled={isAnswered}
                  onClick={() => handleSelect(idx)}
                  className={`w-full text-left flex items-center gap-3 rounded-lg border p-3.5 text-sm transition-all ${
                    !isAnswered
                      ? "border-border hover:border-primary/50 hover:bg-accent/5 cursor-pointer"
                      : "cursor-default"
                  } ${extraClass}`}
                  data-ocid={`quiz.option.${idx + 1}`}
                >
                  <span className="shrink-0 w-7 h-7 rounded-full border border-current flex items-center justify-center text-xs font-bold">
                    {OPTION_LABELS[idx]}
                  </span>
                  <span className="flex-1">{opt}</span>
                  {isAnswered && idx === question.correctIndex && (
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  )}
                  {isAnswered &&
                    idx === selectedIndex &&
                    idx !== question.correctIndex && (
                      <XCircle className="h-4 w-4 text-orange-500 shrink-0" />
                    )}
                </button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Next button */}
      {isAnswered && (
        <div className="flex justify-end">
          <Button
            onClick={handleNext}
            disabled={submitting}
            data-ocid="quiz.next_button"
          >
            {isLast ? (
              submitting ? (
                "Saving\u2026"
              ) : (
                <>
                  Finish Quiz <Trophy className="ml-2 h-4 w-4" />
                </>
              )
            ) : (
              <>
                Next <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
}
