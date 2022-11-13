import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {getDishesByType, setCurrentPageType, setCurrentType} from "../../redux/reducers/typeSlice";
import DishItem from "./DishItem";
import stylesList from './stylesList.module.scss'
import Pagination from "../Pagination/Pagination";
import Skeleton from '../Skeleton/Skeleton';

const ListDishes = () => {

    const {name} = useParams()
    const dispatch = useAppDispatch()
    const {dishesObj, currentPage, pages, status} = useAppSelector(state => state.typeDish)

    const offset = dishesObj.offset


    /*let [totalPages, setTotalPages] = useState(0)*/


    const [numberDishes, setNumberDishes] = useState(8)
    useEffect(() => {
        //  debugger

        if (name != null) {
            //  dispatch(setCurrentType(name))
            dispatch(getDishesByType({name, numberDishes, currentPage, offset}))
        }
        /*if (dishesObj.totalResults > 900) {
            setTotalPages(Math.ceil(900/dishesObj.number))
        } else {
            setTotalPages(Math.ceil(dishesObj.totalResults/dishesObj.number))
        }*/

    }, [/*currentType, currentPage, pages*/ currentPage])

    /*if (!(dishesObj.results.length > 0)) {
        return <div>Loading</div>
    }*/

    const skeleton = [...new Array(8)].map((_, index) => <Skeleton key={index}/>)

    const items = dishesObj.results.map(dish =>
        <DishItem key={dish.id} dish={dish} name={name}/>
    )

    return (
        <div className={stylesList.listContainer}>
            {status === 'error' ?
                <div>Ошибка</div>
                :
                <div>
                    <span className={stylesList.mainTitle}>{name ? name[0].toUpperCase() + name.substring(1) : ''}</span>
                    <div className={stylesList.listItems}>
                        {status === 'loading' ?
                            skeleton
                            :  items
                        }
                    </div>
                </div>

            }

            <Pagination currentPage={currentPage} changePage={setCurrentPageType} totalPages={pages}/>

        </div>
    );
};

export default ListDishes;