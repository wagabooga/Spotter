import * as React from "react";

import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import ProfilePicture from "./ProfilePicture";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  leftNav: {
    color: "white",
    "&:hover": {
      // backgroundColor: "black",
      color: "#1DB954",
    },
  },
  leftNavLink: {
    textDecoration: "none"
  }
});

export default function MenuListComposition() {
  const anchorRef = React.useRef(null);
  const classes = useStyles();

  return (
    <Stack direction="column" spacing={5}>
      <ProfilePicture />

      <MenuList>
        <Link className={classes.leftNavLink} to="/home"><MenuItem className={classes.leftNav}>Home</MenuItem></Link>
        <Link className={classes.leftNavLink} to="/landing"><MenuItem className={classes.leftNav}>Landing</MenuItem></Link>
        <MenuItem className={classes.leftNav}>Notifications</MenuItem>
        <MenuItem className={classes.leftNav}>Messages</MenuItem>
        <MenuItem className={classes.leftNav}>Profile</MenuItem>
      </MenuList>
    </Stack>
  );
}
