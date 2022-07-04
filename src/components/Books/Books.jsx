import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Card from '../Card'
import styled from 'styled-components'
import './style.scss'

const P = styled.p`
    font-size: 18px;
    font-family: 'Gantari', sans-serif;
`;


const Books = ({setDataBook, setShow}) => {
    const books = useSelector(state => state.books.books)

    return (
        <div className="books">

            <div className="found">
                <div className="found__container">
                    {books.length > 0 && <P>Found : {books.length}</P>}
                </div>
            </div>

            <div className="books__container">
                {
                    books.map((item, index) => <Card key={index} dataItem={item} setDataBook={setDataBook} setShow={setShow}/>)
                }
            </div>
        </div>
    )
}

export default Books