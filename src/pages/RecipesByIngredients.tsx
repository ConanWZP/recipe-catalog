import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import GenericListDishes from "../components/GenericListDishes/GenericListDishes";
import Pagination from "../components/Pagination/Pagination";
import {getRecipesByIngredients, setCurrentPageSearchByIngr} from '../redux/reducers/searchByIngrSlice';
import stylesList from '../components/ListDishes/stylesList.module.scss'

const RecipesByIngredients = () => {

    const {dishesByIngrObj, status, currentPage, totalPages, summarySearchString} = useAppSelector(state => state.searchByIngr)
    const dispatch = useAppDispatch()


    useEffect(() => {
        let replacedStringItemsName = summarySearchString;
        let offset = dishesByIngrObj.offset;
        let numberItems = dishesByIngrObj.number;

        dispatch(getRecipesByIngredients({replacedStringItemsName, offset , numberItems} as any))

    }, [currentPage])

   // console.log(totalPages)
    if (!(dishesByIngrObj.results.length >0)) {
        return <div>Nothing</div>
    }


    return (
        <div className={stylesList.listContainer}>
            <GenericListDishes dishObject={dishesByIngrObj} status={status} />
            <Pagination currentPage={currentPage} changePage={setCurrentPageSearchByIngr} totalPages={totalPages}/>
        </div>
    );
};

export default RecipesByIngredients;