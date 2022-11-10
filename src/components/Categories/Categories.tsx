import React, {FC} from 'react';
import {ICategory} from "../../types/types";
import {NavLink} from "react-router-dom";
import styles from './styles.module.scss'


const Categories: FC<ICategory> = ({name, url}) => {
    return (

        <div key={name} className={styles.categoryBlockWrapper}>
            <div className={styles.categoryBlock}>
                <NavLink to={`/categories/${name}`}>
                    <img src={url} className={styles.categoryBlock__image}/>
                </NavLink>
                <div className={styles.categoryBlock__title}>{name}</div>
            </div>

        </div>
    );
};

export default Categories;