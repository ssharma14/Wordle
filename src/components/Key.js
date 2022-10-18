import React, { useContext } from "react";
import { AppContext } from "./Game";

function Key({ keyVal, bigKey, status}) {
  const { onSelectLetter, onEnter, onDelete, letterStatus} = useContext(AppContext);

  const selectLetter = () => {

    if (keyVal === "ENTER") {
      onEnter();
     
    } else if(keyVal === "DELETE"){
        onDelete();
    } else{
      onSelectLetter(keyVal);
    }
  };

  const getClass = () => {
    let letterStatusValue = 'key';
    for (var i = 0; i <letterStatus.length; i++) {
      if(letterStatus[i][0] === keyVal){
        
        status = letterStatus[i][1];
        if(status === 1){
          letterStatusValue += " close";
        } else if(status === 2){
          letterStatusValue += " correct";
        } else{
          letterStatusValue += " wrong";
        }
      }
    }
    return letterStatusValue;
  }
  
  return (
    <div key={keyVal} className={ getClass()} id={bigKey ? "big" : null} onClick={selectLetter}>
      {keyVal}
    </div>
  );
}

export default Key;