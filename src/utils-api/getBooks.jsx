import axios from 'axios';
import store from '../store/index';
import { getBookAction } from '../reducer/getBookReduce';
import { getBooksAction } from '../reducer/loadingReducer';

export const getDataBook = (id) => {
  store.dispatch(getBooksAction(true));
  axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=isbn:${id}&key=AIzaSyACAECI5Xk3HkHRkteZ1Bdiyj8WDHeIYFk`
    )
    .then((response) => store.dispatch(getBookAction(response.data.items)))
    .catch((err) => console.log(err));
  store.dispatch(getBooksAction(false));
};
