import React from "react";
import {Tile} from "../../components/tile/Tile";

export const TileList = ({tiles}) => {
  return (
    <div>
    {tiles && tiles.map((tile, index)=>{
      return <Tile
                key={index}
                tile={tile}
            />
    })}
      
    </div>
  );
};
