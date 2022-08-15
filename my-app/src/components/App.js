// src/components/App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Main"
import Company from "./Company";
import Toy from "./Toy";
import Store from "./Store";
import NavBar from "./NavBar.js";

function App() {
  
    return (
        <div>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/Company" element={<Company/>}/>
                <Route path="/Toy" element={<Toy/>}/>
                <Route path="/Store" element={<Store/>}/>
            </Routes>
        </div>
    );
}

export default App;