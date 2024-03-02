import {Card, Suit} from "../model/cards";

export function createDeck(suits: Suit[], ranks: string[]): Card[] {
    const deck: Card[] = [];

    for (let i = 0; i < suits.length; ++i) {

        for (let j = 0; j < ranks.length; ++j) {
            const card = new Card(ranks[j], suits[i],j + 1)
            deck.push(card)
        }

    }

    return deck
}