import { createSlice } from "@reduxjs/toolkit";

interface INavState {
    showNav: boolean
}

const initialState: INavState = {
    showNav: false
}

export const navSlice = createSlice({
    name: "navigation",
    initialState,
    reducers: {
        toggleNav: (state) => {
            state.showNav = !state.showNav
        },
        openNav: (state) => {
            state.showNav = true
        },
        closeNav: (state) => {
            state.showNav = false
        }
    }
})

export const {toggleNav, openNav, closeNav} = navSlice.actions
export const navReducer = navSlice.reducer