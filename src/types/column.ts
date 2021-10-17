import {Board} from "./board";
import {Card, CardName} from "./card";

export type ColumnName = string;
export type ColumnId = number;
export type CardList = Card[];

export class Column {

    readonly id: ColumnId;
    readonly name: ColumnName;
    private _newCardName: CardName;
    cardList: CardList;
    private _isAddingCard: boolean;

    constructor(id: ColumnId, name: ColumnName) {
        this.name = name;
        this.id = id;
        this.cardList = [];
        this._newCardName = '';
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
        column._newCardName = value;
        return column
    }

    setIsAddingCard(value: boolean): Column {
        const newColumn = this.cloneColumn();
        newColumn._isAddingCard = value;
        return newColumn
    }

    private cloneColumn(): Column {
        const column = new Column(this.id, this.name);
        column._newCardName = this._newCardName;
        column._isAddingCard = this._isAddingCard;
        column.cardList = [...this.cardList];
        return column
    }

    get newCardName(): CardName {
        return this._newCardName;
    }

    set newCardName(value: CardName) {
        this._newCardName = value;
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