import React from "react";

import { Route,Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Gallery from "./Components/Gallery";
import Service from "./Components/Service";
import Contactus from "./Components/Contactus";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App(){
  return(
    
    
 <Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/about" element={<About/>}></Route>
<Route path="/Gallery" element={<Gallery/>}></Route>
<Route path="/Service" element={<Service/>}></Route>
<Route path="/Contactus" element={<Contactus/>}></Route>
 </Routes>
 

   
  )
}

export default App;