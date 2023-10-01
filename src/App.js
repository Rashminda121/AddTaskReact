
import './App.css';
import { useState } from 'react';


function App() {
  
const [todoList, setTodolist] =useState([]);
const [newTask,setnewTask] =useState("");

const handleChange=(event)=>{
  setnewTask(event.target.value);
}

const addTask=()=>{
  setTodolist([...todoList,newTask]);
}

const handleDelete=(taskName)=>{
  //const newtodoList= todoList.filter((task)=> taskName !== task)
  setTodolist(todoList.filter((task)=> taskName !== task));
}

  return (
    <div className="App">
      <div className="addTask">
          <input type="text" onChange={handleChange}/>
          <button onClick={addTask}>Add Task</button>
      </div>
      <div clsssName="list">
          {todoList.map((task,key)=>{
            return (
            <div> 
              <h1 key={key}>{task}</h1>
              <button onClick={() => handleDelete(task)}>Delete</button>
            </div>);
          })}
      </div>
    
    </div>
  );
}




export default App;
