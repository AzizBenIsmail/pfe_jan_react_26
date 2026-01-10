import react from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./componenet/footer/Footer";
import Head from "./componenet/head/Head";
import Navbar from "./componenet/navbar/Navbar";
import App from "./App";
import Welcome from "./componenet/Welcome";
import All from "./componenet/All";
export default function RoutesComponent() {
  return (
    <div>
      <Routes>
        <Route path="/App" element={<App />} />
        <Route path="/welcome" element={<Welcome name="Aziz"/>} />  
        <Route path="/head" element={<Head />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/footer" element={<Footer />} />        
        <Route path="/*" element={<All />} />        
      </Routes>
    </div>
  )
}
