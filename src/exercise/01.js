// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function init(count) {
  return {
    count: count,
  }
}

function Counter({initialCount = 0, step = 500}) {
  // 💰 React.useReducer(countReducer, initialCount)

  const countReducer = (state, action) => {
    debugger
    if (action.type === 'INCREMENT') {
      return {...state, ...{count: state.count + action.step}}
    }
  }

  const [state, dispatch] = React.useReducer(countReducer, initialCount, init)
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
