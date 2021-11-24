import React from 'react'

export default function SongContainerThing(props) {
  return (
    <div>
      {/* <button onClick={}> */}
      {props.songInfo.artist}
      {props.songInfo.title}
      {props.songInfo.uri}
      {/* </button> */}
    </div>
  )
}
