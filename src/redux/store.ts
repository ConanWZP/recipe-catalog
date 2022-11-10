import {combineReducers, configureStore} from "@reduxjs/toolkit"
import testSlice from "./reducers/testSlice"
import categoriesSlice from './reducers/caregoriesSlice'
import randomSlice from "./reducers/randomSlice"
import typeSlice from "./reducers/typeSlice"

const  rootReduce = combineReducers({
    testSlice: testSlice,
    categories: categoriesSlice,
    random: randomSlice,
    typeDish: typeSlice
})

export const store = configureStore({
    reducer: rootReduce
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch