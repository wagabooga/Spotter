import React from 'react'

const AUTH_URL =`https://accounts.spotify.com/
authorize?client_id=86d3fd8f8c9b490f9aa888ed86462f3d
&response_type=code
&redirect_uri=http://localhost:8000/login
&scope=user-read-private
%20user-read-email
&state=some-state-of-my-choice
&show_dialog=true`
export default function LoginButton() {
  return (
    <div>
      <a href={AUTH_URL}>aasddsdsd</a>
    </div>
  )
}
