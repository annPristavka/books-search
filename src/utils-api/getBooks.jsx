import axios from 'axios'
 
export const getDataBook = (id, setBook) => {

    axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${id}&key=AIzaSyACAECI5Xk3HkHRkteZ1Bdiyj8WDHeIYFk`)
        .then(response => setBook(response.data.items?.[0]))
        .catch(err => console.log(err))

}


