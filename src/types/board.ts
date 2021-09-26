type BoardName = string;

export enum BoardActionTypes {
    SET_BOARD = 'SET_BOARD',
    ADD_BOARD = 'ADD_BOARD'
}

interface SetBoardAction {
    type: BoardActionTypes.SET_BOARD,
    payload: Board[]
}

interface AddBoardAction {
    type: BoardActionTypes.ADD_BOARD,
    payload: Board
}

export interface Board {
    name: BoardName
}

export interface BoardState {
    boardList: Board[]
}

export interface BoardListItemProps {
    name: BoardName
}

export type BoardAction = SetBoardAction | AddBoardAction