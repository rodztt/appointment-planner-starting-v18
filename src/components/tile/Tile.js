import React from "react";

export const Tile = ({name, description}) => {

  return (
    <div className="tile-container">
      <p className="tile-tittle">{name}</p>
      {Object.keys(description).map(key=>{
        return (
          <p className="tile" key={description.id}>
            {description[key]}
          </p>
        )
      })}
    </div>
  );
};