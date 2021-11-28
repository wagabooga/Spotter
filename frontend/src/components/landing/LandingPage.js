// import React from "react";
// import "../../styles/landingPage.css";
import SpotifyButton from "./SpotifyButton";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body1,
  padding: theme.spacing(1),
  textAlign: "beginning",
  color: theme.palette.text.secondary,
}));

export default function LandingPage() {
  return (
    <Box
    // sx={{ flexGrow: 2 }}
    >
      <Grid container spacing={0}>
        <Grid item xs={12} md={8}>
          <Item>
            <img
              src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png"
              alt="alternate_text"
              width="100%"
              height="100%"
            ></img>
          </Item>
        </Grid>
        <Grid item xs={12} md={3}>
          <Item>
            <h1>Happening now</h1>
            <h3>Join Spotter Today.</h3>
            <SpotifyButton />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
