import React from 'react';
import style from './styles.module.scss'
import categor from './../../assets/img/world-search.svg'
import random from './../../assets/img/game-dice.svg'
import {NavLink} from "react-router-dom";
import searchIngr from './../../assets/img/study.svg'

const Navbar = () => {
    return (
        <div className={style.navbarWrapper}>
            <NavLink to={'/categories'}>
                <div className={style.items}>
                    <img src={categor}/>

                    <div>Categories</div>
                </div>
            </NavLink>
            <NavLink to={'/random'}>
                <div className={style.items}>
                    <img src={random}/>
                    <div>Random meal</div>
                </div>
            </NavLink>
            <NavLink to={'/searchIngredients'}>
                <div className={style.items}>
                    <img src={searchIngr}/>
                    <div>Get recipes</div>
                </div>
            </NavLink>

        </div>
    );
};

export default Navbar;