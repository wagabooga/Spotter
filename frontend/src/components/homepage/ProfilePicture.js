import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  text: {
    color: "#1DB954",
  },
});

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Spotter"
        src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
        sx={{ width: 70, height: 70 }}
      />
      <Typography className={classes.text}>
        <h1>Spotter</h1>
      </Typography>
    </Stack>
  );
}
