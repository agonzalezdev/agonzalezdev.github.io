import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface SlideState {
  value: number
}

const initialState: SlideState = {
  value: 1,
}

export const slideSlice = createSlice({
  name: 'slide',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    set: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, set } = slideSlice.actions
export default slideSlice.reducer