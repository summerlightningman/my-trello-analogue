import {Board} from "./board";
import {Card, CardName} from "./card";
import {AppUnit} from "./app-unit";

export type ColumnName = string;
export type ColumnID = number;
export type CardList = Card[];

export class Column implements AppUnit {
    readonly id: ColumnID;
    readonly name: ColumnName;
    private newCardName: CardName;
    cardList: CardList;
    private _isAddingCard: boolean;

    constructor(id: ColumnID, name: ColumnName) {
        this.name = name;
        this.id = id;
        this.cardList = [];
        this.newCardName = '';
        this._isAddingCard = false;

        this.setNewCardName = this.setNewCardName.bind(this);
        this.addCard = this.addCard.bind(this);
        this.cloneColumn = this.cloneColumn.bind(this)
    }

    addCard(card: Card): Column {
        const column = new Column(this.id, this.name);
        column.cardList = [card, ...this.cardList]
            .sort((left: Card, right: Card) => left.id - right.id);
        return column
    }

    setNewCardName(value: CardName): Column {
        const column = this.cloneColumn();
        column.newCardName = value;
        return column
    }

    setIsAddingCard(value: boolean): Column {
        const newColumn = this.cloneColumn();
        newColumn._isAddingCard = value;
        return newColumn
    }

    private cloneColumn(): Column {
        const column = new Column(this.id, this.name);
        column.newCardName = this.newCardName;
        column._isAddingCard = this._isAddingCard;
        column.cardList = [...this.cardList];
        return column
    }

    get isAddingCard(): boolean {
        return this._isAddingCard;
    }
}

export interface ColumnListProps {
    board: Board
}

export interface ColumnListItemProps {
    column: Column
    board: Board
}

export interface ColumnListItemAddProps {
    board: Board
}