import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { getDataBook } from '../../utils-api/getBooks';
import Loading from '../Loading';

import close from '../../images/close.png';
import { Img, P, H3, Button, A, Article } from './styled';
import './style.scss';

const Book = (props) => {
  //const [book, setBook] = useState([])
  const book = useSelector((state) => state.book.book[0]);
  const load = useSelector((state) => state.load.load);
  // const [loading, setLoading] = useState(false)

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    //setLoading(true)
    getDataBook(id);
    //setLoading(false)
  }, [id]);

  // console.log(book)

  const title = book?.volumeInfo?.title;
  const categories = book?.volumeInfo?.categories;
  const description = book?.volumeInfo?.description;
  const infoLink = book?.volumeInfo?.infoLink;
  const authors = book?.volumeInfo?.authors;

  const thumbnail = book?.volumeInfo?.imageLinks?.thumbnail;

  const onClickHome = () => {
    navigate(`/`);
  };

  if (load) return <Loading />;

  return (
    <div className='overlay'>
      <div className='overlay__container'>
        <Img src={close} className='close' alt='close' onClick={onClickHome} />

        <section className='overlay__container__img'>
          <Img src={thumbnail} alt='' />
        </section>

        <section className='overlay__container__info'>
          <P>{categories}</P>
          <H3>{title}</H3>
          <P className='underline'>{authors}</P>
          <Article>
            <P>{description}</P>
          </Article>
          <Button>
            <A target='_blank' href={infoLink}>
              Buy a book
            </A>
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Book;
