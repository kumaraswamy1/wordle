import { configureStore } from '@reduxjs/toolkit'
import wordleReducer from '../featues/wordle/wordleSlice'
export const store = configureStore({
    reducer: {
      wordle:wordleReducer
  },
})