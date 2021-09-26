import {combineReducers, createStore} from "redux";
import {boardReducer} from "./reducers/boardReducer";


export const store = createStore(combineReducers({
    board: boardReducer
}));