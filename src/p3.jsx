function Prtc3()
{
    return(
        <>
        <h1>This is a Heading </h1>
        <p>this is a Component and it is used for different puprposes and has its own abality</p>
        <button>i am button </button>
        </>
    )
}
function PrtComponent3()
{
    var componet = {
        phoneno: 34593739,
        address: 'banda pagwaria',
        abality: 'to do nothing'


    }
    return(
        <>
        <h3> my phone number is this {componet.phoneno} .</h3>
        <h2>here we dont write anything just need to use the uper Component</h2>
        <img src="Barbara_Fasionable_Adventure03190.png" alt="This is Picture" />
        <Prtc3/>
        </>
    )
}
export default PrtComponent3;