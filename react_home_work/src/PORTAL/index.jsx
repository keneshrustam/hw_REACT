// import { Children } from 'react';
import React, { createPortal } from 'react-dom';

// Используйте порталы для рендеринга компонентов за пределами их родительского контейнера. Создайте компонент, который рендерит содержимое в портале, например, в другой части документа.
const Portal = (props) => {
    const title = 'i parent'
    const {
        children,
        container=document.body
     } = props
    return createPortal(children, container)
    // return <div>{props.children}</div>
};    
    // <div style={{backgroundColor:"red"}}>{children}</div> 
// const Portal = ({ children, container = document.body }) => {
//     const title = 'i parent';
//     return createPortal(children, container);
// };

 export default Portal;
