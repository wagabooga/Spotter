import React, { Fragment, useEffect } from 'react';
import axios from "axios";

export default function LoginButton() {

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

  useEffect(() => {
    // if (!sessionCookie[spotterToken]) acces
    loginHandler()
    // else 
  }, [])
  return (
    <>
    {/* this will redirect to the backend to help login with spotify */}
    </>
  )
}
