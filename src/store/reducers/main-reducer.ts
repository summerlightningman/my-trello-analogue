import {MainAction, MainActionTypes, MainState} from "../types/board";
import {Column} from "../../types/column";
import {Card} from "../../types/card";
import {Board} from "../../types/board";
import {
    addCard,
    addColumn,
    moveCardIntoOtherColumn,
    setNewCardName,
    setNewColumnName,
    switchIsAddingCard,
    switchIsAddingColumn
} from "../functions/main-reducer";

const initialState: MainState = {
    boardList: [new Board(0, 'myboard')],
    columnList: [new Column(0, 0, 'mycol1'), new Column(0, 1, 'mycol2')],
    cardList: [new Card(0, 0, 'mycard1'), new Card(0, 1, 'mycard2'), new Card(1, 0, 'mycard3'), new Card(1, 1, 'mycard4'),],
    windowTitle: 'My Trello Analogue',
    newBoardName: '',
    isAddingBoard: false,
}

export const mainReducer = (state = initialState, action: MainAction): MainState => {
    switch (action.type) {
        case MainActionTypes.ADD_BOARD:
            return {...state, boardList: [...state.boardList, action.payload]}
        case MainActionTypes.ADD_COLUMN:
            return addColumn(state, action.payload);
        case MainActionTypes.ADD_CARD:
            return addCard(state, action.payload)
        case MainActionTypes.SET_WINDOW_TITLE:
            return {...state, windowTitle: action.payload}
        case MainActionTypes.SET_NEW_BOARD_NAME:
            return {...state, newBoardName: action.payload}
        case MainActionTypes.SET_NEW_COLUMN_NAME:
            return setNewColumnName(state, ...action.payload)
        case MainActionTypes.SET_NEW_CARD_NAME:
            return setNewCardName(state, ...action.payload)
        case MainActionTypes.SWITCH_IS_ADDING_BOARD:
            return {...state, isAddingBoard: action.payload}
        case MainActionTypes.SWITCH_IS_ADDING_COLUMN:
            return switchIsAddingColumn(state, ...action.payload)
        case MainActionTypes.SWITCH_IS_ADDING_CARD:
            return switchIsAddingCard(state, ...action.payload)
        case MainActionTypes.MOVE_CARD_INTO_OTHER_COLUMN:
            return moveCardIntoOtherColumn(state, ...action.payload)

        default:
            return initialState
    }
}