
import './App.css';
import NavBar from './components/Component/NavBar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Product from './components/Component/Product/Product';
import Cart from './components/Component/Cart/Cart';


function App() {
  return (
    <div className="App">
   <NavBar/>
    <Routes>
      
      <Route path='/product' element={<Product/>}/>
      <Route path='/addToCart' element={<Cart/>}/>
    </Routes>
    </div>
  );
}

export default App;