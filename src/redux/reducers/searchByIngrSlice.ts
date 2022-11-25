import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {instanceRecipes} from "../../api/testApi";
import {StatusEnum} from "../../types/StatusEnum";
import {getDishesByType, TypeDishesObj} from "./typeSlice";

export interface ISearchByIngrSlice {
    dishesByIngrObj: TypeDishesObj,
    currentPage: number,
    totalPages: number,
    status: StatusEnum,
    summarySearchString: string
}

const initialState: ISearchByIngrSlice = {
    dishesByIngrObj: {
        results: [],
        offset: 0,
        number: 8,
        totalResults: 0
    },
    currentPage: 1,
    totalPages: 0,
    status: StatusEnum.LOADING,
    summarySearchString: ''
   // status
}

export const getRecipesByIngredients = createAsyncThunk(
    'recipes/findByIngredients',
    async (params: any, thunkAPI) => {
        //console.log(params)
        const {replacedStringItemsName, offset, numberItems} = params
        console.log(numberItems)
        console.log(replacedStringItemsName)
       // const response = await instanceRecipes.get(`findByIngredients?ingredients=${params}&number=100`)
        const response = await instanceRecipes.get(`complexSearch?includeIngredients=${replacedStringItemsName}&number=8&offset=${offset}&sort=max-used-ingredients`)
        console.log(response.data)
        thunkAPI.dispatch(setDishesByIngrObj(response.data))
        console.log(response.data.totalResults)
        if (response.data.totalResults > 900) {
            const totalPages = Math.ceil(900/numberItems)
            console.log(totalPages)
            thunkAPI.dispatch(setTotalPagesSBI(totalPages))
        } else {
            const totalPages = Math.ceil(response.data.totalResults/numberItems)
            console.log(totalPages)
            thunkAPI.dispatch(setTotalPagesSBI(totalPages))
        }
    }
)

export const searchByIngrSlice = createSlice({
    name: 'searchByIngredients',
    initialState,
    reducers: {
        setDishesByIngrObj(state, action:PayloadAction<TypeDishesObj>) {
            state.dishesByIngrObj = action.payload
        },
        setCurrentPageSearchByIngr(state, action: PayloadAction<number>) {
            state.currentPage = action.payload
            state.dishesByIngrObj.offset = 8*(action.payload-1) // 8 - это state.dishesByIngrObj.number
        },
        setTotalPagesSBI(state, action: PayloadAction<number>) {
            //    debugger
            state.totalPages = action.payload
        },
        setSearchString(state, action: PayloadAction<string>) {
            state.summarySearchString = action.payload
        }
    },
    extraReducers: {
        [getRecipesByIngredients.pending.type]: (state) => {
            state.status = StatusEnum.LOADING
            //    state.pizzas = []
        },
        [getRecipesByIngredients.fulfilled.type]: (state, action: PayloadAction<any>) => {


            state.status = StatusEnum.SUCCESS
        },
        [getRecipesByIngredients.rejected.type]: (state, action: PayloadAction<string>) => {
            console.log('Произошла ошибка')
            state.status = StatusEnum.ERROR
            //  state.pizzas = []
        },
    }
})

export const {setDishesByIngrObj, setCurrentPageSearchByIngr, setTotalPagesSBI, setSearchString} = searchByIngrSlice.actions

export default searchByIngrSlice.reducer

