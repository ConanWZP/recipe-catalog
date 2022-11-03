import React from 'react';
import style from './styles.module.scss'
import logo from '../../assets/img/ice-cream.svg'

const Header = () => {
    return (

            <div className={style.headerWrapper}>
                <div className={'container'}>
                    <div className={style.logotype}>
                        <img src={logo}/>
                        <span>Tasty</span>
                    </div>

            </div>

        </div>
    );
};

export default Header;