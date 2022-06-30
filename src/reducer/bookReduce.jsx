const GET_BOOKS = 'GET_BOOKS';

const initialState = {
    books: []
}

export const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BOOKS: 
        return {...state, books: [ ...action.payload]}

        default: return state;
    }
}

export const getBooksAction = (payload) => ({type: GET_BOOKS, payload})