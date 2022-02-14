import {Board, BoardID, BoardList, BoardName} from "../../types/board";
import {Column, ColumnID, ColumnList, ColumnName} from "../../types/column";
import {Card, CardID, CardList, CardName} from "../../types/card";

export interface MainState {
    boardList: BoardList,
    columnList: ColumnList,
    cardList: CardList,
    newBoardName: BoardName,
    isAddingBoard: boolean,
}

export const enum MainActionTypes {
    ADD_BOARD = 'ADD_BOARD',
    ADD_COLUMN = 'ADD_COLUMN',
    ADD_CARD = 'ADD_CARD',
    SET_NEW_BOARD_NAME = 'SET_NEW_BOARD_NAME',
    SET_NEW_COLUMN_NAME = 'SET_NEW_COLUMN_NAME',
    SET_NEW_CARD_NAME = 'SET_NEW_CARD_NAME',
    SWITCH_IS_ADDING_COLUMN = 'SWITCH_IS_ADDING_COLUMN',
    SWITCH_IS_ADDING_BOARD = 'SWITCH_IS_ADDING_BOARD',
    SWITCH_IS_ADDING_CARD = 'SWITCH_IS_ADDING_CARD',
    MOVE_CARD_INTO_OTHER_COLUMN = 'MOVE_CARD_INTO_NEW_COLUMN'
}

interface AddBoardAction {
    type: MainActionTypes.ADD_BOARD,
    payload: Board
}

interface AddColumnAction {
    type: MainActionTypes.ADD_COLUMN,
    payload: Column
}

interface AddCardAction {
    type: MainActionTypes.ADD_CARD,
    payload: Card
}

interface SetNewBoardNameAction {
    type: MainActionTypes.SET_NEW_BOARD_NAME,
    payload: BoardName
}

interface SetNewColumnNameAction {
    type: MainActionTypes.SET_NEW_COLUMN_NAME,
    payload: [BoardID, ColumnName],
}

interface SetNewCardNameAction {
    type: MainActionTypes.SET_NEW_CARD_NAME,
    payload: [ColumnID, CardName]
}

interface SwitchIsAddingColumnAction {
    type: MainActionTypes.SWITCH_IS_ADDING_COLUMN,
    payload: [BoardID, boolean]
}

interface SwitchIsAddingBoardAction {
    type: MainActionTypes.SWITCH_IS_ADDING_BOARD,
    payload: boolean
}

interface SwitchIsAddingCardAction {
    type: MainActionTypes.SWITCH_IS_ADDING_CARD,
    payload: [ColumnID, boolean]
}

interface MoveCardIntoNewColumnAction {
    type: MainActionTypes.MOVE_CARD_INTO_OTHER_COLUMN,
    payload: [ColumnID, Card, CardID]
}

export type MainAction =
    AddBoardAction
    | AddColumnAction
    | AddCardAction
    | SetNewBoardNameAction
    | SetNewColumnNameAction
    | SetNewCardNameAction
    | SwitchIsAddingBoardAction
    | SwitchIsAddingColumnAction
    | SwitchIsAddingCardAction
    | MoveCardIntoNewColumnAction;