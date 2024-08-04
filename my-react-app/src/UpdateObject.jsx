import { useState } from "react";

function UpdateObject(){
    const[car,setCar]=useState({year:2024,
                                make:"Ford",
                                model:"Mustang"});
    function ChangeYear(event){
        setCar(c=>({...c,year:event.target.value}));
    }                            
    function ChangeMake(event){
        setCar(c=>({...c,make:event.target.value}));
    }                            
    function ChangeModel(event){
        setCar(c=>({...c,model:event.target.value}));
    }                            
    return(<div>
                <p>Your Favourite Car is: {car.year} {car.make} {car.model}</p>
                <input type="number" value={car.year} onChange={ChangeYear} />
                <br />
                <input type="text" value={car.make} onChange={ChangeMake} />
                <br />
                <input type="text" value={car.model} onChange={ChangeModel} />
            </div>);
}
export default UpdateObject