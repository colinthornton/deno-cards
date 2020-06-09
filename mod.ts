import { StandardDeck } from "./lib/cards/deck.ts";

const deck = new StandardDeck();
deck.shuffle();
for (let i = 0; i < 5; i++) {
  const card = deck.draw();
  console.log(card.toString());
}
