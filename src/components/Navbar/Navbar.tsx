import React from 'react';
import style from './styles.module.scss'
import categor from './../../assets/img/world-search.svg'
import random from './../../assets/img/game-dice.svg'
import {NavLink} from "react-router-dom";
import searchIngr from './../../assets/img/study.svg'
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import './styles.module.scss'
import {setVisibleModal} from "../../redux/reducers/burgerMenuSlice";

const Navbar = () => {
    const dispatch = useAppDispatch()
    const {visibleModal} = useAppSelector(state => state.burgerMenu)
    const onBurgerClick = () => {
        dispatch(setVisibleModal(false))
        document.body.classList.remove('_lock');
    }


    return (
        <>



            <div className={`${style.navbarWrapper} ${visibleModal ? style.active : ''}`}>
                {
                    visibleModal ?
                        <div className={`menu__icon icon-menu ${visibleModal && '_active'}`} onClick={onBurgerClick}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        : null
                }
                <NavLink to={'/categories'} onClick={onBurgerClick}>
                    <div className={style.items}>
                        <img src={categor}/>

                        <div>Categories</div>
                    </div>
                </NavLink>
                <NavLink to={'/random'} onClick={onBurgerClick}>
                    <div className={style.items}>
                        <img src={random}/>
                        <div>Random meal</div>
                    </div>
                </NavLink>
                <NavLink to={'/searchIngredients'} onClick={onBurgerClick}>
                    <div className={style.items}>
                        <img src={searchIngr}/>
                        <div>Get recipes</div>
                    </div>
                </NavLink>

            </div>
        </>

    );
};

export default Navbar;