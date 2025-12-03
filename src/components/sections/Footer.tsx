import SocialCard from '../ui/SocialCard';
import { useSocials } from '../../hooks/useSocials';
import { useFooterLinks } from '../../hooks/useFooterLinks';

const getSocialIcon = (iconType: string) => {
  switch (iconType) {
    case 'instagram':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="2" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" />
        </svg>
      );
    case 'twitter':
      return (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
        </svg>
      );
    case 'dribbble':
      return (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.485 2 2 6.486 2 12s4.485 10 10 10 10-4.486 10-10S17.515 2 12 2zm6.605 4.807a7.93 7.93 0 011.765 4.297 13.21 13.21 0 00-4.418-.204 20.18 20.18 0 00-1.01-2.433 8.01 8.01 0 013.663-1.66zM12 4a7.94 7.94 0 014.326 1.262 6.51 6.51 0 00-3.273 1.896 20.07 20.07 0 00-3.27-3.27A7.9 7.9 0 0112 4zM8.21 5.258a18.6 18.6 0 013.34 3.36 32.75 32.75 0 00-5.077.23A7.98 7.98 0 018.21 5.258zM4.34 9.63a17.1 17.1 0 015.77-.33 28.9 28.9 0 01.774 1.668 28.52 28.52 0 00-4.863 3.9A7.95 7.95 0 014.34 9.63zm2.087 6.52a26.5 26.5 0 014.29-3.495 27.8 27.8 0 011.65 4.84 7.96 7.96 0 01-5.94-1.345zM13.8 17.7a29.9 29.9 0 00-1.9-5.18 26.4 26.4 0 013.8-.18 7.9 7.9 0 01-1.9 5.36z" />
        </svg>
      );
    case 'behance':
      return (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zM6.466 20.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 5.327 6.988.8 1.582 2.22 2.306 3.666 2.306.883 0 1.329-.085 1.329-.085v1.663h-3.02c-.231 1.125.405 2.07 1.125 2.951.564.815 1.41 1.512 2.523 1.512 1.583 0 2.994-1.07 3.587-2.81 0 0 .738-2.27.738-5.231 0-4.861-3.8-5.351-3.8-5.351h-10.043v14.967zm-3.466-6.988h3.952c3.129 0 4.352-1.415 4.352-3.299 0-1.829-1.121-2.675-3.847-2.675h-4.457v5.974z" />
        </svg>
      );
    default:
      return null;
  }
};

const Footer = () => {
  const socials = useSocials();
  const footerLinks = useFooterLinks();

  return (
    <footer id="contact" className="bg-[#0F0F0F] text-white py-12">
      <div className="w-[95%] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-2">
        {/* Left column - 2 parts out of 5 (2x) */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-2 grid-rows-2 gap-x-2 gap-y-2">
            {socials.map((social) => (
              <SocialCard
                key={social.id}
                icon={getSocialIcon(social.iconType)}
                title={social.title}
                description={social.description}
                href={social.href}
              />
            ))}
          </div>
        </div>

        {/* Right column - 3 parts out of 5 (3x) */}
        <div className="lg:col-span-3 flex flex-col gap-y-2 mt-4 lg:mt-0">
          {/* Row 1: Navigation grid card */}
          <div className="bg-[#1A1A1A] rounded-2xl h-full p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-8">
              <div className="flex flex-col gap-4">
                <h3 className="text-sm font-bold text-white uppercase mb-2">Home</h3>
                <ul className="flex flex-col gap-2">
                  {footerLinks.Home.map((link, index) => (
                    <li key={index}>
                      <a
                        href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-xs text-[#81807E] hover:text-primary py-2 transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-sm font-bold text-white uppercase mb-2">Services</h3>
                <ul className="flex flex-col gap-2">
                  {footerLinks.Services.map((link, index) => (
                    <li key={index}>
                      <a
                        href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-xs text-[#81807E] hover:text-primary py-2 transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-sm font-bold text-white uppercase mb-2">Projects</h3>
                <ul className="flex flex-col gap-2">
                  {footerLinks.Projects.map((link, index) => (
                    <li key={index}>
                      <a
                        href={`#${link.toLowerCase()}`}
                        className="text-xs text-[#81807E] hover:text-primary py-2 transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-sm font-bold text-white uppercase mb-2">Blogs</h3>
                <ul className="flex flex-col gap-2">
                  {footerLinks.Blogs.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <a
                        href={`#${item.name.toLowerCase()}`}
                        className="text-xs text-[#81807E] hover:text-primary py-2 transition-colors duration-200"
                      >
                        {item.name}
                      </a>
                      {item.soon && (
                        <span className="bg-[#242424] text-white text-[10px] px-2 py-0.5 rounded-md">
                          Soon
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Row 2: Newsletter card */}
          <div className="bg-[#1A1A1A] rounded-2xl h-full p-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex flex-col gap-2">
                <p className="text-[10px] text-[#81807E] uppercase">Newsletter</p>
                <h3 className="text-xl font-bold text-white uppercase">
                  Subscribe to our newsletter
                </h3>
              </div>
              <form className="flex items-center gap-4 mt-2 md:mt-0 w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent border-b-2 border-[#81807E] text-white placeholder:text-[#81807E] focus:outline-none focus:border-primary py-2 text-xs"
                />
                <button
                  type="submit"
                  className="w-10 h-10 bg-[#1F1F1F] border border-[#2A2A2A] rounded-full flex items-center justify-center hover:border-primary transition-colors duration-200 flex-shrink-0"
                >
                  <svg
                    className="w-4 h-4 text-[#E7BEB1]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 17L17 7M17 7H7M17 7v10"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>

          {/* Row 3: Bottom bar card */}
          <div className="bg-[#1A1A1A] rounded-2xl h-full p-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-[#2A2A2A] pt-4">
              <p className="text-xs text-[#81807E]">
                © 04.12.2025 Nini Merabishvili. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="#terms"
                  className="text-xs text-[#81807E] hover:text-[#E7BEB1] transition-colors duration-200"
                >
                  Terms &amp; Conditions
                </a>
                <span className="text-[#81807E]">|</span>
                <a
                  href="#privacy"
                  className="text-xs text-[#81807E] hover:text-[#E7BEB1] transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;