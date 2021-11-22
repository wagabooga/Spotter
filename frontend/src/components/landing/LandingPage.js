import React from 'react'
import "../../styles/landingPage.css"
import SpotifyButton from './SpotifyButton'
export default function LandingPage() {
  return (
    <div className="landing-outer-container">

      <div className="landing-left-container">
          <img src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png" alt="alternate_text" width="width" height="height">
          </img>
      </div>

      <div>
        <h1>Happening now</h1>
        <h3>Join Spotter Today.</h3>
        <div>
          <SpotifyButton />
        </div>
      </div>

    </div>
  )
}
