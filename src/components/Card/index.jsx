import React from 'react'
import './style.scss'

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
                    <p className="underline">{categories || 'no'}</p>
                    <h3>{title}</h3>
                    <p>{authors}</p>
                </section>

            </div>

        </div>
    )
}

export default Card