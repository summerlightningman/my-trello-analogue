import {combineReducers} from "redux";
import {mainReducer} from "./mainReducer";
import {configureStore} from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
    main: mainReducer
});

export const setupStore = () => configureStore({
    reducer: rootReducer
});
