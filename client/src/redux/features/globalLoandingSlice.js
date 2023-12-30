import {createSlice} from "@reduxjs/toolkit";

export const globalLoadinglSlice = createSlice({
    name: "AuthModal",
    initialState: {
        globalLoading: false
    },
    reducers: {
        setGlobalLoading: (state, action) => {
           state.globalLoading = action.payload;
        }
    }
});

export const {
    setGlobalLoading
} = globalLoadinglSlice.actions;

export default globalLoadinglSlice.reducer;