import { useState } from 'react'

const MostVotes = ({points, anecdotes}) => {
	const result = Object.entries(points).reduce((a, b) => a[1] > b[1] ? a : b)[0]	
	return(anecdotes[result])
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
const [selected, setSelected] = useState(0)
const [votes, setVotes] = useState(0)
const [points, setPoints] = useState({0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0})
const updatePoints = () => {
	const copy = points
	copy[selected] +=1
	setPoints(copy)
	const newVotes = copy[selected]
	setVotes(newVotes)
}
return (
	<div>
		<h1> Anecdote of the day </h1>
		<div>
      			{anecdotes[selected]}
		</div>
		has {votes} votes
		<div>
		    <button onClick={updatePoints}>vote</button>
		    <button onClick={() =>{ const newAnecdote = Math.floor(Math.random() * 8);setSelected(newAnecdote ); const newVotes = points[newAnecdote];setVotes(newVotes)}}> next anecdote </button>
		    <h1> Anecdote with the most votes </h1>     
		    <MostVotes points={points} anecdotes={anecdotes} />
	    </div>
	  </div>
  )
}

export default App
