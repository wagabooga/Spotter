import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import LandingPage from "./components/landing/LandingPage";
import Home from "./components/homepage/Index";



// cookies.set('myCat', 'Pacman', { path: '/' });

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      paper: "#222426",
    },
    primary: {
      // main: "#e6e7e8",
      main: "#e6e7e8",
    },
    secondary: {
      main: "#e6e7e8",
    },
  },

  typography: {
    fontFamily: "Raleway",
    fontWeightLight: 400,
    fontWeightBold: 700,
  },
});

export default function App() {



  // let playButton = function (accessToken, device) {
  //   fetch(`https://api.spotify.com/v1/me/player/play?device_id=${device}`, {
  //     method: "PUT",
  //     body: JSON.stringify({ uris: ["spotify:track:1ACZpHI5vZ5Ea4xGlkdGWM"] }),
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //   });
  // };
  // }, [])
  // const play = ({
  //   spotify_uri,
  //   playerInstance: {
  //     _options: {
  //       getOAuthToken
  //     }
  //   }
  // }) => {
  //   getOAuthToken(access_token => {
  //     fetch(`https://api.spotify.com/v1/me/player/play?device_id=${id}`, {
  //       method: 'PUT',
  //       body: JSON.stringify({ uris: [spotify_uri] }),
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${access_token}`
  //       },
  //     });
  //   });
  // };

  // const player = play({
  //   playerInstance: new Spotify.Player({ name: "..." }),
  //   spotify_uri: 'spotify:track:7xGfFoTpQ2E7fRF5lN10tr',
  // });
  // console.log("james", player)
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/landing">Landing</Link>
              </li>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                {/* <button
                  onClick={() => {
                    playButton(accessToken, device);
                  }}
                >
                  Play
                </button> */}
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route
              path="/landing"
              // playButton={playButton}
              element={<LandingPage  />}
            />
            {/* <Route path="/register" element={<Register />} /> */}
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}
