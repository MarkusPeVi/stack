const Part = ( props) => {
	return(
		<div >
			<p >
				{props.name} {props.exercises}
			</p>
		</div>
	)
}

const Header = (props) => {
	return(
		<div>
			<h1> {props.course.name} </h1>
		</div>
	)
}

	const Content = (props) => {
			const m = props.parts.map((val, i) => <Part name= {val.name} exercises = {val.exercises} key={i} />)
	return(
		<div> 
			{m}
		</div>
	)
}

	const Total = (props) => {
	return(
		<div>
			<p> {props.exercises.reduce((prev, cur)=> cur.exercises+prev,0)} </p> 
		</div>
	)
}

const App = () => {
 const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
return (
    <div>
	 <Header course={course} />    
	 <Content parts = {course.parts}  /> 
 	<Total exercises = {course.parts}/>
  </div>
  )
}

export default App
