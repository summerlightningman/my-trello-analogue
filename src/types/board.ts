import {ColumnID, ColumnName} from "./column";
import AppUnit from "./app-unit";

export type BoardName = string;
export type BoardID = number;

export class Board extends AppUnit<BoardID, Board> {
    readonly id: BoardID;
    readonly name: BoardName;
    newColumnName: ColumnName;
    isAddingColumn: boolean;

    constructor(id: ColumnID, name: BoardName){
        super();
        this.id = id;
        this.name = name;
        this.newColumnName = '';
        this.isAddingColumn = false;

        this.setNewColumnName = this.setNewColumnName.bind(this);
        this.setIsAddingColumn = this.setIsAddingColumn.bind(this);
        this.clone = this.clone.bind(this);
        this.reset = this.reset.bind(this);
    }


    protected clone(): Board {
        const newBoard = new Board(this.id, this.name);
        newBoard.isAddingColumn = this.isAddingColumn;
        newBoard.newColumnName = this.newColumnName;
        return newBoard
    }

    public reset(): Board {
        return new Board(this.id, this.name)
    }

    setNewColumnName(name: ColumnName): Board {
        const newBoard = this.clone();
        newBoard.newColumnName = name;
        return newBoard
    }

    setIsAddingColumn(value: boolean): Board {
        const newBoard = this.clone();
        newBoard.isAddingColumn = value;
        return newBoard
    }
}

export interface BoardListItemProps{
    id: BoardID,
    name: BoardName
}
