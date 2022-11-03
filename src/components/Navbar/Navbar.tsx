import React from 'react';
import style from './styles.module.scss'
import categor from './../../assets/img/world-search.svg'

const Navbar = () => {
    return (
        <div className={style.navbarWrapper}>
            <div className={style.items}>
                <img src={categor} />
                <span>Categories</span>
            </div>

            <span>Random meal</span>
        </div>
    );
};

export default Navbar;