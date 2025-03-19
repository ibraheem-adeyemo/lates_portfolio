import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { dummy } from "./dummy";

export const getData = createAsyncThunk(
    'data/getData',
    async () => {
        try {
            // const response = await fetch('https://api.example.com/data');
            // const data = await response.json();
            // return data;
        } catch (error) {
            
        }
    }
)

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
    // extraReducers: {}
})

export const { setInitialData } = dataSlice.actions;

export default dataSlice.reducer;