import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {getDishesByType, setCurrentType} from "../../redux/reducers/typeSlice";
import DishItem from "./DishItem";
import stylesList from './stylesList.module.scss'

const ListDishes = () => {

    const {name} = useParams()
    const dispatch = useAppDispatch()
    const {currentType, dishesObj} = useAppSelector(state => state.typeDish)
    const [numberDishes, setNumberDishes] = useState(8)
    useEffect(() => {
       // dispatch(setCurrentType(name))
        if (name != null) {
            dispatch(getDishesByType({name, numberDishes}))
        }
    }, [currentType])

    if (!(dishesObj.results.length>0)) {
        return <div>Loading</div>
    }

    return (
        <div className={stylesList.listContainer}>
            <span className={stylesList.mainTitle}>{name ? name[0].toUpperCase() + name.substring(1) : ''}</span>
            <div className={stylesList.listItems}>
                {dishesObj.results.map(dish =>
                    <DishItem key={dish.id} dish={dish} name={name} />
                )}
            </div>

        </div>
    );
};

export default ListDishes;