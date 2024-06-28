import { useState } from "react";
function Pratice3()
{
    var [inpt,setInpt]=useState()
    var [reslt,setReslt]=useState()
    var Stinput= (T) =>{ 
    setInpt(T.target.value);
        };
    var Resultt=() => {
        var forcheck=(inpt);
        setReslt(
            forcheck==='1'?<h2>This is for Heading First</h2>:
            forcheck==='2'?<h2>This is for Second Heading</h2>:
            forcheck==='3'?<h2>This is for 3rd Heading</h2>:
            <h3>No condation against the value</h3>
        );
    };    
    return (
        <>
        <h1>Number</h1>
        <input type="text" value={inpt} onChange={Stinput} />
        <button onClick={Resultt}>ShowResult</button>
        <h2>{reslt}</h2>
        </>
    )
}
export default Pratice3;