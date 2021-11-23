import React from "react";
import SpotContainer from "./SpotContainer";
import MiddleSearchBar from "./MiddleSearchBar";
import MiddleTextBox from "./MiddleTextBox";
import Button from "./MiddlePostButton";

export default function MiddleContainer() {
  return (
    <div>
      <h1>HOME</h1>
      <div>
        <MiddleSearchBar />
        <MiddleTextBox />
        <Button />
      </div>
      <div>
        <SpotContainer />
      </div>
    </div>
  );
}
