// import React, { Fragment, useEffect } from 'react';
import axios from "axios";

export default function SpotifyButton() {
  //loginHandler works by first making a get request, which /login/redirect returns (res.send) client_id and url_body, and then manually refreshes the page with spotify's AUTH_URL
  const spotifyLoginHandler = function () {
    axios({
      method: "get",
      url: "http://localhost:8000/login/redirect",
    }).then((response) => {
      window.location.replace(`https://accounts.spotify.com/authorize?client_id=${response.data.client_id}${response.data.url_body}`)
      return `https://accounts.spotify.com/authorize?client_id=${response.data.client_id}${response.data.url_body}`
    })
    .catch((err) => { console.log("myresponse:", err) })
  }
  
  return (
    // throw the method on the button's onClick
    <button className="landing-right-container" onClick={spotifyLoginHandler}> Login with Spotify</button>
    )
  }
  
