import {Column} from "./column";
import {Board} from "./board";

export type CardID = number;
export type CardName = string;

export class Card {
    readonly id: CardID;
    readonly name: CardName

    constructor(id: CardID, name: CardName) {
        this.id = id;
        this.name = name;
    }
}

export interface CardListProps {
    column: Column
    board: Board
}

export interface CardListItemProps {
    card: Card
}

export interface CardListItemAddProps {
    column: Column
    board: Board
}