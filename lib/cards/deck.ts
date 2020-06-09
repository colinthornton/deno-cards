import { Card } from "./card.ts";
import { standardRanks } from "./ranks.ts";
import { standardSuits } from "./suits.ts";

export interface Deck {
  shuffle: () => void;
  draw: () => Card;
}

export class StandardDeck implements Deck {
  private cards: Card[];

  constructor() {
    this.cards = [];
    for (const suit of standardSuits) {
      for (const rank of standardRanks) {
        this.cards.push(new Card(suit, rank));
      }
    }
  }

  shuffle() {
    let max = this.cards.length;
    while (max > 0) {
      const i = Math.floor(Math.random() * max--);
      const temp = this.cards[i];
      this.cards[i] = this.cards[max];
      this.cards[max] = temp;
    }
  }

  draw() {
    const card = this.cards.pop();
    if (card === undefined) {
      throw new Error("The deck is empty.");
    }
    return card;
  }
}
