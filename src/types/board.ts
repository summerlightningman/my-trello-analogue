import {ColumnID, ColumnName} from "./column";
import {AppUnit} from "./app-unit";

export type BoardName = string;
export type BoardID = number;

export class Board implements AppUnit {
    readonly id: BoardID;
    readonly name: BoardName;
    newColumnName: ColumnName;
    isAddingColumn: boolean;


    constructor(id: ColumnID, name: BoardName) {
        this.id = id;
        this.name = name;
        this.newColumnName = '';
        this.isAddingColumn = false;

        this.setNewColumnName = this.setNewColumnName.bind(this);
        this.setIsAddingColumn = this.setIsAddingColumn.bind(this);
        this.cloneBoard = this.cloneBoard.bind(this);
    }

    cloneBoard(): Board {
        const newBoard = new Board(this.id, this.name);
        newBoard.isAddingColumn = this.isAddingColumn;
        newBoard.newColumnName = this.newColumnName;
        return newBoard
    }

    setNewColumnName(name: ColumnName): Board {
        const newBoard = this.cloneBoard();
        newBoard.newColumnName = name;
        return newBoard
    }

    setIsAddingColumn(value: boolean): Board {
        const newBoard = this.cloneBoard();
        newBoard.isAddingColumn = value;
        return newBoard
    }
}

export interface BoardListItemProps{
    id: BoardID,
    name: BoardName
}
