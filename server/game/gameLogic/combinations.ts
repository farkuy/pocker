import {Card, suits} from "../model/cards";

export function playerCombination (playerCards: Card[], board: Card[]): Card [] {
    let bestHand: Card [] = []

    const cards: Card [] = [...playerCards, ...board];
    const streetCards = [...cards].sort((a, b) => a.rank - b.rank);
    const flushCards = [...cards].sort((a, b) => suits.indexOf(a.suit) - suits.indexOf(b.suit));

    let street: Card[] = streetCheck(streetCards);
    let flush: Card[] = [];

    return street;
}


function streetCheck(cards: Card []): Card [] {
    let streetCards: Card[] = [];


    for (let i = cards.length - 1; i >= 0; --i) {
        console.log(streetCards)
        if (cards[i - 1] && cards[i].rank === cards[i - 1].rank + 1 && streetCards.length <= 5) {
            streetCards.push(cards[i])
        }
        else if (streetCards.length === 4 && streetCards[0].rank === 5 && cards[cards.length - 1].rank === 14) {
            streetCards.push(cards[0])
        }
        else if (streetCards.length === 4 && i === 0 && cards[i + 1].rank === cards[i].rank + 1) {
            streetCards.push(cards[i])
        }
        else if (i !== cards.length - 1 && streetCards.length !== 5) {
            streetCards = []
        }
    }

    return streetCards
}
