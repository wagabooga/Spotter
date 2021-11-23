import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import ShareIcon from "@mui/icons-material/Share";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function IconCheckboxes() {
  return (
    <div>
      <Checkbox
        {...label}
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
      />
      <Checkbox
        {...label}
        icon={<InsertCommentOutlinedIcon />}
        checkedIcon={<InsertCommentIcon />}
      />

      <Checkbox
        {...label}
        icon={<ShareOutlinedIcon />}
        checkedIcon={<ShareIcon />}
      />
    </div>
  );
}
