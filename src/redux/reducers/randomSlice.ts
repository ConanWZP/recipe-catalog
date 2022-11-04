import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {instanceCategories, instanceRecipes} from "../../api/testApi";
import {ICategoriesSlice} from "./caregoriesSlice";

export interface IRandom {
    id: number
    title: string,
    readyInMinutes: number,
    image: string,
    cuisines: string[],
    dishTypes: string[],
    analyzedInstructions: any[]
}

export type RandomType = {
    /*random: IRandom*/
    recipes: IRandom[],
}

export type ExtraRandom = {
    recipes: IRandom[],
    loading: boolean
}

const initialState: ExtraRandom = {
    /*random: {
        id: 0,
        title: '',
        readyInMinutes: 0,
        image: ''
    }*/
    recipes: [],
    loading: true
}

export const getRandom = createAsyncThunk(
    'random/fetchRandom',
    async (_, thunkAPI) => {
        //const {limit, search, order, category, sortBy, currentPage} = params
       // thunkAPI.dispatch(setLoading(true))
        const response = await instanceRecipes.get<RandomType>(`random`)
        thunkAPI.dispatch(setRandom(response.data.recipes)) // позволяет не использовать строчку в [takePizzas.fulfilled.type], а именно state.pizzas = action.payload.items
        //const pages = Math.ceil(getObj.data.count/limit)
        // thunkAPI.dispatch(setTotalPages(pages))
      //  thunkAPI.dispatch(setLoading(false))
        return response.data
    }
)



const randomSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setRandom(state, action: PayloadAction<any>) {
            state.recipes = action.payload
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload
        }
    },
    extraReducers: {

    }
})

export const { setRandom, setLoading } = randomSlice.actions

export default randomSlice.reducer