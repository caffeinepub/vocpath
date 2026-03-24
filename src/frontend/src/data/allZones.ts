import { automotiveZones } from "./automotiveZones";
import { buildingZones } from "./buildingZones";
import type { BuildingZone } from "./buildingZones";
import { hospitalityZones } from "./hospitalityZones";
import { itZones } from "./itZones";

export type { BuildingZone };

export const allZones: BuildingZone[] = [
  ...buildingZones,
  ...automotiveZones,
  ...itZones,
  ...hospitalityZones,
];

export function findZone(id: string): BuildingZone | undefined {
  return allZones.find((z) => z.id === id);
}
