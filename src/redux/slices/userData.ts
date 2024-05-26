import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    initialState: {},
    name: "user_details",
    reducers: {
        addUserDetails(state, action) {
            return action.payload;
        }
    }
});
const userReducers = userSlice.reducer;
export default userReducers;
export const { addUserDetails } = userSlice.actions;