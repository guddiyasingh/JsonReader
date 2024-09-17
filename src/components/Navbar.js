import React from "react"
// import React,{useState} from 'react'


export default function Navbar(){


  const style = {
    backgroundColor: 'lightblue',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center',
    height:"10px",
  };
    // const[color ,setColor] = useState("")
    return(

<nav className="navbar bg-body-tertiary ">
 
  <div className="container" style={style}>
  <h6>Json Reader</h6>
    {/* <a className="navbar-brand" style={{marginBottom:"6px"}} href="/">
     
      <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Bootstrap" width="30" height="24"/>
    </a> */}
  </div>
</nav>
    )
}