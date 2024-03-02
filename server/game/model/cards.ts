import {createDeck} from "../gameLogic/createDeck";

export enum Suit {
    Hearts = 'Hearts',
    Diamonds = 'Diamonds',
    Clubs = 'Clubs',
    Spades = 'Spades',
}

export class Card {
    name: string;
    suit: Suit;
    rank: number;
    constructor( name: string, suit: Suit, rank: number) {
        this.name = name;
        this.suit = suit;
        this.rank = rank;
    }
}

const suits = [Suit.Hearts, Suit.Diamonds, Suit.Clubs, Suit.Spades];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

export const cardsDeckTexasHoldEm: Card[] = createDeck(suits, ranks);

