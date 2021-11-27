import React from "react";
import Spot from "./Spot";

export default function SpotList(props) {

  const spotListElements = props.spots ? props.spots.map((spot) => {
    console.log("spot in SpotList", spot)
    return <Spot spotInfo={spot} chooseTrack={props.chooseTrack} setPlay={props.setPlay} />
  }) : null



  return <div className="spotList">{spotListElements}</div>;

}
