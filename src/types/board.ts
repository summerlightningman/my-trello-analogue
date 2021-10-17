import {Column, ColumnId} from "./column";

export type BoardName = string;
export type BoardID = number;
export type ColumnList = Column[];

export class Board {
    readonly id: BoardID;
    readonly name: BoardName;
    columnList: ColumnList;

    constructor(id: ColumnId, name: BoardName) {
        this.id = id;
        this.name = name;
        this.columnList = [];
    }

    addColumn(column: Column): Board {
        const board = new Board(this.id, this.name);
        board.columnList = [column, ...this.columnList]
            .sort((left: Column, right: Column) => left.id - right.id);
        return board
    }

    removeColumn(column: Column): Board {
        const board = new Board(this.id, this.name);
        board.columnList = board.columnList.filter((col: Column) => col.id === column.id);
        return board
    }

    updateColumn(column: Column): Board {
        const listWithoutCol = this.columnList.filter(col => col.id !== column.id);
        const board = new Board(this.id, this.name);
        board.columnList = [...listWithoutCol, column].sort((a, b) => a.id - b.id);
        return board
    }
}

export interface BoardListItemProps {
    name: BoardName
}
