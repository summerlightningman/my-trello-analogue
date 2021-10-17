import {BoardAction, BoardActionTypes, BoardState} from "../types/board";

const initialState: BoardState = {
    boardList: [],
    windowTitle: 'My Trello Analogue',
    newBoardName: '',
    newColumnName: '',
    newCardName: '',
    isAddingBoard: false,
    isAddingColumn: false,
    isAddingCard: false
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
        case BoardActionTypes.SET_NEW_CARD_NAME:
            const [board_ ,column_, newCardName] = action.payload;
            const newColumn = column_.setNewCardName(newCardName);
            board_.updateColumn(newColumn);

            const listWithoutBoard_ = state.boardList.filter(board => board.id !== board_.id);
            const newBoard_ = board_.updateColumn(newColumn);
            const newBoardList_ = [newBoard_, ...listWithoutBoard_]
                .sort((left, right) => left.id - right.id);

            return {...state, boardList: newBoardList_}
        case BoardActionTypes.ADD_CARD:
            const [board___ ,column___, card] = action.payload;
            const newColumn__ = column___.addCard(card);
            board___.updateColumn(newColumn__);

            const listWithoutBoard___ = state.boardList.filter(board => board.id !== board___.id);
            const newBoard___ = board___.updateColumn(newColumn__);
            const newBoardList___ = [newBoard___, ...listWithoutBoard___]
                .sort((left, right) => left.id - right.id);
            return {...state, boardList: newBoardList___}
        case BoardActionTypes.SWITCH_IS_ADDING_BOARD:
            return {...state, isAddingBoard: action.payload}
        case BoardActionTypes.SWITCH_IS_ADDING_COLUMN:
            return {...state, isAddingColumn: action.payload}
        case BoardActionTypes.SWITCH_IS_ADDING_CARD:
            const [board__ ,column__, value] = action.payload;
            const newColumn_ = column__.setIsAddingCard(value);
            board__.updateColumn(newColumn_);

            const listWithoutBoard__ = state.boardList.filter(board => board.id !== board__.id);
            const newBoard__ = board__.updateColumn(newColumn_);
            const newBoardList__ = [newBoard__, ...listWithoutBoard__]
                .sort((left, right) => left.id - right.id);
            return {...state, boardList: newBoardList__}
        default:
            return initialState
    }
}