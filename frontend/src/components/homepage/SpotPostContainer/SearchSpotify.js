import { useState, useEffect } from "react";
// import useAuth from "./useAuth"
// import Player from "./Player"
import TrackSearchResult from "./TrackSearchResult";
import { Container, Form } from "react-bootstrap";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { withStyles } from "@mui/styles";

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
  const searchResultsContainerStyle =
    searchResults.length > 0 ? { overflowY: "scroll", height: 222 } : {};
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
            // root: classes.cssOutlinedInput,
            // focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline,
          },
        }}
        id="outlined-basic"
        label="Search Song/Artist"
        variant="outlined"
        type="search"
        placeholder="Search Songs/Artists"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* TODO: change the height to show 3 results */}
      <div className="flex-grow-1 my-2" style={searchResultsContainerStyle}>
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
