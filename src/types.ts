export interface IPhotoURL {
  regular: string;
  small: string;
}

export interface IPhoto {
  id: string;
  description: string;
  alt_description: string;
  urls: IPhotoURL;
}
