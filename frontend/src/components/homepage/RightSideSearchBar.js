import { useState, useEffect } from "react";
// import useAuth from "./useAuth"
// import Player from "./Player"
import TrackSearchResult from "./SpotPostContainer/TrackSearchResult";
import { Container, Form } from "react-bootstrap";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { withStyles } from "@mui/styles";

// THIS IS NOT CURRENTLY SEARCHING OTHER USERS, IT IS A COPYOF THE SEARCH BAR FOR SONGS IN THE MIDDLE CONTAINER_____________________

// import SpotifyWebApi from "spotify-web-api-node"
import axios from "axios";

const styles = (theme) => ({
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "white !important",
  },
});

function SearchSpotify(props) {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  function chooseTrack(track) {
    props.setSelectedSongData(track);
    setSearch(track.artist);
  }

  useEffect(() => {
    if (!search) return setSearchResults([]);
    let cancel = false;
    // find out how to use search here so we can use that as a variable
    if (setSearch) {
      axios({
        method: "get",
        url: `http://localhost:8000/spotify/searchTrack/${search}`,
      }).then((res) => {
        if (cancel) return;

        setSearchResults(
          res.data.map((track) => {
            const smallestAlbumImage = track.album.images.reduce(
              (smallest, image) => {
                if (image.height < smallest.height) return image;
                return smallest;
              },
              track.album.images[0]
            );

            return {
              artist: track.artists[0].name,
              title: track.name,
              uri: track.uri,
              albumUrl: smallestAlbumImage.url,
            };
          })
        );
      });
    }

    return () => (cancel = true);
  }, [search]);

  const { classes } = props;

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "95%" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        InputProps={{
          classes: {
            notchedOutline: classes.notchedOutline,
          },
        }}
        id="outlined-basic"
        label="Find Spotters"
        variant="outlined"
        type="search"
        placeholder="Find Spotters"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
        {searchResults.map((track) => (
          <TrackSearchResult
            track={track}
            key={track.uri}
            chooseTrack={chooseTrack}
          />
        ))}
      </div>
    </Box>
  );
}

export default withStyles(styles)(SearchSpotify);
