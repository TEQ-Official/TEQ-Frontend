import { configureStore } from "@reduxjs/toolkit";
import { navReducer } from "./features/navSlice";
import { authModeReducer } from "./features/auth-mode-slice";

export const store = configureStore({
    reducer: {
        navigation: navReducer,
        authMode: authModeReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch