import {Board, BoardName} from "../../types/board";


export enum BoardActionTypes {
    SET_BOARD = 'SET_BOARD',
    ADD_BOARD = 'ADD_BOARD',
    SWITCH_ADDING_STATE = 'SWITCH_ADDING_STATE',
    SET_NEW_BOARD_NAME = 'SET_NEW_BOARD_NAME'
}

interface SetBoardAction {
    type: BoardActionTypes.SET_BOARD,
    payload: Board[]
}

interface AddBoardAction {
    type: BoardActionTypes.ADD_BOARD,
    payload: Board
}

interface SwitchAddingState {
    type: BoardActionTypes.SWITCH_ADDING_STATE,
}

interface SetNewBoardName {
    type: BoardActionTypes.SET_NEW_BOARD_NAME,
    payload: BoardName
}

export interface BoardState {
    boardList: Board[],
    newBoardName: BoardName,
    isAddingBoard: boolean
}

export interface BoardListItemProps {
    name: BoardName
}

export type BoardAction = SetBoardAction | AddBoardAction | SwitchAddingState | SetNewBoardName