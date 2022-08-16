import { createAsyncThunk } from "@reduxjs/toolkit";
// import { createApi } from "unsplash-js";
import { accessKey } from "../../api/api";
import { IPhoto } from "../../types/photoType";

// const unsplash = createApi({
//   accessKey: accessKey,
// });
export const getPhotoByID = createAsyncThunk<
  IPhoto,
  string,
  { rejectValue: string }
>("photoByID/getPhotoByID", async (id: string, { rejectWithValue }) => {
  const response = await fetch(
    `https://api.unsplash.com/photos/${id}?client_id=${accessKey}`
  );
  if (!response.ok) {
    return rejectWithValue("Server Error!");
  }
  const data = await response.json();

  return data as IPhoto;
});

// const result = await unsplash.photos.get({ photoId: `${id}` });
//   if (result.type === "success") {
//     return result.response;
//   }
//   return null;
