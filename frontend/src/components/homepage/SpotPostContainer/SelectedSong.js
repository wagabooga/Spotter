import React from "react";

export const SelectedSong = (props) => {
  return (
    <>
      <div className="search-result">
        <button className="cancel-button" onClick={props.deselect}>
          x
        </button>
        <div className="artist">
          <div>{props.artist}</div>
          <div>{props.title}</div>
        </div>
        {/* uri is used for the player */}
        {/* {props.uri} */}
        <img src={props.albumUrl} />
      </div>
    </>
  );
};
