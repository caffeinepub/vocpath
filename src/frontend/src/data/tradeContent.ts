import { automotiveAllModules } from "./automotiveContent";
import { concretingModules } from "./concretingContent";
import { constructionModules } from "./constructionContent";
import { electricalModules } from "./electricalContent";
import { hospitalityModules } from "./hospitalityContent";
import { hvacModules } from "./hvacContent";
import { itModules } from "./itContent";
import { machiningModules } from "./machiningContent";
import { masonryModules } from "./masonryContent";
import { metalworkingModules } from "./metalworkingContent";
import { plumbingModules } from "./plumbingContent";
import { steelModules } from "./steelContent";
import type { TradeModule } from "./woodworkingContent";
import { woodworkingModules } from "./woodworkingContent";

export type { TradeModule };

export const allModules: TradeModule[] = [
  ...woodworkingModules,
  ...electricalModules,
  ...plumbingModules,
  ...masonryModules,
  ...hvacModules,
  ...metalworkingModules,
  ...machiningModules,
  ...concretingModules,
  ...steelModules,
  ...constructionModules,
  ...automotiveAllModules,
  ...itModules,
  ...hospitalityModules,
];

export function getModulesForTrade(tradeId: string): TradeModule[] {
  return allModules.filter((m) => m.tradeId === tradeId);
}
