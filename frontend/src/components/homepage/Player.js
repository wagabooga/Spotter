import { useState, useEffect, useRef, Fragment } from "react";
import SpotifyPlayer from "react-spotify-web-playback";

export default function Player({
  accessToken,
  playingTrack,
  setPlayTrackAndSong,
  setPlay,
  play,
}) {
  if (!accessToken) return null;

  return (
    <SpotifyPlayer
      token={accessToken}
      showSaveIcon
      uris={playingTrack ? playingTrack : []}
      callback={(state) => {
        setPlayTrackAndSong({
          playingTrack: [state.track.id],
          play: state.isPlaying,
        });
      }}
      play={play}
    />
  );
}
