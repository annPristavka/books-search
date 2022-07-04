import React from 'react'
import close from '../../images/close.png'
import './style.scss'

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

                <img src={close} className="close" alt="close" onClick={onClickShow}/>
                
                <section className="overlay__container__img">
                    <img src= {thumbnail} alt=""/>
                </section>

                <section className="overlay__container__info">
                    <p>{categories}</p>
                    <h3>{title}</h3>
                    <p className="underline">{authors}</p>
                    <article>
                        <p>{description}</p>
                    </article>
                    <button><a target="_blank" href={infoLink}>Buy a book</a></button>
                </section>
                
            </div>
        </div>
    )
}

export default Modal