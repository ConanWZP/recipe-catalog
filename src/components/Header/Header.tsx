import React from 'react';
import style from './styles.module.scss'

const Navbar = () => {
    return (
        <div className={style.navbarWrapper}>
            <span>Home</span>
            <span>Categories</span>
            <input placeholder={'search'} />
            <span>1</span>
        </div>
    );
};

export default Navbar;