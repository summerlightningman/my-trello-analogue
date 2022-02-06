import {BoardAction, BoardActionTypes, BoardState} from "../types/board";
import {replaceInListById} from "../../replace-in-list-by-id";
import {Column} from "../../types/column";
import {Card} from "../../types/card";
import {Board} from "../../types/board";

const initialState: BoardState = {
    boardList: [new Board(0, 'myboard')],
    columnList: [new Column(0, 0, 'mycol1'), new Column(0, 1, 'mycol2')],
    cardList: [new Card(0, 0, 'mycard1'), new Card(0, 1, 'mycard2'), new Card(1, 0, 'mycard3'), new Card(1, 1, 'mycard4'),],
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
            const brd_ = state.boardList.find(b => b.id === newCol_.boardId);
            if (!brd_) return state
            const newBrd_ = brd_.reset();
            const newBrdList = replaceInListById(state.boardList, brd_, newBrd_);
            return {...state, columnList: [...state.columnList, action.payload], boardList: newBrdList}
        case BoardActionTypes.ADD_CARD:
            const newCard = action.payload;
            const col_ = state.columnList.find(b => b.id === newCard.columnId);
            if (!col_) return state
            const newColumn_ = col_.reset();
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
            const [destColumnId, card, belowCardId] = action.payload;
            const cardList = state.cardList.filter(cardItem => JSON.stringify(cardItem) !== JSON.stringify(card));
            const newId = Math.max(...state.cardList.map(cardItem => cardItem.id)) + 1;
            const belowCardIdx = belowCardId === -1
                ? newId
                : cardList.findIndex(cardItem => cardItem.id === belowCardId && cardItem.columnId === destColumnId);
            const updatedCard = card.setId(newId).setColumnId(destColumnId);
            const newCardList = [...cardList.slice(0, belowCardIdx), updatedCard, ...cardList.slice(belowCardIdx, newId)];
            return {...state, cardList: newCardList}

        default:
            return initialState
    }
}