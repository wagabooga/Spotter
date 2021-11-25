import { useState, useEffect } from "react"
// import useAuth from "./useAuth"
// import Player from "./Player"
import TrackSearchResult from "./TrackSearchResult"
import { Container, Form } from "react-bootstrap"

// import SpotifyWebApi from "spotify-web-api-node"
import axios from "axios"


export default function SearchSpotify(props) {
  const [search, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState([])

  function chooseTrack(track) {
    props.setSelectedSongData(track)
    setSearch(track.artist)
  }





  useEffect(() => {
    console.log("search results", searchResults)
    if (!search) return setSearchResults([])
    let cancel = false
    // find out how to use search here so we can use that as a variable
    if (setSearch) {
      axios({
        method: "get",
        url: `http://localhost:8000/spotify/searchTrack/${search}`,
      }).then(res => {
        console.log("myres:", res)
        if (cancel) return
        console.log("res.body.map", res.data)
        setSearchResults(
          res.data.map(track => {
            const smallestAlbumImage = track.album.images.reduce(
              (smallest, image) => {
                if (image.height < smallest.height) return image
                return smallest
              },
              track.album.images[0]
            )

            return {
              artist: track.artists[0].name,
              title: track.name,
              uri: track.uri,
              albumUrl: smallestAlbumImage.url,
            }
          })
        )
      })
    }

    return () => (cancel = true)
  }, [search])

  return (
    <Container  >
      <Form.Control
        type="search"
        placeholder="Search Songs/Artists"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />


      <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
        {searchResults.map(track => (
          <TrackSearchResult
            track={track}
            key={track.uri}
            chooseTrack={chooseTrack}
          />
        ))}
      </div>
      {/* <div> */}
      {/* <Player accessToken={accessToken} trackUri={playingTrack?.uri} /> */}
      {/* </div> */}
    </Container>
  )
}