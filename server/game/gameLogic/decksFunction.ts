import {Card, Suit} from "../model/cards";
export function decksFunction(suits: Suit[], ranks: string[]): Card[] {
    const deck: Card[] = [];

    for (let i = 0; i < suits.length; ++i) {

        for (let j = 0; j < ranks.length; ++j) {
            const card = new Card(ranks[j], suits[i],j + 2)
            deck.push(card)
        }

    }

    return deck
}

export function randomShuffle(deck: Card[]) {
    const max = deck.length - 1;
    const min = 0;

    for (let i = max; i >= 0; --i) {
        let j = min + Math.floor(Math.random() * (max + 1 - min));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }

    return deck;
}