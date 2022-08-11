import { createAsyncThunk } from "@reduxjs/toolkit";
import { IPhoto } from "../../../types/photoType";
import { accessKey } from "../../../api/api";

export const getPhotoByID = createAsyncThunk<
  IPhoto,
  string,
  { rejectValue: string }
>("photoByID/getPhotoByID", async (id: string, { rejectWithValue }) => {
  const response = await fetch(
    `https://api.unsplash.com/search/photos/${id}?client_id=${accessKey}`
  );
  if (!response.ok) {
    return rejectWithValue("Server Error!");
  }

  const data = await response.json();

  return data as IPhoto;
});
