import axios from "axios";

import { IPhoto } from "../types";

const accessKey = "SQ-fIxQZ8f-F7eUfJjnvLsH3viz2IzB0wZJpxfgIt6I";
// const order_by = "latest";
const orientation = "landscape";
const per_page = 6;

export const getPhotos = async (query = "") => {
  const res = await axios.get(
    `https://api.unsplash.com/search/photos/?query=${query}&client_id=${accessKey}&orientation=${orientation}&per_page=${per_page}`
  );
  // const result=res.json()
  const photos: IPhoto[] = await res.data.results;
  return photos;
};

//&order_by=${order_by}
