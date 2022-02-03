import {BoardAction, BoardActionTypes, BoardState} from "../types/board";
import {replaceInListById} from "../../replace-in-list-by-id";

const initialState: BoardState = {
    boardList: [],
    columnList: [],
    cardList: [],
    windowTitle: 'My Trello Analogue',
    newBoardName: '',
    isAddingBoard: false,
}

export const boardReducer = (state = initialState, action: BoardAction): BoardState => {
    switch (action.type) {
        case BoardActionTypes.ADD_BOARD:
            return {...state, boardList: [...state.boardList, action.payload]}
        case BoardActionTypes.ADD_COLUMN:
            const newCol_ = action.payload;
            const [brd_,] = state.boardList.filter(b => b.id === newCol_.boardId);
            const newBrd_ = brd_.setNewColumnName('').setIsAddingColumn(false);
            const newBrdList = replaceInListById(state.boardList, brd_, newBrd_);
            return {...state, columnList: [...state.columnList, action.payload], boardList: newBrdList}
        case BoardActionTypes.ADD_CARD:
            const newCard = action.payload;
            const [col_,] = state.columnList.filter(b => b.id === newCard.columnId);
            const newColumn_ = col_.setNewCardName('').setIsAddingCard(false);
            const newColumnList_ = replaceInListById(state.columnList, col_, newColumn_);
            return {...state, cardList: [action.payload, ...state.cardList], columnList: newColumnList_}
        case BoardActionTypes.SET_WINDOW_TITLE:
            return {...state, windowTitle: action.payload}
        case BoardActionTypes.SET_NEW_BOARD_NAME:
            return {...state, newBoardName: action.payload}
        case BoardActionTypes.SET_NEW_COLUMN_NAME:
            const [brd, newColumnName] = action.payload;
            const newBrd = brd.setNewColumnName(newColumnName);
            const boardList = replaceInListById(state.boardList, brd, newBrd);
            return {...state, boardList}
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
        case BoardActionTypes.MOVE_CARD_INTO_OTHER_COLUMN:
            const [columnId, card_] = action.payload;
            const newCard_ = card_.setColumnId(columnId);
            const newCardList = replaceInListById(state.cardList, card_, newCard_);
            return {...state, cardList: newCardList}
        default:
            return initialState
    }
}