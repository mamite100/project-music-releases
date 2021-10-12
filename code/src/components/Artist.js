import React from "react";

const Artist = ({ artistName, artistLink }) => {
  return (
    <div className="artist-names">
      <a href={artistLink}>
        <p className="artist-name">{artistName}</p>
      </a>
    </div>
  );
};

export default Artist;
