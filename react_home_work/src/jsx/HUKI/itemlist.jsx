import React, { useCallback } from 'react';

const Itemlist = () => {
    const items = [1,2,3,4,5];
    const handleItemClick = useCallback((index) => {
          console.log(`Кликнут элемент с индексом: ${index + 1}`);
        },[]);
    return (
        <div>
            <ul>
                {items.map((item, index) => (                 
                    <li key={index} onClick={() => handleItemClick(index)}>                       
                        {item}
            </li>
    ))}
            </ul>
        </div>
    );
};

export default Itemlist;