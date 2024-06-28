import { useState } from "react";
function Check()
{
    let [val,setVal]=useState(2)
    return(
        <>
        <h1>this is for a condation</h1>
        {val==1? <p>this is for condation one</p> :val==2? <p>this is for condation two</p>: <p> this isuser 3</p>  }
        </>
    )

}
export default Check;