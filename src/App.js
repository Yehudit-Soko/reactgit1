import React from 'react'
import logo from './logo.svg';
import './App.css';
import Weather from './lesson_3/components/page';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Lesson4/componantot/HomePage';
import About from './Lesson4/componantot/about';
import Contact from './Lesson4/componantot/contact';
import ThankYou from './Lesson4/componantot/ThankYou';

function App() {
  return (
    <BrowserRouter>
    <nav>
      <link to="/">HomePage</link>
      <link to="/about">About</link>
      <link to="/contact">Contact</link>
    </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
