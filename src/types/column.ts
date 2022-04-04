import {Board, BoardID} from "./board";
import {CardName} from "./card";
import AppUnit from "./app-unit";

export type ColumnName = string;
export type ColumnID = number;
export type ColumnList = Column[];

export class Column extends AppUnit<ColumnID, Column> {
    readonly id: ColumnID;
    readonly name: ColumnName;
    readonly boardId: BoardID;
    newCardName: CardName;
    _isAddingCard: boolean;

    constructor(boardId: BoardID, id: ColumnID, name: ColumnName) {
        super();
        this.name = name;
        this.id = id;
        this.boardId = boardId;
        this.newCardName = '';
        this._isAddingCard = false;

        this.setNewCardName = this.setNewCardName.bind(this);
        this.setIsAddingCard = this.setIsAddingCard.bind(this);
        this.clone = this.clone.bind(this);
    }

    protected clone(): Column {
        const column = new Column(this.boardId, this.id, this.name);
        column.newCardName = this.newCardName;
        column._isAddingCard = this._isAddingCard;
        return column
    }

    public reset(): Column {
        return new Column(this.boardId, this.id, this.name)
    }

    setNewCardName(value: CardName): Column {
        const column = this.clone();
        column.newCardName = value;
        return column
    }

    setIsAddingCard(value: boolean): Column {
        const newColumn = this.clone();
        newColumn._isAddingCard = value;
        return newColumn
    }

    get isAddingCard(): boolean {
        return this._isAddingCard;
    }

    public static getById(id: ColumnID, list: ColumnList): Column {
        return list.find(column => column.id === id) || new Column(-1, -1, '404: Column not found!')
    }
}

export interface ColumnContainerProps {
    color?: string
    height?: string,
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
