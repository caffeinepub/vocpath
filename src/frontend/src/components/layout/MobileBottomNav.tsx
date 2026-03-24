import { Link, useRouterState } from "@tanstack/react-router";
import { LayoutDashboard, MapIcon, User } from "lucide-react";

const tabs = [
  {
    to: "/dashboard" as const,
    label: "Home",
    icon: LayoutDashboard,
    ocid: "mobile_nav.home",
  },
  { to: "/map" as const, label: "Map", icon: MapIcon, ocid: "mobile_nav.map" },
  {
    to: "/settings" as const,
    label: "Profile",
    icon: User,
    ocid: "mobile_nav.profile",
  },
];

function getActiveTab(pathname: string): string {
  if (pathname.startsWith("/trade/") || pathname === "/dashboard")
    return "/dashboard";
  if (pathname === "/map") return "/map";
  if (pathname.startsWith("/settings")) return "/settings";
  return "/dashboard";
}

export default function MobileBottomNav() {
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;
  const activeTab = getActiveTab(pathname);

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-background border-t border-border">
      <div className="grid grid-cols-3 h-16">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.to;
          return (
            <Link
              key={tab.to}
              to={tab.to}
              data-ocid={tab.ocid}
              className={`flex flex-col items-center justify-center gap-1 text-xs font-medium transition-colors ${
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
