import React, {FC} from 'react';
import {ResultsType} from "../../redux/reducers/typeSlice";
import {NavLink} from "react-router-dom";

interface DishItemProps {
    dish: ResultsType,
    name: string | undefined
}

const DishItem:FC<DishItemProps> = ({dish, name}) => {
    return (
        <div>
            <div>{dish.title}</div>
            <NavLink to={`/categories/${name ? name : ''}/${dish.id}`}>
                <img width={250} src={dish.image} />
            </NavLink>

        </div>
    );
};

export default DishItem;