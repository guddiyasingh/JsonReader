// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea'
import React from "react";
function App() {
  return (
   <>
   <Navbar/>
<Textarea/>
{/* <div className="form-floating">
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
  <label for="floatingTextarea2">Comments</label>
</div> */}
   </>
  );
}

export default App;
