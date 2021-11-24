import React from "react";
import Spot from "./Spot";
import MiddleSearchBar from "./MiddleSearchBar";
import MiddleTextBox from "./MiddleTextBox";
import Button from "./MiddlePostButton";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  text: {
    color: "#1DB954",
  },
});

export default function MiddleContainer() {
  const classes = useStyles();

  return (
    <div className={classes.text}>
      <h2>Home</h2>
      <div>
        <MiddleSearchBar />
        <MiddleTextBox />
        <Button />
      </div>
      <div>
        <Spot />
        <Spot />
      </div>
    </div>
  );
}
