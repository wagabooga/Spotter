import React from "react";
import LeftSideBar from "./LeftSideBar";
import MiddleContainer from "./MiddleContainer";
import RightSideBar from "./RightSideBar";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
  },

  typography: {
    fontFamily: "Raleway",
    fontWeightLight: 400,
    fontWeightBold: 700,
  },
});

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(3),
  height: "100%",
  color: theme.palette.text.secondary,
}));

export default function VariableWidthGrid() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0.5}>
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
    </ThemeProvider>
  );
}
