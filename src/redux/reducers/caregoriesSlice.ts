import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {instanceCategories, instanceRecipes} from "../../api/testApi";
import {ICategory} from "../../types/types";



export interface ICategoriesSlice {
    categoriesList: ICategory[] | any,
   // counter: number
}

const initialState: ICategoriesSlice = {
    categoriesList: [],
    //counter: 0
}


export const getCategories = createAsyncThunk(
    'categoires/fetchCategories',
    async (_, thunkAPI) => {
        //const {limit, search, order, category, sortBy, currentPage} = params
        const response = await instanceCategories.get<ICategoriesSlice[]>(`items`)
        thunkAPI.dispatch(setCategories(response.data)) // позволяет не использовать строчку в [takePizzas.fulfilled.type], а именно state.pizzas = action.payload.items
        //const pages = Math.ceil(getObj.data.count/limit)
        // thunkAPI.dispatch(setTotalPages(pages))
        return response.data
    }
)



const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategories(state, action: PayloadAction<ICategoriesSlice[]>) {
            state.categoriesList = action.payload

        }
    },
    extraReducers: {

    }
})

export const { setCategories } = categoriesSlice.actions

export default categoriesSlice.reducer