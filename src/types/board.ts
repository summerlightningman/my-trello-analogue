import {Column, ColumnId} from "./column";

export type BoardName = string;
export type BoardID = number;

export class Board {
    readonly id: BoardID;
    readonly name: BoardName;
    columns: Column[];

    constructor(id: ColumnId, name: BoardName) {
        this.id = id;
        this.name = name;
        this.columns = [];
    }
}