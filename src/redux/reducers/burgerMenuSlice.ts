import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    visibleModal: false
}

export const burgerMenuSlice = createSlice({
    name: 'burgerMenu',
    initialState,
    reducers: {
        setVisibleModal(state, action: PayloadAction<boolean>) {
            state.visibleModal = action.payload
        }
    }
})

export const { setVisibleModal } = burgerMenuSlice.actions

export default burgerMenuSlice.reducer