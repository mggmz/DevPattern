import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AccessibilityControls from './components/AccessibilityControls';
import Home from './pages/Home';
import CV from './pages/CV';
import Contact from './pages/Contact';
import Patterns from './pages/Patterns';
import Creational from './pages/patterns/Creational';
import Structural from './pages/patterns/Structural';
import Behavioral from './pages/patterns/Behavioral';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <AccessibilityControls />
        <Header />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/patterns" element={<Patterns />} />
            <Route path="/patterns/creational" element={<Creational />} />
            <Route path="/patterns/structural" element={<Structural />} />
            <Route path="/patterns/behavioral" element={<Behavioral />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;