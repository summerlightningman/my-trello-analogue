export type ColumnName = string;
export type ColumnId = number;

export class Column {
    name: ColumnName;
    id: ColumnId;
    cards: number[]; // switch to Card

    constructor(id: ColumnId, name: ColumnName) {
        this.name = name;
        this.id = id;
        this.cards = [];
    }
}