import React from 'react'

const AUTH_URL =`https://accounts.spotify.com/
authorize?client_id=2ba6a26f22d5402f89221cafec752d8b
&response_type=code
&redirect_uri=http://localhost:8000/login
&scope=user-read-private
%20user-read-email
&state=some-state-of-my-choice
&show_dialog=true`
export default function LoginButton() {
  return (
    <div>
    {/* instead of auth_URL we can go to 8000:/whatever which will redirect to spotify AUTH_URL */}
      <a href={AUTH_URL}>aasddsdsd</a>
    </div>
  )
}

