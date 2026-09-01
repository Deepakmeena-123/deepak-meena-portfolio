import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Mail,
  ArrowUpRight,
  Trophy,
  Code2,
} from 'lucide-react';

/* ================= GITHUB ICON ================= */

const GithubIcon = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.38.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.14 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.82.58A12.01 12.01 0 0 0 24 12C24 5.37 18.63 0 12 0Z" />
  </svg>
);

/* ================= LINKEDIN ICON ================= */

const LinkedinIcon = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.21 24 24 23.23 24 22.27V1.73C24 .77 23.21 0 22.23 0Z" />
  </svg>
);

/* ================= SOCIAL LINKS ================= */

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/Deepakmeena-123',
    icon: <GithubIcon />,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/deepak-meena-a28848372/',
    icon: <LinkedinIcon />,
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/u/Deepakm_30/',
    icon: <Trophy size={17} />,
  },
  {
    label: 'Codeforces',
    href: 'https://codeforces.com/profile/Deepu_30',
    icon: <Code2 size={17} />,
  },
  {
    label: 'CodeChef',
    href: 'https://www.codechef.com/users/witty_halo_43',
    icon: <Code2 size={17} />,
  },
];

export default function Contact() {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 bg-[#070A0F] overflow-hidden"
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full opacity-[0.06] blur-[130px] pointer-events-none"
        style={{
          background:
            'linear-gradient(100deg, #38BDF8, #A78BFA)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10">

        {/* ================= MAIN CARD ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.7,
          }}
          className="relative rounded-3xl border border-[#1E293B] bg-[#0D1117] overflow-hidden"
        >

          {/* Top accent */}

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent" />

          <div className="px-6 py-12 md:px-12 md:py-16 text-center">

            {/* ================= LABEL ================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={
                inView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
            >
              <span className="text-[#38BDF8] font-mono text-xs tracking-[0.25em] uppercase">
                Get in touch
              </span>
            </motion.div>

            {/* ================= HEADING ================= */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={
                inView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                duration: 0.6,
                delay: 0.15,
              }}
              className="text-4xl md:text-6xl font-bold text-[#F8FAFC] mt-4 leading-tight"
            >
              Let's build something{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(100deg, #38BDF8, #A78BFA)',
                }}
              >
                meaningful.
              </span>
            </motion.h2>

            {/* ================= DESCRIPTION ================= */}

            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={
                inView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                duration: 0.5,
                delay: 0.25,
              }}
              className="text-[#64748B] text-sm md:text-base leading-relaxed max-w-xl mx-auto mt-5"
            >
              I'm open to software development internships,
              full-time opportunities and interesting projects.
              If you have an idea or opportunity, I'd be happy
              to connect.
            </motion.p>

            {/* ================= EMAIL ================= */}

            <motion.a
              href="mailto:meenadeepak0899@gmail.com"
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={
                inView
                  ? {
                      opacity: 1,
                      scale: 1,
                    }
                  : {}
              }
              transition={{
                duration: 0.5,
                delay: 0.35,
              }}
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="group inline-flex items-center gap-3 mt-8 px-6 py-3.5 rounded-xl bg-[#F8FAFC] text-[#070A0F] text-sm font-semibold hover:bg-[#38BDF8] transition-all duration-300"
            >

              <Mail size={18} />

              <span>
                meenadeepak0899@gmail.com
              </span>

              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />

            </motion.a>

            {/* ================= SOCIAL ================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={
                inView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                duration: 0.6,
                delay: 0.5,
              }}
              className="mt-10 pt-7 border-t border-[#1E293B]"
            >

              <p className="text-[#475569] text-[10px] font-mono uppercase tracking-[0.2em] mb-5">
                Find me online
              </p>

              <div className="flex flex-wrap items-center justify-center gap-2.5">

                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      y: -3,
                    }}
                    className="group inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg border border-[#1E293B] bg-[#111827] text-[#64748B] text-xs hover:text-[#F8FAFC] hover:border-[#38BDF855] transition-all duration-200"
                  >

                    <span className="text-[#38BDF8]">
                      {social.icon}
                    </span>

                    <span>
                      {social.label}
                    </span>

                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />

                  </motion.a>
                ))}

              </div>

            </motion.div>

          </div>
        </motion.div>

        {/* ================= AVAILABILITY ================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={
            inView
              ? {
                  opacity: 1,
                }
              : {}
          }
          transition={{
            duration: 0.6,
            delay: 0.7,
          }}
          className="flex items-center justify-center gap-2 mt-6"
        >

          <span className="w-2 h-2 rounded-full bg-[#38BDF8] shadow-[0_0_8px_#38BDF8]" />

          <span className="text-[#475569] text-xs">
            Available for opportunities
          </span>

        </motion.div>

      </div>
    </section>
  );
}