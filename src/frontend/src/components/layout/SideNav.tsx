import { ScrollArea } from "@/components/ui/scroll-area";
import { Link, useRouterState } from "@tanstack/react-router";
import { LayoutDashboard, MapIcon, Settings } from "lucide-react";
import { automotiveZones } from "../../data/automotiveZones";
import { buildingZones } from "../../data/buildingZones";
import { hospitalityZones } from "../../data/hospitalityZones";
import { itZones } from "../../data/itZones";

const mainLinks = [
  { to: "/dashboard" as const, label: "Dashboard", icon: LayoutDashboard },
  { to: "/map" as const, label: "Building Map", icon: MapIcon },
];

export default function SideNav() {
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;

  const navLink = (
    zone: { id: string; shortName: string; color: string },
    index: number,
    comingSoon = false,
  ) => {
    const active =
      !comingSoon &&
      (pathname === `/trade/${zone.id}` ||
        pathname.startsWith(`/trade/${zone.id}/`));
    return (
      <Link
        key={zone.id}
        to="/trade/$tradeId"
        params={{ tradeId: zone.id }}
        data-ocid={`sidenav.trade.link.${index + 1}`}
        className={`flex items-center gap-2.5 px-2.5 py-1.5 text-sm rounded-md transition-colors ${
          active
            ? "bg-sidebar-accent text-sidebar-accent-foreground"
            : comingSoon
              ? "text-sidebar-foreground/30 cursor-not-allowed pointer-events-none"
              : "text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
        }`}
      >
        <span
          className="w-2 h-2 rounded-full shrink-0"
          style={{
            backgroundColor: comingSoon ? "oklch(60% 0 0)" : zone.color,
          }}
        />
        <span className="truncate">{zone.shortName}</span>
        {comingSoon && (
          <span className="ml-auto text-[10px] font-medium text-sidebar-foreground/30">
            Soon
          </span>
        )}
      </Link>
    );
  };

  // IT trades: first two have content, remaining three are coming soon
  const itLiveCount = 5;

  return (
    <aside className="hidden lg:flex flex-col w-56 shrink-0 border-r border-border bg-sidebar">
      <ScrollArea className="flex-1">
        <div className="p-3 space-y-6">
          {/* Main nav */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-sidebar-foreground/40 px-2 mb-1">
              Navigation
            </p>
            <nav className="space-y-0.5">
              {mainLinks.map((link) => {
                const Icon = link.icon;
                const active = pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    data-ocid={`sidenav.${link.label.toLowerCase().replace(/ /g, "_")}.link`}
                    className={`flex items-center gap-2.5 px-2.5 py-2 text-sm font-medium rounded-md transition-colors ${
                      active
                        ? "bg-sidebar-accent text-sidebar-accent-foreground"
                        : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Construction & Trades */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-sidebar-foreground/40 px-2 mb-1">
              Construction
            </p>
            <nav className="space-y-0.5">
              {buildingZones.map((zone, i) => navLink(zone, i))}
            </nav>
          </div>

          {/* Automotive & Transport */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-sidebar-foreground/40 px-2 mb-1">
              Automotive
            </p>
            <nav className="space-y-0.5">
              {automotiveZones.map((zone, i) =>
                navLink(zone, buildingZones.length + i),
              )}
            </nav>
          </div>

          {/* Information Technology */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-sidebar-foreground/40 px-2 mb-1">
              Information Technology
            </p>
            <nav className="space-y-0.5">
              {itZones.map((zone, i) =>
                navLink(
                  zone,
                  buildingZones.length + automotiveZones.length + i,
                  i >= itLiveCount,
                ),
              )}
            </nav>
          </div>

          {/* Hospitality & Culinary Arts */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-sidebar-foreground/40 px-2 mb-1">
              Hospitality
            </p>
            <nav className="space-y-0.5">
              {hospitalityZones.map((zone, i) =>
                navLink(
                  zone,
                  buildingZones.length +
                    automotiveZones.length +
                    itZones.length +
                    i,
                ),
              )}
            </nav>
          </div>
        </div>
      </ScrollArea>

      {/* Settings footer */}
      <div className="p-3 border-t border-sidebar-border">
        <Link
          to="/settings"
          data-ocid="sidenav.settings.link"
          className={`flex items-center gap-2.5 px-2.5 py-2 text-sm font-medium rounded-md transition-colors ${
            pathname === "/settings"
              ? "bg-sidebar-accent text-sidebar-accent-foreground"
              : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
          }`}
        >
          <Settings className="h-4 w-4" />
          Settings
        </Link>
      </div>
    </aside>
  );
}
