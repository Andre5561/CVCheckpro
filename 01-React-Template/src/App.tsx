import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './pages/Contact';

import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import TermsOfService from './pages/TermsOfService';

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col bg-gradient-to-b from-white to-slate-50">
      {/* === HEADER === */}
      <Header />

      {/* === MAIN === */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/refund" element={<RefundPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* === FOOTER === */}
      <Footer />
    </div>
  );
}
