import React, {useState/*esto es un hook*/}/*esto es un destructuring*/from 'react';
import logo from './logo.svg';
import './App.css';
import Count from './Count';
import Controls from './Controls';

function App() {
  const [count,setCount] = useState(0);// hook recibe como parametro el valor inicial del estado
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <div className="App-buttons">
            <Count num={count}/> {/*numero es una propiedad(prop) de count*/}
            <Controls
              aumentar={()=>setCount(count+1)}
              disminuir={()=>setCount(count-1)}
              reset={()=>setCount(0)}
            />
          </div>
      </header>
    </div>
  );
}

export default App;
