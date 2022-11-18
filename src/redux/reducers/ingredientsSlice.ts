import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {instanceIngredients} from "../../api/testApi";


interface IngrState {
    ingredients: any[],
    totalCountIngredients: number,
    ingredientList: any[],
    currentPage: number,
    search: string
}

const initialState: IngrState = {
    ingredients: [],
    totalCountIngredients: 0,
    ingredientList: [],
    currentPage: 1,
    search: ''
}


export const getIngredientsThunk = createAsyncThunk(
    'ingredients/search',
    async (params: any, thunkAPI) => {
        const {e} = params
        const response = await instanceIngredients.get(`autocomplete?metaInformation=true&query=${e}&number=100`)
        thunkAPI.dispatch(setCurrentSearch(e))
        return response.data
    }
)


export const ingredientsSlice = createSlice({
    name: 'ingredients',
    initialState,
    reducers: {
        setCurrentSearch(state, action: PayloadAction<string>) {
            state.search = action.payload
        },
        setCurrentPageIngr(state, action: PayloadAction<number>) {
            state.currentPage = action.payload
        },
        clearIngredientList(state, action: PayloadAction<any[]>) {
            state.ingredientList = action.payload
        },
        clearIngredients(state){
          state.ingredients = []
        },
        setIngredientList(state, action: PayloadAction<any[]>) {
            state.ingredientList.push(action.payload)
        },
        setTotalCountIngredients(state, action: PayloadAction<number>) {
            state.totalCountIngredients = action.payload
        }
    },
    extraReducers: {
        [getIngredientsThunk.pending.type]: (state) => {

        },
        [getIngredientsThunk.fulfilled.type]: (state, action: PayloadAction<any>) => {
            state.ingredients = action.payload
            state.totalCountIngredients = action.payload.length
            state.currentPage = 1
        }
    }
})

export const { clearIngredientList, setIngredientList, setCurrentPageIngr, setCurrentSearch, setTotalCountIngredients, clearIngredients } = ingredientsSlice.actions

export default ingredientsSlice.reducer


