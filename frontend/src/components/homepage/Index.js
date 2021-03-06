import React, { useState } from "react";
import LeftSideBar from "./LeftSideBar";
import MiddleContainer from "./MiddleContainer";
import RightSideBar from "./RightSideBar";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Player from "./Player";
import Cookies from "universal-cookie";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(3),
  height: "100%",
  color: theme.palette.text.secondary,
}));

export default function VariableWidthGrid() {
  const cookies = new Cookies();
  let accessToken = cookies.get("accessToken");
  let user_id = cookies.get("user_id");
  const [playingTrack, setPlayingTrack] = useState([]);
  const [play, setPlay] = useState(false);
  const [playTrackAndSong, setPlayTrackAndSong] = useState({
    playingTrack: [],
    play: false,
  });

  let chooseTrack = function (track) {
    setPlayingTrack(track);
  };

  return (
    <Box>
      <Grid container spacing={0.5}>
        <Grid item xs={12} md={3}>
          <Item>
            <LeftSideBar />
          </Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item>
            <MiddleContainer
              chooseTrack={setPlayTrackAndSong}
              setPlay={setPlay}
              userIdCookie={user_id}
            />
          </Item>
        </Grid>
        <Grid item xs={12} md={3}>
          <Item>
            <RightSideBar />
          </Item>
        </Grid>
        <Player
          accessToken={accessToken}
          playingTrack={playTrackAndSong.playingTrack}
          playTrackAndSong={playTrackAndSong}
          setPlayTrackAndSong={setPlayTrackAndSong}
          play={playTrackAndSong.play}
          setPlay={setPlay}
        />
      </Grid>
    </Box>
  );
}
