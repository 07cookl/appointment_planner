import React from "react";
import { Tile } from "../tile/Tile"

export const TileList = ({contacts, appointments}) => {
  let data = contacts || appointments;
  console.log(data);
  return (
    <div>
      {data.map((info) => {
        let {name, ...rest} = info;
        return <Tile
          key={data.indexOf(info)}
          name={name}
          description={rest}
          />
})}
    </div>
  );
};
