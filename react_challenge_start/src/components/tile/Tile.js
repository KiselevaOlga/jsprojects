import React from "react";

export const Tile = ({tile}) => {
  console.log(tile)
  return (
    <div className="tile-container">
      {Object.values(tile).map((item, index)=>(
        <p className={`${index === 0 ? "tile-title" : ""} tile`} key={index}>{item}</p>
      ))}
    <hr/>
    </div>
    
  );
};
