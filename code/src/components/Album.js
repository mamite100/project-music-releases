import React from "react";

const Album = ({ img, title, albumLink }) => {
  return (
    <article className="article-box">
      <a href={albumLink}>
        <img src={img} alt={title} />
      </a>
      <p className="album-name">{title}</p>
    </article>
  );
};
export default Album;
