import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface LoadingState {
  isLoading: boolean
}

const initialState: LoadingState = {
  isLoading: false,
}

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setTrue: (state) => {
      state.isLoading = true
    },
    setFalse: (state) => {
      state.isLoading = false
    }
  },
})

// Action creators are generated for each case reducer function
export const { setTrue, setFalse } = loadingSlice.actions
export default loadingSlice.reducer