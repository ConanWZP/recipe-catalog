import React from 'react';
import style from './styles.module.scss'
import logo from '../../assets/img/ice-cream.svg'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (

        <div className={style.headerWrapper}>

            <div className='container container--header'>

                <div className={style.logotype}>
                    <NavLink to={'/'}>
                        <img src={logo}/>
                        <span>Tasty</span>
                    </NavLink>
                </div>

            </div>


        </div>
    );
};

export default Header;