import React from 'react'
import Spot from './Spot'


export default function SpotList(props) {
  const spotListElements = props.spots ? props.spots.map((spot) => {
    console.log("spot in SpotList", spot)
    return <Spot spotInfo={spot} chooseTrack={props.chooseTrack} />
  }) : null


  return (
    <div>
      {spotListElements}
    </div>

  )
}
