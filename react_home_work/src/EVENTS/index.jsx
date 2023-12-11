import React, { useRef }from 'react';
function logEvent(eventName) {console.log(eventName)}


const Headers = () => {
  return (
    <header>
      <h1>Мое Приложение</h1>
    </header>
  );
};


const Sidebar = () => {
  return (
    <aside>
      <nav>
        <ul>
          <li>Главная</li>
          <li>О нас</li>
          <li>Контакты</li>
        </ul>
      </nav>
    </aside>
  );
};



const Events =() => {
    const ref = useRef()
    const NameEvents = (name) => {
      console.log(name);
    };


    
    return (

      <div>
        <Headers />
        <Sidebar />
        <button ref={ref}
        // onKeyDown={() => logEvent("onKeyDown")}
        onClick={ ()=>{NameEvents("onClick")} }
        onBlur={() =>{NameEvents("onBlur")} }
        onMouseOver={() =>{NameEvents("mouseOver")}}
        onMouseDown={() =>{NameEvents("mouseDown")}}
        onWheel={() => logEvent("onWheel")}
        onMouseOut={() =>{NameEvents("mouseOut")}}
        onMouseUp={() =>{NameEvents("mouseUp")}}
        onMouseMove={() =>{NameEvents("mouseMove")}}
        onDoubleClick={() => logEvent("onDoubleClick")}
        

      >Click here</button>
      </div>
    )
    
    
}

export default Events;