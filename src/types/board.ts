export type BoardName = string;
export type BoardID = number;

export class Board {
    id: BoardID;
    name: BoardName;

    constructor(name: BoardName) {
        this.id = -1; // todo: fix it
        this.name = name;
        // this.columns = []
    }
}