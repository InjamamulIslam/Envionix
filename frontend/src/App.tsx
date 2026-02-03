import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { AboutUs } from './components/AboutUs';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { Compliance } from './components/Compliance';
import { Footer } from './components/Footer';
import { StickyBar } from './components/StickyBar';
import { DemoModal } from './components/DemoModal';

function AppContent() {
  const [showSticky, setShowSticky] = useState(false);
  const [stickyDismissed, setStickyDismissed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  // Handle hash scrolling when navigating to home page with hash
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      // Wait a bit for the page to render
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          const navHeight = 64;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - navHeight,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      // Check if footer is visible
      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const isFooterVisible = footerRect.top < window.innerHeight;

        // Show sticky bar only if scrolled past 800px, not dismissed, and footer is not visible
        setShowSticky(window.scrollY > 800 && !stickyDismissed && !isFooterVisible);
      } else {
        setShowSticky(window.scrollY > 800 && !stickyDismissed);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [stickyDismissed]);

  const handleCloseStickyBar = () => {
    setStickyDismissed(true);
    setShowSticky(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <Routes>
        <Route path="/" element={<HomePage onOpenModal={() => setIsModalOpen(true)} />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/compliance" element={<Compliance />} />
      </Routes>
      <Footer />
      <StickyBar
        show={showSticky}
        onOpenModal={() => setIsModalOpen(true)}
        onClose={handleCloseStickyBar}
      />
      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
