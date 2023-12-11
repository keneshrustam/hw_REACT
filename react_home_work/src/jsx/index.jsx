import React from 'react';

const Props = (props) => {
    const {colorItem} = props
    return (
        <div>
            <h1 style={{color: colorItem}}>Hello Nadira</h1>
            <p>Это абзац текста в JSX.</p>
        </div>
    )
}

export default Props;