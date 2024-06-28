function Ali(){
    return(
        <>
        <h1>This is a Heading</h1>
        <button>Button Component</button>
        </>
    )
}
function Mohummad()
{
    let Profile ={
        name:'awais',
        fname: 'asif',
        
    }
    return(
        <>
        <h1>{Profile.name} </h1>
        <h1> {Profile.fname} </h1>
        <p>this is a paragraph</p>
        <Ali/>
        </>
    )
}
export default Mohummad;