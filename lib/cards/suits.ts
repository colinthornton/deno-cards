export enum Suit {
  Clubs,
  Diamonds,
  Hearts,
  Spades,
}

export const suitStrings: Record<Suit, string> = {
  [Suit.Clubs]: "♣",
  [Suit.Diamonds]: "♦",
  [Suit.Hearts]: "♥",
  [Suit.Spades]: "♠",
};

export const standardSuits = [
  Suit.Clubs,
  Suit.Diamonds,
  Suit.Hearts,
  Suit.Spades,
];
