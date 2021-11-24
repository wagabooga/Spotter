import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Spotter"
        // src="/static/images/avatar/1.jpg"
        sx={{ width: 70, height: 70 }}
      />
      <Typography>
        <h1>Spotter</h1>
      </Typography>
    </Stack>
  );
}
