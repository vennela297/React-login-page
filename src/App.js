import React,{useState} from 'react';
import "./App.css";


function App() {
  const [values,setValues] = useState({
    username:"",
    password:""
  });
 

  const handleUsernameChange = (event) => {
      setValues({...values,username:event.target.value})
  }
  const handlePasswordChange = (event) => {
    setValues({...values,password:event.target.value})
}
  return (
    
    <div>
      <div class="form-area">
        
        <img src="https://images.squarespace-cdn.com/content/54b7b93ce4b0a3e130d5d232/1519987165674-QZAGZHQWHWV8OXFW6KRT/icon.png?content-type=image%2Fpng"/>
        <form action="">
            
            <h4>Type in user name and password</h4>
            <input 
            onChange={handleUsernameChange}
             value={values.username} type="text" name="" id="" placeholder="Username"></input>
            <p></p>
            <input
            onChange={handlePasswordChange}
             value={values.password} type="text" name="" id="Password" placeholder="Password"></input>
            <p></p>
            <input  class="btn" type="button" value="Login"></input>
        </form>
        
         </div>
         
         <div style={{height: "680px", overflow: "hidden", position:"absolute",left:"1000px"}} ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%",width: "100%"}}><path d="M420.43,-0.48 C356.65,102.13 489.27,52.78 409.71,154.44 L500.00,150.00 L500.00,0.00 Z" style={{stroke: "none", fill: "#FF0000"}}></path>
    </svg>
  
</div>
        <div style={{height: "680px", overflow: "hidden"}} ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}><path d="M466.13,-1.47 C419.86,102.13 489.27,52.78 458.80,153.45 L500.00,150.00 L500.00,0.00 Z" style={{stroke: "none", fill: "#6495ED"}}></path></svg></div>
</div>

      
  );
}

export default App;
