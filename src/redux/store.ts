import {combineReducers, configureStore} from "@reduxjs/toolkit"
import testSlice from "./reducers/testSlice"
import categoriesSlice from './reducers/caregoriesSlice'
import randomSlice from "./reducers/randomSlice"
import typeSlice from "./reducers/typeSlice"
import ingredientsSlice from "./reducers/ingredientsSlice"
import ingredientsStoreSlice from "./reducers/ingredientsStoreSlice"
import searchByIngrSlice from "./reducers/searchByIngrSlice";
import burgerMenuSlice from "./reducers/burgerMenuSlice";



const  rootReduce = combineReducers({
    testSlice: testSlice,
    categories: categoriesSlice,
    random: randomSlice,
    typeDish: typeSlice,
    ingredients: ingredientsSlice,
    ingredientsStore: ingredientsStoreSlice,
    searchByIngr: searchByIngrSlice,
    burgerMenu: burgerMenuSlice
})

export const store = configureStore({
    reducer: rootReduce
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch