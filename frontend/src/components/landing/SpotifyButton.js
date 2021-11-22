// import React, { Fragment, useEffect } from 'react';
import axios from "axios";

export default function SpotifyButton() {
  //spotify loginHandler
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
    <button className="landing-right-container" onClick={spotifyLoginHandler}> Login with Spotify</button>
    )
  }
  
  // auto redirect *keep*
  // useEffect(() => {
    //   // if (!sessionCookie[spotterToken]) acces
    //   loginHandler()
    //   // else 


//     // host loginHandler
//     const spotterLoginHandler = function () {
//       axios({
//         method: "post",
//         url: "http://localhost:8000/login/spotter/",
//       }).then((response) => {
//         window.location.replace(`https://accounts.spotify.com/authorize?client_id=${response.data.client_id}${response.data.url_body}`)
//         return `https://accounts.spotify.com/authorize?client_id=${response.data.client_id}${response.data.url_body}`
//       })
//       .catch((err) => { console.log("myresponse:", err) })
//     }
  
// // }, [])