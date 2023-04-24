import { useState } from 'react'


const StatisticLine = ({text, value, extra}) => {
	if(extra !== undefined) {
		return( <tr><td>{text}</td><td>{value}</td><td>{extra}</td></tr>)}
	return(
		<tr>
		<td>{text}</td>
		<td>{value}</td></tr>
	)	
		}

const Statistics = ({good, bad, neutral}) => {
	if(good+bad+neutral<1){
		return(
			<div>No feedback given</div>)
	}
	return(
		<table>
			<tbody>
				<StatisticLine text={"good"} value={good} />
				<StatisticLine text={"neutral"} value={neutral} />
				<StatisticLine text={"bad"} value={bad} />
				<StatisticLine text={"all"} value={(good+bad+neutral)} />
				<StatisticLine text={"average"} value={(good-bad)/(good+bad+neutral)} />
				<StatisticLine text={"positive"} value={good/(good+bad+neutral)*100} extra={"%"} />
			</tbody>
		</table>
		)
}

const Button = ({handleClick,text}) => {
	return(<button onClick={handleClick}> {text} </button>)
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
	  <div>
		<h1> give feedback </h1>
		<Button handleClick={() => setGood(good +1)} text= {"good"}/> 
		<button onClick={() => setNeutral(neutral +1)}> neutral </button>
		<button onClick={() => setBad(bad +1) }> bad </button>
		<h1> statistics </h1>
		<Statistics good={good} bad={bad} neutral={neutral} />
</div>
  )
}

export default App
