import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Fetchdata from './Fetchdata'; // Assuming this is your component for the "/" route
import Second from './Components/Pages/Second'; // Assuming this is your component for the "/Second" route

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Fetchdata/>} />
        <Route path="/Second/:id" element={<Second/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;