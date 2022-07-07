import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card';
import { P } from './styled';
import './style.scss';

const Books = ({ setDataBook, setShow }) => {
  const books = useSelector((state) => state.books.books);

  return (
    <div className='books'>
      <div className='found'>
        <div className='found__container'>
          {books.length > 0 && <P>Found : {books.length}</P>}
        </div>
      </div>

      <div className='books__container'>
        {books.map((item, index) => (
          <Card
            key={index}
            dataItem={item}
            setDataBook={setDataBook}
            setShow={setShow}
          />
        ))}
      </div>
    </div>
  );
};

export default Books;
