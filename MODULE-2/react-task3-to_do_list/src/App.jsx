import './App.css'
import Header from './Header'
import Tasks from './Tasks'

export const data=[
  {
    id:1,
    name:"office-task-1",
    disc:"To complete by 5pm",
    task:"false"
  },
  {
    id:2,
    name:"office-task-2",
    disc:"To complete by tonight",
    task:"false"
  },
  {
    id:3,
    name:"office-task-3",
    disc:"To complete by tomorrow",
    task:"false"
  }
]

function App() {

  return (
    <>
    <Header/>
    <Tasks/>
    </>
  )
}

export default App
