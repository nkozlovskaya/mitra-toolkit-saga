import { FC } from "react";
import { IPhoto } from "../types";

interface PhotosListProps {
  photos: IPhoto[];
  title: string;
  error: string;
}

const Photos: FC<PhotosListProps> = ({ photos, title, error }) => {
  if (!photos || photos.length === 0) {
    return error ? <h2 className="error">{error}</h2> : null;
  }

  return (
    <div className="category">
      <h2>{`${title}`}</h2>
      <div className="photoList">
        {photos.map((photo) => (
          <div key={photo.id} className="photo">
            <img src={photo.urls.small} alt={photo.alt_description} />
            <p>{photo.alt_description.slice(0, 100)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
//photo.description.slice(0, 100) ||
