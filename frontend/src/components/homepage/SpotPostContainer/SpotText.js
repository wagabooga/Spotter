import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import PostButton from "./PostButton";

export default function SpotText(props) {
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
      <TextField id="standard-basic" variant="standard" value={props.spotTextValue} onChange={(e) => {props.setSpotTextValue(e.target.value)}}/>
      <PostButton onClick={props.onClickPostButton}/>
    </Box>
  );
}
