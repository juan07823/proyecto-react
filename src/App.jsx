/Componente Title/
const Title = ({ course }) => {
  return (
    <>
      {/* Título h1 */}
      <div>
        <h1>{course}</h1>
      </div>
    </>
  )
}

/* Componente Course*/
const Course = ({ parts }) => {
  return (
    <>
      {/* Nombre y cantidad de ejercicios */}
      <div>
        <p>{parts[0].name} {parts[0].exercises} (Cantidad de ejercicios del primer objeto)</p>
        <p>{parts[1].name} {parts[1].exercises} (Cantidad de ejercicios del segundo objeto)</p>
        <p>{parts[2].name} {parts[2].exercises} (Cantidad de ejercicios del tercer objeto)</p>
      </div>
    </>
  )
}


const App = () => {
  const course = 'Half Stack application development';
  const parts = [
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

  return (
    <div>
      <Title course={course} />
      <Course parts={parts} />
    </div>
  )
}

export default App