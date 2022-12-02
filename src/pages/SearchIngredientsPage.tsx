import React, {useEffect, useRef, useState} from 'react';
import IngredientsList from '../components/Ingredients/IngredientsList';
import styles from './styles/search.module.scss'
import Pagination from "../components/Pagination/Pagination";
import {useDebounce} from '../hooks/useDebounce';
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {
    clearIngredientList,
    clearIngredients,
    getIngredientsThunk,
    setCurrentPageIngr,
    setCurrentSearch,
    setIngredientList,
    setTotalCountIngredients
} from "../redux/reducers/ingredientsSlice";
import {clearExtraSubArray, setExtraSubArray} from "../redux/reducers/randomSlice";
import RecipeStep from "../components/DishInfo/RecipeStep/RecipeStep";
import exp from "constants";
import MyInput from "../components/MyInput/MyInput";

const SearchIngredientsPage = () => {


    const inputSearch = useRef<HTMLInputElement>(null)
    const dispatch = useAppDispatch()
    const {
        ingredients,
        totalCountIngredients,
        ingredientList,
        currentPage,
        search
    } = useAppSelector(state => state.ingredients)

    const [value, setValue] = useState<string>(search)


    const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        updateSearchValue(e.target.value)
        if (e.target.value === '') {
            dispatch(clearIngredientList([]))
            dispatch(setCurrentPageIngr(1))
            dispatch(setTotalCountIngredients(0))
            dispatch(clearIngredients())
        }
        if (e.target.value && ingredientList.length > 0 && ingredients.length > 0) {
            dispatch(clearIngredientList([]))
            dispatch(setCurrentPageIngr(1))
            dispatch(setTotalCountIngredients(0))
            dispatch(clearIngredients())
        }
    }

    const searchArr = [
        {name: 'apple'},
        {name: 'apple'},
        {name: 'apple'},
    ]

    const onClearField = () => {
        setValue('')
        inputSearch.current?.focus()
        updateSearchValue('')
        dispatch(clearIngredientList([]))
        dispatch(setCurrentPageIngr(1))
        dispatch(setTotalCountIngredients(0))
        dispatch(clearIngredients())
    }

    const updateSearchValue = useDebounce((e: string) => {
        dispatch(getIngredientsThunk({e}))
        // dispatch(setCurrentSearch(e))
        //   console.log('hello')
        //   console.log(e)
    }, 1000)


    let a = [] as any
    let subarray = [] as any;

    const [flag, setFlag] = useState(true)

    const allRecipeStep = async () => {

        setFlag(true)
        console.log(ingredients.length)
        if (ingredients.length > 0) {
            ingredients.map((stage) => {
                    //console.log(stage)
                    a.push(stage)
                }
            )
            let size = 3; //размер подмассива
            for (let i = 0; i < Math.ceil(a.length / size); i++) {
                //  console.log(a)

                subarray[i] = a.slice((i * size), (i * size) + size);
                await dispatch(setIngredientList(subarray[i]))
            }
            console.log(subarray)

            // console.log(newSubArr)
        }
        setFlag(false)
    }


    useEffect(() => {
        /*dispatch(clearIngredientList([]))
        dispatch(setCurrentPageIngr(1))
        dispatch(setTotalCountIngredients(0))
        dispatch(clearIngredients())*/
    }, [])

    useEffect(() => {
        //  dispatch(clearIngredientList([]))

        //dispatch(setLoading(true))
        //dispatch(setCurrentPageIngr(1))
        allRecipeStep()
        // dispatch(clearIngredientList([]))
        //  console.log(ingredientList)
        // dispatch(setLoading(false))
        // console.log(newSubArr)
        //  console.log(currentPage)
        // let i = currentPage - 1
        //  console.log(newSubArr[Number(i)])

    }, [ingredients, search])

    /*if (!inputSearch.current?.value) {
        dispatch(clearIngredientList([]))
    }*/

    return (
        <div className={'randomPageBlock'}>
            <div className={styles.searchBlock}>
                <div className={styles.subtitle}>Enter ingredient</div>
                {/*<div className={styles.search}>
                    <svg className={styles.icon}
                         enableBackground="new 0 0 50 50" height="50px" id="Layer_1" version="1.1" viewBox="0 0 50 50"
                         width="50px" xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect fill="none" height="50" width="50"/>
                        <circle cx="21" cy="20" fill="none" r="16" stroke="#000000" strokeLinecap="round"
                                strokeMiterlimit="10" strokeWidth="2"/>
                        <line fill="none" stroke="#000000" strokeMiterlimit="10" strokeWidth="4" x1="32.229" x2="45.5"
                              y1="32.229" y2="45.5"/>
                    </svg>*/}
                <MyInput inputSearch={inputSearch} value={value} onChangeValue={onChangeValue}
                         placeHolder={'Search ingredient...'} onClearField={onClearField}/>
                {/*<input ref={inputSearch} value={value} onChange={onChangeValue}
                           className={styles.input} placeholder={'Search ingredient...'}/>*/}
                {/*{
                        value &&
                        <svg onClick={onClearField} className={styles.closeIcon} height="512px" id="Layer_1"
                             version="1.1"
                             viewBox="0 0 512 512" width="512px" xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"/>
                        </svg>
                    }


                </div>*/}
            </div>

            {/*<div className={styles.list}>
                {
                    ingredients.map(e =>
                        <IngredientsList name={e.name} image={e.image}  />
                    )
                }
            </div>*/}
            {(!flag && ingredientList.length > 0) ?
                <>
                    <div className={styles.list}>

                        {ingredientList[currentPage - 1].map((e: any, index: number) =>
                            <IngredientsList key={e.id} name={e.name} image={e.image} id={e.id}/>
                        )}


                    </div>
                    <Pagination currentPage={currentPage} changePage={setCurrentPageIngr}
                                totalPages={Math.ceil(totalCountIngredients / 3)}/>
                </>

                : /*<div>No one stage</div>*/ null
            }

        </div>
    );
};

export default SearchIngredientsPage;