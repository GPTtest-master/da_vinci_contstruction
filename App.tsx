import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ServicePage from './pages/ServicePage';
import LocationPage from './pages/LocationPage';
import LocationsList from './pages/LocationsList';
import FAQ from './pages/FAQ';
import CommonProblems from './pages/CommonProblems';
import OurProcess from './pages/OurProcess';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
        
        {/* About Us Page */}
        <Route path="/about-us" element={<AboutUs />} />
        
        {/* Locations Index */}
        <Route path="/locations" element={<LocationsList />} />
        
        {/* Dynamic Location Pages */}
        <Route path="/locations/:city" element={<LocationPage />} />

        {/* FAQ Page - Now using the real component */}
        <Route path="/faq" element={<FAQ />} />
        
        {/* Common Surface Problems - SEO Landing Page */}
        <Route path="/surface-problems" element={<CommonProblems />} />

        {/* Our Process Page */}
        <Route path="/our-process" element={<OurProcess />} />
        
        {/* Dynamic Service Pages (Root level slugs as requested e.g. /bathtub-refinishing) */}
        <Route path="/:slug" element={<ServicePage />} />

      </Routes>
    </HashRouter>
  );
};

export default App;