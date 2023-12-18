import { useState } from 'react';
import './App.css';
import Events from './EVENTS';
import Portal from './PORTAL';
import Child from './PORTAL/Child1';
import Input from './TODO';
import Todo from './TODO';
import Button from './TODO/input';
import Props from './jsx';
import SecendTask2 from './jsx/index2';
import TodoList from './TODO/input';
import Counter from './jsx/HUKI';
import Itemlist from './jsx/HUKI/itemlist';
import AppEND from './jsx/HUKI/itemlist';

function App() {
  // const [name, setName] = useState("...")

  // const handleChange = (name) => {
  //   console.log(name);
  //   setName(name)
  // }

  return (
    <div>
      {/* <h1>my react pril</h1>
      <Props colorItem = "pink"/>
      <Props/> */}

      {/* <Events 
        btnTitle='click'
        onClick={(event) => console.log("click 1")}
        onChange={(event) => console.log("Change")}
        onBlur={(event) => console.log("Blur")}
        onFocus={(event) => console.log("Focus")}
        onMouseMove={(event) =>console.log("mouseMove")}
        onMouseUp={(event) =>console.log("mouseUp")}
        onKeyDown={(event) =>console.log("keyDown")}
        keydown={(event) => console.log("keydown")}
        onKeyUp={(event) =>console.log("keyUp")}
      /> */}
      
      {/* <Portal
      container={document.body}
      >

      <button>CLICK 1</button>
      </Portal> 
      <Portal
      container={document.body}
      >
        
      <button>CLICK 2</button>
      </Portal> 
      <Portal
      container={document.body}
      >
        
      <button>CLICK 3</button>
      </Portal> 
      <Portal>
        <Child />
      </Portal> */}

      {/* <Input name={name} onChange={handleChange}>
        
      </Input>
      <TodoList /> */}


      {/* <Counter /> */}


      {/* <Itemlist /> */}

      <AppEND />

    </div>
  )
}

export default App;






