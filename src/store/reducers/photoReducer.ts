import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPhoto } from "../../types";

export interface PhotoState {
  photosLondon: IPhoto[];
  photosParis: IPhoto[];
  photosMoscow: IPhoto[];
  photosBerlin: IPhoto[];
  isLoading: boolean;
  // error: string;
}

const initialState: PhotoState = {
  photosLondon: [],
  photosParis: [],
  photosMoscow: [],
  photosBerlin: [],
  isLoading: false,
  // error: "",
};

export const photoSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    getPhotosFetch: (state) => {
      state.isLoading = true;
      state.photosLondon = [];
      state.photosParis = [];
      state.photosMoscow = [];
      state.photosBerlin = [];
      // state.error = "";
    },
    getPhotosSuccessLondon: (state, action: PayloadAction<IPhoto[]>) => {
      state.photosLondon = action.payload;
      state.isLoading = false;
      // state.error = "";
    },
    getPhotosSuccessParis: (state, action: PayloadAction<IPhoto[]>) => {
      state.photosParis = action.payload;
      state.isLoading = false;
      // state.error = "";
    },
    getPhotosSuccessMoscow: (state, action: PayloadAction<IPhoto[]>) => {
      state.photosMoscow = action.payload;
      state.isLoading = false;
      // state.error = "";
    },
    getPhotosSuccessBerlin: (state, action: PayloadAction<IPhoto[]>) => {
      state.photosBerlin = action.payload;
      state.isLoading = false;
      // state.error = "";
    },
    getPhotosError(state, action: PayloadAction<string>) {
      state.photosLondon = [];
      state.photosParis = [];
      state.photosMoscow = [];
      state.photosBerlin = [];
      state.isLoading = false;
      // state.error = action.payload;
    },
  },
});

const photoReducer = photoSlice.reducer;
export default photoReducer;
export const {
  getPhotosFetch,
  getPhotosSuccessLondon,
  getPhotosSuccessParis,
  getPhotosSuccessMoscow,
  getPhotosSuccessBerlin,
  getPhotosError,
} = photoSlice.actions;
