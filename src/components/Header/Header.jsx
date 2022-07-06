import React from 'react'
import img from '../../images/search.png'
import { categories, sortingBy } from '../../mock'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import './style.scss'

const Input = styled.input`
    height: 36px;
    width: 100%;
    font-family: 'Poppins', sans-serif;
    font-size: 26px;
    border: none;
    outline: none;
`

const H1 = styled.h1`
    font-size: 48px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: 110%;
    color: #fff;
`

const P = styled.p`
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
`

const Select = styled.select`
    height: 46px;
    width: 230px;
    font-size: 24px;
`

const Img = styled.img`
    border: none;
    overflow: hidden;
    height: 100%;
    cursor: pointer;
`

const Header = (props) => {

    const {setValue, getData, setOrder, setCategories} = props

    const navigate = useNavigate()

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const onKeyPress = (e) => {
        if(e.key === 'Enter'){
            navigate(`/`)
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
                    <H1>Search for books</H1>
                </div>
                
                <div className="header__container__input">
                    <Input type='text' placeholder="search..." onChange={e => handleChange(e)} onKeyPress={e => onKeyPress(e)}/>
                    <Link to='/'><Img src={img} alt="search" onClick={getData}/></Link>
                </div>
                
                <div className="header__container__sort">

                    <section className="sortItem">
                        <P>Categories</P>
                        <Select onChange={(e) => onChangeCategories(e)}>
                            {
                                categories.map((item, index) => (
                                    <option key={index} value={item.value}>{item.label}</option>
                                ))
                            }
                        </Select>
                    </section>
                    
                    <section className="sortItem">
                        <P>Sorting by</P>
                        <Select onChange={(e) => onChangeSort(e)}>
                            {
                                sortingBy.map((item, index) => (
                                    <option key={index} value={item.value}>{item.label}</option>
                                ))
                            }
                        </Select>
                    </section>

                </div>
            </div>
        </header>
    )
}

export default Header