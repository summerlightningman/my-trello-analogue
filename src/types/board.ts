import {Column, ColumnId} from "./column";

export type BoardName = string;
export type BoardID = number;

export class Board {
    id: BoardID;
    name: BoardName;
    columns: Column[];

    constructor(id: ColumnId, name: BoardName) {
        this.id = id;
        this.name = name;
        this.columns = [];
    }
}