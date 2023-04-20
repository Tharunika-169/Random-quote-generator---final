
import "./styles.css";
import ContactForm from "./ContactForm";
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Footer from "./Footer";
import './App.css';
export default function App() {
  

  return (
    
    <main>
      <div >

      <center>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="Home" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="ContactForm" element={<ContactForm />} />
</Route>
    </Routes>
  </BrowserRouter>
 
  </center>
  <br/>
  <Footer/>  
      </div>
    
    </main>
  );
}
