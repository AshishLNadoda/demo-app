import './Ba.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Componets/HOME/Home';
import NavBar from './Componets/NavBar';
import About from './Componets/About';
import Contact from './Componets/Contact';
import Footer from './Componets/Footer';
import Project from './Componets/Project';

function Ba() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
     <Route path='/' element={<Home />}/> 
     <Route path='/home' element={<Home />}/> 
      <Route path='/about' element={<About/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default Ba;