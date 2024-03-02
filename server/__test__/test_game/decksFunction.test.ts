import {decksFunction} from "../../game/gameLogic/decksFunction";
import {Suit} from "../../game/model/cards";

describe('decksFunctionTests', () => {
    const deck = [
        { name: '2', suit: 'Hearts', rank: 2 },
        { name: '3', suit: 'Hearts', rank: 3 },
        { name: '4', suit: 'Hearts', rank: 4 },
        { name: '5', suit: 'Hearts', rank: 5 },
        { name: '6', suit: 'Hearts', rank: 6 },
        { name: '7', suit: 'Hearts', rank: 7 },
        { name: '8', suit: 'Hearts', rank: 8 },
        { name: '9', suit: 'Hearts', rank: 9 },
        { name: '10', suit: 'Hearts', rank: 10 },
        { name: 'Jack', suit: 'Hearts', rank: 11 },
        { name: 'Queen', suit: 'Hearts', rank: 12 },
        { name: 'King', suit: 'Hearts', rank: 13 },
        { name: 'Ace', suit: 'Hearts', rank: 14 },
        { name: '2', suit: 'Diamonds', rank: 2 },
        { name: '3', suit: 'Diamonds', rank: 3 },
        { name: '4', suit: 'Diamonds', rank: 4 },
        { name: '5', suit: 'Diamonds', rank: 5 },
        { name: '6', suit: 'Diamonds', rank: 6 },
        { name: '7', suit: 'Diamonds', rank: 7 },
        { name: '8', suit: 'Diamonds', rank: 8 },
        { name: '9', suit: 'Diamonds', rank: 9 },
        { name: '10', suit: 'Diamonds', rank: 10 },
        { name: 'Jack', suit: 'Diamonds', rank: 11 },
        { name: 'Queen', suit: 'Diamonds', rank: 12 },
        { name: 'King', suit: 'Diamonds', rank: 13 },
        { name: 'Ace', suit: 'Diamonds', rank: 14 },
        { name: '2', suit: 'Clubs', rank: 2 },
        { name: '3', suit: 'Clubs', rank: 3 },
        { name: '4', suit: 'Clubs', rank: 4 },
        { name: '5', suit: 'Clubs', rank: 5 },
        { name: '6', suit: 'Clubs', rank: 6 },
        { name: '7', suit: 'Clubs', rank: 7 },
        { name: '8', suit: 'Clubs', rank: 8 },
        { name: '9', suit: 'Clubs', rank: 9 },
        { name: '10', suit: 'Clubs', rank: 10 },
        { name: 'Jack', suit: 'Clubs', rank: 11 },
        { name: 'Queen', suit: 'Clubs', rank: 12 },
        { name: 'King', suit: 'Clubs', rank: 13 },
        { name: 'Ace', suit: 'Clubs', rank: 14 },
        { name: '2', suit: 'Spades', rank: 2 },
        { name: '3', suit: 'Spades', rank: 3 },
        { name: '4', suit: 'Spades', rank: 4 },
        { name: '5', suit: 'Spades', rank: 5 },
        { name: '6', suit: 'Spades', rank: 6 },
        { name: '7', suit: 'Spades', rank: 7 },
        { name: '8', suit: 'Spades', rank: 8 },
        { name: '9', suit: 'Spades', rank: 9 },
        { name: '10', suit: 'Spades', rank: 10 },
        { name: 'Jack', suit: 'Spades', rank: 11 },
        { name: 'Queen', suit: 'Spades', rank: 12 },
        { name: 'King', suit: 'Spades', rank: 13 },
        { name: 'Ace', suit: 'Spades', rank: 14 }
    ]
    const suits = [Suit.Hearts, Suit.Diamonds, Suit.Clubs, Suit.Spades];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

    it('decksFunctionTest', () => {
        const texasHoldEmDeck = decksFunction(suits, ranks);
        expect(texasHoldEmDeck).toEqual(deck)
    })

})