import React from 'react'
import { useState } from 'react';

const Content = () => {
    function getName(){
        const names = ["Rahavi","Aanchikan","Jas","Thenusan","Ajusan"];
        let ran = Math.floor(Math.random()*5);
        return names[ran];
    }
    function handleClick(){
        console.log("You are Subscribed!!!!");
    }
    function handleClicks(name){
        console.log(`You are Subscribed!!!! ${name}`);
    }
    function handleClicks(e){
        console.log(e.target.innerText);
    }
    // React useState_Hook
    const [count,setCount] = useState(100);
    // Here 99 is count means initial count.
    // Dont bring function inside the useState directly bring it in arrrow function as () => name(). and 
    // dont put object inside that because it confuse to select one so bring each from object in seperate useState
    function incrementFunction(){
        // setCount(count + 1); for one number increment
        setCount((prevCount) => {return prevCount + 1});
        setCount((prevCount) => {return prevCount + 1});
        setCount((prevCount) => {return prevCount + 1});
    }
    function decrementFunction(){
        // setCount(count - 1); for one number decrement
        setCount((prevCount) => {return prevCount - 1});
        setCount((prevCount) => {return prevCount - 1});
        setCount((prevCount) => {return prevCount - 1});
        setCount(prevCount => prevCount - 1);
    }
    const [name,setName] = useState("Rahavi");
    function getName(){
        const names = ["Rahavi","Aanchikan","Jas","Thenusan","Ajusan"];
        let ran = Math.floor(Math.random()*5);
        setName(names[ran]);
    }
    return (
        <main>
            {/* React onclick Components */}
            {/* <p onDoubleClick={handleClick}>Let's Play with {getName()}</p> */}
            {/* <button onClick={handleClick}>Subscribe</button> */}
            {/* <button onClick= {() => handleClicks("Rahavi")}>Subscribe</button> */}
            {/* When we need to pass parameter */}
            {/* <button onClick= {(e) => handleClicks(e)}>Subscribe</button> */}
            <p>Let's {name} Play</p>
            <button onClick={getName}>Subscribe</button>
            <button onClick={decrementFunction}>-</button>
            <span>{count}</span>
            <button onClick={incrementFunction}>+</button>
        </main>
        
    )
}

export default Content