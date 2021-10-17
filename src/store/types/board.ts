import {Board, BoardID, BoardName} from "../../types/board";
import {Column, ColumnName} from "../../types/column";
import {Card, CardName} from "../../types/card";


export enum BoardActionTypes {
    ADD_BOARD = 'ADD_BOARD',
    ADD_COLUMN = 'ADD_COLUMN',
    ADD_CARD = 'ADD_CARD',
    SET_WINDOW_TITLE = 'SET_WINDOW_TITLE',
    SET_NEW_BOARD_NAME = 'SET_NEW_BOARD_NAME',
    SET_NEW_COLUMN_NAME = 'SET_NEW_COLUMN_NAME',
    SET_NEW_CARD_NAME = 'SET_NEW_CARD_NAME',
    SWITCH_IS_ADDING_COLUMN = 'SWITCH_IS_ADDING_COLUMN',
    SWITCH_IS_ADDING_BOARD = 'SWITCH_IS_ADDING_BOARD',
    SWITCH_IS_ADDING_CARD = 'SWITCH_IS_ADDING_CARD'
}

interface AddBoardAction {
    type: BoardActionTypes.ADD_BOARD,
    payload: Board
}

interface AddColumnAction {
    type: BoardActionTypes.ADD_COLUMN,
    payload: [BoardID, Column]
}

interface AddCardAction {
    type: BoardActionTypes.ADD_CARD,
    payload: [Board, Column, Card]
}

interface SetWindowTitleAction {
    type: BoardActionTypes.SET_WINDOW_TITLE,
    payload: string
}

interface SetNewBoardNameAction {
    type: BoardActionTypes.SET_NEW_BOARD_NAME,
    payload: BoardName
}

interface SetNewColumnNameAction {
    type: BoardActionTypes.SET_NEW_COLUMN_NAME,
    payload: ColumnName,
}

interface SetNewCardNameAction {
    type: BoardActionTypes.SET_NEW_CARD_NAME,
    payload: [Board, Column, CardName]
}

interface SwitchIsAddingColumnAction {
    type: BoardActionTypes.SWITCH_IS_ADDING_COLUMN,
    payload: boolean
}

interface SwitchIsAddingBoardAction {
    type: BoardActionTypes.SWITCH_IS_ADDING_BOARD,
    payload: boolean
}

interface SwitchIsAddingCardAction {
    type: BoardActionTypes.SWITCH_IS_ADDING_CARD,
    payload: [Board, Column, boolean]
}

export interface BoardState {
    boardList: Board[],
    newBoardName: BoardName,
    newColumnName: ColumnName,
    isAddingBoard: boolean,
    isAddingColumn: boolean,
    windowTitle: string
}


export type BoardAction =
    AddBoardAction
    | AddColumnAction
    | AddCardAction
    | SetNewBoardNameAction
    | SetNewColumnNameAction
    | SetNewCardNameAction
    | SwitchIsAddingBoardAction
    | SwitchIsAddingColumnAction
    | SwitchIsAddingCardAction
    | SetWindowTitleAction;