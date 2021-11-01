import {ColumnID, ColumnName} from "./column";
import {AppUnit} from "./app-unit";
import {DraggedCard} from "./card";

export type BoardName = string;
export type BoardID = number;

export class Board implements AppUnit {
    readonly id: BoardID;
    readonly name: BoardName;
    newColumnName: ColumnName;
    isAddingColumn: boolean;
    draggedCard: DraggedCard

    constructor(id: ColumnID, name: BoardName) {
        this.id = id;
        this.name = name;
        this.newColumnName = '';
        this.isAddingColumn = false;
        this.draggedCard = null;
    }

    setNewColumnName(name: ColumnName): Board {
        const board = new Board(this.id, this.name);
        board.isAddingColumn = true;
        board.newColumnName = name;
        return board
    }

    setIsAddingColumn(value: boolean): Board {
        const board = new Board(this.id, this.name);
        board.isAddingColumn = value;
        board.newColumnName = this.newColumnName;
        return board
    }

    setDraggedCard(card: DraggedCard): Board {
        const board = new Board(this.id, this.name);
        board.isAddingColumn = this.isAddingColumn;
        board.newColumnName = this.newColumnName;
        board.draggedCard = card;
        return board
    }
}

export interface BoardListItemProps {
    name: BoardName
}
