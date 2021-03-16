import Count from './components/count';
import './App.css';
import React from 'react';
// import reducer from './reducers/reducer'

// const initialState = {
//   number : 0
// }

const Context = React.createContext("")
const number = 3

function App() {
  // const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <Context.Provider value={number}>
      <div className="App">
        <Count />
      </div>
    </Context.Provider>
  );
}

export default App;
export {Context}
