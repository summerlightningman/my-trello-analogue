import {BoardAction, BoardActionTypes, BoardState} from "../types/board";
import {replaceInListById} from "../../redux-functions";
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

export const mainReducer = (state = initialState, action: BoardAction): BoardState => {
    switch (action.type) {
        case BoardActionTypes.ADD_BOARD:
            return {...state, boardList: [...state.boardList, action.payload]}
        case BoardActionTypes.ADD_COLUMN:
            const newCol_ = action.payload;
            const brd_ = state.boardList.find(b => b.id === newCol_.boardId);
            if (!brd_) return state
            return {...state, columnList: [...state.columnList, action.payload]}
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
            const [boardID, newColumnName] = action.payload;
            const brd = Board.getById(boardID, state.boardList);
            const newBrd = brd.setNewColumnName(newColumnName);
            const boardList = replaceInListById(state.boardList, brd, newBrd);
            return {...state, boardList}
        case BoardActionTypes.SET_NEW_CARD_NAME:
            const [colId, cardName] = action.payload;
            const col = Column.getById(colId, state.columnList);
            const newCol = col.setNewCardName(cardName);
            const newColList = replaceInListById(state.columnList, col, newCol);
            return {...state, columnList: newColList}
        case BoardActionTypes.SWITCH_IS_ADDING_BOARD:
            return {...state, isAddingBoard: action.payload}
        case BoardActionTypes.SWITCH_IS_ADDING_COLUMN:
            const [boardId, isAddingColumn] = action.payload;
            const board = Board.getById(boardId, state.boardList)
            const newBoard = board.setIsAddingColumn(isAddingColumn);
            const newBoardList = replaceInListById(state.boardList, board, newBoard);
            return {...state, boardList: newBoardList}
        case BoardActionTypes.SWITCH_IS_ADDING_CARD:
            const [columnId, value] = action.payload;
            const column = Column.getById(columnId, state.columnList);
            const newColumn = column.setIsAddingCard(value);
            const newColumnList = replaceInListById(state.columnList, column, newColumn)
            return {...state, columnList: newColumnList}
        case BoardActionTypes.MOVE_CARD_INTO_OTHER_COLUMN:
            const [destColumnId, card, aboveCardId] = action.payload;
            const cardJson = JSON.stringify(card);
            const cardList = state.cardList.filter(cardItem => cardJson !== JSON.stringify(cardItem));
            const updatedCard = card.setId(aboveCardId + 1).setColumnId(destColumnId);
            const incFunc = (cardItem: Card) =>
                cardItem.columnId === destColumnId ? cardItem.setId(cardItem.id + 1) : cardItem;

            if (aboveCardId === -1)
                return {...state, cardList: [updatedCard, ...cardList.map(incFunc)]}

            const index =
                cardList.findIndex(cardItem => cardItem.id === aboveCardId && cardItem.columnId === destColumnId) + 1;
            const newCardList = [...cardList.slice(0, index), updatedCard, ...cardList.slice(index).map(incFunc)]
            return {...state, cardList: newCardList}

        default:
            return initialState
    }
}