import React from 'react';
import classes from './Header.module.css';
import headerImage from './../../assets/meals.jpeg';
import HeaderCartButton from './HeaderCartButton';

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes['header__mast']}>
          <h1>Foodie</h1>
        </div>
        <HeaderCartButton label="Your cart" />
      </header>
      <div className={classes['main-image']}>
        <img src={headerImage} alt="Foodie: delicious food" />
      </div>
    </>
  );
};

export default Header;
