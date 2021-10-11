import {Board, BoardName} from "../../types/board";
import {ColumnName} from "../../types/column";


export enum BoardActionTypes {
    ADD_BOARD = 'ADD_BOARD',
    SET_WINDOW_TITLE = 'SET_WINDOW_TITLE',
    SET_NEW_BOARD_NAME = 'SET_NEW_BOARD_NAME',
    SET_NEW_COLUMN_NAME = 'SET_NEW_COLUMN_NAME',
    SWITCH_IS_ADDING_COLUMN = 'SWITCH_IS_ADDING_COLUMN',
    SWITCH_IS_ADDING_BOARD = 'SWITCH_IS_ADDING_BOARD'
}

interface AddBoardAction {
    type: BoardActionTypes.ADD_BOARD,
    payload: Board
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

interface SwitchIsAddingColumnAction {
    type: BoardActionTypes.SWITCH_IS_ADDING_COLUMN,
    payload: boolean
}

interface SwitchIsAddingBoardAction {
    type: BoardActionTypes.SWITCH_IS_ADDING_BOARD,
    payload: boolean
}

export interface BoardState {
    boardList: Board[],
    windowTitle: string,
    newBoardName: BoardName,
    newColumnName: ColumnName,
    isAddingBoard: boolean,
    isAddingColumn: boolean
}


export type BoardAction =
    AddBoardAction
    | SetNewBoardNameAction
    | SetNewColumnNameAction
    | SwitchIsAddingBoardAction
    | SwitchIsAddingColumnAction
    | SetWindowTitleAction;