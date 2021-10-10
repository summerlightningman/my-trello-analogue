export type GuiTitle = string;

export enum GuiActionType {
    SET_TITLE = 'SET_TITLE',
    SWITCH_IS_ADDING_COLUMN = 'SWITCH_IS_ADDING_COLUMN',
    SWITCH_IS_ADDING_BOARD = 'SWITCH_IS_ADDING_BOARD'
}

export interface GuiState {
    title: GuiTitle,
    isAddingColumn: boolean,
    isAddingBoard: boolean
}

interface SetTitleAction {
    type: GuiActionType.SET_TITLE,
    payload: GuiTitle
}

interface SetIsAddingColumnAction {
    type: GuiActionType.SWITCH_IS_ADDING_COLUMN,
}

interface SetIsAddingBoardAction {
    type: GuiActionType.SWITCH_IS_ADDING_BOARD,
}

export type GuiAction = SetTitleAction | SetIsAddingColumnAction | SetIsAddingBoardAction

