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

    addCard(card: Card) {
        const column = new Column(this.id, this.name);
        column.cardList = [card, ...column.cardList]
            .sort((left: Card, right: Card) => left.id - right.id);
        return column
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