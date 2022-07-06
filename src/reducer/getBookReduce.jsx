const GET_BOOK = 'GET_BOOK';

const initialState = {
    book: []
}

export const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BOOK: 
        return {...state, book: [ ...action.payload]}

        default: return state;
    }
}

export const getBooksAction = (payload) => ({type: GET_BOOK, payload})