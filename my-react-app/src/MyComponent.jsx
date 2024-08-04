import { useState } from "react";

function MyComponent(){
    const [name,setName]=useState("User");
    const UpdateName=()=>{
        setName("Arhaan");
    }
    const [age,setAge]=useState(0);
    const incrementAge=()=>{
        setAge(age+1);
    }
    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={UpdateName}>Set Name</button>
            <p>Age: {age}</p>
            <button onClick={incrementAge}> Increment Age</button>
        </div>
    );
}
export default MyComponent