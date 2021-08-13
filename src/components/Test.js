import React, { useState } from 'react';

const Test = ({ func, title }) => {

    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            addResult()
        }
    }

    const addResult = () => {
        setResult(func(value).toString())
    }

    return (
        <div className="test">
            <h2>{title}</h2>
            <input type="number" value={value} onChange={e => setValue(e.target.value)} onKeyPress={handleKeyPress} />

            <button onClick={addResult}>
                Calculate
            </button>

            <p>Result: {result}</p>
        </div>
    );
}

export default Test
