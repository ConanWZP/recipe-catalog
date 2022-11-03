import React from 'react';
import style from './styles.module.scss'
import categor from './../../assets/img/world-search.svg'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={style.navbarWrapper}>
            <NavLink to={'/categories'}>
                <div className={style.items}>
                    <img src={categor}/>

                    <div>Categories</div>
                </div>
            </NavLink>

            <span>Random meal</span>
        </div>
    );
};

export default Navbar;