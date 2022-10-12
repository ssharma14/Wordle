import React, { useContext } from 'react';
import { AppContext } from "../App";

const Cell = ({ status, letterpos, rowpos }) => {
  const {board} = useContext(AppContext);
  const letter = board[rowpos][letterpos];
  const getClass = () => {
    let c = 'cell cell-'
    if (status === -2) {
      c += 'active'
    } else if (status === -1) {
      c += 'default'
    } else if (status === 0) {
      c += 'wrong'
    } else if (status === 1) {
      c += 'close'
    } else if (status === 2) {
      c += 'correct'
    } else {
      c += 'default'
    }
      
      return c
  }

  return (
    <div className={ getClass()} rowpos={rowpos} letterpos={letterpos}>{letter}</div>
  )
}

export default Cell