import { FC } from "react";
import { IPhoto } from "../types/photoType";
import { Image, Nav } from "react-bootstrap";

interface PhotoItemProps {
  photo: IPhoto;
}

export const PhotoItem: FC<PhotoItemProps> = ({ photo }) => (
  <div className="photo">
    <Nav.Link href={`/card/${photo.id}`}>
      <Image src={photo.urls.small} alt={photo.alt_description} />
    </Nav.Link>
    <p>{photo.alt_description.slice(0, 100)}</p>
  </div>
);
