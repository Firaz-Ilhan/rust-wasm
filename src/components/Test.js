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
        <div>
            <div className="card">
                <div>
                    <h2>{title}</h2>
                    <div className="input">
                        <input className="input_field" type="number" placeholder="enter a number"
                            value={value} onChange={e => setValue(e.target.value)} onKeyPress={handleKeyPress} />
                        <button className="card_btn" onClick={addResult}>Calculate</button>
                    </div>
                    <p className="result">Result: {result}</p>
                </div>
            </div>
        </div>
    );
}

export default Test
