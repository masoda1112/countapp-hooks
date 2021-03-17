// import { render } from 'react-dom'
import { Context } from "../App"
import React from 'react'
import DisplayCount from "./displayCount"

const Count = () =>{
    return (
    <Context.Consumer>
      { ({dispatch}) => (
        <div className="count-area">
          <DisplayCount />
          <div className="increment" onClick={() => dispatch({ type : 'INCREMENT' })}>＋</div>
          <div className="decrement" onClick={() => dispatch({ type : 'DECREMENT' })}>-</div>
        </div>
      )}
    </Context.Consumer>
  );
}

export default Count;