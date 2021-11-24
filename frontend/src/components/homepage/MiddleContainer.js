import React from "react";
import SpotContainer from "./SpotContainer";
import MiddleSearchBar from "./MiddleSearchBar";
import MiddleTextBox from "./MiddleTextBox";
import Button from "./MiddlePostButton";

export default function MiddleContainer() {
  return (
    <div>
      <h2>Home</h2>
      <div>
        <MiddleSearchBar />
        <MiddleTextBox />
        <Button />
      </div>
      <div>
        <SpotContainer />
        <SpotContainer />
      </div>
    </div>
  );
}
