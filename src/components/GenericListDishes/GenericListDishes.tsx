import React, {FC, useRef, useState} from 'react';
import stylesList from "../ListDishes/stylesList.module.scss";
import Skeleton from "../Skeleton/Skeleton";
import DishItem from "../ListDishes/DishItem";
import {setCurrentPageType, setQueryValue, TypeDishesObj} from "../../redux/reducers/typeSlice";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {StatusEnum} from "../../types/StatusEnum";
import {useLocation, useParams} from "react-router-dom";
import {useDebounce} from "../../hooks/useDebounce";
import MyInput from "../MyInput/MyInput";



interface GenericListDishesProps {
    name?: string,
    dishObject: TypeDishesObj,
    status: StatusEnum
}


const GenericListDishes: FC<GenericListDishesProps> = ({name, dishObject, status}) => {
    console.log(dishObject)
    //const {status} = useAppSelector(state => state.typeDish)
    const dispatch = useAppDispatch()
    const [inputValue, setInputValue] = useState('')

    const inputDishesRef = useRef<HTMLInputElement>(null)
    const onChangeQueryCategories = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
        updateSearchDishValue(e.target.value)
        if (e.target.value === '') {
            dispatch(setCurrentPageType(1))
        }
    }

    const updateSearchDishValue = useDebounce((e: string) => {
        dispatch(setCurrentPageType(1))
        dispatch(setQueryValue(e))
    }, 1000)

    const onClearField = () => {
        setInputValue('')
        inputDishesRef.current?.focus()
        updateSearchDishValue('')
        dispatch(setCurrentPageType(1))
        /*dispatch(clearIngredientList([]))
        dispatch(setCurrentPageIngr(1))
        dispatch(setTotalCountIngredients(0))
        dispatch(clearIngredients())*/

    }

    const skeleton = [...new Array(8)].map((_, index) => <Skeleton key={index}/>)

    const location = useLocation()

    const items = dishObject.results.map(dish =>
        <DishItem key={dish.id} dish={dish} name={name} location={location.pathname}/>
    )

    /*let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
    let scrollWidth = Math.max(
        document.body.scrollWidth, document.documentElement.scrollWidth,
        document.body.offsetWidth, document.documentElement.offsetWidth,
        document.body.clientWidth, document.documentElement.clientWidth
    );*/
    const screenWidth = window.screen.width


    return (
        <>
            {status === 'error' ?
                <div>Ошибка</div>
                :
                <div>
                   {/* <button onClick={() => alert( 'ширина: ' + screenWidth )}>click</button>*/}
                    <span className={stylesList.mainTitle}>{name ? name[0].toUpperCase() + name.substring(1) : ''}</span>
                    {
                        name ?
                            <div className={stylesList.searchDishes}>
                                <MyInput inputSearch={inputDishesRef} value={inputValue} onChangeValue={onChangeQueryCategories} placeHolder={'Search dishes'} onClearField={onClearField} />
                            </div>
                            : null
                    }


                    {/*<input value={inputValue} onChange={onChangeQueryCategories} />*/}
                    <div className={stylesList.listItems}>
                        {status === 'loading' ?
                            skeleton
                            :  items
                        }
                    </div>
                </div>

            }
        </>
    );
};

export default GenericListDishes;