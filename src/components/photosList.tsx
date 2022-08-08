import { FC } from "react";
import { IPhoto } from "../types/photoType";
import { PhotoItem } from "./photoItem";

interface PhotosListProps {
  photos: IPhoto[];
  title: string;
  error: string;
}

const PhotosList: FC<PhotosListProps> = ({ photos, title, error }) => {
  if (!photos || photos.length === 0) {
    return error ? <h2 className="error">{error}</h2> : null;
  }

  return (
    <div className="category">
      <h2>{`${title}`}</h2>
      <div className="photoList">
        {photos.map((photo) => (
          <PhotoItem key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default PhotosList;
