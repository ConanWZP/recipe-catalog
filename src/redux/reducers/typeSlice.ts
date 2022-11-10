import {ICategory} from "../../types/types";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {instanceCategories, instanceRecipes} from "../../api/testApi";

export type ResultsType = {
    id: number,
    title: string,
    image: string,
    imageType: string
}

export type TypeDishesObj = {
    results: ResultsType[],
    offset: number,
    number: number,
    totalResults: number
}

export interface ITypeSlice {
    dishesObj: TypeDishesObj,
    currentType: string
}



const initialState: ITypeSlice = {
    currentType: '',
    dishesObj: {
        results: [],
        offset: 0,
        number: 8,
        totalResults: 0
    }
}

export interface IDishesByType {
    name: string,
    numberDishes: number
}

export const getDishesByType = createAsyncThunk(
    'type/getDishesByType',
    async (params: IDishesByType, thunkAPI) => {
        const {name, numberDishes} = params
        thunkAPI.dispatch(setCurrentType(name))
        const response = await instanceRecipes.get<TypeDishesObj>(`complexSearch?type=${name}&number=${numberDishes}`)
        thunkAPI.dispatch(setDishesObj(response.data)) // позволяет не использовать строчку в [takePizzas.fulfilled.type], а именно state.pizzas = action.payload.items
        //const pages = Math.ceil(getObj.data.count/limit)
        // thunkAPI.dispatch(setTotalPages(pages))
        return response.data
    }
)



const typeSlice = createSlice({
    name: 'type',
    initialState,
    reducers: {
        setCurrentType(state, action: PayloadAction<string>) {
            state.currentType = action.payload
        },
        setDishesObj(state, action: PayloadAction<TypeDishesObj>) {
            state.dishesObj = action.payload
        },
    },
    extraReducers: {

    }
})

export const { setDishesObj, setCurrentType } = typeSlice.actions

export default typeSlice.reducer