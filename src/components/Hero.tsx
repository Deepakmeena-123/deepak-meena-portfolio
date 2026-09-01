import myImage from '../assets/myimage.jpeg';

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';

import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Mail,
  Trophy,
} from 'lucide-react';

import { useRef } from 'react';

/* =========================================================
   DATA
========================================================= */

const techStack = [
  'C++',
  'React',
  'Node.js',
  'Django',
  'MongoDB',
  'AI / ML',
];

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/Deepakmeena-123',
    type: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/deepak-meena-a28848372/',
    type: 'linkedin',
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/u/Deepakm_30/',
    type: 'leetcode',
  },
];

/* =========================================================
   SOCIAL ICONS
   SVG IS USED FOR GITHUB/LINKEDIN TO AVOID LUCIDE EXPORT
   ISSUES YOU HAD EARLIER.
========================================================= */

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

const LinkedinIcon = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.21 24 24 .77 24 1.73v20.54C24 23.23 23.21 24 22.23 24Z" />
  </svg>
);

const getSocialIcon = (type: string) => {
  if (type === 'github') return <GithubIcon />;
  if (type === 'linkedin') return <LinkedinIcon />;
  return <Trophy size={17} />;
};

/* =========================================================
   HERO
========================================================= */

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 100]
  );

  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 80]
  );

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-[#050810] pt-24 pb-12"
    >

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Main blue glow */}

        <motion.div
          style={{
            y: backgroundY,
          }}
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, 35, -20, 0],
                  y: [0, -25, 15, 0],
                  scale: [1, 1.08, 0.96, 1],
                }
          }
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-52 -left-40 w-[650px] h-[650px] rounded-full bg-[#1687FF] opacity-[0.12] blur-[150px]"
        />

        {/* Violet glow */}

        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, -35, 20, 0],
                  y: [0, 20, -25, 0],
                  scale: [1, 0.95, 1.08, 1],
                }
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -right-56 top-[15%] w-[650px] h-[650px] rounded-full bg-[#7C3AED] opacity-[0.10] blur-[150px]"
        />

        {/* Bottom cyan glow */}

        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, 40, -30, 0],
                }
          }
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute left-[35%] -bottom-72 w-[600px] h-[400px] rounded-full bg-[#06B6D4] opacity-[0.06] blur-[140px]"
        />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(148,163,184,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.8) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />

        {/* Top fade */}

        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#050810] to-transparent" />

        {/* Bottom fade */}

        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050810] to-transparent" />

      </div>

      {/* =====================================================
          SMALL PARTICLES
      ===================================================== */}

      {!shouldReduceMotion && (
        <div className="absolute inset-0 pointer-events-none">

          <motion.span
            animate={{
              y: [0, -25, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute top-[22%] left-[12%] w-1 h-1 rounded-full bg-[#38BDF8]"
          />

          <motion.span
            animate={{
              y: [0, 30, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: 1,
            }}
            className="absolute top-[34%] right-[14%] w-1.5 h-1.5 rounded-full bg-[#A78BFA]"
          />

          <motion.span
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.8, 0.1],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              delay: 2,
            }}
            className="absolute top-[68%] left-[48%] w-1 h-1 rounded-full bg-[#38BDF8]"
          />

          <motion.span
            animate={{
              x: [0, 15, 0],
              opacity: [0.1, 0.6, 0.1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: 1.5,
            }}
            className="absolute top-[15%] right-[35%] w-1 h-1 rounded-full bg-[#C084FC]"
          />

        </div>
      )}

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

        <div className="grid lg:grid-cols-[1.02fr_0.98fr] gap-12 lg:gap-16 items-center min-h-[calc(100vh-150px)]">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="text-center lg:text-left">

            {/* Availability */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#38BDF844] bg-[#0B1220]/80 backdrop-blur-md shadow-[0_0_30px_rgba(56,189,248,0.08)]"
            >

              <span className="relative flex w-2 h-2">

                {!shouldReduceMotion && (
                  <span className="absolute inset-0 rounded-full bg-[#38BDF8] animate-ping opacity-70" />
                )}

                <span className="relative w-2 h-2 rounded-full bg-[#4ADE80]" />

              </span>

              <span className="text-[#E2E8F0] text-xs font-medium tracking-wide">
                Open to Software Development Opportunities
              </span>

            </motion.div>

            {/* Name */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.08,
                ease: 'easeOut',
              }}
              className="mt-7 text-5xl sm:text-6xl md:text-7xl xl:text-[82px] font-bold tracking-[-0.04em] leading-[0.92]"
            >

              <span className="text-[#F8FAFC]">
                Deepak
              </span>

              <br />

              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(100deg, #22D3EE 0%, #38BDF8 38%, #A78BFA 100%)',
                }}
              >
                Meena.
              </span>

            </motion.h1>

            {/* Role */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.65,
                delay: 0.22,
              }}
              className="mt-7"
            >

              <h2 className="text-2xl md:text-3xl font-semibold text-[#E2E8F0]">
                Software Developer
              </h2>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1.5 mt-3 text-sm md:text-base">

                <span className="text-[#94A3B8]">
                  Full Stack
                </span>

                <span className="text-[#38BDF8]">
                  •
                </span>

                <span className="text-[#94A3B8]">
                  AI
                </span>

                <span className="text-[#38BDF8]">
                  •
                </span>

                <span className="text-[#94A3B8]">
                  Backend
                </span>

                <span className="text-[#38BDF8]">
                  •
                </span>

                <span className="text-[#94A3B8]">
                  Real-Time Systems
                </span>

              </div>

            </motion.div>

            {/* Description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.65,
                delay: 0.35,
              }}
              className="mt-7 max-w-2xl mx-auto lg:mx-0 text-[#CBD5E1] text-base md:text-lg leading-8"
            >
              I build practical web applications and intelligent
              systems with a focus on{' '}
              <span className="text-[#F8FAFC] font-medium">
                full-stack development, backend engineering,
                AI and problem solving.
              </span>
            </motion.p>

            {/* Education */}

            <motion.div
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.45,
              }}
              className="mt-6 inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 text-sm"
            >

              <div className="flex items-center gap-2 text-[#CBD5E1]">
                <Code2
                  size={16}
                  className="text-[#38BDF8]"
                />

                <span>
                  B.Tech CSE
                </span>
              </div>

              <span className="text-[#334155]">
                /
              </span>

              <span className="text-[#94A3B8]">
                IIITDM Jabalpur
              </span>

              <span className="text-[#334155]">
                /
              </span>

              <span className="text-[#94A3B8]">
                2023 — 2027
              </span>

            </motion.div>

            {/* CTA */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.65,
                delay: 0.55,
              }}
              className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-3 mt-9"
            >

              <button
                onClick={() => scrollTo('#projects')}
                className="group relative w-full sm:w-auto overflow-hidden flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] text-white font-semibold text-sm shadow-[0_12px_35px_rgba(56,189,248,0.20)] hover:shadow-[0_16px_45px_rgba(124,58,237,0.30)] transition-all duration-300"
              >

                <span className="relative z-10">
                  View My Work
                </span>

                <ArrowUpRight
                  size={17}
                  className="relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />

                <span className="absolute inset-0 bg-gradient-to-r from-[#38BDF8] to-[#A78BFA] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              </button>

              <a
                href="mailto:meenadeepak0899@gmail.com"
                className="group w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-[#475569] bg-[#0B1220]/70 backdrop-blur-md text-[#F1F5F9] font-medium text-sm hover:border-[#38BDF8] hover:text-[#7DD3FC] hover:bg-[#0F172A] transition-all duration-300"
              >

                <Mail size={17} />

                <span>
                  Contact Me
                </span>

              </a>

            </motion.div>

            {/* Social */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.6,
                delay: 0.7,
              }}
              className="flex items-center justify-center lg:justify-start gap-2 mt-7"
            >

              <span className="text-[#64748B] text-xs mr-2">
                Connect
              </span>

              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group w-9 h-9 flex items-center justify-center rounded-lg border border-[#1E293B] bg-[#0B1220]/80 text-[#64748B] hover:text-[#F8FAFC] hover:border-[#38BDF855] hover:bg-[#0F172A] transition-all duration-200"
                >

                  <span className="text-[#38BDF8] group-hover:text-[#7DD3FC] transition-colors">
                    {getSocialIcon(social.type)}
                  </span>

                </a>
              ))}

            </motion.div>

          </div>

          {/* =================================================
              RIGHT PHOTO
          ================================================= */}

          <div className="relative flex items-center justify-center lg:justify-end min-h-[540px]">

            {/* Large orbital glow */}

            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      scale: [1, 1.08, 1],
                      opacity: [0.35, 0.55, 0.35],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute w-[390px] h-[390px] md:w-[470px] md:h-[470px] rounded-full bg-gradient-to-br from-[#0EA5E9] via-[#6366F1] to-[#A855F7] blur-[90px] opacity-30"
            />

            {/* Orbit */}

            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      rotate: 360,
                    }
              }
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute w-[430px] h-[430px] md:w-[520px] md:h-[520px] rounded-full border border-[#38BDF81A]"
            >

              <span className="absolute top-[7%] left-[12%] w-2 h-2 rounded-full bg-[#38BDF8] shadow-[0_0_16px_#38BDF8]" />

              <span className="absolute bottom-[12%] right-[10%] w-2.5 h-2.5 rounded-full bg-[#A78BFA] shadow-[0_0_18px_#A78BFA]" />

            </motion.div>

            {/* Second orbit */}

            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      rotate: -360,
                    }
              }
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute w-[350px] h-[350px] md:w-[440px] md:h-[440px] rounded-full border border-[#A78BFA18]"
            />

            {/* Hanging system */}

            <motion.div
              style={{
                y: imageY,
              }}
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      y: [0, -7, 0, 6, 0],
                      rotate: [0, 0.7, 0, -0.7, 0],
                    }
              }
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-[285px] sm:w-[325px] md:w-[365px] lg:w-[390px] pt-12"
            >

              {/* Rope */}

              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-14 bg-gradient-to-b from-[#64748B] to-[#38BDF8]" />

              {/* Ring */}

              <div className="absolute top-[49px] left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-2 border-[#38BDF8] bg-[#07101B] shadow-[0_0_20px_rgba(56,189,248,0.35)] z-30" />

              {/* Main photo frame */}

              <div className="relative">

                {/* Outer glow */}

                <div className="absolute -inset-5 rounded-[34px] bg-gradient-to-br from-[#38BDF8] via-[#6366F1] to-[#A78BFA] opacity-20 blur-2xl" />

                {/* Gradient border */}

                <div className="relative p-[2px] rounded-[30px] bg-gradient-to-br from-[#38BDF8] via-[#6366F1] to-[#C084FC] shadow-[0_35px_90px_rgba(0,0,0,0.55)]">

                  <div className="relative rounded-[28px] overflow-hidden bg-[#0B1220]">

                    {/* Photo */}

                    <div className="aspect-[4/5]">

                      <img
                        src={myImage}
                        alt="Deepak Meena"
                        className="w-full h-full object-cover object-center"
                      />

                    </div>

                    {/* Image gradient */}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/90 via-transparent to-[#0EA5E9]/5 pointer-events-none" />

                    {/* Top shine */}

                    <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none" />

                    {/* Name plate */}

                    <div className="absolute bottom-0 left-0 right-0 p-5">

                      <div className="flex items-end justify-between gap-3">

                        <div>

                          <p className="text-white text-lg md:text-xl font-semibold">
                            Deepak Meena
                          </p>

                          <p className="text-[#BAE6FD] text-xs mt-1">
                            Software Developer
                          </p>

                        </div>

                        <div className="w-9 h-9 rounded-full flex items-center justify-center bg-[#0B1220]/80 backdrop-blur-md border border-[#38BDF844]">
                          <Code2
                            size={16}
                            className="text-[#38BDF8]"
                          />
                        </div>

                      </div>

                    </div>

                  </div>

                </div>

                {/* Side light */}

                <motion.div
                  animate={
                    shouldReduceMotion
                      ? {}
                      : {
                          y: [0, 70, 0],
                        }
                  }
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute -right-3 top-14 w-1 h-24 rounded-full bg-gradient-to-b from-[#38BDF8] to-transparent opacity-80"
                />

              </div>

            </motion.div>

            {/* =================================================
                FLOATING CARD — PROBLEMS
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 1,
              }}
              className="absolute left-0 sm:left-[-15px] lg:left-[-10px] bottom-[75px] z-30"
            >

              <motion.div
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: [0, -8, 0],
                      }
                }
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative px-4 py-3.5 rounded-2xl border border-[#38BDF833] bg-[#07101B]/90 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
              >

                <div className="flex items-center gap-3">

                  <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-[#38BDF812] border border-[#38BDF833]">
                    <Code2
                      size={17}
                      className="text-[#38BDF8]"
                    />
                  </div>

                  <div>

                    <p className="text-[#F8FAFC] text-lg font-bold leading-none">
                      500+
                    </p>

                    <p className="text-[#64748B] text-[10px] uppercase tracking-wider mt-1">
                      Problems Solved
                    </p>

                  </div>

                </div>

              </motion.div>

            </motion.div>

            {/* =================================================
    FLOATING CARD — CODEFORCES
================================================= */}

<motion.div
  initial={{
    opacity: 0,
    x: 25,
  }}
  animate={{
    opacity: 1,
    x: 0,
  }}
  transition={{
    duration: 0.7,
    delay: 1.15,
  }}
  className="absolute right-0 sm:right-[-10px] lg:right-[-5px] bottom-[125px] z-30"
>
  <motion.div
    animate={
      shouldReduceMotion
        ? {}
        : {
            y: [0, 6, 0],
          }
    }
    transition={{
      duration: 5.5,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: 1,
    }}
    className="flex items-center gap-3 px-3.5 py-3 rounded-xl border border-[#A78BFA33] bg-[#0C0917]/90 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.4)]"
  >

    {/* Icon */}

    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#A78BFA12] border border-[#A78BFA33]">
      <Trophy
        size={15}
        className="text-[#C4B5FD]"
      />
    </div>

    {/* Text */}

    <div>

      <p className="text-[#F8FAFC] text-sm font-semibold leading-none">
        1432
      </p>

      <p className="text-[#94A3B8] text-[9px] uppercase tracking-wider mt-1">
        Codeforces
      </p>

    </div>

  </motion.div>
</motion.div>

            {/* Small floating code symbol */}

            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      y: [0, -10, 0],
                      rotate: [0, 4, 0],
                    }
              }
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute right-[5%] bottom-[65px] w-11 h-11 rounded-xl flex items-center justify-center border border-[#38BDF833] bg-[#07101B]/80 backdrop-blur-md text-[#38BDF8]"
            >

              <Code2 size={19} />

            </motion.div>

          </div>

        </div>

        {/* =====================================================
            TECHNOLOGY STRIP
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.9,
          }}
          className="mt-8 md:mt-2"
        >

          <div className="relative rounded-2xl border border-[#1E293B] bg-[#08101A]/75 backdrop-blur-xl px-5 py-5 md:px-8">

            {/* top glow */}

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent" />

            <div className="flex flex-col md:flex-row items-center gap-5 md:gap-10">

              <div className="shrink-0 text-center md:text-left">

                <p className="text-[#64748B] text-[10px] font-mono uppercase tracking-[0.22em]">
                  Technologies
                </p>

                <p className="text-[#CBD5E1] text-xs mt-1">
                  I work with
                </p>

              </div>

              <div className="hidden md:block w-px h-8 bg-[#1E293B]" />

              <div className="flex flex-wrap items-center justify-center gap-2.5">

                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      delay: 1 + index * 0.07,
                      duration: 0.3,
                    }}
                    whileHover={
                      shouldReduceMotion
                        ? {}
                        : {
                            y: -3,
                          }
                    }
                    className="px-3.5 py-2 rounded-lg border border-[#1E293B] bg-[#0C1521] text-[#94A3B8] text-xs hover:text-[#E2E8F0] hover:border-[#38BDF855] hover:bg-[#0F1B2A] transition-all duration-200"
                  >
                    {tech}
                  </motion.span>
                ))}

              </div>

            </div>

          </div>

        </motion.div>

        {/* =====================================================
            SCROLL INDICATOR
        ===================================================== */}

        <motion.button
          onClick={() => scrollTo('#about')}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 1.3,
          }}
          className="hidden md:flex mx-auto mt-7 items-center gap-2 text-[#475569] hover:text-[#7DD3FC] transition-colors"
          aria-label="Scroll to About section"
        >

          <span className="text-[10px] font-mono tracking-[0.25em] uppercase">
            Scroll to explore
          </span>

          {!shouldReduceMotion && (
            <motion.span
              animate={{
                y: [0, 5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              <ArrowDown size={14} />
            </motion.span>
          )}

        </motion.button>

      </div>

    </section>
  );
}