import {Column, ColumnID} from "./column";
import {Board} from "./board";
import {AppUnit} from "./app-unit";

export type CardID = number;
export type CardName = string;

export class Card implements AppUnit {
    readonly id: CardID;
    readonly name: CardName;
    columnId: ColumnID;

    constructor(columnId: ColumnID, id: CardID, name: CardName) {
        this.id = id;
        this.name = name;
        this.columnId = columnId;
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