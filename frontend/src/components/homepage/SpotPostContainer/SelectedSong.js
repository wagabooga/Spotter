import React from 'react'

export const SelectedSong = (props) => {
  return (
    <div>
      {props.artist}
      {props.title}
      {/* uri is used for the player */}
      {/* {props.uri} */}
      <img src={props.albumUrl}/>
      <button onClick={props.deselect}>Cancel</button>
    </div>
    
  )
}
