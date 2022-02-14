import {GuiAction, GuiActionTypes, GuiInterface} from "../types/gui-reducer";

const initialState: GuiInterface = {
    windowTitle: 'My Trello Analogue',
}

export const guiReducer = (state = initialState, action: GuiAction) => {
    switch (action.type) {
        case GuiActionTypes.SET_WINDOW_TITLE:
            return {...state, windowTitle: action.payload}
        default:
            return state
    }
};