// import React from "react"
import React,{useState} from 'react'
import backgroundImage from "./pot.jpg"


function Textarea(){
  const[text,setText] = useState("")
  const clear =(()=>{
  let newText = ("")
  setText(newText)
  });


const divStyle ={

  backgroundImage: `url(${backgroundImage})`,
  height: '100vh',  // Set the height
  backgroundSize: 'cover',  // Cover the entire area
  backgroundPosition: 'center',  // Center the image
};
  

return(
  <>
  <div className="containr" style={{display:"flex" ,flexDirection:"row",
  justifyContent:"space-evenly",/*border:"2px solid red"*/ marginTop:"50px" ,
  backgroundImage:URL("https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 ")}}  >
   {/* <img src="https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 "
    alt="AirMax Pro" /> */}
    
 <div className="form-floating">
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" 
  style={{height:"400px",width:"500px" , marginTop:"100px", backgroundColor:"lightblue"/*border:"2px solid red"*/}}></textarea>
  <label for="floatingTextarea2" style={{marginTop:"50px"}}>Textarea 2</label>
</div> 

<div className="form-floating">
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" 
  style={{height:"400px",width:"500px" , marginTop:"100px",backgroundColor:"lightblue"/*border:"2px solid red"*/}}></textarea>
  <label for="floatingTextarea2" style={{marginTop:"50px"}}>Textarea 1</label>
</div> 
</div>
<button className="button"style={{marginTop:"50px",marginLeft:"200px" , height:"40px",width:"80px"
,borderRadius:"50px"}} onClick ={clear}  >Clear</button>
</>

)}
export default Textarea;