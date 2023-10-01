
import './App.css';
import { useState } from 'react';
import {Task} from './Task'


function App() {
  
const [todoList, setTodolist] =useState([]);
const [newTask,setnewTask] =useState("");

const handleChange=(event)=>{
  setnewTask(event.target.value);
}

const addTask=()=>{
  const task={
    id: todoList.length===0? 1 : todoList[todoList.length-1].id +1,
    taskName : newTask
  }
  setTodolist([...todoList,task]);
}

const handleDelete=(id)=>{
  //const newtodoList= todoList.filter((task)=> taskName !== task)
  setTodolist(todoList.filter((task)=> task.id !== id));
}

  return (
    <div className="App">
      <div className="addTask">
          <input type="text" onChange={handleChange}/>
          <button onClick={addTask}>Add Task</button>
      </div>
      <div clsssName="list">
          {todoList.map((task)=>{
           return (
            <Task 
              taskName={task.taskName}  
              id={task.id} 
              deleteTask={handleDelete}
              />
           );

          })}
      </div>
    
    </div>
  );
}




export default App;
