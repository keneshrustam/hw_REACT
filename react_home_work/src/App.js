import { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
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
import TextInput from './jsx/HUKI/textInput';
import ThemeProvider from './jsx/HUKI/provider';
import Header from './jsx/HUKI/header';
import Content from './jsx/HUKI/content';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';



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


      {/* <TextInput />
        
      <ThemeProvider>
        <Header />
        <Content />
      </ThemeProvider> */}
      <BrowserRouter>
      <ul>
        <li><Link to={'/Home'}>Главная</Link></li>
        <li><Link to={'https://www.codifylab.com/'}>О нас </Link></li>
        <li><Link to={'/Contact'}>Контакты</Link></li>
      </ul>
          <Routes>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='*' element={<Error/>}/>
          </Routes>      
      </BrowserRouter>
    </div>
  )
}

export default App;






