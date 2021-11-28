import React from "react";
import Spot from "./Spot";

export default function SpotList(props) {
  const spotListElements = props.spots
    ? props.spots.map((spot) => {
        return (
          <Spot
            key={spot.id}
            spotInfo={spot}
            chooseTrack={props.chooseTrack}
            setPlay={props.setPlay}
          />
        );
      })
    : null;

  return <div className="spotList">{spotListElements}</div>;
}
