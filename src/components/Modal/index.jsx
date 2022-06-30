import React from 'react'
import close from '../../images/close.png'
import './style.scss'

const Modal = ({setShow, dataBooks}) => {

    return(
        <div className='overlay'>
            <div className="overlay__container">

                <img src={close} className="close" alt="close" onClick={() => setShow(false)}/>
                
                <section className="overlay__container__img">
                    <img src= {dataBooks?.volumeInfo?.imageLinks?.thumbnail} alt=""/>
                </section>

                <section className="overlay__container__info">
                    <p>{dataBooks?.volumeInfo?.categories}</p>
                    <h3>{dataBooks?.volumeInfo?.title}</h3>
                    <p className="underline">{dataBooks?.volumeInfo?.authors}</p>
                    <article>
                        <p>{dataBooks?.volumeInfo?.description}</p>
                    </article>
                    <button><a target="_blank" href={dataBooks?.volumeInfo?.infoLink}>Buy a book</a></button>
                </section>
                
            </div>
        </div>
    )
}

export default Modal