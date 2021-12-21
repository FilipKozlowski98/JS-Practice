class card {
  constructor(cardName, cardValue, cardSuit) {
    this.cardName = cardName;
    this.cardSuit = cardSuit;
    this.cardValue = cardValue;
  }
}

const suits = ["club", "heart", "diamond", "spades"];
const names = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king", "ace"];

const getCardValue = (cardName) => {
  if (typeof cardName === "number") {
    return cardName;
  }
  if (cardName === "jack" || cardName === "king" || cardName === "queen") {
    return 10;
  }
  if (cardName === "ace") {
    return 11;
  }
};

const createDeck = () => {
  const deck = [];
  suits.forEach((suit) => {
    names.forEach((cardName) => {
      deck.push(new card(cardName, getCardValue(cardName), suit));
    });
  });
  return deck;
};

console.log(createDeck());
