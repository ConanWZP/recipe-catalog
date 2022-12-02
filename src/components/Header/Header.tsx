import React, {useState} from 'react';
import style from './styles.module.scss'
import logo from '../../assets/img/ice-cream.svg'
import {NavLink, useLocation} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import ingrFruit from './../../assets/img/fruitsingr.svg'
import './burger.scss'
import { setVisibleModal } from '../../redux/reducers/burgerMenuSlice';

const Header = () => {

    const {items} = useAppSelector(state => state.ingredientsStore)
    //const [visibleModal, setVisibleModal] = useState(false)
    const {visibleModal} = useAppSelector(state => state.burgerMenu)
    const dispatch = useAppDispatch()

     const onBurgerClick = () => {
        dispatch(setVisibleModal(true))
        document.body.classList.add('_lock');
    }
    const path = useLocation().pathname


    return (

        <div className={style.headerWrapper}>

            <div className='container container--header'>
                <div className={style.items}>
                    <div className={style.logotype}>
                        <NavLink to={'/'}>
                            <img src={logo}/>
                            <span>Tasty</span>
                        </NavLink>
                    </div>
                    <div className={`${style.item} ${visibleModal ? style.extraMargin : null}`}>
                        <NavLink to="/ingredientStore" className="button button--cart">
                            {/*<span>{totalPrice} ₽</span>
                            <div className="button__delimiter"></div>*/}
                            <img src={ingrFruit}/>
                            <span className={style.number}>{
                                items.length > 0
                                    ? items.length
                                    : 0
                            }</span>
                        </NavLink>
                    </div>
                    { visibleModal ? null
                        :
                        <div className={`menu__icon icon-menu ${visibleModal && '_active'} ${path === '/ingredientStore' ? '_off' : ''}`} onClick={onBurgerClick}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    }
                </div>


            </div>


        </div>
    );
};

export default Header;