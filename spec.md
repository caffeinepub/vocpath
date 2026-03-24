# VocPath

## Current State
- 4 clusters: Construction (10), Automotive (6), IT (5), Hospitality (3 live: Cookery, Food Safety, Barista)
- Landing page hero messaging is generic — "Map your vocational journey"
- Stats badge shows "3 Clusters Live" and stats reference 21+ trades
- No Hotel Operations or Event Management in hospitalityZones.ts

## Requested Changes (Diff)

### Add
- Hotel & Front Office Operations zone to hospitalityZones.ts (5 capabilities, 5 modules)
- Event Management zone to hospitalityZones.ts (5 capabilities, 5 modules)
- New landing page messaging focused on future-proof, AI-resistant skilled trades

### Modify
- Landing page hero headline, subheadline, and badge to reflect AI-displacement framing
- Features section copy to reinforce "skills AI can't replace" value prop
- Final CTA copy updated to match new direction
- Animated pathway map badge: "3 Clusters Live" → "4 Clusters Live"
- Stats: 21+ trades → 24+ trades, modules count updated
- SideNav: hospitality section should show all 5 zones (no coming soon)

### Remove
- Nothing

## Implementation Plan
1. Add hotel-operations and event-management to hospitalityZones.ts
2. Update allZones.ts if needed (automatic via hospitalityZones spread)
3. Update LandingPage.tsx: hero headline/sub, badge text, features copy, CTA copy, stats numbers, animated map badge
