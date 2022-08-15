import { createAsyncThunk } from "@reduxjs/toolkit";
import { accessKey } from "../../api/api";
import { IPhoto } from "../../types/photoType";

export const getPhotoByID = createAsyncThunk<
  IPhoto,
  string,
  { rejectValue: string }
>(
  "photoByID/getPhotoByID",
  async (id: string, { rejectWithValue, dispatch: AppDispatch }) => {
    const response = await fetch(
      `https://api.unsplash.com/search/photos/${id}?client_id=${accessKey}`
    );
    if (!response.ok) {
      return rejectWithValue("Server Error!");
    }

    const data = await response.json();

    return data as IPhoto;
  }
);
