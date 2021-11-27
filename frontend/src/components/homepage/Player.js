

import { useState, useEffect, useRef, Fragment } from "react"
import SpotifyPlayer from "react-spotify-web-playback"


export default function Player({ accessToken, playingTrack, setPlayTrackAndSong, setPlay, play}) {
  // const [play, setPlay] = useState(false)
  // useEffect(() => setPlay(true), [playingTrack])

  if (!accessToken) return null
  console.log("NNNNNNNNNNNNNNNNNN", playingTrack)
  return (
    <SpotifyPlayer 
      token={accessToken}
      showSaveIcon
      uris={playingTrack ? playingTrack : []}
      callback={state => {
        // if (!state.isPlaying) setPlay(false)
        console.log("clicked", state)
        setPlayTrackAndSong({playingTrack: [state.track.id], play: state.isPlaying })
        // setPlay(state.isPlaying)
        // chooseTrack([state.track.id])
      }}
      play={play}
      
      // onClick={() => {console.log("clicked hte play button")}}
    />

  )
}