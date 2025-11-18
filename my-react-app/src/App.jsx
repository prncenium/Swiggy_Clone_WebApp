import Signup from './components/Signup'
import Login from './components/Login';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Help from './components/Help';
import Cart from './components/Cart';

function App() {
  

  return (
    <>
      {/* <Navbar/> */}
      <div className='min-h-screen flex justify-center items-center bg-gray-100 '>
        
        <Routes>
        <Route path="/login" element={<Login/>} />
        <Route  path="/signup" element={<Signup/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/help" element={<Help/>} />
        <Route path='/cart' element={<Cart/>} />
        </Routes>
      </div>
      
    </>
  )
}

export default App;
