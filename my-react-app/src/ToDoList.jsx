import { useState } from "react";

function ToDoList(){
    const[task,setTask]=useState(["Eat","Sleep"]);
    const[newTask,setNewTask]=useState("");
    function ChangeInput(event){
        setNewTask(event.target.value);
    }
    function addTask(){
        if(newTask.trim()!=""){
            setTask(t=>[...t,newTask]);
            setNewTask("");
        }
        
    }
    function deleteTask(index){
        const updateTasks=task.filter((_,i)=>i!=index);
        setTask(updateTasks);
    }
    function moveTaskUp(index){
        if(index>0){
            const arr=[...task];// create new array
            [arr[index],arr[index-1]]=[arr[index-1],arr[index]];//swap
            setTask(arr);
        }
    }
    function moveTaskDown(index){
        if(index<task.length-1){
            const arr=[...task];// create new array
            [arr[index],arr[index+1]]=[arr[index+1],arr[index]];//swap
            setTask(arr);
        }
    }
    return(<div className="to-do-list">
                <h1>To-do-List</h1>
                <div>
                    <input type="text" placeholder="Enter a task" value={newTask} onChange={ChangeInput}/>
                    <button className="add-button" onClick={addTask}>Add</button>
                </div>
                <ol>
                    {task.map((task,index)=>
                     <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button" onClick={()=>deleteTask(index)}>
                            Delete
                        </button>
                        <button className="move-button" onClick={()=>moveTaskUp(index)}>
                            Up
                        </button>
                        <button className="move-button" onClick={()=>moveTaskDown(index)}>
                            Down
                        </button>
                     </li>
                     )}
                </ol>
           </div>
    );
}
export default ToDoList