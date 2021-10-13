export type CardID = number;
export type CardName = string;

export class Card {
    readonly id: CardID;
    readonly name: CardName

    constructor(id: CardID, name: CardName) {
        this.id = id;
        this.name = name;
    }
}