import {combineReducers} from "redux";
import {boardReducer} from "./boardReducer";
import {guiReducer} from "./guiReducer";

export const rootReducer = combineReducers({
    gui: guiReducer,
    board: boardReducer
});

export type RootState = ReturnType<typeof rootReducer>;