import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import React Router components
import Home from './pages/home';
import ListingPage from './pages/listing';
import DetailsPage from './pages/details';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for the Home page */}
          <Route path="/" element={<Home />} />
          {/* Route for the ListingPage */}
          <Route path="/listing" element={<ListingPage />} />

          {/* Route for the DetailsPage */}
          <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
