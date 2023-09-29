
import './App.css';
import { Planet } from './Planet';


function App() {

  const planet = [
    {name: "Mars",isGasplanet :false},
    {name: "Earth",isGasplanet :false},
    {name: "Jupitor",isGasplanet :true},
    {name: "Venus",isGasplanet :false},
    {name: "Uraus",isGasplanet :true},

  ];

  return (
    <div className="App">
      {planet.map((pname,key)=>{
        return (
          <Planet name={pname.name} isgasplanet={pname.isGasplanet}/>

        );
      })}

    </div>
  );
}




export default App;
