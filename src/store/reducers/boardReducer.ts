import {BoardAction, BoardActionTypes, BoardState} from "../types/board";

const initialState: BoardState = {
    boardList: [],
    windowTitle: 'My Trello Analogue',
    newBoardName: '',
    newColumnName: '',
    isAddingBoard: false,
    isAddingColumn: false
}

export const boardReducer = (state = initialState, action: BoardAction): BoardState => {
    switch (action.type) {
        case BoardActionTypes.ADD_BOARD:
            return {...state, boardList: [action.payload, ...state.boardList]}
        case BoardActionTypes.ADD_COLUMN:
            const [boardId, column] = action.payload;
            const [board,] = state.boardList.filter(board => board.id === boardId);
            const listWithoutBoard = state.boardList.filter(board => board.id !== boardId);
            const newBoard = board.addColumn(column);
            const newBoardList = [newBoard, ...listWithoutBoard]
                .sort((left, right) => left.id - right.id);
            return {...state, boardList: newBoardList}
        case BoardActionTypes.SET_WINDOW_TITLE:
            return {...state, windowTitle: action.payload}
        case BoardActionTypes.SET_NEW_BOARD_NAME:
            return {...state, newBoardName: action.payload}
        case BoardActionTypes.SET_NEW_COLUMN_NAME:
            return {...state, newColumnName: action.payload}
        case BoardActionTypes.SWITCH_IS_ADDING_BOARD:
            return {...state, isAddingBoard: action.payload}
        case BoardActionTypes.SWITCH_IS_ADDING_COLUMN:
            return {...state, isAddingColumn: action.payload}
        default:
            return initialState
    }
}