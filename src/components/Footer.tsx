import { ArrowUpRight, Heart } from 'lucide-react';

const links = [
  {
    label: 'GitHub',
    href: 'https://github.com/Deepakmeena-123',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/deepak-meena-a28848372/',
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/u/Deepakm_30/',
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#05080D] border-t border-[#1E293B] overflow-hidden">

      {/* Subtle glow */}

      <div className="absolute left-1/2 -translate-x-1/2 -top-32 w-[500px] h-[250px] rounded-full bg-[#38BDF8] opacity-[0.025] blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 py-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand */}

          <div className="text-center md:text-left">

            <p className="text-[#F8FAFC] font-semibold text-sm">
              Deepak Meena
            </p>

            <p className="mt-1 text-[#64748B] text-xs">
              Software Developer · Full Stack · AI
            </p>

          </div>

          {/* Social links */}

          <div className="flex items-center gap-2">

            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[#1E293B] bg-[#0A1018] text-[#64748B] text-xs hover:text-[#F8FAFC] hover:border-[#38BDF855] hover:bg-[#0D1520] transition-all duration-300"
              >

                {link.label}

                <ArrowUpRight
                  size={12}
                  className="opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200"
                />

              </a>
            ))}

          </div>

        </div>

        {/* Divider */}

        <div className="h-px bg-[#1E293B] my-7" />

        {/* Bottom */}

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">

          <p className="text-[#475569] text-xs">
            © {new Date().getFullYear()} Deepak Meena. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-[#475569] text-xs">
            Built with
            <span className="text-[#67E8F9]">
              React
            </span>
            <Heart
              size={11}
              className="text-[#67E8F9]"
              fill="currentColor"
            />
          </p>

        </div>

      </div>
    </footer>
  );
}