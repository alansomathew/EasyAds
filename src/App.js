import './App.css';


import Home from './pages/home';
import ListingPage from './pages/listing';


function App() {
  return (
    <div className="App">
      <header id="home">
        <Home />
        <ListingPage />
      </header>
    </div>
  );
}

export default App;
