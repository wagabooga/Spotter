import React from 'react'
import Popover from "@mui/material/Popover";
import Player from './Player';
export default function PlayerPopover(props) {
  return (
    <div>
      <Popover
        anchorEl={props.anchorEl}
        open={props.playerOpen}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Player accessToken={props.accessToken} playingTrack={props.playingTrack} />
      </Popover>
    </div>
  )
}
