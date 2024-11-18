import React from "react";

export const Tile = ({name, description}) => {

  return (
    <div className="tile-container">
      <p className="tile-tittle">{name}</p>
      {Object.keys(description).forEach(key=>{
        return (
          <p className="tile">
            description[key]
          </p>
        )
      })}
    </div>
  );
};