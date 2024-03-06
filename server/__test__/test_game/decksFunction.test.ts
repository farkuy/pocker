import {decksFunction, randomShuffle} from "../../game/gameLogic/decksFunction";
import {Card, ranks, Suit, suits} from "../../game/model/cards";
import {playerCombination} from "../../game/gameLogic/combinations";

describe('TexasHoldEmTest', () => {
    const deck = [
        new Card('2', Suit.Hearts, 2),
        new Card('3', Suit.Hearts, 3),
        new Card('4', Suit.Hearts, 4),
        new Card('5', Suit.Hearts, 5),
        new Card('6', Suit.Hearts, 6),
        new Card('7', Suit.Hearts, 7),
        new Card('8', Suit.Hearts, 8),
        new Card('9', Suit.Hearts, 9),
        new Card('10', Suit.Hearts, 10),
        new Card('Jack', Suit.Hearts, 11),
        new Card('Queen', Suit.Hearts, 12),
        new Card('King', Suit.Hearts, 13),
        new Card('Ace', Suit.Hearts, 14),
        new Card('2', Suit.Diamonds, 2),
        new Card('3', Suit.Diamonds, 3),
        new Card('4', Suit.Diamonds, 4),
        new Card('5', Suit.Diamonds, 5),
        new Card('6', Suit.Diamonds, 6),
        new Card('7', Suit.Diamonds, 7),
        new Card('8', Suit.Diamonds, 8),
        new Card('9', Suit.Diamonds, 9),
        new Card('10', Suit.Diamonds, 10),
        new Card('Jack', Suit.Diamonds, 11),
        new Card('Queen', Suit.Diamonds, 12),
        new Card('King', Suit.Diamonds, 13),
        new Card('Ace', Suit.Diamonds, 14),
        new Card('2', Suit.Clubs, 2),
        new Card('3', Suit.Clubs, 3),
        new Card('4', Suit.Clubs, 4),
        new Card('5', Suit.Clubs, 5),
        new Card('6', Suit.Clubs, 6),
        new Card('7', Suit.Clubs, 7),
        new Card('8', Suit.Clubs, 8),
        new Card('9', Suit.Clubs, 9),
        new Card('10', Suit.Clubs, 10),
        new Card('Jack', Suit.Clubs, 11),
        new Card('Queen', Suit.Clubs, 12),
        new Card('King', Suit.Clubs, 13),
        new Card('Ace', Suit.Clubs, 14),
        new Card('2', Suit.Spades, 2),
        new Card('3', Suit.Spades, 3),
        new Card('4', Suit.Spades, 4),
        new Card('5', Suit.Spades, 5),
        new Card('6', Suit.Spades, 6),
        new Card('7', Suit.Spades, 7),
        new Card('8', Suit.Spades, 8),
        new Card('9', Suit.Spades, 9),
        new Card('10', Suit.Spades, 10),
        new Card('Jack', Suit.Spades, 11),
        new Card('Queen', Suit.Spades, 12),
        new Card('King', Suit.Spades, 13),
        new Card('Ace', Suit.Spades, 14)
    ];
    let cardsDeckTexasHoldEm: Card[] = decksFunction(suits, ranks);

    afterEach(() => {
        cardsDeckTexasHoldEm = JSON.parse(JSON.stringify(deck));
    })

    it('createDeckTexasHoldEm', () => {
        expect(cardsDeckTexasHoldEm.length).toBe(deck.length);
        expect(cardsDeckTexasHoldEm).toEqual(deck)
    })

    it('shuffleDeck', () => {
        randomShuffle(cardsDeckTexasHoldEm);
        expect(cardsDeckTexasHoldEm.length).toBe(deck.length);
        expect(cardsDeckTexasHoldEm).not.toEqual(deck); //В теории возможно, что карты вернуться в первоначальную последовательнось в колоде. Их же не в киоске заряжают
    })

    it('win', () => {
        const playerCards1: Card[] = [
            new Card('Ace', Suit.Hearts, 14),
            new Card('7', Suit.Clubs, 7)
        ];
        const board1: Card[] = [
            new Card('3', Suit.Spades, 3),
            new Card('4', Suit.Diamonds, 4),
            new Card('5', Suit.Hearts, 5),
            new Card('6', Suit.Clubs, 6),
            new Card('10', Suit.Spades, 10)
        ];
        const street1 = playerCombination(playerCards1, board1);

        const playerCards2: Card[] = [
            new Card('8', Suit.Hearts, 8),
            new Card('9', Suit.Clubs, 9)
        ];
        const board2: Card[] = [
            new Card('Ace', Suit.Spades, 14),
            new Card('7', Suit.Diamonds, 7),
            new Card('6', Suit.Hearts, 6),
            new Card('5', Suit.Clubs, 5),
            new Card('4', Suit.Spades, 4)
        ];
        const street2 = playerCombination(playerCards2, board2);

        const playerCards3: Card[] = [
            new Card('King', Suit.Hearts, 13),
            new Card('Queen', Suit.Clubs, 12)
        ];

        const board3: Card[] = [
            new Card('10', Suit.Spades, 10),
            new Card('9', Suit.Diamonds, 9),
            new Card('8', Suit.Hearts, 8),
            new Card('7', Suit.Clubs, 7),
            new Card('3', Suit.Spades, 3)
        ];

        const notStreet1 = playerCombination(playerCards3, board3);

        const playerCards4: Card[] = [
            new Card('Ace', Suit.Hearts, 14),
            new Card('3', Suit.Clubs, 3)
        ];

        const board4: Card[] = [
            new Card('10', Suit.Spades, 10),
            new Card('9', Suit.Diamonds, 9),
            new Card('5', Suit.Hearts, 5),
            new Card('4', Suit.Clubs, 4),
            new Card('2', Suit.Spades, 2)
        ];

        const notStreet4 = playerCombination(playerCards4, board4);
        console.log(notStreet4);
    })
})