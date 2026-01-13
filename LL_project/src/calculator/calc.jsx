import React from "react";

function Calculator() {
    const buttons = [
        ['C', 'CE', '%', '/'],
        ['7', '8', '9', '*'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '.', '=', ' '],
        ['(', ')', '√', 'log']
    ];

    return (
        <div style={{ width: '300px', margin: '0 auto' }}>
            <h1>Calculator</h1>
            <div style={{ backgroundColor: '#f0f0f0', padding: '10px', marginBottom: '10px' }}>
                <div style={{ fontSize: '24px', textAlign: 'right' }}>0</div>
            </div>
            <div style={{ display: 'grid', gridTemplateRows: 'repeat(6, 50px)', gridTemplateColumns: 'repeat(4, 1fr)', gap: '5px' }}>
                {buttons.flat().map((btn, index) => (
                    <button key={index} style={{ fontSize: '18px' }}>
                        {btn}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Calculator;