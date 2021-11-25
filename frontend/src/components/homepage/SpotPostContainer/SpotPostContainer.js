import React, { useState } from 'react'
import SearchBySong from './SearchBySong.js'
import SpotText from './SpotText.js'
import Button from './PostButton.js'
import { SelectedSong } from './SelectedSong.js'
export default function SpotPostContainer() {
  // const [selectedSongUri, setSelectedSongUri] = useState("")
  const [selectedSongData, setSelectedSongData] = useState(null)
  const [spotTextValue, setSpotTextValue] = useState("")


  return (
    <div>
      
      {!selectedSongData && <SearchBySong setSelectedSongData={setSelectedSongData}/>}
      {selectedSongData && <SelectedSong {...selectedSongData} deselect={()=>{setSelectedSongData(null)}} />}
      <SpotText spotTextValue={spotTextValue} setSpotTextValue={setSpotTextValue} onClickPostButton={() => console.log("you clicked me", selectedSongData, spotTextValue)}/>
    </div>
  )
}
