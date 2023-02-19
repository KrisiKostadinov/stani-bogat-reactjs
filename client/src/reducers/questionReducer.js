import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    item: {
        id: 1,
        lang: "en",
        title: "",
        answers: [],
    },
    currentQuestion: 1,
}

const questionSlice = createSlice({
    name: "question",
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },
        increment: (state) => {
            if (state.currentQuestion < 15) {
                state.currentQuestion++;
            }
        },
        updateItem: (state) => {
            state.item = state.items[state.currentQuestion - 1];
        }
    }
});

export const { setItems, increment, updateItem } = questionSlice.actions;
export default questionSlice.reducer;