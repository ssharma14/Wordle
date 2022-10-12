import React, { useContext } from "react";
import { AppContext } from "../App";

function Key({ keyVal, bigKey, disabled }) {
  const { onSelectLetter, onEnter, onDelete} = useContext(AppContext);

  const selectLetter = () => {

    if (keyVal === "ENTER") {
      onEnter();
     
    } else if(keyVal === "DELETE"){
        onDelete();
    } else{
      onSelectLetter(keyVal);
    }
  };
  return (
    <div key={keyVal} className="key" id={bigKey ? "big" : disabled && "disabled"} onClick={selectLetter}>
      {keyVal}
    </div>
  );
}

export default Key;