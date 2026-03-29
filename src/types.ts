export type ItemType = 'element' | 'compound';

export interface ChemicalItem {
  id: string;
  type: ItemType;
  name: string;
  formula: string;
  baseColor: string;
  unlockLevel: number;
  composition?: Record<string, number>;
  assets: {
    uiIcon: string;
    model3D: string;
  };
  details: {
    kidFriendly: string;
    hardcore: string;
  };
}

export interface ReactionIngredient {
  itemId: string;
  count: number;
}

export interface Reaction {
  id: string;
  reactionType: string;
  inputs: ReactionIngredient[];
  outputs: ReactionIngredient[];
  uiDisplay: {
    equation: string;
    conditions: string;
    principle: string;
  };
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  condition: (state: GameState) => boolean;
}

export interface GameState {
  inventory: string[]; // Array of Item IDs
  level: number;
  exp: number;
  discoveredItems: Set<string>;
  unlockedAchievements: Set<string>;
  totalSyntheses: number;
}
