import React, { useState, useEffect } from 'react'
import close from '../../images/close.png'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { getDataBook } from '../../utils-api/getBooks'
import { useNavigate } from 'react-router-dom'
import Loading from '../Loading'
import './style.scss'

const Img = styled.img`
    width: 220px;
    height: 280px;
    align-self: center;
    justify-self: center;
`

const P = styled.p`
    font-size: 20px;
    font-family: 'Gantari', sans-serif;
    line-height: 20px;
    color:rgb(163, 163, 163)
`

const H3 = styled.h3 `
    font-size: 36px;
    font-weight: 600;
    font-family: 'Gantari', sans-serif;
    line-height: 36px;
    color:rgb(0, 0, 0)
`

const Button = styled.button`
    margin-top: 25px;
    width: 150px;
    height: 40px;
    border-radius: 15px;
`

const A = styled.a`
    text-decoration: none;
    font-size: 24px;
    font-family: 'Gantari', sans-serif;
    line-height: 24px;
    color:rgb(87, 87, 87);
`

const Article = styled.article`
    border: 1px solid rgb(216, 216, 216);
    width: 100%;
    padding: 30px;
    margin-top: 50px;
`

const Book = (props) => {

    const [book, setBook] = useState([])
    const [loading, setLoading] = useState(false)

    const { id } = useParams()
    const navigate = useNavigate()
    
    useEffect(() => {
        setLoading(true)
        getDataBook(id, setBook)
        setLoading(false)
    }, [id])

    const title = book?.volumeInfo?.title;
    const categories = book?.volumeInfo?.categories;
    const description = book?.volumeInfo?.description;
    const infoLink = book?.volumeInfo?.infoLink;
    const authors = book?.volumeInfo?.authors;
     
    const thumbnail = book?.volumeInfo?.imageLinks?.thumbnail

    const onClickHome = () => {
        navigate(`/`)
    }

    if(loading) return <Loading />
    return(
        <div className='overlay'>
            <div className="overlay__container">
                <Img src={close} className="close" alt="close" onClick={onClickHome}/>
                
                <section className="overlay__container__img">
                    <Img src= {thumbnail} alt=""/>
                </section>

                <section className="overlay__container__info">
                    {/* <P>{categories[0]}</P> */}
                    {/* <H3>{title}</H3> */}
                    {/* <P className="underline">{authors}</P> */}
                    <Article>
                        <P>{description}</P>
                    </Article>
                    <Button><A target="_blank" href={infoLink}>Buy a book</A></Button>
                </section>
 
            </div>
        </div>
    )
}

export default Book