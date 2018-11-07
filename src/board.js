import React, { Component } from 'react';
import BoardSquare from './board-square'



class Board extends Component {
  render() {
    const rows = new Array(15).fill(null)
    const col = new Array(15).fill(null)
    return (
      <div className='board'>
      {
        rows.map((row, i) => {
          return <div className='row'>
          {
            col.map((col, j) => {
              return <BoardSquare key={i.toString() + j.toString()} id={[i, j]} />
            })
          }
          </div>
        })
      }
      </div>
    );
  }
}

export default Board;
