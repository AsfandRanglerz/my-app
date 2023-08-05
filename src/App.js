import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use Routes instead of Switch
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import AboutUs from './AboutUs'; // Import the new page component

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} /> {/* Add the route for the new page */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;