import React from 'react'
import {useSelector} from 'react-redux'
import './style.scss'

const Found = ({}) => {
    const books = useSelector(state => state.books.books)
    return(
        <div className="found">
            <div className="found__container">
                <p>Found : {books.length}</p>
            </div>
        </div>
    )
}

export default Found