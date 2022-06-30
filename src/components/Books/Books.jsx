import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Card from '../Card'
import './style.scss'


const Books = () => {
    const books = useSelector(state => state.books.books)

    return (
        <div className="books">
            <div className="books__container">
                {
                    books.map((item, index) => <Card key={index} dataItem={item}/>)
                }
            </div>
        </div>
    )
}

export default Books