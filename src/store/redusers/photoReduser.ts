import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPhoto } from "../../types";

export interface PhotoState {
  photos: IPhoto[];
  isLoading: boolean;
  error: string;
}

const initialState: PhotoState = {
  photos: [],
  isLoading: false,
  error: "",
};

export const photoSlice = createSlice({
  name: "photo",
  initialState,
  reducers: {
    getPhotosFetch(state) {
      state.isLoading = true;
    },
    getPhotosSuccess(state, action: PayloadAction<IPhoto[]>) {
      state.photos = action.payload;
      state.isLoading = false;
      state.error = "";
    },
    getPhotosError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

const photoReducer = photoSlice.reducer;
export default photoReducer;
export const { getPhotosFetch, getPhotosSuccess, getPhotosError } =
  photoSlice.actions;
