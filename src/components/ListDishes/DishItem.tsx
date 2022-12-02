import React, {FC} from 'react';
import {ResultsType} from "../../redux/reducers/typeSlice";
import {NavLink, useLocation, useParams} from "react-router-dom";
import stylesItem from './stylesItem.module.scss'

interface DishItemProps {
    dish: ResultsType,
    name: string | undefined,
    location: string
}

const DishItem:FC<DishItemProps> = ({dish, name, location}) => {




    return (
        <div className={stylesItem.item}>
            {/*<NavLink to={`/categories/${name ? name : ''}/${dish.id}`}>*/}
                <NavLink to={`${location}/${dish.id}`}>
                <img className={stylesItem.item__image} src={dish.image} />
            </NavLink>
            <div className={stylesItem.mainTitle}>{dish.title.length > 38 ? `${dish.title.slice(0, 38)}...` : dish.title}</div>
        </div>
    );
};

export default DishItem;