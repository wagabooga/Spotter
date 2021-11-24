import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'

export default function useAuth() {
  const [accessToken, setAccessToken] = useState()
  const [refreshToken, setRefreshToken] = useState()
  const [expiresIn, setExpiresIn] = useState()

  useEffect(() => {
    axios.post("localhost:8000/param", {
      code,
    })
    .then(res => {
      setAccessToken(res.data.accessToken)
      setRefreshToken(res.data.accessToken)
      setExpiresIn(res.data.accessToken)
    })
    .catch(() => {
      // on error redirect to root
      window.location = "/"
    })
  }, [code])
}
