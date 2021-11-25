// import React, { Fragment, useEffect } from 'react';
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import axios from "axios";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  Spotifybtn: {
    direction: "row",
    justifyContent: "center",
    backgroundColor: "#ccedcd",
    color: "black",
    "&:hover": {
      backgroundColor: "dark grey",
      color: "#1DB954",
    },
    // width: "45px",
  },
});

export default function SpotifyButton() {
  //loginHandler works by first making a get request, which /login/redirect returns (res.send) client_id and url_body, and then manually refreshes the page with spotify's AUTH_URL
  const spotifyLoginHandler = function () {
    axios({
      method: "get",
      url: "http://localhost:8000/login/redirect",
    })
      .then((response) => {
        window.location.replace(
          `https://accounts.spotify.com/authorize?client_id=${response.data.client_id}${response.data.url_body}`
        );
        return `https://accounts.spotify.com/authorize?client_id=${response.data.client_id}${response.data.url_body}`;
      })
      .catch((err) => {
        console.log("myresponse:", err);
      });
  };

  const classes = useStyles();
  return (
    // throw the method on the button's onClick

    <Stack spacing={2} direction="row">
      <Button
        variant="outlined"
        className={classes.Spotifybtn}
        onClick={spotifyLoginHandler}
      >
        Login with Spotify
      </Button>
    </Stack>

    // <button className="landing-right-container" onClick={spotifyLoginHandler}> Login with Spotify</button>
  );
}
