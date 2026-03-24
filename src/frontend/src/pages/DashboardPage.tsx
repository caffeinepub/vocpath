import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BookOpen,
  MapPin,
  PlayCircle,
  TrendingUp,
} from "lucide-react";
import Footer from "../components/layout/Footer";
import { allZones } from "../data/allZones";
import { automotiveZones } from "../data/automotiveZones";
import { buildingZones } from "../data/buildingZones";
import { itZones } from "../data/itZones";
import { allModules, getModulesForTrade } from "../data/tradeContent";
import { useInternetIdentity } from "../hooks/useInternetIdentity";
import {
  useMyEnrollments,
  useMyProfile,
  useMyProgress,
} from "../hooks/useQueries";

const featuredZones = [
  buildingZones[0],
  buildingZones[5] || buildingZones[1],
  automotiveZones[0],
  itZones[0],
].filter(Boolean);

export default function DashboardPage() {
  const { identity, login, isLoggingIn } = useInternetIdentity();
  const { data: profile } = useMyProfile();
  const { data: enrollments = [] } = useMyEnrollments();
  const { data: progressRecords = [] } = useMyProgress();

  const greeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };

  const tradesExplored = new Set(progressRecords.map((r) => r.tradeId)).size;

  const getModuleTitle = (tradeId: string, moduleId: string): string => {
    const mod = allModules.find(
      (m) => m.id === moduleId && m.tradeId === tradeId,
    );
    return mod?.title ?? moduleId;
  };

  const continueCard = (() => {
    if (!identity || progressRecords.length === 0) return null;
    const lastRecord = progressRecords[progressRecords.length - 1];
    const tradeId = lastRecord.tradeId;
    const zone = allZones.find((z) => z.id === tradeId);
    const tradeName =
      zone?.shortName ?? tradeId.charAt(0).toUpperCase() + tradeId.slice(1);
    const completedIds = new Set(progressRecords.map((r) => r.moduleId));
    const tradeModules = getModulesForTrade(tradeId).sort(
      (a, b) => a.level - b.level,
    );
    const nextModule = tradeModules.find((m) => !completedIds.has(m.id));
    if (nextModule) {
      return { type: "continue" as const, tradeId, tradeName, nextModule };
    }
    return { type: "explore" as const, tradeId, tradeName };
  })();

  return (
    <div className="max-w-5xl mx-auto px-4 lg:px-6 py-8 space-y-8">
      {/* Welcome header */}
      <div
        className="opacity-0 animate-fade-up animate-stagger-1"
        style={{ animationFillMode: "forwards" }}
      >
        <div className="flex items-start justify-between">
          <div>
            <p className="text-base font-semibold text-foreground">
              {greeting()},{" "}
              {profile?.displayName || (identity ? "welcome back" : "welcome")}
            </p>
            <p className="text-muted-foreground mt-0.5 text-sm">
              {identity
                ? "Continue your learning journey today."
                : "Explore 21+ trades across Construction, Automotive, IT, and more."}
            </p>
          </div>
          {!identity && (
            <Button
              onClick={login}
              disabled={isLoggingIn}
              className="shrink-0 bg-primary text-primary-foreground hover:bg-primary/90"
              data-ocid="dashboard.login_button"
            >
              {isLoggingIn ? "Signing in\u2026" : "Get Started"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Stats row (logged in) */}
      {identity && (
        <div
          className="grid grid-cols-3 gap-3 opacity-0 animate-fade-up animate-stagger-2"
          style={{ animationFillMode: "forwards" }}
        >
          {[
            {
              label: "Modules Completed",
              value: progressRecords.length,
              icon: Award,
            },
            {
              label: "Active Pathways",
              value: enrollments.length,
              icon: BookOpen,
            },
            { label: "Trades Explored", value: tradesExplored, icon: MapPin },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} className="shadow-card">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-2xl font-display font-bold text-foreground">
                        {stat.value}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {stat.label}
                      </p>
                    </div>
                    <div className="p-1.5 rounded-md bg-accent/10">
                      <Icon className="h-4 w-4 text-accent-foreground" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}

      {/* Continue where you left off */}
      {continueCard && (
        <div
          className="opacity-0 animate-fade-up animate-stagger-3"
          style={{ animationFillMode: "forwards" }}
        >
          <Card
            className="shadow-card border-primary/20 bg-gradient-to-br from-card to-primary/5"
            data-ocid="dashboard.continue_card"
          >
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/15 shrink-0">
                  <PlayCircle className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-0.5">
                    Continue where you left off
                  </p>
                  {continueCard.type === "continue" ? (
                    <>
                      <h2 className="font-display text-base font-semibold text-foreground">
                        {continueCard.nextModule.title}
                      </h2>
                      <p className="text-sm text-muted-foreground mt-0.5 capitalize">
                        {continueCard.tradeName}
                      </p>
                      <Button
                        asChild
                        size="sm"
                        className="mt-3"
                        data-ocid="dashboard.continue_button"
                      >
                        <Link
                          to="/trade/$tradeId/module/$moduleId"
                          params={{
                            tradeId: continueCard.tradeId,
                            moduleId: continueCard.nextModule.id,
                          }}
                        >
                          Continue <ArrowRight className="ml-2 h-3.5 w-3.5" />
                        </Link>
                      </Button>
                    </>
                  ) : (
                    <>
                      <h2 className="font-display text-base font-semibold text-foreground">
                        {continueCard.tradeName} Complete!
                      </h2>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        You've finished all modules. Explore more trades.
                      </p>
                      <Button
                        asChild
                        size="sm"
                        className="mt-3"
                        data-ocid="dashboard.explore_more_button"
                      >
                        <Link to="/map">
                          Explore More Trades{" "}
                          <ArrowRight className="ml-2 h-3.5 w-3.5" />
                        </Link>
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Enrollment prompt or current pathway */}
      <div
        className="opacity-0 animate-fade-up animate-stagger-3"
        style={{ animationFillMode: "forwards" }}
      >
        {!identity ? (
          <Card className="shadow-card border-accent/20 bg-gradient-to-br from-card to-accent/5">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/15">
                  <MapPin className="h-6 w-6 text-accent-foreground" />
                </div>
                <div className="flex-1">
                  <h2 className="font-display text-lg font-semibold text-foreground">
                    Explore the Skill Map
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Explore 21+ trades across Construction, Automotive, IT, and
                    more. Discover skills, pathways, and certification
                    requirements for every trade.
                  </p>
                  <Button
                    asChild
                    className="mt-3"
                    size="sm"
                    data-ocid="dashboard.explore_map_button"
                  >
                    <Link to="/map">
                      View Skill Map <ArrowRight className="ml-2 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : enrollments.length === 0 ? (
          <Card className="shadow-card border-accent/20 bg-gradient-to-br from-card to-accent/5">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/15">
                  <TrendingUp className="h-6 w-6 text-accent-foreground" />
                </div>
                <div className="flex-1">
                  <h2 className="font-display text-lg font-semibold text-foreground">
                    Start Your Learning Pathway
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    You haven't enrolled in a pathway yet. Explore trades across
                    Construction, Automotive, IT, and more.
                  </p>
                  <Button
                    asChild
                    className="mt-3"
                    size="sm"
                    data-ocid="dashboard.explore_map_button"
                  >
                    <Link to="/map">
                      Explore Trades <ArrowRight className="ml-2 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="shadow-card">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="font-display text-base">
                  Current Pathways
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {enrollments.map((enroll) => (
                  <div key={enroll.tradeId} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-foreground capitalize">
                        {enroll.tradeId.replace(/-/g, " ")} Trade
                      </p>
                      <Badge variant="secondary" className="text-xs">
                        In Progress
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>Progress</span>
                      <span>{enroll.completedModules.length}/5 modules</span>
                    </div>
                    <Progress
                      value={Math.min(
                        (enroll.completedModules.length / 5) * 100,
                        100,
                      )}
                      className="h-2.5"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Featured trade zones */}
      <div
        className="opacity-0 animate-fade-up animate-stagger-4"
        style={{ animationFillMode: "forwards" }}
      >
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-display text-lg font-semibold text-foreground">
            Explore Trades
          </h2>
          <Link
            to="/map"
            className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
            data-ocid="dashboard.view_all_link"
          >
            View all <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {featuredZones.map((zone, i) => (
            <Link
              key={zone.id}
              to="/trade/$tradeId"
              params={{ tradeId: zone.id }}
              data-ocid={`dashboard.zone.card.${i + 1}`}
              className="group"
            >
              <Card className="shadow-card hover:shadow-card-hover transition-all duration-200 overflow-hidden h-full">
                <div
                  className="h-2 w-full"
                  style={{ backgroundColor: zone.color }}
                />
                <CardContent className="p-4">
                  <p className="font-display font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                    {zone.shortName}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    {zone.description}
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground">
                    <Award className="h-3 w-3" />
                    <span>{zone.capabilities.length} skill levels</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent activity */}
      <div
        className="opacity-0 animate-fade-up animate-stagger-5"
        style={{ animationFillMode: "forwards" }}
      >
        <h2 className="font-display text-lg font-semibold text-foreground mb-3">
          Recent Activity
        </h2>
        {progressRecords.length === 0 ? (
          <Card
            className="shadow-card"
            data-ocid="dashboard.activity.empty_state"
          >
            <CardContent className="p-8 text-center">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mx-auto mb-3">
                <BookOpen className="h-5 w-5 text-muted-foreground" />
              </div>
              <p className="text-sm font-medium text-foreground">
                No activity yet
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Complete modules and quizzes to track your progress here.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-2" data-ocid="dashboard.activity.list">
            {progressRecords.slice(0, 5).map((record, i) => (
              <Card
                key={`${record.tradeId}-${record.moduleId}`}
                className="shadow-xs"
                data-ocid={`dashboard.activity.item.${i + 1}`}
              >
                <CardContent className="p-3 flex items-center gap-3">
                  <div className="p-2 rounded-md bg-accent/10">
                    <Award className="h-4 w-4 text-accent-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">
                      {getModuleTitle(record.tradeId, record.moduleId)}
                    </p>
                    <p className="text-xs text-muted-foreground capitalize">
                      {record.tradeId.replace(/-/g, " ")}
                    </p>
                  </div>
                  <Badge variant="secondary" className="text-xs shrink-0">
                    {record.score.toString()}/5
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
