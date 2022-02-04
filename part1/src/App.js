import React , {useState} from 'react'
const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

  return (
    <div>
      <div>
        <button onClick={() => {
            setGood(() => good +1);
          }}>good</button>
        <button onClick={() => {
            setNeutral(() => neutral + 1);
          }}>neutral</button>
        <button onClick={() => {
            setBad(() => bad + 1);
          }}>bad</button>
      </div>
      <div>
        <h1> statistics </h1>
      </div>
      <div>
        <p>good {good}</p>
      </div>
      <div>
        <p>neutral {neutral}</p>
      </div>
      <div>
        <p>bad {bad}</p>
      </div>
      <div>
        <p>all {good + neutral + bad}</p>
      </div>
      <div>
        <p>average {(good - bad) / (good + neutral + bad)}</p>
      </div>
    </div>
  )
}

export default App;
