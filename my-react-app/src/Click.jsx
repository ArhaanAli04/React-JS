function Click(){
    const handleClick=function(){
        console.log("You clicked this button");
    }
    let count=0;
    const handleClick2=function(name){
        if(count<3){
            count++;
            console.log(`${name} has clicked me ${count} times `);
        }else{
            console.log(`${name} stop clicking me`);
        }

    }
    const handleClick3=(e) =>e.target.textContent="Submitted";
    return(
        <>
        <button onClick={()=>handleClick2("John")}>Click me</button>
        <button onClick={handleClick3}>Submit</button>
        </>
    );
}
export default Click