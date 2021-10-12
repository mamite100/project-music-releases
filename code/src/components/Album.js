import React from "react";
import { Artist } from "./Artist";

const Album = ({
  img,
  title,
  artist,
  artistLink1,
  artistLink2,
  artistLink3,
  albumLink,
}) => {
  return (
    <article className="article-box">
      <a href={albumLink}>
        <img src={img} alt={artist} />
      </a>
      <p className="album-name">{title}</p>
      <a href={artistLink1}>
        <p className="artists-name">{artist}</p>
      </a>
    </article>
  );
};
export default Album;
