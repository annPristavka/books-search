import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux/es/exports'
import { getBooksAction } from '../../reducer/bookReduce'
import Header from '../Header/Header'
import Found from '../Found'
import Books from '../Books/Books'
import Modal from '../Modal'
import Loading from '../Loading'
import axios from 'axios'

const Main = () => {

    const [value, setValue] = useState('')
    const [dataBooks, setDataBook] = useState([])
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)
    const [order, setOrder] = useState('newest')
    const [categories, setCategories] = useState('all')

    const dispatch = useDispatch();
    const books = useSelector(state => state.books.books)

    const getData = () => {
        setLoading(true)

        axios.get('https://www.googleapis.com/books/v1/volumes?q='+value+'&orderBy='+order+'&key=AIzaSyACAECI5Xk3HkHRkteZ1Bdiyj8WDHeIYFk&maxResults=30')
        .then(response => dispatch(getBooksAction(response.data.items)))
        .catch(err => console.log(err))

        setLoading(false)
    }

    // useEffect(() => (
    //     getData()
    // ),[])

    
    const booksInfo = show ? <Modal setShow={setShow} dataBooks={dataBooks}/> : <Books setDataBook={setDataBook} setShow={setShow}/>

    return(
        <>
            <Header setValue={setValue} getData={getData} setShow={setShow} setOrder={setOrder} setCategories={setCategories}/>
            {  books.length > 0 && <Found /> }
           
            { 
                loading ? <Loading /> : booksInfo
            }
        </>
    )
}

export default Main