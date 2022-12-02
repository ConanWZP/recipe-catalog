import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {getDishesByType, setCurrentPageType, setCurrentType} from "../../redux/reducers/typeSlice";
import DishItem from "./DishItem";
import stylesList from './stylesList.module.scss'
import Pagination from "../Pagination/Pagination";
import Skeleton from '../Skeleton/Skeleton';
import GenericListDishes from "../GenericListDishes/GenericListDishes";

const ListDishes = () => {

    const {name} = useParams()
    const dispatch = useAppDispatch()
    const {dishesObj, currentPage, pages, status, query} = useAppSelector(state => state.typeDish)

    const offset = dishesObj.offset


    /*let [totalPages, setTotalPages] = useState(0)*/

    let numberDishes = 8
    useEffect(() => {
        //  debugger

        if (name != null) {
            //  dispatch(setCurrentType(name))
            /*if (query.length > 0) {
                dispatch(setCurrentPageType(1))
            }*/
            dispatch(getDishesByType({name, numberDishes, currentPage, offset, query}))

        }
        /*if (dishesObj.totalResults > 900) {
            setTotalPages(Math.ceil(900/dishesObj.number))
        } else {
            setTotalPages(Math.ceil(dishesObj.totalResults/dishesObj.number))
        }*/

    }, [/*currentType, currentPage, pages*/ currentPage, query])

    /*if (!(dishesObj.results.length > 0)) {
        return <div>Loading</div>
    }*/



    return (
        <div className={stylesList.listContainer}>

            <GenericListDishes name={name} dishObject={dishesObj} status={status} />
            <Pagination currentPage={currentPage} changePage={setCurrentPageType} totalPages={pages}/>

        </div>
    );
};

export default ListDishes;