import React from 'react';
import MainPage from './main/MainPage';
import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './login/LoginPage';
import { checkAuth } from './checkAuth';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  console.log(isAuthenticated)

  useEffect(() => {
    const authenticate = async () => {
      const result = await checkAuth();
      setIsAuthenticated(result);
    };

    authenticate();
  }, []);

  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <MainPage /> : <Navigate to="/login" />} />
      <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <LoginPage />} />
    </Routes>
  );
}

export default App;
