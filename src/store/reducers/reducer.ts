import {combineReducers} from "redux";
import {productReducer} from "./productReducer";

export const reducer = combineReducers({
    product: productReducer,
})

export type ReducerType = ReturnType<typeof reducer>;