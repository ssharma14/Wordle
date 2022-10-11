import React from 'react'

function Cell({ letter, status, letterpos }) {
  return (
    <div className="cell" letterpos={letterpos} letter={letter}>{letter}</div>
  )
}

export default Cell