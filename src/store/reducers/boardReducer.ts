import {BoardAction, BoardActionTypes, BoardState} from "../types/board";

const initialState: BoardState = {
    boardList: [],
    newBoardName: '',
}

export const boardReducer = (state = initialState, action: BoardAction): BoardState => {
    switch (action.type) {
        case BoardActionTypes.ADD_BOARD:
            return {...state, boardList: [action.payload, ...state.boardList]}
        case BoardActionTypes.SET_NEW_BOARD_NAME:
            return {...state, newBoardName: action.payload}
        default:
            return initialState
    }
}