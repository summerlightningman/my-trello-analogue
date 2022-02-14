import {Column, ColumnID, ColumnName} from "../../types/column";
import {MainState} from "../types/main-reducer";
import {replaceInListById} from "../../redux-functions";
import {Card, CardID, CardName} from "../../types/card";
import {Board, BoardID} from "../../types/board";

export const addColumn = (state: MainState, newColumn: Column) => {
    const board = state.boardList.find(b => b.id === newColumn.boardId);
    if (!board) return state

    return {...state, columnList: [...state.columnList, newColumn]}
};

export const addCard = (state: MainState, newCard: Card) => {
    const column = state.columnList.find(b => b.id === newCard.columnId);
    if (!column) return state

    return {...state, cardList: [newCard, ...state.cardList]}
};

export const setNewColumnName = (state: MainState, boardId: BoardID, newColumnName: ColumnName) => {
    const board = Board.getById(boardId, state.boardList);
    const updatedBoard = board.setNewColumnName(newColumnName);
    const updatedBoardList = replaceInListById(state.boardList, board, updatedBoard);
    return {...state, boardList: updatedBoardList}
};

export const setNewCardName = (state: MainState, columnId: ColumnID, cardName: CardName) => {
    const column = Column.getById(columnId, state.columnList);
    const newColumn = column.setNewCardName(cardName);
    const newColumnList = replaceInListById(state.columnList, column, newColumn);
    return {...state, columnList: newColumnList}
};

export const switchIsAddingColumn = (state: MainState, boardId: BoardID, isAddingColumn: boolean) => {
    const board = Board.getById(boardId, state.boardList);
    const newBoard = board.setIsAddingColumn(isAddingColumn);
    const newBoardList = replaceInListById(state.boardList, board, newBoard);
    return {...state, boardList: newBoardList}
};

export const switchIsAddingCard = (state: MainState, columnId: ColumnID, isAddingCard: boolean) => {
    const column = Column.getById(columnId, state.columnList);
    const newColumn = column.setIsAddingCard(isAddingCard);
    const newColumnList = replaceInListById(state.columnList, column, newColumn)
    return {...state, columnList: newColumnList}
};

export const moveCardIntoOtherColumn = (state: MainState, destColumnId: ColumnID, card: Card, aboveCardId: CardID) => {
    const cardJson = JSON.stringify(card);
    const cardList = state.cardList.filter(cardItem => cardJson !== JSON.stringify(cardItem));
    const updatedCard = card.setId(aboveCardId + 1).setColumnId(destColumnId);
    const incrementCardIdsInDestColumn = (cardItem: Card) =>
        cardItem.columnId === destColumnId ? cardItem.setId(cardItem.id + 1) : cardItem;

    if (aboveCardId === -1)
        return {...state, cardList: [updatedCard, ...cardList.map(incrementCardIdsInDestColumn)]}

    const index =
        cardList.findIndex(cardItem => cardItem.id === aboveCardId && cardItem.columnId === destColumnId) + 1;
    const newCardList = [...cardList.slice(0, index), updatedCard, ...cardList.slice(index).map(incrementCardIdsInDestColumn)]
    return {...state, cardList: newCardList}
}