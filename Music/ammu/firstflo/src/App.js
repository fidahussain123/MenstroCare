import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext';
import Login from './components/Auth/Login';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import AgeSelector from "./components/AgeSelector";
import EarlyTeensDashboard from "./components/EarlyTeens/Dashboard";
import TeensDashboard from "./components/Teens/Dashboard";
import AdultsDashboard from "./components/Adults/Dashboard";
import './App.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          
          {/* Age Selector Route */}
          <Route path="/age-selector" element={
            <ProtectedRoute>
              <AgeSelector />
            </ProtectedRoute>
          } />
          
          {/* Protected Routes */}
          <Route path="/early-teens" element={
            <ProtectedRoute>
              <EarlyTeensDashboard />
            </ProtectedRoute>
          } />
          
          <Route path="/teens" element={
            <ProtectedRoute>
              <TeensDashboard />
            </ProtectedRoute>
          } />
          
          <Route path="/adults" element={
            <ProtectedRoute>
              <AdultsDashboard />
            </ProtectedRoute>
          } />
          
          {/* Redirect root to login if not authenticated */}
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
