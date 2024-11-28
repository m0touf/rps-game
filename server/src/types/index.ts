export type ElementType = 'Fire' | 'Water' | 'Grass';

export interface ICard {
  id: string;
  name: string;
  element: ElementType;
  power: number;
  ability?: {
    name: string;
    effect: string;
  };
}

export interface IPlayer {
  id: string;
  username: string;
  currency: number;
  collection: ICard[];
  decks: {
    name: string;
    cards: ICard[];
  }[];
}

export interface IGame {
  id: string;
  player1: string;
  player2: string;
  currentRound: number;
  player1Score: number;
  player2Score: number;
  status: 'waiting' | 'in-progress' | 'completed';
}