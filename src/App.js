import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import React Router components
import Home from './pages/home';
import ListingPage from './pages/listing';
import DetailsPage from './pages/details';
import WishlistPage from './pages/wishlist'; 
import AdsPage from './pages/ads'; 
import SellPage from './pages/sell'; 
import SellDetailsPage from './pages/sell_details'; // Import SellDetailsPage

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

          <Route path="/wishlist" element={<WishlistPage />} />

          <Route path="/ads" element={<AdsPage />} />

          {/* Route for the SellPage */}
          <Route path="/sell" element={<SellPage />} />

          {/* Route for the SellDetailsPage */}
          <Route path="/sell_details/:category" element={<SellDetailsPage />} />


        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
