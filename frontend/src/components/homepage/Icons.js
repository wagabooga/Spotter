import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import ShareIcon from "@mui/icons-material/Share";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { makeStyles } from "@mui/styles";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const useStyles = makeStyles({
  favorite: {
    color: "#1DB954",
  },
});

export default function IconCheckboxes() {
  const classes = useStyles();

  return (
    <div>
      <Checkbox
        {...label}
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite className={classes.favorite} />}
      />
      <Checkbox
        {...label}
        icon={<InsertCommentOutlinedIcon />}
        checkedIcon={<InsertCommentIcon className={classes.favorite} />}
      />

      <Checkbox
        {...label}
        icon={<ShareOutlinedIcon />}
        checkedIcon={<ShareIcon className={classes.favorite} />}
      />
    </div>
  );
}
