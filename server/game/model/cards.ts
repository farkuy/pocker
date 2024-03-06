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

export const suits = [Suit.Hearts, Suit.Diamonds, Suit.Clubs, Suit.Spades];
export const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

