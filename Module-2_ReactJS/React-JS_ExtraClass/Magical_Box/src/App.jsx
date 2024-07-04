import './App.css'
import SchoolProvider from './Components/SchoolContext'
import ClassRoom from './Components/ClassRoom'

function App() {

  return (
    <SchoolProvider>
      <ClassRoom/>
    </SchoolProvider>
  )
}

export default App
