import {combineReducers} from "redux";
import {boardReducer} from "./boardReducer";
import {configureStore} from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
    board: boardReducer
});

export const setupStore = () => configureStore({
    reducer: rootReducer
});
