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
    console.log(
      "submitting tweet values:",
      props.selectedSongData,
      props.spotTextValue
    );
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
          console.log("axios response after post", response);
          props.setNewPost(true);
          props.setSpotTextValue("");
          props.setSelectedSongData("");
          props.setRefresh(true);
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
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" /> */}
      <TextField
        InputProps={{
          classes: {
            // root: classes.cssOutlinedInput,
            // focused: classes.cssFocused,
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
