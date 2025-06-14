import { configureStore } from "@reduxjs/toolkit";
import { navReducer } from "./features/navSlice";

export const store = configureStore({
    reducer: {
        navigation: navReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch