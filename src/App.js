// pages
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import ConfirmedBooking from './pages/ConfirmedBooking';
import NotFoundPage from './pages/NotFoundPage';

// style
import './App.css';

// React Router
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

// hooks
import usePageContent from './hooks/usePageContent';


function App() {
  const { isBookingConfirmed, setIsBookingConfirmed } = usePageContent();

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
      // if the booking is confirmed (after filling out the booking form correctly and submitting it), it is possible to access the ConfirmedBooking page
      element: isBookingConfirmed ? <ConfirmedBooking /> : <Navigate to="/" />
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
