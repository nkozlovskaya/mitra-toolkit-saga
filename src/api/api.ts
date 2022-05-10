// import axios from "axios";

// import { IPhoto } from "../types";

// const accessKey = "SQ-fIxQZ8f-F7eUfJjnvLsH3viz2IzB0wZJpxfgIt6I";

// const url = `https://api.unsplash.com/search/photos/?query='paris'&client_id=${accessKey}`;
// const url = "https://jsonplaceholder.typicode.com/photos?_limit=24";

// export const getPhotos = async () => {
//   const res = await axios.get(url);
//   // const result=res.json()
//   //   const photos: IPhoto[] = await res.data.results;
//   return res;
// };

export const getPhotos = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/photos?_limit=24"
  );
  return res;
};

// export const getPhotos = async () => {
//   const res = await axios.request({
//     method: "get",
//     url: url,
//   });
//   const photos: IPhoto[] = await res.data.results;
//   return photos;
// };
