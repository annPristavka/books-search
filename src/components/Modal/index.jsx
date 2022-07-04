import React from 'react'
import close from '../../images/close.png'
import styled from 'styled-components'
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

const Modal = (props) => {

    const {setShow, dataBooks} = props

    const {categories, title, authors, description, infoLink} = dataBooks?.volumeInfo
    const {thumbnail} = dataBooks?.volumeInfo?.imageLinks

    const onClickShow = () => {
        setShow(false)
    }

    return(
        <div className='overlay'>
            <div className="overlay__container">

                <Img src={close} className="close" alt="close" onClick={onClickShow}/>
                
                <section className="overlay__container__img">
                    <Img src= {thumbnail} alt=""/>
                </section>

                <section className="overlay__container__info">
                    <P>{categories}</P>
                    <H3>{title}</H3>
                    <P className="underline">{authors}</P>
                    <Article>
                        <P>{description}</P>
                    </Article>
                    <Button><A target="_blank" href={infoLink}>Buy a book</A></Button>
                </section>
                
            </div>
        </div>
    )
}

export default Modal