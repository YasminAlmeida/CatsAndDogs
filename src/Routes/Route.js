import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../Components/Header.js';
import Dogs from '../Components/Dogs.js';
import Cats from '../Components/Cats.js';
export default function Router() {
  return (
    <BrowserRouter>
      <p>Home</p>
      <Header rotaHome="Home" rotaCat="Gato" rotaDog="Dog" />
      <Routes>
        <Route path="/" />
        <Route path="/dog" element={<Dogs />} />
        <Route path="/cat" element={<Cats />} />
      </Routes>
    </BrowserRouter>
  );
}
