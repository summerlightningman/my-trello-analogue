import {combineReducers} from "redux";
import {boardReducer} from "./boardReducer";
import {interfaceReducer} from "./interfaceReducer";

export const rootReducer = combineReducers({
    board: boardReducer,
    interface: interfaceReducer
});

export type RootState = ReturnType<typeof rootReducer>;