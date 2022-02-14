import {combineReducers} from "redux";
import {mainReducer} from "./main-reducer";
import {configureStore} from "@reduxjs/toolkit";
import {guiReducer} from "./gui-reducer";

export const rootReducer = combineReducers({
    main: mainReducer,
    gui: guiReducer
});

export const setupStore = () => configureStore({
    reducer: rootReducer
});
