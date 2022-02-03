import {ColumnID} from "./column";
import {AppUnit} from "./app-unit";

export type CardID = number;
export type CardName = string;
export type CardCount = number;
export type DraggedCard = Card | null;

export class Card implements AppUnit {
    readonly id: CardID;
    readonly name: CardName;
    columnId: ColumnID;

    constructor(columnId: ColumnID, id: CardID, name: CardName) {
        this.id = id;
        this.name = name;
        this.columnId = columnId;
    }

    setColumnId(columnId: ColumnID): Card {
        return new Card(columnId, this.id, this.name);
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