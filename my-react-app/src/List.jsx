import { useLayoutEffect } from "react";

function List(){
    const countries=[{id: 1,name:'England'},
                     {id:2,name:'Spain'},
                     {id:3,name:'India'},
                     {id:4,name:'Australia'},
                     {id:5,name:'Germany'}];
    const listItems=countries.map(
        country=><li>{country.name}</li>
    );
    return(
        <ul>{listItems}</ul>
    );
}
export default List