import { Outlet, createRootRoute, createRoute } from "@tanstack/react-router";
import AppLayout from "./components/layout/AppLayout";
import BuildingMapPage from "./pages/BuildingMapPage";
import DashboardPage from "./pages/DashboardPage";
import LandingPage from "./pages/LandingPage";
import ModulePage from "./pages/ModulePage";
import NotFoundPage from "./pages/NotFoundPage";
import OnboardingPage from "./pages/OnboardingPage";
import QuizPage from "./pages/QuizPage";
import SettingsPage from "./pages/SettingsPage";
import TradeOverviewPage from "./pages/TradeOverviewPage";

// Root route with layout
const rootRoute = createRootRoute({
  component: () => <Outlet />,
  notFoundComponent: NotFoundPage,
});

// Landing page route (no layout)
const landingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: LandingPage,
});

// Onboarding route (no layout)
const onboardingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/onboarding",
  component: OnboardingPage,
});

// Layout route
const layoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "layout",
  component: AppLayout,
});

const dashboardRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/dashboard",
  component: DashboardPage,
});

const mapRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/map",
  component: BuildingMapPage,
});

const tradeRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/trade/$tradeId",
  component: TradeOverviewPage,
});

const moduleRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/trade/$tradeId/module/$moduleId",
  component: ModulePage,
});

const quizRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/trade/$tradeId/quiz/$moduleId",
  component: QuizPage,
});

const settingsRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/settings",
  component: SettingsPage,
});

export const routeTree = rootRoute.addChildren([
  landingRoute,
  onboardingRoute,
  layoutRoute.addChildren([
    dashboardRoute,
    mapRoute,
    tradeRoute,
    moduleRoute,
    quizRoute,
    settingsRoute,
  ]),
]);
