import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
export default function Router() {
  return (
    <BrowserRouter>
      <p>Home</p>
      <Routes>
        <Route path="/" />
      </Routes>
    </BrowserRouter>
  );
}
