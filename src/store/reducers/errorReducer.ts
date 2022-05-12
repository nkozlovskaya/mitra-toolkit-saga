import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ErrorState {
  photosLondonError: string;
  photosParisError: string;
  photosMoscowError: string;
  photosBerlinError: string;
}

const initialState: ErrorState = {
  photosLondonError: "",
  photosParisError: "",
  photosBerlinError: "",
  photosMoscowError: "",
};

export const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    getLondonError: (state, action: PayloadAction<string>) => {
      state.photosLondonError = action.payload;
    },
    getParisError: (state, action: PayloadAction<string>) => {
      state.photosParisError = action.payload;
    },
    getBerlinError: (state, action: PayloadAction<string>) => {
      state.photosBerlinError = action.payload;
    },
    getMoscowError: (state, action: PayloadAction<string>) => {
      state.photosMoscowError = action.payload;
    },
  },
});

const errorReducer = errorSlice.reducer;
export default errorReducer;
export const { getLondonError, getParisError, getBerlinError, getMoscowError } =
  errorSlice.actions;
