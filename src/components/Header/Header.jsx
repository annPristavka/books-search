import React from 'react'
import img from '../../images/search.png'
import './style.scss'


const categories = [
    { value: 'all', label: 'All' },
    { value: 'art', label: 'Art' },
    { value: 'biography', label: 'Biography' },
    { value: 'computers', label: 'Computers' },
    { value: 'history', label: 'History' },
    { value: 'medical', label: 'Medical' },
    { value: 'poetry', label: 'Poetry' }
];

const sortingBy = [
    { value: 'newest', label: 'Newest' },
    { value: 'relevance', label: 'Relevance' },
    
];


const Header = ({setValue, getData, setShow, setOrder, setCategories}) => {

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

    const onChangeSort = (e) => {
        setOrder(e.target.value)
    }

    const onChangeCategories = (e) => {
        setCategories(e.target.value)
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
                        <select onChange={(e) => onChangeCategories(e)}>
                            {
                                categories.map((item, index) => (
                                    <option key={index} value={item.value}>{item.label}</option>
                                ))
                            }
                        </select>
                    </section>
                    <section className="sortItem">
                        <p>Sorting by</p>
                        <select onChange={(e) => onChangeSort(e)}>
                            {
                                sortingBy.map((item, index) => (
                                    <option key={index} value={item.value}>{item.label}</option>
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