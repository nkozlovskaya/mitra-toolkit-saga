import { getPhotoByID } from './actionCreator';
import { createSlice,  PayloadAction } from "@reduxjs/toolkit";
import { IPhoto } from "../../../types/photoType";


interface initialStateProps {
  photo: IPhoto;
  error: string | null;
  loading: boolean;
}

const initialState: initialStateProps = {
  photo: {
    id: "",
    created_at: new Date(),
    updated_at: new Date(),
    promoted_at: new Date(),
    width: 0,
    height: 0,
    color: "",
    blur_hash: "",
    description: "",
    alt_description: "",
    urls: {
      raw: "",
      full: "",
      regular: "",
      small: "",
      thumb: "",
      small_s3: "",
    },
    links: {
      self: "",
      html: "",
      download: "",
      download_location: "",
    },
    categories: [],
    likes: 0,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "",
      updated_at: new Date(),
      username: "",
      name: "",
      first_name: "",
      last_name: "",
      twitter_username: "",
      portfolio_url: "",
      bio: "",
      location: "",
      links: {
        self: "",
        html: "",
        photos: "",
        likes: "",
        portfolio: "",
        following: "",
        followers: "",
      },
      profile_image: {
        small: "",
        medium: "",
        large: "",
      },
      instagram_username: "",
      total_collections: 0,
      total_likes: 0,
      total_photos: 0,
      accepted_tos: false,
      for_hire: false,
      social: {
        instagram_username: "",
        portfolio_url: "",
        twitter_username: "",
        paypal_email: null,
      },
    },
    exif: {
      make: "",
      model: "",
      name: "",
      exposure_time: "",
      aperture: "",
      focal_length: "",
      iso: 0,
    },
    location: {
      title: "",
      name: "",
      city: "",
      country: "",
      position: {
        latitude: 0,
        longitude: 0,
      },
    },
    meta: {
      index: false,
    },
    public_domain: false,
    tags: [],
    tags_preview: [],
    related_collections: {
      total: 0,
      type: "",
      results: [],
    },
    views: 0,
    downloads: 0,
    topics: [],
  },
  error: "",
  loading: false,
};



export const photoByIDSlice = createSlice({
  name: "photoByID",
  initialState,
  reducers: {},
  extraReducers: {
    [getPhotoByID.pending.type]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getPhotoByID.fulfilled.type]: (state, action: PayloadAction<IPhoto>) => {
      state.photo = action.payload;
      state.loading = false;
    },
    [getPhotoByID.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

const photoByIDReducer = photoByIDSlice.reducer;
export default photoByIDReducer;

//  extraReducers: (builder) => {
//   builder
//     .addCase(getPhotoByID.pending, (state) => {
//       state.loading = true;
//       state.error = null;
//     })
//     .addCase(getPhotoByID.fulfilled, (state, action) => {
//       state.photo = action.payload;
//       state.loading = false;
//     });
// },
