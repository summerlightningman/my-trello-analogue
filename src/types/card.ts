import {ColumnID} from "./column";
import {AppUnit} from "./app-unit";

export type CardID = number;
export type CardName = string;
export type CardCount = number;


export class Card implements AppUnit {
    readonly id: CardID;
    readonly name: CardName;
    columnId: ColumnID;

    constructor(columnId: ColumnID, id: CardID, name: CardName) {
        this.id = id;
        this.name = name;
        this.columnId = columnId;

        this.setColumnId = this.setColumnId.bind(this);
        this.setId = this.setId.bind(this);
    }

    setColumnId(columnId: ColumnID) {
        return new Card(columnId, this.id, this.name)
    }

    setId(id: CardID) {
        return new Card(this.columnId, id, this.name)
    }
}


export interface CardListItemProps {
    card: Card,
}

export interface CardListItemSlotProps {
    belowCardId: CardID
}

export interface CardListItemAddProps {
    cardCount: CardCount
}