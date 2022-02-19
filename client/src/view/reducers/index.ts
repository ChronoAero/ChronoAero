import { combineReducers } from "redux"
import { showcaseReducer } from "./showcase.reducer"

export const allReducer = combineReducers(showcaseReducer);