import React from 'react'
import axios from "axios";


export default function LoginButton() {
  const loginHandler = function () {
    axios({
      method:"get",
      url: "http://localhost:8000/login/redirect",
    }).then((response) => {
      window.location.replace(`https://accounts.spotify.com/authorize?client_id=${response.data.client_id}${response.data.url_body}`)
      return `https://accounts.spotify.com/authorize?client_id=${response.data.client_id}${response.data.url_body}`
    })
    .catch((err) => {console.log("myresponse:", err)})
  }
  
  return (
    <div>
    {/* instead of auth_URL we can go to 8000:/whatever which will redirect to spotify AUTH_URL */}
      <button onClick={() => loginHandler() }>aasddsdsd</button>
    </div>
  )
}

