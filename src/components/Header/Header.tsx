import React from 'react';
import style from './styles.module.scss'
import logo from '../../assets/img/ice-cream.svg'
import {NavLink} from "react-router-dom";
import {useAppSelector} from "../../hooks/reduxHooks";
import ingrFruit from './../../assets/img/fruitsingr.svg'

const Header = () => {

    const {items} = useAppSelector(state => state.ingredientsStore)

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
                    <div className={style.item}>
                        <NavLink to="/ingredientStore" className="button button--cart">
                            {/*<span>{totalPrice} ₽</span>
                            <div className="button__delimiter"></div>*/}


                            <img src={ingrFruit} />
                            <span className={style.number}>{
                                items.length > 0
                                    ? items.length
                                    : 0
                            }</span>
                        </NavLink>

                    </div>
                </div>


            </div>


        </div>
    );
};

export default Header;