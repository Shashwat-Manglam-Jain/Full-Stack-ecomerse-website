import { Route, Routes } from "react-router-dom";


import Navbar from "./assets/Navbar";

import  Page  from "./assets/Page";
import Cart from "./assets/Cart";
import { useState } from "react";
import Buy from "./assets/Buy";
import Desh from "./Desh";
import Search from "./assets/Search";
import Footer from "./assets/footer";
import Contact from "./assets/Contact";
import About from "./assets/About";










const App = () => {
  const [datawrap, setdatawrap] = useState([]);
  const [first, setfirst] = useState([])
  const addtocart=(data)=>{
   setdatawrap((items)=>[...items,data]);

  }
  const addt=(data)=>{
    setfirst((items)=>[...items,data]);
    console.log(first);
 
   }
  return (
    <div>
      <Navbar cart={datawrap.length} seco={first.length}/>
      <Routes>
        <Route path="/" element={<Desh  addtocart={addtocart}/>} />
        <Route path="/items/:id" element={<Page  addtocart={addtocart} addt={addt} />} />
        <Route path="/Cart" element={<Cart data={datawrap} />} />
        <Route path="/buy" element={<Buy dat={first}/>} />
        <Route path="/Search/:name" element={<Search addtocart={addtocart}/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <br /><br /><br />
      <Footer/>
    </div>
  );
};

export default App;
