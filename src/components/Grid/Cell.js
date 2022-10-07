import React, { Component } from 'react'

class Cell extends Component {
    render() {
    const cellLength = [0, 1, 2, 3, 4];
      return (
        <div className="cell" cellLength={cellLength}></div>
      )
    }
}

export default Cell