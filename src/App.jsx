import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AccessibilityToolbar from "./components/AccessibilityToolbar";

import Home from "./pages/Home";
import CV from "./pages/CV";
import Contact from "./pages/Contact";
import Creational from "./pages/patterns/Creational";
import Structural from "./pages/patterns/Structural";
import Behavioral from "./pages/patterns/Behavioral";

function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen mt-16"> {/* despeja header fijo */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/patrones/creacionales" element={<Creational />} />
          <Route path="/patrones/estructurales" element={<Structural />} />
          <Route path="/patrones/comportamiento" element={<Behavioral />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <AccessibilityToolbar />
      <Footer />
    </>
  );
}

export default App;
