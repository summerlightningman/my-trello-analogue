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

    addColumn(column: Column) {
        const board = new Board(this.id, this.name);
        board.columnList = [column, ...this.columnList]
            .sort((left: Column, right: Column) => left.id - right.id);
        return board
    }
}

export interface BoardListItemProps {
    name: BoardName
}
