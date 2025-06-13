

import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes,Route } from "react-router";
 import Cart from './pages/Cart';
import NotFound from './components/NotFound';

function App() {

  return(
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
       <Route  path='/home'  element = {<Home/>}/>
       <Route  path='/about'  element = {<About/>}/>
       <Route  path='/cart'  element = {<Cart/>}/>
        <Route  path='*'  element = {<NotFound/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
