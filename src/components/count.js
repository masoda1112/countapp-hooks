// import { render } from 'react-dom'
import { Context } from "../App"
import React, { useContext } from 'react'

const Count = () =>{
  const {state, dispatch} = useContext(Context) 
  return (
    <Context.Consumer>
      { ({state, dispatch}) => (
        <div className="count-area">
          <div className="count-number">{state.number}</div>
          <div className="increment" onClick={() => dispatch({ type : 'INCREMENT' })}>＋</div>
          <div className="decrement" onClick={() => dispatch({ type : 'DECREMENT' })}>-</div>
        </div>
      )}
    </Context.Consumer>
  );
}

export default Count;