import { createSlice } from "@reduxjs/toolkit";
import { dummy } from "./dummy";

export const dataSlice = createSlice({
    name: 'data',
    initialState: {
        loading: false,
        error: null,
        data: []
    },
    reducers: {
        setInitialData(state) {
            state.data = dummy.experiences
        }
    },
})

export const { setInitialData } = dataSlice.actions;

export default dataSlice.reducer;