import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Header from "./components/header.js";
import Login from "./components/login.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
