// Import all images
import card1 from "../assets/images/card_1.jpg";
import card2 from "../assets/images/card_2.jpg";
import card3 from "../assets/images/card_3.jpg";
import card4 from "../assets/images/card_4.jpg";
import card5 from "../assets/images/card_5.jpg";
import card6 from "../assets/images/card_6.jpg";
import card7 from "../assets/images/card_7.jpg";
import card8 from "../assets/images/card_8.jpg";

//Back image card +
import carBack from "../assets/images/card_back.jpg";

// Create image types
export type CardType = {
  id: string;
  flipped: boolean;
  backImage: string;
  frontImage: string;
  clickable: boolean;
  matchingCardId: string;
  textId: string;
};

//Create array cards
const cards: string[] = [
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
];

// Create card board
export const createBoard = (): CardType[] =>
  //Need 2 of each card
  [...cards, ...cards].map((card, i) => ({
    id: `card${i}`,
    flipped: false,
    backImage: carBack,
    frontImage: card,
    clickable: true,
    matchingCardId:
      i < card.length ? `card${i + cards.length}` : `card${i - cards.length}`,
    textId: `text${Math.floor(i / 2)}`,
  }));
