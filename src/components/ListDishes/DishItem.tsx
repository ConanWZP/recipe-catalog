import React, {FC} from 'react';
import {ResultsType} from "../../redux/reducers/typeSlice";
import {NavLink} from "react-router-dom";
import stylesItem from './stylesItem.module.scss'

interface DishItemProps {
    dish: ResultsType,
    name: string | undefined
}

const DishItem:FC<DishItemProps> = ({dish, name}) => {
    return (
        <div className={stylesItem.item}>
            <NavLink to={`/categories/${name ? name : ''}/${dish.id}`}>
                <img className={stylesItem.item__image} src={dish.image} />
            </NavLink>
            <div className={stylesItem.mainTitle}>{dish.title}</div>
        </div>
    );
};

export default DishItem;