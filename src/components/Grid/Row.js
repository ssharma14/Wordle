import React from 'react'
import Cell from './Cell';

const cellLength = [0, 1, 2, 3, 4];

function Row () {
    const emptyCells = Array.from(Array(cellLength.length));
    return (
        <div className='row' >
            {emptyCells.map((_, i) => (
                <Cell key={i} letterpos={i}/>
            ))}
        </div>
    )
}

export default Row