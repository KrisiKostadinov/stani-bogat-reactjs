import { configureStore } from "@reduxjs/toolkit";
import questionReducer from "../reducers/questionReducer";

export const store = configureStore({
    reducer: {
        question: questionReducer,
    }
});