import React, { useState } from "react";

export default function UseState3() {
    const [arr1, setArr1] = useState([10, 20, 30, 40, 50]);

    const [val1, setVal1] = useState(0);
    const [val2, setVal2] = useState(0);

    const addElement = (val) => {
        setArr1([...arr1, val]);
    }

    const removeElement = (value) => {
        setArr1(arr1.filter((item) => item !== value));
    }

    const updateElement = (item, value) => {
        setArr1(arr1.map((i) => (i === item ? value : i)));
    }

    return (<>
        <h1>array elements are : {arr1.join(', ')}</h1>
        <br />
        <input type="number"
            onChange={(e) => setVal1(parseInt(e.target.value))}
            placeholder="add something " />

        <br />

        <input type="number" 
        onChange={(e) => setVal2(parseInt(e.target.value))}
        placeholder="remove something"/>


        <button onClick={() => addElement(val1)}>Add Element</button>
        <button onClick={() => removeElement(val2)}>Remove Element</button>
        <button onClick={() => updateElement(val1, val2)}>Update Element</button>
    </>)
}