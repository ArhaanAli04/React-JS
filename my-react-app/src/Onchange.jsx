import { useState } from "react";

function Onchange(){
    const [name,setName]=useState("User");
    function ChangeName(event){
        setName(event.target.value)
    }
    const[age,setAge]=useState(0);
    function ChangeAge(event){
        setAge(event.target.value);
    }
    const[comment,setComment]=useState("");
    function ChangeComment(event){
        setComment(event.target.value);
    }
    const[payment,setPayment]=useState("");
    function ChangePayment(event){
        setPayment(event.target.value);
    }
    return(<div>
                <input value={name} onChange={ChangeName} type="text" />
                <p>Name: {name}</p>
                <input value={age} onChange={ChangeAge} type="number" />
                <p>Name: {age}</p>
                <textarea value={comment} onChange={ChangeComment} placeholder="Enter your comment"></textarea>
                <p>Your comment: {comment} </p>
                <select value={payment} onChange={ChangePayment}>
                    <option value="">Select an Option</option>
                    <option value="Cash">Cash</option>
                    <option value="MasterCard">MasterCard</option>
                    <option value="Visa">Visa</option>
                    <option value="Giftcard">Giftcard</option>
                </select>
                <p>Payment done through: {payment}</p>
           </div>);
}
export default Onchange