// pages
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import ConfirmedBooking from './pages/ConfirmedBooking';
import NotFoundPage from './pages/NotFoundPage';

// style
import './App.css';

// React Router
// import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/booking',
    element: <BookingPage />,
  },
  {
    path: '/booking-confirmed',
    element: <ConfirmedBooking />
  },
]);

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
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
      </BrowserRouter> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
