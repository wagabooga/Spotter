import React from "react";
import LeftSideBar from "./LeftSideBar";
import MiddleContainer from "./MiddleContainer";
import RightSideBar from "./RightSideBar";
// import "../../styles/homepage.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(3),
  height: "100%",
  color: theme.palette.text.secondary,
}));

export default function VariableWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Item>
            <LeftSideBar />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <MiddleContainer />
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <RightSideBar />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
