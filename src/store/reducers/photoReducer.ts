import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPhoto } from "../../types";

export interface PhotoState {
  photosLondon: IPhoto[];
  photosParis: IPhoto[];
  photosMoscow: IPhoto[];
  photosBerlin: IPhoto[];
  isLoading: boolean;
}

const initialState: PhotoState = {
  photosLondon: [],
  photosParis: [],
  photosMoscow: [],
  photosBerlin: [],
  isLoading: false,
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
    },
    getPhotosSuccessLondon: (state, action: PayloadAction<IPhoto[]>) => {
      state.photosLondon = action.payload;
      state.isLoading = false;
    },
    getPhotosSuccessParis: (state, action: PayloadAction<IPhoto[]>) => {
      state.photosParis = action.payload;
      state.isLoading = false;
    },
    getPhotosSuccessMoscow: (state, action: PayloadAction<IPhoto[]>) => {
      state.photosMoscow = action.payload;
      state.isLoading = false;
    },
    getPhotosSuccessBerlin: (state, action: PayloadAction<IPhoto[]>) => {
      state.photosBerlin = action.payload;
      state.isLoading = false;
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
} = photoSlice.actions;
