import React, { useContext } from "react";

function Key({ keyVal, bigKey, disabled }) {
  const selectLetter = () => {
    if (keyVal === "ENTER") {
      console.log('Enter clicked');
    } else if (keyVal === "DELETE") {
      console.log('delete clicked');
    } else {
      
    }
  };
  return (
    <div className="key" id={bigKey ? "big" : disabled && "disabled"} onClick={selectLetter}>
      {keyVal}
    </div>
  );
}

export default Key;