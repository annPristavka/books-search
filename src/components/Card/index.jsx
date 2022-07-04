import React from 'react'
import styled from 'styled-components'
import './style.scss'

const P = styled.p `
    font-size: 20px;
    font-family: 'Gantari', sans-serif;
    font-weight: 400;
    color:rgba(153, 149, 149, 0.726);
    line-height: 20px;
`

const H3 = styled.p `
    font-size: 30px;
    font-family: 'Gantari', sans-serif;
    font-weight: 600;
    color:rgba(0, 0, 0, 0.726);
    line-height: 30px;
`

const Card = (props) => {

    const {dataItem, setDataBook, setShow} = props

    const onClickCard = () =>{
        setDataBook(dataItem)
        setShow(true)
    }

    const {categories, title, authors} = dataItem?.volumeInfo;
    const {thumbnail} = dataItem?.volumeInfo?.imageLinks
    
    return (
        <div className="card" onClick={onClickCard}>
            <div className="card__container">
                <div className="card__container__cover">
                    <img src={thumbnail} alt=""/>
                </div>
                <section className="card__container__info">
                    <P className="underline">{categories || 'no'}</P>
                    <H3>{title}</H3>
                    <P>{authors}</P>
                </section>

            </div>

        </div>
    )
}

export default Card