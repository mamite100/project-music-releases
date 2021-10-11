import React from "react";
import data from "./data.json";
import Album from "./components/Album";

console.log(
  data.albums.items.map((names) => {
    return names.images[1].url;
  })
);
const albumArray = data.albums.items;
console.log(albumArray);
export const App = () => {
  return (
    <div>
      {albumArray.map((album) => {
        return (
          <Album
            img="https://i.scdn.co/image/a8b8d0bd26dc496f5b9ea65994172c5d541aa1b9"
            title="title"
            artist="Just a description"
            list={data.albums.items.map((names) => {
              return names.name;
            })}
            // images={data.albums.items.map((names) => {
            //   return names.images[1];
            // })}
          />
        );
      })}
    </div>
  );
};
