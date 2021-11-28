import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import SpotList from "./SpotList";
import SpotPostContainer from "./SpotPostContainer/SpotPostContainer.js";

import axios from "axios";

// import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles({
  text: {
    color: "#1DB954",
  },
});

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  marginLeft: "30px",
  color: theme.palette.text.secondary,
}));

// const spots = [
//   {
//     avatarUrl: "https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
//   },
//   {
//     avatarUrl: "https://lh3.googleusercontent.com/proxy/Bzshkxly2_z9L1pyJk6RejoHSR7FIamooBTPeVOMKSfZ-IaF3Nbyhk6KcTju4IWvYEUvQF_6M7SI1zcRb7hMlBKcWw1bo5mU2g"
//   },
//   {
//     avatarUrl: "https://www.mcdonalds.com/content/dam/ca/nfl/web/nutrition/products/tile/en/mcdonalds-fries-small.jpg"
//   },
//   {
//     avatarUrl: "https://icons-for-free.com/iconfiles/png/512/instagram+original+icon-1320194901224047116.png"
//   },
// ]

// useEffect(() => {
//   const fetchSpots = () => {
//     console.log("replace me")
//     // this is where the axios get goes
//     axios({
//       method: "get",
//       url: "http://localhost:8000/login/redirect",
//     }).then(() => {
//       // setSpots here
//     }).catch((err) => {
//       console.log(err)
//     })
//   }
//   // do function call here to get spots ^
//   fetchSpots()
// }, [isPosting])

export default function MiddleContainer(props) {
  const classes = useStyles();

  const [spots, setSpots] = useState("");
  const [newPost, setNewPost] = useState(false);

  useEffect(() => {
    const fetchSpots = async () => {
      const spotsResult = await axios({
        method: "get",
        url: `http://localhost:8000/spots/2/following`,
      });

      const spotsResultCopy = JSON.parse(JSON.stringify(spotsResult.data));
      console.log("FFFFFFFFFFFFFFFFFFFFFFFFFFFF", spotsResult.data);
      for (let spot of spotsResultCopy) {
        let trackUri = spot.spotify_json.uri;
        // we split because spotify:track:3Ofmpyhv5UAQ70mENzB277 = track_uri (id)
        const trackID = trackUri.split(":")[2];
        console.log("trackID in loop middle container", trackID);
        const trackResult = await axios({
          method: "get",
          url: `http://localhost:8000/spotify/tracks/${trackID}`,
        });
        console.log("TRACKRESULT.DATA", trackResult.data);
        const albumID = trackResult.data.tracks[0].album.id;
        const albumResult = await axios({
          method: "get",
          url: `http://localhost:8000/spotify/albums/${albumID}`,
        });
        const bigImage = albumResult.data.images[0];
        spot.spotify_json["bigImage"] = bigImage;
      }
      setSpots(spotsResultCopy);
    };
    if (spots === "") {
      fetchSpots();
    }
    if (newPost === true) {
      setNewPost(false);
      fetchSpots();
    }
  }, [newPost]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={11}>
          <Item>
            <div className={classes.text}>
              <h2>Home</h2>
              <SpotPostContainer setNewPost={setNewPost} />
            </div>
          </Item>
        </Grid>
      </Grid>
      <div className={classes.text}>
        <SpotList
          spots={spots}
          chooseTrack={props.chooseTrack}
          setPlay={props.setPlay}
        />
      </div>
    </Box>
  );
}
