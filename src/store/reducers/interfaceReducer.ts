import {InterfaceAction, InterfaceActionTypes, InterfaceState} from "../types/interface";

const initialState: InterfaceState = {
    title: 'My Trello Analogue'
}

export const interfaceReducer = (state: InterfaceState, action: InterfaceAction) => {
    switch (action.type) {
        case InterfaceActionTypes.SET_TITLE:
            return {...state, title: action.payload}
        default:
            return initialState
    }
};

