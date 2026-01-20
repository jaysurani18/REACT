import React, { useState } from 'react';
export default function Hook2() {
    const [user, setUser] = useState({
        name: "Guest",
        age: 25,
        ce: true,
        city: "Rajkot",
    });
    return <>
    <label>Name: </label>
    <input type="text" 
    placeholder='Name'
    value={user.name}
    onChange={(e) => setUser({...user, name: e.target.value})}
    />
    <br/>
    <label>Age: </label>
    <input type="number" value={user.age}
    onChange={(e) => setUser({...user, age: e.target.value})}
    />
    <br/>
    <label>City: </label>
    <input type="text" 
    placeholder='City'
    value={user.city}
    onChange={(e) => setUser({...user, city: e.target.value})}
    />
    <br/>
    <label>CE: </label>
    <input type="checkbox" 
    checked={user.ce}
    onChange={(e) => setUser({...user, ce: e.target.checked})}
    />
    <h1>Name: {user.name}</h1>
    <h1>Age: {user.age}</h1>
    <h1>City: {user.city}</h1>
    <h1>CE: {user.ce ? "Yes" : "No"}</h1>
    </>
}