
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

const deleteTask=(taskName)=>{
  const newtodoList = todoList.filter ((task)=>{
    if (task === taskName){
      return false;
    }else{
      return true;
    }
  });
  setTodolist(newtodoList);
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
            <div> 
              <h1>{task}</h1>
              <button oncClick={() => deleteTask(task)}>x</button>
            </div>);
          })}
      </div>
    
    </div>
  );
}




export default App;
