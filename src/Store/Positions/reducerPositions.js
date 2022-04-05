import {ADD_POSITIONS} from "./actionPositions";

const initialState = [];

export const reducerPositions = (state = initialState, action) => {
    switch (action.type){
        case ADD_POSITIONS : {
           return  action.positions

        }
        default: {
            return state
        }
    }
}