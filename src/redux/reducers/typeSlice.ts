import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {instanceRecipes} from "../../api/testApi";
import {StatusEnum} from "../../types/StatusEnum";


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
    currentType: string,
    currentPage: number,
    pages: number,
    status: StatusEnum
}



const initialState: ITypeSlice = {
    currentType: '',
    dishesObj: {
        results: [],
        offset: 0,
        number: 8,
        totalResults: 0
    },
    currentPage: 1,
    pages: 0,
    status: StatusEnum.LOADING
}

export interface IDishesByType {
    name: string,
    numberDishes: number,
    currentPage: number,
    offset: number
}

export const getDishesByType = createAsyncThunk(
    'type/getDishesByType',
    async (params: IDishesByType, thunkAPI) => {
      //  debugger
        const {name, numberDishes, offset} = params
        const response = await instanceRecipes.get<TypeDishesObj>(`complexSearch?type=${name}&number=${numberDishes}&offset=${offset}`)
        thunkAPI.dispatch(setDishesObj(response.data)) // позволяет не использовать строчку в [takePizzas.fulfilled.type], а именно state.pizzas = action.payload.items
        thunkAPI.dispatch(setCurrentType(name))
        if (response.data.totalResults > 900) {
            const pages = Math.ceil(900/numberDishes)
            thunkAPI.dispatch(setTotalPages(pages))
        } else {
            const pages = Math.ceil(response.data.totalResults/numberDishes)
            thunkAPI.dispatch(setTotalPages(pages))
        }
        return response.data
    }
)



const typeSlice = createSlice({
    name: 'type',
    initialState,
    reducers: {
        setCurrentType(state, action: PayloadAction<string>) {
         //   debugger
            state.currentType = action.payload
        },
        setDishesObj(state, action: PayloadAction<TypeDishesObj>) {
            state.dishesObj = action.payload
        },
        setCurrentPageType(state, action: PayloadAction<number>) {
            state.currentPage = action.payload
            state.dishesObj.offset = 8*(action.payload - 1)
        },
        setTotalPages(state, action: PayloadAction<number>) {
        //    debugger
            state.pages = action.payload
        }
    },
    extraReducers: {
        [getDishesByType.pending.type]: (state) => {
            state.status = StatusEnum.LOADING
        //    state.pizzas = []
        },
        [getDishesByType.fulfilled.type]: (state, action: PayloadAction<any>) => {
            console.log(action)

            state.status = StatusEnum.SUCCESS
        },
        [getDishesByType.rejected.type]: (state, action: PayloadAction<string>) => {
            console.log('Произошла ошибка')
            state.status = StatusEnum.ERROR
          //  state.pizzas = []
        },

    }
})

export const { setDishesObj, setCurrentType, setCurrentPageType, setTotalPages } = typeSlice.actions

export default typeSlice.reducer