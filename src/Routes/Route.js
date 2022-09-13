import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../Components/Header/index.js';
import Dogs from '../Components/Dogs/index.js';
import Cats from '../Components/Cats/index.js';
import Home from '../Components/Home/Home.js';
export default function Router() {
  return (
    <BrowserRouter>
      <Header rotaHome="Home" rotaCat="Gato" rotaDog="Dog" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dog" element={<Dogs />} />
        <Route path="/cat" element={<Cats />} />
      </Routes>
    </BrowserRouter>
  );
}
