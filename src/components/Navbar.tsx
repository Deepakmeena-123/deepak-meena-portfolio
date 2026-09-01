import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

/* GitHub icon without lucide-react */
function GithubIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.38.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.14 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.82.58A12.01 12.01 0 0 0 24 12C24 5.37 18.63 0 12 0Z" />
    </svg>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const section = document.querySelector(href);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">

      {/* Background */}
      <div className="absolute inset-0 bg-[#070B12]/90 backdrop-blur-xl border-b border-[#1E293B]" />

      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-px bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent opacity-70" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">

        <div className="h-[70px] flex items-center justify-between">

          {/* ================= LOGO ================= */}

          <button
            type="button"
            onClick={() => scrollToSection('#hero')}
            aria-label="Go to home"
            className="group relative"
          >
            <span className="text-xl md:text-2xl font-bold tracking-tight text-[#F8FAFC]">

              <span className="text-[#38BDF8]">
                &lt;
              </span>

              DM

              <span className="text-[#A78BFA]">
                /&gt;
              </span>

            </span>
          </button>

          {/* ================= DESKTOP NAVIGATION ================= */}

          <div className="hidden md:flex items-center gap-1">

            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => scrollToSection(item.href)}
                className="relative px-3.5 py-2 text-[13px] text-[#94A3B8] hover:text-[#F8FAFC] transition-colors duration-200 group"
              >
                {item.label}

                <span className="absolute left-1/2 -bottom-0.5 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-[#38BDF8] to-[#A78BFA] group-hover:w-5 transition-all duration-300" />
              </button>
            ))}

          </div>

          {/* ================= GITHUB ================= */}

          <a
            href="https://github.com/Deepakmeena-123"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex group items-center gap-2 px-4 py-2 rounded-xl border border-[#29364B] bg-[#0B111B] text-[#CBD5E1] text-xs font-medium hover:text-[#38BDF8] hover:border-[#38BDF855] transition-all duration-300"
          >

            <GithubIcon />

            <span>
              GitHub
            </span>

            <ArrowUpRight
              size={13}
              className="text-[#64748B] group-hover:text-[#38BDF8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
            />

          </a>

          {/* ================= MOBILE BUTTON ================= */}

          <button
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            aria-label={
              isOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={isOpen}
            className="md:hidden w-10 h-10 rounded-xl border border-[#29364B] bg-[#0B111B] flex items-center justify-center text-[#CBD5E1] hover:text-[#38BDF8] hover:border-[#38BDF855] transition-all duration-300"
          >

            {isOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}

          </button>

        </div>

        {/* ================= MOBILE MENU ================= */}

        {isOpen && (
          <div className="md:hidden pb-5">

            <div className="pt-3 border-t border-[#1E293B]">

              <div className="flex flex-col gap-1">

                {navItems.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => scrollToSection(item.href)}
                    className="text-left px-4 py-3 rounded-xl text-sm text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#111827] transition-all duration-200"
                  >
                    {item.label}
                  </button>
                ))}

                {/* Mobile GitHub */}

                <a
                  href="https://github.com/Deepakmeena-123"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-[#29364B] bg-[#0B111B] text-[#CBD5E1] text-sm hover:text-[#38BDF8] hover:border-[#38BDF855] transition-all duration-300"
                >

                  <GithubIcon />

                  <span>
                    GitHub
                  </span>

                  <ArrowUpRight size={14} />

                </a>

              </div>

            </div>

          </div>
        )}

      </div>
    </nav>
  );
}