import React from "react";
import Spot from "./Spot";

export default function SpotList(props) {
  console.log("props HERE", props);
  const spotListElements = props.spots
    ? props.spots.map((spot) => {
        // spot will have json data
        console.log("spot in SpotList", spot);
        return <Spot spotInfo={spot} />;
      })
    : "";

  return <div className="spotList">{spotListElements}</div>;
}
