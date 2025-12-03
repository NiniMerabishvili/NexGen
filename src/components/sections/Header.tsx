import { useState } from 'react';
import Logo from '../../assets/images/Logo.svg';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>('HOME');

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'SERVICES', href: '#services' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'ABOUT', href: '#about' },
    { name: 'CAREERS', href: '#careers' },
    { name: 'BLOGS', href: '#blogs' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 pb-6">
      <div className="w-[95%] mx-auto bg-[#1A1A1A] rounded-xl px-8 py-4 flex items-center justify-between">
        <a href="#home">
          <img src={Logo} alt="NexGen" className="w-auto h-4" />
        </a>

        <div className="hidden lg:flex items-center gap-3">
          {navLinks.map((link) => {
            const isActive = activeLink === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveLink(link.name);
                  const targetId = link.href.replace('#', '');
                  const el = document.getElementById(targetId);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className={`bg-[#0F0F0F] text-xs font-medium uppercase px-3 py-3 rounded-md transition-all duration-200 ${
                  isActive ? 'text-[#E7BEB1]' : 'text-[#81807E] hover:text-[#E7BEB1]'
                }`}
              >
                {link.name}
              </a>
            );
          })}

          <a
            href="#contact"
            className="bg-primary text-black font-bold uppercase text-xs px-4 py-3 rounded-md hover:opacity-90 transition-all duration-200"
          >
            CONTACT US
          </a>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white focus:outline-none p-2"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden mt-2 bg-[#1A1A1A] rounded-[24px] px-6 py-4">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeLink === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveLink(link.name);
                    setIsMobileMenuOpen(false);
                    const targetId = link.href.replace('#', '');
                    const el = document.getElementById(targetId);
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className={`bg-[#0F0F0F] text-sm font-medium uppercase px-5 py-3 rounded-[12px] transition-all duration-200 ${
                    isActive ? 'text-[#E7BEB1]' : 'text-[#81807E] hover:text-[#E7BEB1]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-primary text-black font-bold uppercase text-sm px-6 py-3 rounded-xl hover:opacity-90 transition-all duration-200 text-center"
            >
              CONTACT US
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

