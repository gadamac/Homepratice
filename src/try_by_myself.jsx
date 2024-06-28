import { useState } from "react";
function Try(){
    var [input,setinput]=useState ()
    var [reslt,setReslt]=useState()
    var forinput = (A) => {
       setinput(A.target.value);
    };
    var forresult = () =>{
        var check=(input)
        setReslt(
            check==='1'? <h3>you enter for condation one</h3>:
            check==='2'? <h3>you enter for condation two</h3>:
            check==='3'? <h3>you enter for condatio three</h3>:
            <h3>you enter wrong value</h3>
        );
    };
    return(
        <>
        <input type="text" value={input} placeholder="enter 1,2 or 3" onChange={forinput}/>
        <button onClick={forresult}>Show-Result</button>
        <h3> {reslt} </h3>
        </>
    )
}
export default Try;