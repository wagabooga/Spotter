import React from "react";
import LeftSideBar from "./LeftSideBar";
import MiddleContainer from "./MiddleContainer";
import RightSideBar from "./RightSideBar";
// import "../../styles/homepage.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

// export default function Index() {
//   return (
//     <div>
//       <div className="homepage-left-sidebar">
//         <h1>Left</h1>
//         <LeftSideBar />
//       </div>

//       <div className="homepage-middle-container">
//         <h1>Middle</h1>
//         <MiddleContainer />
//       </div>

//       <div className="homepage-right-sidebar">
//         <h1>Right</h1>
//         <RightSideBar />
//       </div>
//     </div>
//   );
// }

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
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
            xs=6
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <RightSideBar />
            xs
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
