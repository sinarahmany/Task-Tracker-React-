import { useState } from "react";
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id:1,
        text: 'Meeting ',
        day: 'Feb 4th',
        reminder:true,
    },
    {
        id:2,
        text: 'Meeting at school',
        day: 'Feb 6th',
        reminder:true,
    },
    {
        id:3,
        text: 'Food shopping ',
        day: 'Feb 7th',
        reminder:false,
    }

])

// Add Task
const addTask = (task) =>{
  const id = Math.floor(Math.random() * 1000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}

//Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder
const togglereminder = (id) =>{
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}
  const name = 'Sina'
  return (
    <div className="container" >
      {/* <h1>Hi {name}</h1> */}
     <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
      { showAddTask &&  <AddTask onAdd={addTask} /> /* this is the short way of if statment */ } 
      { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={togglereminder} /> : 'No Tasks Exist' }
      {/* <Header title='WHHHHHa!' /> */}
    </div>
  );
}
export default App;
