// style
import './App.css';

// React Router
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

// pages
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import ConfirmedBooking from './pages/ConfirmedBooking';

// hooks
import { usePageContent } from './hooks/usePageContent';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/booking"
            element={<BookingPage />}
          />
          <Route
            path="/booking-confirmed"
            element={<ConfirmedBooking />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
