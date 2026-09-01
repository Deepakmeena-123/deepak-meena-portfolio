import { motion, useInView, useReducedMotion } from 'framer-motion';
import {
  Code2,
  Server,
  Database,
  BrainCircuit,
  Wrench,
  ArrowUpRight,
  Sparkles,
  Terminal,
} from 'lucide-react';
import { useRef } from 'react';

/* =========================================================
   SKILL DATA
========================================================= */

const skillGroups = [
  {
    title: 'Frontend',
    short: '01',
    description: 'Modern, responsive interfaces and web experiences.',
    icon: Code2,
    skills: [
      'React',
      'Next.js',
      'JavaScript',
      'TypeScript',
      'HTML',
      'CSS',
      'Tailwind CSS',
      'Bootstrap',
    ],
    accent: '#38BDF8',
  },
  {
    title: 'Backend',
    short: '02',
    description: 'APIs, server-side logic and application architecture.',
    icon: Server,
    skills: [
      'Node.js',
      'Express.js',
      'Python',
      'Django',
      'REST APIs',
      'Authentication',
    ],
    accent: '#A78BFA',
  },
  {
    title: 'Databases',
    short: '03',
    description: 'Structured and document-based data systems.',
    icon: Database,
    skills: [
      'MongoDB',
      'MySQL',
      'PostgreSQL',
      'Mongoose',
      'Database Design',
    ],
    accent: '#60A5FA',
  },
  {
    title: 'AI & Intelligent Systems',
    short: '04',
    description: 'Practical applications using modern AI concepts.',
    icon: BrainCircuit,
    skills: [
      'AI Applications',
      'LLM Integration',
      'RAG',
      'Prompt Engineering',
      'Machine Learning',
    ],
    accent: '#F472B6',
  },
  {
    title: 'Programming & DSA',
    short: '05',
    description: 'Algorithms, problem solving and competitive programming.',
    icon: Terminal,
    skills: [
      'C++',
      'Data Structures',
      'Algorithms',
      'Competitive Programming',
      'Problem Solving',
    ],
    accent: '#4ADE80',
  },
  {
    title: 'Tools & Engineering',
    short: '06',
    description: 'Development workflow, version control and deployment.',
    icon: Wrench,
    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'Postman',
      'Docker',
      'Render',
      'Vercel',
    ],
    accent: '#FB923C',
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function Skills() {
  const ref = useRef<HTMLElement | null>(null);

  const inView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  const reduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      ref={ref}
      className="relative overflow-hidden bg-[#050810] py-24 md:py-32"
    >

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Cyan glow */}

        <motion.div
          animate={
            reduceMotion
              ? {}
              : {
                  x: [0, 60, -20, 0],
                  y: [0, -30, 20, 0],
                }
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -left-56 top-20 w-[520px] h-[520px] rounded-full bg-[#0EA5E9] opacity-[0.055] blur-[150px]"
        />

        {/* Violet glow */}

        <motion.div
          animate={
            reduceMotion
              ? {}
              : {
                  x: [0, -50, 20, 0],
                  y: [0, 30, -20, 0],
                }
          }
          transition={{
            duration: 21,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -right-56 bottom-10 w-[520px] h-[520px] rounded-full bg-[#8B5CF6] opacity-[0.055] blur-[150px]"
        />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(148,163,184,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.7) 1px, transparent 1px)',
            backgroundSize: '70px 70px',
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
          }}
          className="max-w-3xl mx-auto text-center mb-16"
        >

          {/* Label */}

          <div className="inline-flex items-center gap-3">

            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#38BDF8]" />

            <span className="text-[#67E8F9] text-xs font-mono tracking-[0.28em] uppercase">
              Technical Skills
            </span>

            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#A78BFA]" />

          </div>

          {/* Heading */}

          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#F8FAFC]">

            My{' '}

            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(100deg, #22D3EE, #38BDF8, #A78BFA)',
              }}
            >
              Tech Stack
            </span>

          </h2>

          {/* Description */}

          <p className="mt-5 text-[#A8B4C7] text-sm md:text-base leading-7">
            Technologies I use to design, build and ship
            practical software applications.
          </p>

        </motion.div>

        {/* ===================================================
            SKILL CARDS
        =================================================== */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

          {skillGroups.map((group, index) => {

            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
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
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: 'easeOut',
                }}
                whileHover={
                  reduceMotion
                    ? {}
                    : {
                        y: -7,
                      }
                }
                className="group relative"
              >

                {/* =================================================
                    CARD GLOW
                ================================================= */}

                <div
                  className="absolute -inset-px rounded-[22px] opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${group.accent}55, transparent 55%, ${group.accent}22)`,
                  }}
                />

                {/* =================================================
                    CARD
                ================================================= */}

                <div className="relative h-full rounded-[21px] border border-[#263247] bg-[#0A111D]/95 backdrop-blur-xl overflow-hidden transition-all duration-500 group-hover:border-[#3A4A63]">

                  {/* Top colored line */}

                  <div
                    className="h-[2px] w-0 group-hover:w-full transition-all duration-700"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${group.accent}, transparent)`,
                    }}
                  />

                  <div className="p-6">

                    {/* =================================================
                        HEADER
                    ================================================= */}

                    <div className="flex items-start justify-between">

                      <div className="flex items-center gap-4">

                        {/* Icon */}

                        <div
                          className="relative w-12 h-12 rounded-xl flex items-center justify-center border"
                          style={{
                            color: group.accent,
                            backgroundColor: `${group.accent}0D`,
                            borderColor: `${group.accent}35`,
                          }}
                        >

                          <Icon size={21} />

                          {/* Small glow */}

                          <div
                            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{
                              boxShadow: `0 0 28px ${group.accent}22`,
                            }}
                          />

                        </div>

                        {/* Title */}

                        <div>

                          <h3 className="text-[#F8FAFC] font-semibold text-[15px]">
                            {group.title}
                          </h3>

                          <p
                            className="text-[10px] font-mono mt-1 tracking-wider"
                            style={{
                              color: group.accent,
                            }}
                          >
                            / {group.short}
                          </p>

                        </div>

                      </div>

                      {/* Arrow */}

                      <div
                        className="w-8 h-8 rounded-lg border border-[#263247] flex items-center justify-center text-[#475569] group-hover:text-white transition-all duration-300"
                      >

                        <ArrowUpRight
                          size={15}
                          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                        />

                      </div>

                    </div>

                    {/* =================================================
                        DESCRIPTION
                    ================================================= */}

                    <p className="mt-5 text-[#8FA0B7] text-xs leading-6">
                      {group.description}
                    </p>

                    {/* =================================================
                        SKILL TAGS
                    ================================================= */}

                    <div className="flex flex-wrap gap-2 mt-5">

                      {group.skills.map((skill) => (

                        <span
                          key={skill}
                          className="px-2.5 py-1.5 rounded-lg border border-[#263247] bg-[#0D1522] text-[#C3CFDE] text-[11px] font-medium hover:text-white transition-all duration-200"
                          style={{
                            transitionProperty:
                              'color, border-color, background-color',
                          }}
                        >
                          {skill}
                        </span>

                      ))}

                    </div>

                    {/* =================================================
                        BOTTOM INDICATOR
                    ================================================= */}

                    <div className="flex items-center gap-2 mt-6 pt-4 border-t border-[#1E293B]">

                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{
                          backgroundColor: group.accent,
                          boxShadow: `0 0 8px ${group.accent}`,
                        }}
                      />

                      <span className="text-[#64748B] text-[10px]">
                        Hands-on experience
                      </span>

                    </div>

                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>

        {/* =====================================================
            CORE STACK
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
            delay: 0.65,
          }}
          className="relative mt-8 rounded-2xl border border-[#263247] bg-[#0A111D]/90 overflow-hidden"
        >

          {/* Accent */}

          <div
            className="absolute left-0 top-0 bottom-0 w-[2px]"
            style={{
              background:
                'linear-gradient(to bottom, #22D3EE, #6366F1, #A78BFA)',
            }}
          />

          <div className="px-6 py-6 md:px-8">

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

              {/* Left */}

              <div className="flex items-center gap-4">

                <div className="relative w-11 h-11 shrink-0 rounded-xl bg-[#38BDF80D] border border-[#38BDF830] flex items-center justify-center">

                  <Sparkles
                    size={18}
                    className="text-[#38BDF8]"
                  />

                </div>

                <div>

                  <div className="flex items-center gap-2">

                    <h3 className="text-[#F8FAFC] text-sm font-semibold">
                      Core Development Stack
                    </h3>

                    <span className="px-2 py-0.5 rounded-full bg-[#38BDF80D] border border-[#38BDF820] text-[#67E8F9] text-[9px] font-mono">
                      CORE
                    </span>

                  </div>

                  <p className="text-[#718096] text-xs mt-1">
                    Technologies I work with most frequently.
                  </p>

                </div>

              </div>

              {/* Technologies */}

              <div className="flex flex-wrap gap-2">

                {[
                  'React',
                  'Node.js',
                  'Express.js',
                  'MongoDB',
                  'Python',
                  'Django',
                  'C++',
                  'Git',
                ].map((tech, index) => (

                  <motion.span
                    key={tech}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
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
                      duration: 0.35,
                      delay: 0.8 + index * 0.05,
                    }}
                    className="px-3 py-1.5 rounded-lg border border-[#263247] bg-[#0D1522] text-[#D5DEEA] text-[11px] font-medium hover:border-[#38BDF855] hover:text-[#67E8F9] transition-all duration-200"
                  >
                    {tech}
                  </motion.span>

                ))}

              </div>

            </div>

          </div>

        </motion.div>

        {/* =====================================================
            BOTTOM STATEMENT
        ===================================================== */}

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
            duration: 0.7,
            delay: 1,
          }}
          className="flex items-center justify-center gap-3 mt-8"
        >

          <span className="w-8 h-px bg-gradient-to-r from-transparent to-[#334155]" />

          <span className="text-[#64748B] text-[10px] font-mono uppercase tracking-[0.18em]">
            Learning · Building · Improving
          </span>

          <span className="w-8 h-px bg-gradient-to-l from-transparent to-[#334155]" />

        </motion.div>

      </div>

    </section>
  );
}