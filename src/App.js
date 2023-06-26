import { Box } from '@chakra-ui/react';
import { Navbar } from './components/assignmentcontextapi/Nav';
import { Main } from './components/assignmentcontextapi/Body';
import { MovieDetails } from './components/assignmentcontextapi/Body1';
import { Route, Routes } from 'react-router-dom';








function App() {
  
  return (
    <div className="App">

  
    

<Box backgroundColor={"black"} height={"100%"} color={"white"}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/Body1/:id' element={<MovieDetails/>}></Route>
      </Routes>
    </Box>

   


   
     

     
     
    </div>
  );
}

export default App;
