import {BoardAction, BoardActionTypes, BoardState} from "../types/board";
import {replaceInListById} from "../../replace-in-list-by-id";

const initialState: BoardState = {
    boardList: [],
    columnList: [],
    cardList: [],
    windowTitle: 'My Trello Analogue',
    newBoardName: '',
    newColumnName: '',
    isAddingBoard: false,
}

export const boardReducer = (state = initialState, action: BoardAction): BoardState => {
    switch (action.type) {
        case BoardActionTypes.ADD_BOARD:
            return {...state, boardList: [...state.boardList, action.payload]}
        case BoardActionTypes.ADD_COLUMN:
            return {...state, columnList: [...state.columnList, action.payload]}
        case BoardActionTypes.ADD_CARD:
            return {...state, cardList: [...state.cardList, action.payload]}
        case BoardActionTypes.SET_WINDOW_TITLE:
            return {...state, windowTitle: action.payload}
        case BoardActionTypes.SET_NEW_BOARD_NAME:
            return {...state, newBoardName: action.payload}
        case BoardActionTypes.SET_NEW_COLUMN_NAME:
            const [brd, newColumnName] = action.payload;
            const newBrd = brd.setNewColumnName(newColumnName);
            const newBrdList = replaceInListById(state.boardList, brd, newBrd);
            return {...state, boardList: newBrdList}
        case BoardActionTypes.SET_NEW_CARD_NAME:
            const [col, cardName] = action.payload;
            const newCol = col.setNewCardName(cardName);
            const newColList = replaceInListById(state.columnList, col, newCol)
            return {...state, columnList: newColList}
        case BoardActionTypes.SWITCH_IS_ADDING_BOARD:
            return {...state, isAddingBoard: action.payload}
        case BoardActionTypes.SWITCH_IS_ADDING_COLUMN:
            const [board, isAddingColumn] = action.payload;
            const newBoard = board.setIsAddingColumn(isAddingColumn);
            const newBoardList = replaceInListById(state.boardList, board, newBoard);
            return {...state, boardList: newBoardList}
        case BoardActionTypes.SWITCH_IS_ADDING_CARD:
            const [column, value] = action.payload;
            const newColumn = column.setIsAddingCard(value);
            const newColumnList = replaceInListById(state.columnList, column, newColumn)
            return {...state, columnList: newColumnList}
        default:
            return initialState
    }
}