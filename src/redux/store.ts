import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./slices/token";
import userData from "./slices/userData";
import userReducers from "./slices/userData";

export const store = configureStore({
    reducer: {
        token: tokenReducer,
        userData: userReducers
    }
})