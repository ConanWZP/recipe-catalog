import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {instanceRecipes} from "../../api/testApi";
import exp from "constants";


export interface IResults {
    id: number,
    title: string,
    image: string
    imageType: string
}

export interface ITestSlice {
    results: IResults[],
    number: number,
    totalResults: number,
    offset: number
}

const initialState: ITestSlice = {
    results: [],
    number: 0,
    totalResults: 0,
    offset: 0
}


export const takeRecipes = createAsyncThunk(
    'recipes/fetchRecipes',
    async (_, thunkAPI) => {
        //const {limit, search, order, category, sortBy, currentPage} = params
        const getObj = await instanceRecipes.get<ITestSlice>(`complexSearch?type=vegan`)
        thunkAPI.dispatch(setRecipes(getObj.data.results)) // позволяет не использовать строчку в [takePizzas.fulfilled.type], а именно state.pizzas = action.payload.items
        //const pages = Math.ceil(getObj.data.count/limit)
       // thunkAPI.dispatch(setTotalPages(pages))
        return getObj.data
    }
)



const testSlice = createSlice({
    name: 'testFetch',
    initialState,
    reducers: {
        setRecipes(state, action: PayloadAction<IResults[]>) {
            state.results = action.payload
        }
    },
    extraReducers: {

    }
})

export const { setRecipes } = testSlice.actions

export default testSlice.reducer