import * as React from "react";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import ProfilePicture from "./ProfilePicture";

export default function MenuListComposition() {
  const anchorRef = React.useRef(null);

  return (
    <Stack direction="column" spacing={5}>
      <ProfilePicture />
      <Paper>
        <MenuList>
          <MenuItem>Home</MenuItem>
          <MenuItem>Notifications</MenuItem>
          <MenuItem>Messages</MenuItem>
          <MenuItem>Profile</MenuItem>
        </MenuList>
      </Paper>
    </Stack>
  );
}
