import React, { useCallback, useMemo, useState } from 'react';

const ItemList = () => {
  const ItemList1 = () => {
    const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    const filteredItems = useMemo(() => items.filter(item => item % 2 === 0), [items]);

    const handleItemClick = useCallback(index => {
      console.log(`Index ${index}`);
    }, []);
    
    return (
      <div>
        <ul>
          {items.map((item, index) => (
            <li key={index} onClick={() => handleItemClick(index)}>
              {item}
            </li>
          ))}
        </ul>

        <h2>оптимизация вычислений:</h2>
        <ul>
          {filteredItems.map((item, index) => (
            <li key={index} onClick={() => handleItemClick(index)}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div>
      <ItemList1 />
    </div>
  );
};

export default ItemList;
