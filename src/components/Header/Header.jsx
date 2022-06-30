import React from 'react'
import img from '../../images/search.png'
import './style.scss'


const categories = [
    {name: 'all', value: 'All'},
    {name: 'art', value: 'Art'},
    {name: 'biography', value: 'Biography'},
    {name: 'computers', value: 'Computers'},
    {name: 'history', value: 'History'},
    {name: 'medical', value: 'Medical'},
    {name: 'poetry', value: 'Poetry'},
];

const sortingBy = [
    {name: 'relevance', value: 'Relevance'},
    {name: 'newest', value: 'Newest'},
];


const Header = ({setValue, getData, setShow}) => {

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const searchData = () => {
        getData()
    }

    const onKeyPress = (e) => {
        if(e.key === 'Enter'){
            setShow(false)
            getData()
        }
    }

    return (
        <header className="header">
            <div className="header__container">
                <div className="head-h1">
                    <h1>Search for books</h1>
                </div>
                
                <div className="header__container__input">
                    <input type='text' placeholder="search..." onChange={e => handleChange(e)} onKeyPress={e => onKeyPress(e)}/>
                    <img src={img} alt="search" onClick={() => searchData()}/>
                </div>
                
                <div className="header__container__sort">
                    <section className="sortItem">
                        <p>Categories</p>
                        <select>
                            {
                                categories.map((item, index) => (
                                    <option key={index} name={item.name}>{item.value}</option>
                                ))
                            }
                        </select>
                    </section>
                    <section className="sortItem">
                        <p>Sorting by</p>
                        <select>
                            {
                                sortingBy.map((item, index) => (
                                    <option key={index} name={item.name}>{item.value}</option>
                                ))
                            }
                        </select>
                    </section>
                </div>
            </div>
        </header>
    )
}

export default Header