import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux/es/exports'
import { getBooksAction } from '../../reducer/bookReduce'
import Header from '../Header/Header'
import Found from '../Found'
import Books from '../Books/Books'
import axios from 'axios'

const Main = () => {

    const [value, setValue] = useState('')

    const dispatch = useDispatch();

    const getData = () => {
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+value+'&key=AIzaSyACAECI5Xk3HkHRkteZ1Bdiyj8WDHeIYFk&maxResults=30')
        .then(response => dispatch(getBooksAction(response.data.items)))
        .catch(err => console.log(err))
    }

    // useEffect(() => (
    //     getData()
    // ),[])

    return(
        <>
            <Header setValue={setValue} getData={getData}/>
            <Found />
            <Books />
        </>
    )
}

export default Main