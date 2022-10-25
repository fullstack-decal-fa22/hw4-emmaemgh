import React from 'react';
/* Add any imports you think you might need here! */
import Color from './Color'

const Menu = () => { 

    return (
      <div className="colorOptions">
          <Color color="red"/>
          <Color color="pink"/>
          <Color color="blue"/>
          <Color color="green"/>
      </div>
    );
}

export default Menu;