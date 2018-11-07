import React, { Component } from 'react';
import Tile from './tile'


class Rack extends Component {
  render() {
    const letters = ['M', 'A', 'R', 'Y', 'J', 'A', 'N']
    return (
      <div className="rack">
        {
          letters.map(lttr => {
            return <Tile letter={lttr} />
          })
        }
      </div>
    );
  }
}

export default Rack;
