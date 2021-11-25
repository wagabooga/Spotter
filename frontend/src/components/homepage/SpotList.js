import React from 'react'
import Spot from './Spot'


export default function SpotList(props) {
  const spotListElements = props.spots.map((spot) => {
    // spot will have json data
    return <Spot avatarUrl={spot.avatarUrl}/>
  });
  
  return (
    <div>
      {spotListElements}
    </div>
    
  )
}
