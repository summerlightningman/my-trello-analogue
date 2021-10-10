import {Board, BoardName} from "../../types/board";


export enum BoardActionTypes {
    ADD_BOARD = 'ADD_BOARD',
    SET_NEW_BOARD_NAME = 'SET_NEW_BOARD_NAME'
}

interface AddBoardAction {
    type: BoardActionTypes.ADD_BOARD,
    payload: Board
}

interface SetNewBoardNameAction {
    type: BoardActionTypes.SET_NEW_BOARD_NAME,
    payload: BoardName
}

export interface BoardState {
    boardList: Board[],
    newBoardName: BoardName,
}


export type BoardAction = AddBoardAction | SetNewBoardNameAction;