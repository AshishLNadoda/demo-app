
import React,{useState} from 'react'
import Toogle from './fs-06-/React-States-001/Toogle';





function App() {
  const[lightTheme, darkTheme]=useState(false);
  return (
    
    <div style={{background:(lightTheme==false)? "white":"black"}} className="App">
     
      <Toogle lightTheme={lightTheme} darkTheme={darkTheme}

 />
    </div>
      
   
  );
}

export default App;