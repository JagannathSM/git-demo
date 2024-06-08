import './App.css'
import Cards from './components/Cards'
import Filter_cards from './components/Filter_cards'
import ToDoMake from './components/ToDoMake'

export const data=[
  {
    name:"office-task-1",
    disc:"To complete by 5pm"
  },
  {
    name:"office-task-2",
    disc:"To complete by tonight"
  },
  {
    name:"office-task-3",
    disc:"To complete by tomorrow"
  }
]



function App() {

  return (
    <>
    <ToDoMake/>
    </>
  )
}

export default App
