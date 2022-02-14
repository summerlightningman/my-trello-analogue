type WindowTitle = string;

export interface GuiInterface {
    windowTitle: WindowTitle
}

export const enum GuiActionTypes {
    SET_WINDOW_TITLE = 'SET_WINDOW_TITLE'
}

interface SetWindowTitleAction {
    type: GuiActionTypes.SET_WINDOW_TITLE,
    payload: WindowTitle
}

export type GuiAction = SetWindowTitleAction