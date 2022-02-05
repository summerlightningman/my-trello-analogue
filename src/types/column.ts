import {Board, BoardID} from "./board";
import {Card, CardID, CardName} from "./card";
import {AppUnit} from "./app-unit";

export type ColumnName = string;
export type ColumnID = number;
export type CardList = Card[];

export class Column implements AppUnit {
    readonly id: ColumnID;
    readonly name: ColumnName;
    boardId: BoardID;
    newCardName: CardName;
    cardList: CardList;
    _isAddingCard: boolean;

    constructor(boardId: BoardID, id: ColumnID, name: ColumnName) {
        this.name = name;
        this.id = id;
        this.boardId = boardId;
        this.cardList = [];
        this.newCardName = '';
        this._isAddingCard = false;

        this.setNewCardName = this.setNewCardName.bind(this);
        this.setIsAddingCard = this.setIsAddingCard.bind(this);
        this.removeCardFromColumnById = this.removeCardFromColumnById.bind(this);
        this.insertCard = this.insertCard.bind(this);
        this.cloneColumn = this.cloneColumn.bind(this);
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

    removeCardFromColumnById(id: CardID): Column {
        const newColumn = this.cloneColumn();
        console.log(newColumn);
        newColumn.cardList = newColumn.cardList.filter(card => card.id !== id);
        return newColumn
    }

    insertCard(card: Card, belowCardId: CardID): Column {
        const newColumn = this.cloneColumn();
        const cardIdx = newColumn.cardList.findIndex(card => card.id === belowCardId);
        const cardCount = newColumn.cardList.length;
        const {cardList} = newColumn;
        newColumn.cardList = [...cardList.slice(0, cardIdx), card, ...cardList.slice(cardIdx, cardCount)]
            .map((card, idx) => new Card(idx, card.id, card.name));
        return newColumn
    }

    private cloneColumn(): Column {
        const column = new Column(this.boardId, this.id, this.name);
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
}

export interface ColumnListItemAddProps {
    board: Board
}
