import {GuiAction, GuiActionType, GuiState} from "../types/gui";

const initialState: GuiState = {
    title: 'My Trello Analogue',
    isAddingColumn: false,
    isAddingBoard: true
}

export const guiReducer = (state: GuiState, action: GuiAction) => {
    switch (action.type) {
        case GuiActionType.SET_TITLE:
            return {...state, title: action.payload}
        case GuiActionType.SWITCH_IS_ADDING_COLUMN:
            return {...state, isAddingColumn: !state.isAddingColumn}
        case GuiActionType.SWITCH_IS_ADDING_BOARD:
            return {...state, isAddingBoard: !state.isAddingBoard}
        default:
            return initialState
    }
};

