import React, { useState } from "react";
import SearchBySong from "./SearchBySong.js";
import SpotText from "./SpotText.js";
import { SelectedSong } from "./SelectedSong.js";

export default function SpotPostContainer({ setNewPost }) {
  const [selectedSongData, setSelectedSongData] = useState(null);
  const [spotTextValue, setSpotTextValue] = useState("");

  return (
    <div className="music-search">
      {!selectedSongData && (
        <SearchBySong setSelectedSongData={setSelectedSongData} />
      )}
      {selectedSongData && (
        <SelectedSong
          {...selectedSongData}
          deselect={() => {
            setSelectedSongData(null);
          }}
        />
      )}
      <SpotText
        spotTextValue={spotTextValue}
        setSpotTextValue={setSpotTextValue}
        selectedSongData={selectedSongData}
        setNewPost={setNewPost}
        setSelectedSongData={setSelectedSongData}
      />
    </div>
  );
}
