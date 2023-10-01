export const  Task= (props) => {
    return (
        <div> 
          <h1 style={{color: props.complete?"green":"black"}}>{props.taskName}</h1>
          <button onClick={() => props.deleteTask(props.id)}>Delete</button>
          <button onClick={() => props.completeTask(props.id)}>Complete</button>
        </div>);
}
 
