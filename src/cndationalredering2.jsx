import { useState } from "react";
function Redering()
{

    let  [comp,setComp]=useState();
    var Optaion= (F) => {
        setComp((F.target.value))
    }
    return(
        <>
        <select onChange={Optaion}>
            <option value="one">First</option>
            <option value="two">Second</option>
            <option value="three">Third</option>
        </select>

        {comp==='one' ?(
                <h3>This is for first option</h3>
            ):
            comp==='two'?
            (
                <h3>this is for 2nd option</h3>
            ):
            (
                <h3>this is for third option</h3>
            )
        
        }
        </>
    );
}
export default Redering;