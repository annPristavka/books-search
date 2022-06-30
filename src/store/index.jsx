import {combineReducers, configureStore} from '@reduxjs/toolkit'
import { booksReducer } from '../reducer/bookReduce'

const rootReduce = combineReducers({
    books: booksReducer
})


const store = configureStore({
    reducer: rootReduce
})

export default store