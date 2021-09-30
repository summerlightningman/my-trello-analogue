export type ColumnName = string;
export type ColumnId = number;

export class Column {
    readonly id: ColumnId;
    readonly name: ColumnName;
    cards: number[]; // switch to Card

    constructor(id: ColumnId, name: ColumnName) {
        this.name = name;
        this.id = id;
        this.cards = [];
    }
}