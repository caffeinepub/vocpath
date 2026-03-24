import { Badge } from "@/components/ui/badge";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { type BuildingZone, buildingZones } from "../data/buildingZones";
import { useMyProgress } from "../hooks/useQueries";

interface TooltipState {
  zone: BuildingZone;
  x: number;
  y: number;
}

export default function BuildingMapPage() {
  const navigate = useNavigate();
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);
  const [activeZone, setActiveZone] = useState<string | null>(null);
  const { data: progressRecords = [] } = useMyProgress();

  // Compute per-zone completion count (max 5 modules per zone)
  const zoneCompletion = (zoneId: string): number => {
    const count = progressRecords.filter((r) => r.tradeId === zoneId).length;
    return Math.min(count, 5);
  };

  const handleZoneHover = (zone: BuildingZone, event: React.MouseEvent) => {
    const rect = (
      event.currentTarget.closest(".map-container") as HTMLElement
    )?.getBoundingClientRect();
    if (rect) {
      setTooltip({
        zone,
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    }
    setActiveZone(zone.id);
  };

  const handleZoneLeave = () => {
    setTooltip(null);
    setActiveZone(null);
  };

  const handleZoneClick = (zoneId: string) => {
    navigate({ to: "/trade/$tradeId", params: { tradeId: zoneId } });
  };

  const getZoneFill = (
    zone: BuildingZone,
    isActive: boolean,
    completed: number,
  ) => {
    if (completed > 0) {
      const baseOpacity = 0.12 + (completed / 5) * 0.43;
      const opacity = isActive
        ? Math.min(baseOpacity + 0.15, 0.7)
        : baseOpacity;
      return zone.color.replace(")", ` / ${opacity})`);
    }
    return isActive
      ? zone.color.replace(")", " / 0.4)")
      : zone.color.replace(")", " / 0.18)");
  };

  const getZoneStroke = (zone: BuildingZone, isActive: boolean) => {
    return isActive ? zone.color : zone.color.replace(")", " / 0.5)");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 lg:px-6 py-8 space-y-6">
      <div
        className="map-container relative w-full rounded-xl border border-border bg-card shadow-card overflow-hidden opacity-0 animate-fade-up animate-stagger-2"
        style={{ animationFillMode: "forwards" }}
      >
        <svg
          viewBox="0 0 1160 780"
          className="w-full h-auto"
          style={{ maxHeight: "70vh" }}
          role="img"
          aria-labelledby="map-title"
        >
          <title id="map-title">VocPath Skill Map</title>
          <rect width="1160" height="780" fill="oklch(97% 0.005 250)" />
          {[200, 400, 600, 800, 1000].map((x) => (
            <line
              key={`vgrid-${x}`}
              x1={x}
              y1={0}
              x2={x}
              y2={780}
              stroke="oklch(88% 0.01 250)"
              strokeWidth="0.5"
            />
          ))}
          {[150, 300, 450, 600, 750].map((y) => (
            <line
              key={`hgrid-${y}`}
              x1={0}
              y1={y}
              x2={1160}
              y2={y}
              stroke="oklch(88% 0.01 250)"
              strokeWidth="0.5"
            />
          ))}

          {buildingZones.map((zone) => {
            const isZoneActive = activeZone === zone.id;
            const completed = zoneCompletion(zone.id);
            return (
              <g
                key={zone.id}
                tabIndex={0}
                // biome-ignore lint/a11y/useSemanticElements: SVG <g> cannot be changed to a button element
                role="button"
                aria-label={`${zone.tradeName} — ${completed} of 5 modules complete`}
                onClick={() => handleZoneClick(zone.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleZoneClick(zone.id);
                  }
                }}
                onMouseMove={(e) => handleZoneHover(zone, e)}
                onMouseLeave={handleZoneLeave}
                style={{ cursor: "pointer" }}
                className="focus:outline-none focus-visible:ring-2"
              >
                <rect
                  x={zone.svgX}
                  y={zone.svgY}
                  width={zone.svgWidth}
                  height={zone.svgHeight}
                  rx={6}
                  fill={getZoneFill(zone, isZoneActive, completed)}
                  stroke={getZoneStroke(zone, isZoneActive)}
                  strokeWidth={isZoneActive ? 2 : 1}
                />
                <text
                  x={zone.svgX + zone.svgWidth / 2}
                  y={zone.svgY + zone.svgHeight / 2 - 8}
                  textAnchor="middle"
                  fontSize={11}
                  fontWeight="600"
                  fill="oklch(30% 0.04 255)"
                >
                  {zone.shortName}
                </text>
                {completed > 0 && (
                  <text
                    x={zone.svgX + zone.svgWidth / 2}
                    y={zone.svgY + zone.svgHeight / 2 + 8}
                    textAnchor="middle"
                    fontSize={9}
                    fill="oklch(45% 0.04 255)"
                  >
                    {completed}/5 done
                  </text>
                )}
              </g>
            );
          })}
        </svg>

        {/* Tooltip */}
        {tooltip && (
          <div
            className="pointer-events-none absolute z-10 bg-popover border border-border rounded-lg shadow-lg p-3 max-w-[200px]"
            style={{
              left: Math.min(tooltip.x + 12, 600),
              top: Math.max(tooltip.y - 60, 8),
            }}
          >
            <p className="font-semibold text-sm text-popover-foreground">
              {tooltip.zone.tradeName}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5 leading-snug">
              {tooltip.zone.description}
            </p>
            <p className="text-xs font-medium text-primary mt-1.5">
              {zoneCompletion(tooltip.zone.id)}/5 modules complete
            </p>
          </div>
        )}
      </div>

      {/* Mobile hint */}
      <p className="text-xs text-muted-foreground text-center mt-2 lg:hidden">
        Tap a zone in the legend below to navigate to that trade.
      </p>

      {/* Legend */}
      <div
        className="opacity-0 animate-fade-up animate-stagger-3"
        style={{ animationFillMode: "forwards" }}
      >
        <h2 className="font-display text-base font-semibold text-foreground mb-3">
          Trade Zones
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
          {buildingZones.map((zone) => {
            const completed = zoneCompletion(zone.id);
            return (
              <button
                key={zone.id}
                type="button"
                onClick={() => handleZoneClick(zone.id)}
                className="text-left p-3 rounded-lg border border-border bg-card hover:border-primary/30 hover:bg-accent/5 transition-all"
                data-ocid={`map.zone.${zone.id}`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div
                    className="w-3 h-3 rounded-sm shrink-0"
                    style={{ backgroundColor: zone.color }}
                  />
                  <p className="text-xs font-semibold text-foreground truncate">
                    {zone.shortName}
                  </p>
                </div>
                {completed > 0 ? (
                  <Badge
                    variant="secondary"
                    className="text-[10px] px-1.5 py-0"
                  >
                    {completed}/5
                  </Badge>
                ) : (
                  <p className="text-[10px] text-muted-foreground">
                    Not started
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
