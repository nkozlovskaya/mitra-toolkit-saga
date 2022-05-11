import { FC } from "react";
import { IPhoto } from "../types";

interface PhotosListProps {
  photos: IPhoto[];
  title: string;
}

const Photos: FC<PhotosListProps> = ({ photos, title }) => {
  if (!photos || photos.length === 0) {
    return null;
  }
  return (
    <div className="category">
      <h2>{`${title}`}</h2>
      <div className="photoList">
        {photos.map((photo) => (
          <div key={photo.id} className="photo">
            <img src={photo.urls.small} alt={photo.alt_description} />
            <p>{photo.description || photo.alt_description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
