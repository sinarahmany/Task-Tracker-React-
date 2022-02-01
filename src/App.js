import { useState } from "react";
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
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
  const name = 'Sina'
  return (
    <div className="container" >
      {/* <h1>Hi {name}</h1> */}
      <Header  />
      <Tasks tasks={tasks} />
      {/* <Header title='WHHHHHa!' /> */}
    </div>
  );
}

export default App;
