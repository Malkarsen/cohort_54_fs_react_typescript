// Lessons
import Lesson_06 from './Lessons/Lesson_06_React_Typescript/Lesson_06'

// Consultations
import Sandwich from './components/Sandwich/Sandwich'

import './App.css'

function App() {

  return (
    <div className='app'>
      {/* lessons */}
      <Lesson_06 />

      {/* Consultations */}
      <Sandwich />
    </div>
  )
}

export default App
