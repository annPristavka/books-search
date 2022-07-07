import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getBooksAction } from '../../reducer/bookReduce';
import Header from '../Header/Header';
import Books from '../Books/Books';
import Book from '../Book';

import { Routes, Route } from 'react-router-dom';

const Main = () => {
  const [value, setValue] = useState('');
  const [order, setOrder] = useState('newest');
  const [categories, setCategories] = useState('all');

  const dispatch = useDispatch();

  const getData = () => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${value}&orderBy=${order}&key=AIzaSyACAECI5Xk3HkHRkteZ1Bdiyj8WDHeIYFk&maxResults=30`
      )
      .then((response) => dispatch(getBooksAction(response.data.items)))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header
        setValue={setValue}
        getData={getData}
        setOrder={setOrder}
        setCategories={setCategories}
      />

      <Routes>
        <Route path='/' exact element={<Books />} />
        <Route path='/books/:id' exact element={<Book />} />
      </Routes>
    </>
  );
};

export default Main;
