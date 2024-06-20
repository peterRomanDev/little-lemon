// style
import './App.css';

// React Router
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// pages
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
