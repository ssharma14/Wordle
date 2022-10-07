import React, { Component } from 'react'
import Cell from './Cell';

const cellLength = [0, 1, 2, 3, 4];

class Row extends Component {
    render() {
        const emptyCells = Array.from(Array(cellLength.length));
        return (
            <div className='row'>
                {emptyCells.map((_, i) => (
                <Cell key={i} />
                ))}
            </div>

        )
    }
}

export default Row