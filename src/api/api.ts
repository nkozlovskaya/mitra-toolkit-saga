// import { createApi } from 'unsplash-js';

// const unsplash = createApi({
//   accessKey: "SQ-fIxQZ8f-F7eUfJjnvLsH3viz2IzB0wZJpxfgIt6I",
//   // `fetch` options to be sent with every request
//   headers: { "X-Custom-Header": "foo" },
// });
// ?_limit=24

import axios from "axios";
import { IPhoto } from "../types";

const accessKey = "SQ-fIxQZ8f-F7eUfJjnvLsH3viz2IzB0wZJpxfgIt6I";
const url = `https://api.unsplash.com/search/photos/?query='paris'&_limit=24&client_id=${accessKey}`;

export const getPhotos = async () => {
  const res = await axios.get(url);
  const photos: IPhoto[] = res.data.results;

  return photos;
};
