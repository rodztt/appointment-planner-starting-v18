import React from "react";
import {Tile} from '../tile/Tile.js';

export const TileList = ({ objectsArray }) => {
  if (!objectsArray) {
    return <div>No data available</div>;
  }

  return (
    <div>
      {objectsArray.map((object, index) => {
        const { name, ...description } = object;
        return (
          <Tile
            name={name}
            key={index}
            description={description}
          />
        );
      })}
    </div>
  );
};
