import {Board} from "./board";
import {Card} from "./card";

export type ColumnName = string;
export type ColumnId = number;
export type CardList = Card[];

export class Column {
    readonly id: ColumnId;
    readonly name: ColumnName;
    cardList: CardList;

    constructor(id: ColumnId, name: ColumnName) {
        this.name = name;
        this.id = id;
        this.cardList = [];
    }
}

export interface ColumnListProps {
    board: Board
}

export interface ColumnListItemProps {
    name: ColumnName
}

export interface ColumnListItemAddProps {
    board: Board
}