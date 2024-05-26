import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
    initialState: "",
    name: "token",
    reducers: {
        addLoginToken(state, action) {
            console.log(action.payload);
            return action.payload;
        }
    }
})

export const { addLoginToken } = tokenSlice.actions;
export default tokenSlice.reducer;