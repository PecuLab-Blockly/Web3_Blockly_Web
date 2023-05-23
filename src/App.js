import Home from './pages/Home';
import Profile from "./pages/Profile";
import CreateWork from "./pages/CreateWork";
import "./App.css";
import "./default.scss";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/createWork" element={<CreateWork/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
