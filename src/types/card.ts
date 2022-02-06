import {ColumnID} from "./column";
import AppUnit from "./app-unit";

export type CardID = number;
export type CardName = string;
export type CardCount = number;


export class Card extends AppUnit<CardID, Card> {
    readonly id: CardID;
    readonly name: CardName;
    readonly columnId: ColumnID;

    constructor(columnId: ColumnID, id: CardID, name: CardName) {
        super();
        this.id = id;
        this.name = name;
        this.columnId = columnId;

        this.setColumnId = this.setColumnId.bind(this);
        this.setId = this.setId.bind(this);
        this.clone = this.clone.bind(this);
        this.reset = this.reset.bind(this)
    }

    setColumnId(columnId: ColumnID) {
        return new Card(columnId, this.id, this.name)
    }

    setId(id: CardID) {
        return new Card(this.columnId, id, this.name)
    }

    protected clone() {
        return new Card(this.columnId, this.id, this.name)
    }

    public reset() {
        return new Card(this.columnId, this.id, this.name)
    }
}


export interface CardListItemProps {
    card: Card,
}

export interface CardDropSlotProps {
    belowCardId: CardID
}

export interface CardListItemAddProps {
    cardCount: CardCount
}