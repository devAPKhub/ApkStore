import Navbar from './components/Navbar';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AppDetailsPage from './pages/AppDetailsPage';
import AdminDashboard from './pages/AdminDashboard';

function App() {
 return (
  <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/apps/:id" element={<AppDetailsPage />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  </div>
);

}

export default App;
