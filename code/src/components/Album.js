import React from "react";
import { Artist } from "./Artist";

const Album = (props) => {
  return (
    <article className="article-box">
      <img src={props.img} alt="" />
      <p className="album-name">{props.title}</p>
      <p className="artists-name">{props.artist}</p>
      <p className="list">{props.list}</p>
      <p className="images">{props.images}</p>
    </article>
  );
};
export default Album;
