import {InterfaceAction, InterfaceActionTypes, InterfaceState} from "../types/interface";

const initialState: InterfaceState = {
    title: 'My Trello Analogue',
    isAddingColumn: false
}

export const interfaceReducer = (state: InterfaceState, action: InterfaceAction) => {
    switch (action.type) {
        case InterfaceActionTypes.SET_TITLE:
            return {...state, title: action.payload}
        case InterfaceActionTypes.SET_IS_ADDING_COLUMN:
            return {...state, isAddingColumn: action.payload}
        default:
            return initialState
    }
};

