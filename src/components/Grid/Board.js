import React, { Component } from 'react'
import Row from './Row';

const cellLength = [0, 1, 2, 3, 4, 5];

class Board extends Component {
    render() {
        const emptyCells = Array.from(Array(cellLength.length));
        return (
            <div className='board'> 
                {emptyCells.map((_, i) => (
                    <Row key={i} />
                ))}
            </div>
        )
    }
}

export default Board