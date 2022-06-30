import React from 'react'
import './style.scss'

const Card = ({dataItem}) => {
    
    return (
        <div className="card">
            <div className="card__container">
                <div className="card__container__cover">
                    <img src={dataItem?.volumeInfo?.imageLinks?.thumbnail} alt=""/>
                </div>
                <section className="card__container__info">
                    <p className="underline">{dataItem?.volumeInfo?.categories || 'no'}</p>
                    <h3>{dataItem?.volumeInfo?.title}</h3>
                    <p>{dataItem?.volumeInfo?.authors}</p>
                </section>

            </div>

        </div>
    )
}

export default Card