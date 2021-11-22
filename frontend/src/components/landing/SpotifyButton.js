// import React, { Fragment, useEffect } from 'react';
import axios from "axios";

export default function SpotifyButton() {
  const loginHandler = function () {
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
    <button className="landing-right-container" onClick={loginHandler}> Login with Spotify</button>
  )
}

// auto redirect *keep*
// useEffect(() => {
//   // if (!sessionCookie[spotterToken]) acces
//   loginHandler()
//   // else 
// }, [])