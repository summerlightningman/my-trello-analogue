import {BoardAction, BoardActionTypes, BoardState} from "../../types/board";

const initialState: BoardState = {
    boardList: []
}

export const boardReducer = (state = initialState, action: BoardAction): BoardState => {
    switch (action.type) {
        case BoardActionTypes.ADD_BOARD:
            return {...state, boardList: [...state.boardList, action.payload]}
        default:
            return initialState
    }
}