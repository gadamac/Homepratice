import { useState } from "react"
function Checkk()
{
    let [vara,setVara]= useState(1)
    if(vara==2)
    return(
        <h1>true</h1>
    )
    else if(vara==1)
        return(
    <p>this is two</p>
    
        )
    else
    return(
<>
<h1>false</h1>
</>
    )
}
export default Checkk;