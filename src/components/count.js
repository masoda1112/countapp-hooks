// import { render } from 'react-dom'
import { Context } from "../App"

const Count = () =>{
  return (
    <Context.Consumer>
      { (value) => (
        <div className="count-area">
          <div className="count-number">{value}</div>
          {/* <div className="increment" onClick={() => dispatch({ type : 'INCREMENT' })}>＋</div>
          <div className="decrement" onClick={() => dispatch({ type : 'DECREMENT' })}>-</div> */}
        </div>
      )}
    </Context.Consumer>
  );
}

export default Count;