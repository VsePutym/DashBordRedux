import {combineReducers} from "redux";
import {reducerPositions} from "./Positions/reducerPositions";
import {filterReducer} from "./Filters/reducerFilter";


export const rootReducer = combineReducers({
    positions: reducerPositions,
    filter: filterReducer
});