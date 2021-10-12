import React from "react";
import data from "./data.json";
import Album from "./components/Album";
console.log(data);

console.log(
  data.albums.items.map((names) => {
    return names.images[1].url;
  })
);
console.log(
  data.albums.items.map((names) => {
    return names.name;
  })
);
console.log(
  data.albums.items.map((type) => {
    return type.album_type;
  })
);

console.log(
  data.albums.items.map((names) => {
    return names.artists[0].name;
  })
);
console.log(
  data.albums.items.map((names) => {
    return names.artists[0].id;
  })
);

//sidan till artisten
console.log(
  data.albums.items.map((names) => {
    return names.artists[0].external_urls.spotify;
  })
);
// sidan till låten
console.log(
  data.albums.items.map((names) => {
    return names.external_urls.spotify;
  })
);

const items = data.albums.items;
console.log(items);

// const artister = data.albums.items.artists[0];
// console.log(artister);
export const App = () => {
  return (
    <div>
      <header></header>
      <div>
        {items.map((item) => {
          return (
            <Album
              key={item.id}
              img={item.images[1].url}
              title={item.name}
              artist={item.artists.map((artistNames) => {
                return artistNames.name;
              })}
              artistLink1={item.artists[0].external_urls.spotify}
              //artistLink2={item.artists[1].external_urls.spotify}
              // artistLink3={item.artists[2].external_urls.spotify}
              albumLink={item.external_urls.spotify}
            />
          );
        })}
      </div>
    </div>
  );
};
