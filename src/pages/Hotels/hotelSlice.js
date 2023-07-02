import { createSlice } from '@reduxjs/toolkit';

const hotelSlice = createSlice({
    name: 'hotel',
    initialState: {
        query: '',
        results: [],
        isLoading: false,
        isError: false,
    },

    reducers: {
        updateQuery: (state, action) => {
            state.query = action.payload;
        },
        setSearchResults: (state, action) => {
            state.results =action.payload;
            state.isLoading = false;
            state.isError = false;
        },
        setSearchLoading: (state) => {
            state.isLoading = true;
            state.isError = false;
        }, 
        setSearchError: (state) => {
            state.isLoading = false;
            state.isError = true;
        },
    },
});
export const {updateQuery, setSearchResults, setSearchLoading, setSearchError} = hotelSlice.actions;
export default hotelSlice.reducer; 