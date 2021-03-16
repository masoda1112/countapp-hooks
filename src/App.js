import Count from './components/count';
import './App.css';
import React, {useReducer} from 'react';
import reducer from './reducers/reducer'

const initialState = {
  number : 3
}

const Context = React.createContext("")

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <Context.Provider value={{state, dispatch}}>
      <div className="App">
        <Count />
      </div>
    </Context.Provider>
  );
}

export default App;
export {Context}
