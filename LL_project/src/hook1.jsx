import React,{Component} from "react";
export default function HookExample(){
    const [count , setCount] = React.useState(0);
    const [name,setName] = React.useState("Guest");
    const [checked , setChecked] = React.useState(true);
        return(
        <div>
            yes<input type="Checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)}></input>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <h2>Hello, {name}!</h2>
            <input type="Text" value={name} onChange={(e) => setName(e.target.value)}></input>
        </div>
        )
}
export {HookExample};   