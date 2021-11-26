
  
import { useState, useEffect } from "react"
import SpotifyPlayer from "react-spotify-web-playback"


export default function Player({ accessToken, playingTrack }) {
  const [play, setPlay] = useState(false)
  useEffect(() => setPlay(true), [playingTrack])

  if (!accessToken) return null
  console.log("NNNNNNNNNNNNNNNNNN", playingTrack)
  return (
    <SpotifyPlayer
      token={accessToken}
      showSaveIcon
      uris = {playingTrack ? playingTrack : []}
      callback={state => {
        if (!state.isPlaying) setPlay(false)
      }}
      play={play}
    />
  )
}