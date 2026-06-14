import { createSlice } from "@reduxjs/toolkit";
import { dummy } from "./dummy";

export const dataSlice = createSlice({
    name: 'data',
    initialState: {
        loading: false,
        error: null,
        data: dummy.experiences
    },
    reducers: {},
})

export default dataSlice.reducer;
