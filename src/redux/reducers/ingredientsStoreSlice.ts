import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type typeIngredientObject = {
    id: number,
    image: string,
    name: string
}

interface ingredientsStoreState {
    items: typeIngredientObject[]
}

const initialState: ingredientsStoreState = {
    items: []
}

export const ingredientsStoreSlice = createSlice({
    name: 'ingredientsStoreSlice',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<typeIngredientObject>) {
            state.items.push(action.payload)
        },
        removeItem(state, action: PayloadAction<number>) {
            state.items = state.items.filter(item => item.id !== action.payload)
        }
    }
})

export const {addItem, removeItem} = ingredientsStoreSlice.actions

export default ingredientsStoreSlice.reducer


