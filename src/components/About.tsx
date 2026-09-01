import myImage from '../assets/myimage.jpeg';

import {
  motion,
  useInView,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';

import {
  Code2,
  Database,
  BrainCircuit,
  Trophy,
  GraduationCap,
  MapPin,
  Mail,
  Layers3,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

import { useRef } from 'react';

/* =========================================================
   GITHUB ICON
========================================================= */

const GithubIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.38.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0 1 12 5.8c1.02 0 2.05.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.82.57A12 12 0 0 0 12 0Z" />
  </svg>
);

/* =========================================================
   LINKEDIN ICON
========================================================= */

const LinkedinIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z" />
  </svg>
);

/* =========================================================
   STATS
========================================================= */

const stats = [
  {
    value: '500+',
    label: 'Problems Solved',
    icon: Code2,
    color: 'cyan',
  },
  {
    value: '1432',
    label: 'Codeforces Rating',
    icon: Trophy,
    color: 'violet',
  },
  {
    value: '6+',
    label: 'Major Projects',
    icon: Layers3,
    color: 'blue',
  },
];

/* =========================================================
   WHAT I DO
========================================================= */

const capabilities = [
  {
    title: 'Full Stack Development',
    description:
      'Building responsive and scalable web applications with modern frontend and backend technologies.',
    icon: Code2,
    color: 'cyan',
  },
  {
    title: 'Backend Engineering',
    description:
      'Designing APIs, authentication, database systems and reliable server-side applications.',
    icon: Database,
    color: 'violet',
  },
  {
    title: 'AI & Intelligent Systems',
    description:
      'Exploring AI-powered applications and intelligent solutions for practical problems.',
    icon: BrainCircuit,
    color: 'blue',
  },
  {
    title: 'Problem Solving',
    description:
      'Strong foundation in DSA with a focus on logical thinking and solving complex problems.',
    icon: Trophy,
    color: 'green',
  },
];

/* =========================================================
   COLOR HELPERS
========================================================= */

const getIconColor = (color: string) => {
  switch (color) {
    case 'violet':
      return 'text-[#A78BFA]';

    case 'blue':
      return 'text-[#60A5FA]';

    case 'green':
      return 'text-[#4ADE80]';

    default:
      return 'text-[#38BDF8]';
  }
};

const getIconBackground = (color: string) => {
  switch (color) {
    case 'violet':
      return 'bg-[#A78BFA0D] border-[#A78BFA30]';

    case 'blue':
      return 'bg-[#60A5FA0D] border-[#60A5FA30]';

    case 'green':
      return 'bg-[#4ADE800D] border-[#4ADE8030]';

    default:
      return 'bg-[#38BDF80D] border-[#38BDF830]';
  }
};

/* =========================================================
   ABOUT
========================================================= */

export default function About() {
  const ref = useRef<HTMLElement | null>(null);
  const photoRef = useRef<HTMLDivElement | null>(null);

  const inView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  const shouldReduceMotion = useReducedMotion();

  /* =======================================================
     PHOTO MOUSE PARALLAX
  ======================================================= */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  });

  const rotateX = useTransform(
    smoothY,
    [-1, 1],
    [4, -4]
  );

  const rotateY = useTransform(
    smoothX,
    [-1, 1],
    [-5, 5]
  );

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    if (shouldReduceMotion) return;

    const element = photoRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) / rect.width;

    const y =
      (event.clientY - rect.top) / rect.height;

    mouseX.set(x * 2 - 1);
    mouseY.set(y * 2 - 1);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden bg-[#070A0F] py-24 md:py-32"
    >

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, 40, -20, 0],
                  y: [0, -20, 20, 0],
                }
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute left-[-220px] top-[10%] w-[550px] h-[550px] rounded-full bg-[#0EA5E9] opacity-[0.045] blur-[150px]"
        />

        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, -30, 20, 0],
                  y: [0, 20, -20, 0],
                }
          }
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute right-[-220px] bottom-[5%] w-[550px] h-[550px] rounded-full bg-[#8B5CF6] opacity-[0.04] blur-[150px]"
        />

        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(148,163,184,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.8) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

      </div>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

        {/* ===================================================
            HEADER
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
          className="text-center mb-16"
        >

          <div className="inline-flex items-center gap-3">

            <span className="w-8 h-px bg-gradient-to-r from-transparent to-[#38BDF8]" />

            <span className="text-[#38BDF8] text-xs font-mono tracking-[0.3em] uppercase">
              About Me
            </span>

            <span className="w-8 h-px bg-gradient-to-l from-transparent to-[#38BDF8]" />

          </div>

          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#F8FAFC]">

            Turning Ideas into{' '}

            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(100deg, #22D3EE, #38BDF8, #A78BFA)',
              }}
            >
              Impactful Solutions
            </span>

          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-[#94A3B8] text-sm md:text-base leading-7">
            A quick look at who I am, what I build and the
            technologies I enjoy working with.
          </p>

        </motion.div>

        {/* ===================================================
            PHOTO + INTRO
        =================================================== */}

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-14 lg:gap-20 items-center">

          {/* =================================================
              PREMIUM PHOTO
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -45,
              scale: 0.94,
            }}
            animate={
              inView
                ? {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                  }
                : {}
            }
            transition={{
              duration: 0.9,
              ease: 'easeOut',
            }}
            className="relative flex justify-center"
          >

            <div
              ref={photoRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-[285px] sm:w-[330px] md:w-[360px]"
              style={{
                perspective: '1000px',
              }}
            >

              {/* =================================================
                  LARGE GLOW
              ================================================= */}

              <motion.div
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: [1, 1.08, 1],
                        opacity: [0.15, 0.28, 0.15],
                      }
                }
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -inset-14 rounded-full bg-gradient-to-br from-[#38BDF8] via-[#6366F1] to-[#A78BFA] blur-3xl"
              />

              {/* =================================================
                  HANGING LINE
              ================================================= */}

              <motion.div
                initial={{
                  height: 0,
                  opacity: 0,
                }}
                animate={
                  inView
                    ? {
                        height: 70,
                        opacity: 1,
                      }
                    : {}
                }
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: 'easeOut',
                }}
                className="absolute left-1/2 -top-20 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-[#38BDF8] to-[#38BDF8]"
              />

              {/* =================================================
                  HANGING CONNECTOR
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0,
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
                  delay: 1,
                  type: 'spring',
                }}
                className="absolute -top-[17px] left-1/2 -translate-x-1/2 z-30 w-4 h-4 rounded-full border-2 border-[#38BDF8] bg-[#07101B] shadow-[0_0_18px_#38BDF8]"
              />

              {/* =================================================
                  OUTER ORBIT
              ================================================= */}

              <motion.div
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        rotate: 360,
                      }
                }
                transition={{
                  duration: 28,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute -inset-9 rounded-full border border-[#38BDF820] pointer-events-none"
              >

                <span className="absolute top-[8%] left-[17%] w-2 h-2 rounded-full bg-[#38BDF8] shadow-[0_0_15px_#38BDF8]" />

                <span className="absolute bottom-[12%] right-[14%] w-2 h-2 rounded-full bg-[#A78BFA] shadow-[0_0_15px_#A78BFA]" />

              </motion.div>

              {/* =================================================
                  INNER ORBIT
              ================================================= */}

              <motion.div
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        rotate: -360,
                      }
                }
                transition={{
                  duration: 36,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute -inset-5 rounded-full border border-dashed border-[#38BDF812] pointer-events-none"
              />

              {/* =================================================
                  PHOTO CARD
              ================================================= */}

              <motion.div
                style={{
                  rotateX: shouldReduceMotion
                    ? 0
                    : rotateX,
                  rotateY: shouldReduceMotion
                    ? 0
                    : rotateY,
                  transformStyle: 'preserve-3d',
                }}
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: [0, -7, 0],
                        rotateZ: [0, 0.7, 0, -0.7, 0],
                      }
                }
                transition={{
                  y: {
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                  rotateZ: {
                    duration: 7,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }}
                className="relative"
              >

                {/* Animated gradient frame */}

                <div
                  className="relative p-[2px] rounded-[32px] bg-[linear-gradient(120deg,#38BDF8,#6366F1,#A78BFA,#38BDF8)] bg-[length:300%_300%] shadow-[0_35px_90px_rgba(0,0,0,0.55)]"
                  style={{
                    animation: shouldReduceMotion
                      ? undefined
                      : 'gradientMove 8s ease infinite',
                  }}
                >

                  <div className="relative overflow-hidden rounded-[30px] bg-[#0B1220]">

                    {/* Photo */}

                    <div className="aspect-[4/5]">

                      <img
                        src={myImage}
                        alt="Deepak Meena"
                        className="w-full h-full object-cover object-center"
                      />

                    </div>

                    {/* Cinematic overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-transparent to-[#38BDF8]/5 pointer-events-none" />

                    {/* Soft top reflection */}

                    <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/[0.06] to-transparent pointer-events-none" />

                    {/* Moving light */}

                    {!shouldReduceMotion && (
                      <motion.div
                        initial={{
                          x: '-140%',
                        }}
                        animate={{
                          x: '140%',
                        }}
                        transition={{
                          duration: 2.2,
                          delay: 1.5,
                          repeat: Infinity,
                          repeatDelay: 6,
                          ease: 'easeInOut',
                        }}
                        className="absolute top-0 bottom-0 w-[30%] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent skew-x-[-15deg] pointer-events-none"
                      />
                    )}

                    {/* Identity */}

                    <div className="absolute bottom-0 left-0 right-0 p-5">

                      <p className="text-white text-lg font-semibold">
                        Deepak Meena
                      </p>

                      <div className="flex items-center gap-2 mt-1">

                        <motion.span
                          animate={
                            shouldReduceMotion
                              ? {}
                              : {
                                  opacity: [0.4, 1, 0.4],
                                }
                          }
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                          className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] shadow-[0_0_8px_#4ADE80]"
                        />

                        <span className="text-[#BAE6FD] text-xs">
                          Software Developer
                        </span>

                      </div>

                    </div>

                  </div>

                </div>

              </motion.div>

              {/* =================================================
                  OPPORTUNITY BADGE
              ================================================= */}

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
                  delay: 0.9,
                }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[245px]"
              >

                <motion.div
                  animate={
                    shouldReduceMotion
                      ? {}
                      : {
                          y: [0, -4, 0],
                        }
                  }
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl border border-[#38BDF833] bg-[#07101B]/95 backdrop-blur-xl shadow-[0_18px_45px_rgba(0,0,0,0.5)]"
                >

                  <div className="w-9 h-9 shrink-0 rounded-xl flex items-center justify-center bg-[#38BDF812] border border-[#38BDF833]">

                    <Sparkles
                      size={17}
                      className="text-[#38BDF8]"
                    />

                  </div>

                  <div>

                    <div className="flex items-center gap-2">

                      <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] shadow-[0_0_7px_#4ADE80]" />

                      <p className="text-[#F8FAFC] text-xs font-semibold">
                        Open to Opportunities
                      </p>

                    </div>

                    <p className="text-[#64748B] text-[10px] mt-1">
                      Software Development
                    </p>

                  </div>

                </motion.div>

              </motion.div>

            </div>

          </motion.div>

          {/* =================================================
              INTRODUCTION
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={
              inView
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {}
            }
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
          >

            <div className="flex items-center gap-3 mb-5">

              <span className="text-[#38BDF8] text-xs font-mono uppercase tracking-[0.2em]">
                Who I Am
              </span>

              <span className="h-px w-16 bg-gradient-to-r from-[#38BDF8] to-transparent" />

            </div>

            <h3 className="text-3xl md:text-4xl font-bold leading-tight text-[#F8FAFC]">

              Building software with{' '}

              <span className="text-[#38BDF8]">
                logic,
              </span>{' '}

              <span className="text-[#A78BFA]">
                creativity
              </span>{' '}

              and purpose.

            </h3>

            <div className="mt-6 space-y-4">

              <p className="text-[#CBD5E1] text-sm md:text-base leading-7">

                I'm{' '}

                <span className="text-[#F8FAFC] font-medium">
                  Deepak Meena
                </span>
                , a Computer Science and Engineering student
                at{' '}

                <span className="text-[#7DD3FC] font-medium">
                  IIITDM Jabalpur
                </span>
                . I enjoy turning ideas into practical software
                products and solving challenging programming
                problems.

              </p>

              <p className="text-[#94A3B8] text-sm md:text-base leading-7">

                My interests span{' '}

                <span className="text-[#CBD5E1]">
                  full-stack development, backend engineering,
                  AI-powered applications and real-time systems
                </span>
                . I enjoy working across the stack and
                understanding how different pieces of a system
                work together.

              </p>

              <p className="text-[#94A3B8] text-sm md:text-base leading-7">

                I continuously improve my skills through
                hands-on projects, competitive programming and
                building systems that solve real-world problems.

              </p>

            </div>

            {/* =================================================
                EDUCATION + LOCATION
            ================================================= */}

            <div className="grid sm:grid-cols-2 gap-3 mt-8">

              <motion.div
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: -4,
                      }
                }
                className="group flex items-center gap-3 p-4 rounded-xl border border-[#1E293B] bg-[#0B1220]/70 hover:border-[#38BDF844] transition-all duration-300"
              >

                <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[#38BDF80D] border border-[#38BDF825]">

                  <GraduationCap
                    size={17}
                    className="text-[#38BDF8]"
                  />

                </div>

                <div>

                  <p className="text-[#64748B] text-[10px] uppercase tracking-wider">
                    Education
                  </p>

                  <p className="text-[#E2E8F0] text-xs font-medium mt-1">
                    B.Tech CSE · IIITDM Jabalpur
                  </p>

                </div>

              </motion.div>

              <motion.div
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: -4,
                      }
                }
                className="group flex items-center gap-3 p-4 rounded-xl border border-[#1E293B] bg-[#0B1220]/70 hover:border-[#A78BFA44] transition-all duration-300"
              >

                <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[#A78BFA0D] border border-[#A78BFA25]">

                  <MapPin
                    size={17}
                    className="text-[#A78BFA]"
                  />

                </div>

                <div>

                  <p className="text-[#64748B] text-[10px] uppercase tracking-wider">
                    Based In
                  </p>

                  <p className="text-[#E2E8F0] text-xs font-medium mt-1">
                    Kota, Rajasthan, India
                  </p>

                </div>

              </motion.div>

            </div>

          </motion.div>

        </div>

        {/* =====================================================
            STATS
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
            delay: 0.4,
          }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mt-20 max-w-4xl mx-auto"
        >

          {stats.map((stat, index) => {

            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
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
                  duration: 0.5,
                  delay: 0.5 + index * 0.1,
                }}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: -6,
                      }
                }
                className="group relative p-5 md:p-6 rounded-2xl border border-[#1E293B] bg-[#0B1220]/75 backdrop-blur-xl overflow-hidden"
              >

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#38BDF808] to-[#A78BFA08]" />

                <div className="relative">

                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center border ${getIconBackground(
                      stat.color
                    )}`}
                  >

                    <Icon
                      size={18}
                      className={getIconColor(stat.color)}
                    />

                  </div>

                  <p className="mt-5 text-2xl md:text-3xl font-bold text-[#F8FAFC]">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-xs text-[#64748B]">
                    {stat.label}
                  </p>

                </div>

              </motion.div>
            );
          })}

        </motion.div>

        {/* =====================================================
            WHAT I DO
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
            delay: 0.55,
          }}
          className="mt-20"
        >

          <div className="mb-7">

            <div className="flex items-center gap-3">

              <span className="text-[#38BDF8] text-xs font-mono uppercase tracking-[0.2em]">
                What I Do
              </span>

              <span className="h-px w-12 bg-[#38BDF8]" />

            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-[#F8FAFC] mt-3">
              Areas I enjoy working in
            </h3>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

            {capabilities.map((item, index) => {

              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
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
                    duration: 0.5,
                    delay: 0.6 + index * 0.08,
                  }}
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : {
                          y: -6,
                        }
                  }
                  className="group relative p-5 rounded-2xl border border-[#1E293B] bg-[#0B1220]/70 hover:border-[#334155] transition-all duration-300"
                >

                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center border ${getIconBackground(
                      item.color
                    )}`}
                  >

                    <Icon
                      size={20}
                      className={getIconColor(item.color)}
                    />

                  </div>

                  <h4 className="text-[#F1F5F9] font-semibold text-sm mt-5">
                    {item.title}
                  </h4>

                  <p className="text-[#64748B] text-xs leading-6 mt-2">
                    {item.description}
                  </p>

                  <ArrowUpRight
                    size={14}
                    className="absolute top-5 right-5 text-[#334155] group-hover:text-[#38BDF8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />

                </motion.div>
              );
            })}

          </div>

        </motion.div>

        {/* =====================================================
            CONNECT
        ===================================================== */}

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
            delay: 0.9,
          }}
          className="mt-8 relative overflow-hidden rounded-2xl border border-[#1E293B] bg-[#0B1220]/80"
        >

          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#38BDF8] to-[#A78BFA]" />

          <div className="px-6 py-5 md:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">

            <div className="flex items-start gap-4">

              <div className="hidden sm:flex w-10 h-10 shrink-0 rounded-xl items-center justify-center bg-[#38BDF80D] border border-[#38BDF825]">

                <Sparkles
                  size={18}
                  className="text-[#38BDF8]"
                />

              </div>

              <div>

                <p className="text-[#E2E8F0] text-sm font-semibold">
                  Always learning. Always building.
                </p>

                <p className="text-[#64748B] text-xs leading-5 mt-1">
                  Exploring better ways to build reliable,
                  scalable and intelligent software.
                </p>

              </div>

            </div>

            {/* SOCIAL ACTIONS */}

            <div className="flex flex-wrap items-center gap-2 shrink-0">

              {/* GitHub */}

              <a
                href="https://github.com/Deepakmeena-123"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open GitHub profile"
                className="group inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg border border-[#334155] bg-[#0A111C] text-[#94A3B8] text-xs font-medium hover:text-white hover:border-[#38BDF855] transition-all duration-200"
              >

                <span className="group-hover:text-[#38BDF8] transition-colors">
                  <GithubIcon />
                </span>

                GitHub

                <ArrowUpRight
                  size={12}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />

              </a>

              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/in/deepak-meena-a28848372/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open LinkedIn profile"
                className="group inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg border border-[#334155] bg-[#0A111C] text-[#94A3B8] text-xs font-medium hover:text-white hover:border-[#38BDF855] transition-all duration-200"
              >

                <span className="group-hover:text-[#38BDF8] transition-colors">
                  <LinkedinIcon />
                </span>

                LinkedIn

                <ArrowUpRight
                  size={12}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />

              </a>

              {/* Email */}

              <a
                href="mailto:meenadeepak0899@gmail.com"
                aria-label="Send email"
                className="group inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-gradient-to-r from-[#0EA5E9] to-[#6366F1] text-white text-xs font-semibold shadow-[0_8px_25px_rgba(14,165,233,0.18)] hover:shadow-[0_10px_30px_rgba(99,102,241,0.28)] hover:-translate-y-0.5 transition-all duration-200"
              >

                <Mail size={14} />

                Email Me

                <ArrowUpRight
                  size={12}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />

              </a>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}