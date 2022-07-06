import {combineReducers, configureStore} from '@reduxjs/toolkit'
import { booksReducer } from '../reducer/bookReduce'
import { bookReducer } from '../reducer/getBookReduce'

const rootReduce = combineReducers({
    books: booksReducer,
    book: bookReducer
})


const store = configureStore({
    reducer: rootReduce
})

export default store