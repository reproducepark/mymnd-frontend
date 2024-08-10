import React from 'react';
import logo from './logo.svg';
import MainPage from './main/MainPage';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './login/LoginPage';

function App() {
  return (
    <Routes>
      <Route path="/" element = {<MainPage/>} />
      <Route path="/login" element = {<LoginPage/>} />
    </Routes>
  );
}

export default App;
