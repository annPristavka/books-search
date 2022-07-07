import React from 'react';
import { useNavigate } from 'react-router-dom';
import { P, H3 } from './styled';
import './style.scss';

const Card = (props) => {
  const { dataItem } = props;

  const navigate = useNavigate();

  const onClickCard = () => {
    navigate(`/books/${id}`);
  };

  const test = dataItem?.volumeInfo?.industryIdentifiers;
  const { categories, title, authors } = dataItem?.volumeInfo;
  const thumbnail = dataItem?.volumeInfo?.imageLinks?.thumbnail;
  const id = test && test[0].identifier;

  return (
    <div className='card' onClick={onClickCard}>
      <div className='card__container'>
        <div className='card__container__cover'>
          <img src={thumbnail} alt='' />
        </div>
        <section className='card__container__info'>
          <P className='underline'>{categories || 'no'}</P>
          <H3>{title}</H3>
          <P>{authors}</P>
        </section>
      </div>
    </div>
  );
};

export default Card;
