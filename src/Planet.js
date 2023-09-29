export const Planet= (props)=>{
    return (
      <div className="App">
      {props.isgasplanet && <h1>This is a Gas Planet: {props.name}</h1>}
    </div>
    );
  }; 