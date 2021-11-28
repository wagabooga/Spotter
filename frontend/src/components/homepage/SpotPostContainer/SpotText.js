import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import PostButton from "./PostButton";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { withStyles } from "@mui/styles";

const styles = (theme) => ({
  notchedOutline: {
    borderWidth: "1px",
    borderBottom: "white !important",
  },
});

function SpotText(props) {
  function submitSpot() {
    if (props.spotTextValue && props.selectedSongData) {
      axios({
        method: "post",
        url: "http://localhost:8000/spots/create",
        data: {
          selectedSongData: props.selectedSongData,
          spotTextValue: props.spotTextValue,
        },
      })
        .then((response) => {
          props.setNewPost(true);
          props.setSpotTextValue("");
          props.setSelectedSongData(null);
        })
        .then((response) => {
          console.log("axios response after post", response);
        })
        .catch((err) => {
          console.log("err:", err);
        });
    }
  }

  const { classes } = props;
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "95%" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        InputProps={{
          classes: {
            notchedOutline: classes.notchedOutline,
          },
        }}
        placeholder="add a comment"
        id="standard-basic"
        variant="standard"
        value={props.spotTextValue}
        onChange={(e) => {
          props.setSpotTextValue(e.target.value);
        }}
      />
      <PostButton onClick={submitSpot} />
    </Box>
  );
}

export default withStyles(styles)(SpotText);
