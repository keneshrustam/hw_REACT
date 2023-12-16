import React, { useEffect, useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("Значение счетчика изменено:");
    }, [count])

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };


    return (
        <div>
            <p>Текущее значение счетчика: {count}</p>
            <button onClick={decrement}>Уменьшить</button>
            <button onClick={increment}>Увеличить</button>
        </div>
    );
};

export default Counter;