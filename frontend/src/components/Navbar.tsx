import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenModal: () => void;
}

export function Navbar({ onOpenModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/#home' },
    { name: 'Product', href: '/#product' },
    { name: 'Contact', href: '/#contact' },
    { name: 'About us', href: '/about', isRoute: true },
  ];

  const scrollToSection = (href: string) => {
    // If href starts with /#, it's a home page section
    if (href.startsWith('/#')) {
      const hash = href.substring(1); // Remove the leading /

      // Check if we're on the home page
      if (window.location.pathname === '/') {
        // We're on home page, just scroll
        const element = document.querySelector(hash);
        if (element) {
          const navHeight = 80;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - navHeight,
            behavior: 'smooth'
          });
        }
      } else {
        // We're on a different page, navigate to home with hash
        window.location.href = href;
      }
    } else {
      // Regular hash scroll on current page
      const element = document.querySelector(href);
      if (element) {
        const navHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - navHeight,
          behavior: 'smooth'
        });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className={`border-b border-gray-200 fixed w-full top-0 z-40 transition-all duration-300 ${scrolled
      ? 'bg-white/70 backdrop-blur-md shadow-sm'
      : 'bg-white/95 backdrop-blur-sm'
      }`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity ml-21"
          >
            <img src="/logo.png" alt="Envionix Logo" className="h-20 w-auto object-contain" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              item.isRoute ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors duration-200"
                >
                  {item.name}
                </a>
              ) : (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors duration-200"
                >
                  {item.name}
                </button>
              )
            ))}
            <button
              onClick={() => {
                onOpenModal();
                setIsOpen(false);
              }}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Request Demo
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-emerald-600 focus:outline-none focus:text-emerald-600"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navigation.map((item) => (
                item.isRoute ? (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                )
              ))}
              <div className="px-3 py-2">
                <button
                  onClick={() => {
                    onOpenModal();
                    setIsOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-lg font-medium"
                >
                  Request Demo
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}