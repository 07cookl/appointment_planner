import React from "react";

export const Tile = ({name, description}) => {
  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {Object.values(description).map((item) => (
        <p key={Object.values(description).indexOf(item)} className="tile">{item}</p>
      ))}
    </div>
  );
};
