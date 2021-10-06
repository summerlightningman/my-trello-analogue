export type InterfaceTitle = string;

export enum InterfaceActionTypes {
    SET_TITLE = 'SET_TITLE',
    SET_IS_ADDING_COLUMN = 'SET_IS_ADDING_COLUMN'
}

export interface InterfaceState {
    title: InterfaceTitle,
    isAddingColumn: boolean
}

interface SetTitleAction {
    type: InterfaceActionTypes.SET_TITLE,
    payload: InterfaceTitle
}

interface SetIsAddingColumnAction {
    type: InterfaceActionTypes.SET_IS_ADDING_COLUMN,
    payload: boolean
}

export type InterfaceAction = SetTitleAction | SetIsAddingColumnAction

