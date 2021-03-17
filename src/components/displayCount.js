import { Context } from "../App"
import React from 'react'

const DisplayCount = () =>{
  return (
    <Context.Consumer>
      { ({state}) => (
        <div className="count-area">
          <div className="count-number">{state.number}</div>
        </div>
      )}
    </Context.Consumer>
  );
}

export default DisplayCount;