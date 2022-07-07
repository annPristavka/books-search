import React from 'react';
import img from '../../images/search.png';
import { categories, sortingBy } from '../../mock';
import { Link, useNavigate } from 'react-router-dom';
import { Input, H1, P, Select, Img } from './styled';
import './style.scss';

const Header = (props) => {
  const { setValue, getData, setOrder, setCategories } = props;

  const navigate = useNavigate();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      navigate(`/`);
      getData();
    }
  };

  const onChangeSort = (e) => {
    setOrder(e.target.value);
  };

  const onChangeCategories = (e) => {
    setCategories(e.target.value);
  };

  return (
    <header className='header'>
      <div className='header__container'>
        <div className='head-h1'>
          <H1>Search for books</H1>
        </div>

        <div className='header__container__input'>
          <Input
            type='text'
            placeholder='search...'
            onChange={(e) => handleChange(e)}
            onKeyPress={(e) => onKeyPress(e)}
          />
          <Link to='/'>
            <Img src={img} alt='search' onClick={getData} />
          </Link>
        </div>

        <div className='header__container__sort'>
          <section className='sortItem'>
            <P>Categories</P>
            <Select onChange={(e) => onChangeCategories(e)}>
              {categories.map((item, index) => (
                <option key={index} value={item.value}>
                  {item.label}
                </option>
              ))}
            </Select>
          </section>

          <section className='sortItem'>
            <P>Sorting by</P>
            <Select onChange={(e) => onChangeSort(e)}>
              {sortingBy.map((item, index) => (
                <option key={index} value={item.value}>
                  {item.label}
                </option>
              ))}
            </Select>
          </section>
        </div>
      </div>
    </header>
  );
};

export default Header;
