import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  btn: {
    direction: "row",
    justifyContent: "center",
    color: "grey",
    "&:hover": {
      backgroundColor: "white",
      color: "#1DB954",
    },
    width: "45px",
  },
});

export default function BasicButtons() {
  const classes = useStyles();

  return (
    <Stack spacing={2} direction="row" justifyContent="end">
      <Button
        onClick={() => console.log("you clicked me")}
        className={classes.btn}
        variant="text"
      >
        Post
      </Button>
      {/* <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button> */}
    </Stack>
  );
}
