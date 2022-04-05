import {ADD_FILTER, CLEAR_FILTER, REMOVE_FILTER} from "./actionFilter";

const initialState = [];

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FILTER : {
            if(!state.includes(action.filter)){
                return [
                    ...state,
                    action.filter
                ]
            } else {
                return state;
            }
        }
        case REMOVE_FILTER : {
            return state.filter(item => item !== action.filter)
        }
        case CLEAR_FILTER : {
            return []
        }
        default : {
            return state;
        }
    }
}