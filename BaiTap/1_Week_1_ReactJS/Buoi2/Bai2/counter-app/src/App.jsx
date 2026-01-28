import { useState } from 'react'
import './index.css';

function App() {
  const [count, setCount] = useState(0)
  function tang() {
    setCount(count+1);
  }

  function giam() {
    if (count>0) {
      setCount(count-1);
    }
  } 

  function reset() {
    setCount(0);
  }

  const classSo =count >10? "counter-number red":"couter-number";

  return (
    <div className='counter-page'>
      <div className='counter-box'>
        <h1 className='couter-title'>Couter App</h1>

        <div className={classSo}>{count}</div>

        <div className='counter-buttons'>
          <button onClick={giam}>-</button>
          <button onClick={tang}>+</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  )

}

export default App
