export type InterfaceTitle = string;

export enum InterfaceActionTypes {
    SET_TITLE = 'SET_TITLE'
}

export interface InterfaceState {
    title: InterfaceTitle
}

interface SetTitleAction {
    type: InterfaceActionTypes.SET_TITLE,
    payload: InterfaceTitle
}

export type InterfaceAction = SetTitleAction

