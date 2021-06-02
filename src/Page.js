//Practice js file for Home. Just for reference.

import { useState } from "react";

const Home = () => {
    const [name , setName] = useState('ABC');
    const [age , setAge] = useState(26);

    const handleClick = (e) =>{
        // console.log('hello', e);
        setName('DHHHH');
        setAge(100);
    }

    // const handleClickAgain = (name) => {
    //     console.log('hello '+name)
    // }
    return (
        <div className="home">
            <h1>HOME PAGE</h1>
            <h3> {name} is {age} years old </h3>
            <button onClick = {handleClick}>Click Here</button>
            {/* <button onClick = {()=>handleClickAgain('abc')}>Click</button> */}
        </div>    
    );
}
 
export default Home;
