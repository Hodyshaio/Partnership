import { combineReducers } from 'redux';

// Reducers

export const initialState = {
    loading: true,
    Questions: [],
    Users: [],
    selectedQuestion: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ALL_QUESTIONS':
            return {
                ...state,
                loading: false,
                Questions: action.payload.questions
            };
        case 'QUESTION_SELECTED':
            return {
                ...state,
                loading: false,
                selectedQuestion: action.payload
            };
        case 'ADD_QUESTION':
            console.log('action.payload (ADD_QUESTION) => ',action.payload);
            return {
                ...state,
                loading: false,
                Questions: action.payload
            };
        case 'ADD_USER':
            console.log('action.payload (ADD_USER) => ',action.payload);
            return {
                ...state,
                loading: false,
                Users: action.payload
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    reducer
});

export default rootReducer;