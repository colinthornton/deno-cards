import { Rank, rankStrings } from "./ranks.ts";
import { Suit, suitStrings } from "./suits.ts";

export class Card {
  constructor(private suit: Suit, private rank: Rank) {}

  toString() {
    return `${rankStrings[this.rank]}${suitStrings[this.suit]}`;
  }
}
