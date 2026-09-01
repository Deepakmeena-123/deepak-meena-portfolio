import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import {
  Trophy,
  Code2,
  Medal,
  Target,
  ArrowUpRight,
} from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'Javelin Throw — Gold Medal',
    subtitle: 'Institute Sports Fest',
    description:
      'Won Gold Medal in Javelin Throw at the institute-level sports fest.',
    accent: '#FBBF24',
  },
  {
    icon: Medal,
    title: 'Inter-IIIT Sports Meet',
    subtitle: 'Competitive Sports',
    description:
      'Represented the institute in the Inter-IIIT sports competition.',
    accent: '#38BDF8',
  },
  {
    icon: Code2,
    title: 'Competitive Programming',
    subtitle: 'Problem Solving',
    description:
      'Regularly practice Data Structures, Algorithms and competitive programming problems.',
    accent: '#A78BFA',
  },
  {
    icon: Target,
    title: 'Software Engineering',
    subtitle: 'Continuous Learning',
    description:
      'Building full-stack and AI-powered applications while strengthening core software engineering skills.',
    accent: '#4ADE80',
  },
];

export default function Achievements() {
  const ref = useRef<HTMLElement | null>(null);

  const inView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  const reduceMotion = useReducedMotion();

  return (
    <section
      id="achievements"
      ref={ref}
      className="relative overflow-hidden bg-[#070B12] py-24 md:py-28"
    >
      {/* Background */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute left-[-180px] top-[15%] w-[400px] h-[400px] rounded-full bg-[#38BDF8] opacity-[0.035] blur-[130px]" />

        <div className="absolute right-[-180px] bottom-[10%] w-[400px] h-[400px] rounded-full bg-[#A78BFA] opacity-[0.04] blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(148,163,184,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.8) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">

        {/* Header */}

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
          className="text-center mb-14"
        >

          <span className="text-[#67E8F9] text-xs font-mono tracking-[0.28em] uppercase">
            Highlights
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#F8FAFC]">
            Beyond{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(100deg, #38BDF8, #A78BFA)',
              }}
            >
              Code
            </span>
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-[#8FA0B7] text-sm md:text-base leading-7">
            A few achievements and experiences that reflect
            my competitive mindset, discipline and continuous
            learning.
          </p>

        </motion.div>

        {/* Achievement grid */}

        <div className="grid md:grid-cols-2 gap-5">

          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;

            return (
              <motion.div
                key={achievement.title}
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
                  delay: index * 0.12,
                }}
                whileHover={
                  reduceMotion
                    ? {}
                    : {
                        y: -5,
                      }
                }
                className="group relative"
              >

                {/* Glow */}

                <div
                  className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${achievement.accent}40, transparent 60%)`,
                  }}
                />

                {/* Card */}

                <div className="relative h-full rounded-2xl border border-[#29364B] bg-[#0A101A]/95 p-6 md:p-7 transition-all duration-300 group-hover:border-[#3B4C65]">

                  <div className="flex items-start justify-between gap-5">

                    {/* Icon */}

                    <motion.div
                      animate={
                        reduceMotion
                          ? {}
                          : {
                              y: [0, -3, 0],
                            }
                      }
                      transition={{
                        duration: 4,
                        delay: index * 0.3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="w-12 h-12 rounded-xl flex items-center justify-center border"
                      style={{
                        color: achievement.accent,
                        backgroundColor: `${achievement.accent}0D`,
                        borderColor: `${achievement.accent}30`,
                      }}
                    >
                      <Icon size={21} />
                    </motion.div>

                    <ArrowUpRight
                      size={17}
                      className="text-[#334155] group-hover:text-[#67E8F9] transition-colors"
                    />

                  </div>

                  {/* Text */}

                  <div className="mt-6">

                    <p
                      className="text-[9px] font-mono tracking-[0.2em] uppercase"
                      style={{
                        color: achievement.accent,
                      }}
                    >
                      {achievement.subtitle}
                    </p>

                    <h3 className="mt-2 text-xl font-bold text-[#F8FAFC]">
                      {achievement.title}
                    </h3>

                    <p className="mt-3 text-[#8FA0B7] text-sm leading-6">
                      {achievement.description}
                    </p>

                  </div>

                  {/* Bottom line */}

                  <div className="mt-6 pt-5 border-t border-[#1E293B]">

                    <div className="flex items-center gap-2">

                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{
                          backgroundColor:
                            achievement.accent,
                          boxShadow:
                            `0 0 8px ${achievement.accent}`,
                        }}
                      />

                      <span className="text-[#64748B] text-[10px] font-mono uppercase tracking-wider">
                        Achievement
                      </span>

                    </div>

                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>

        {/* Bottom statement */}

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
            delay: 0.7,
          }}
          className="mt-8 rounded-2xl border border-[#29364B] bg-[#0A101A]/70 px-6 py-5 text-center"
        >

          <p className="text-[#A8B5C7] text-sm">
            <span className="text-[#67E8F9] font-semibold">
              Build.
            </span>{' '}
            <span className="text-[#CBD5E1]">
              Compete.
            </span>{' '}
            <span className="text-[#A78BFA] font-semibold">
              Learn.
            </span>{' '}
            <span className="text-[#CBD5E1]">
              Improve.
            </span>
          </p>

        </motion.div>

      </div>
    </section>
  );
}