import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Award,
  BookOpen,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

interface Course {
  title: string;
  status: 'Completed' | 'In Progress';
  description: string;
}

const courses: Course[] = [
  {
    title: 'Business Intelligence & Analytics',
    status: 'Completed',
    description:
      'Business intelligence, analytics and data-driven decision making.',
  },
  {
    title: 'Ethical Hacking',
    status: 'Completed',
    description:
      'Cybersecurity fundamentals and ethical hacking concepts.',
  },
  {
    title: 'The Joy of Computing using Python',
    status: 'Completed',
    description:
      'Python programming and computational problem solving.',
  },
  {
    title: 'Software Testing',
    status: 'Completed',
    description:
      'Software testing concepts, techniques and quality practices.',
  },
  {
    title: 'Privacy and Security in Online Social Media',
    status: 'In Progress',
    description:
      'Learning privacy, security and safety concepts for online social platforms.',
  },
  {
    title: 'Reinforcement Learning',
    status: 'In Progress',
    description:
      'Currently exploring reinforcement learning concepts and techniques.',
  },
];

export default function Certifications() {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  const completedCourses = courses.filter(
    (course) => course.status === 'Completed'
  );

  const inProgressCourses = courses.filter(
    (course) => course.status === 'In Progress'
  );

  return (
    <section
      id="certifications"
      ref={ref}
      className="relative py-24 bg-[#0A0E14] overflow-hidden"
    >
      {/* ================= BACKGROUND ================= */}

      <div
        className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full opacity-[0.05] blur-[130px] pointer-events-none"
        style={{
          background: '#38BDF8',
        }}
      />

      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.04] blur-[120px] pointer-events-none"
        style={{
          background: '#A78BFA',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">

        {/* ================= HEADER ================= */}

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
            duration: 0.6,
          }}
          className="mb-14"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

            <div>
              <span className="text-[#38BDF8] font-mono text-xs tracking-[0.25em] uppercase">
                Learning
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mt-3">
                Courses &{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      'linear-gradient(100deg, #38BDF8, #A78BFA)',
                  }}
                >
                  Certifications.
                </span>
              </h2>
            </div>

            <div className="flex items-center gap-2 text-[#64748B] text-sm">
              <Sparkles
                size={16}
                className="text-[#A78BFA]"
              />
              <span>
                Always learning. Always improving.
              </span>
            </div>

          </div>
        </motion.div>

        {/* ================= COMPLETED ================= */}

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
            duration: 0.5,
            delay: 0.1,
          }}
          className="mb-12"
        >

          {/* Section heading */}

          <div className="flex items-center justify-between mb-6">

            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#38BDF80D] border border-[#38BDF833]">
                <Award
                  size={20}
                  className="text-[#38BDF8]"
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#F8FAFC]">
                  Completed
                </h3>

                <p className="text-[#475569] text-xs mt-0.5">
                  Completed learning
                </p>
              </div>

            </div>

            <span className="text-[#38BDF8] text-xs font-mono">
              {completedCourses.length} COURSES
            </span>

          </div>

          {/* Course cards */}

          <div className="grid md:grid-cols-2 gap-4">

            {completedCourses.map((course, index) => (
              <motion.div
                key={course.title}
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
                  duration: 0.5,
                  delay: 0.15 + index * 0.08,
                }}
                whileHover={{
                  y: -4,
                }}
                className="group relative rounded-2xl border border-[#1E293B] bg-[#0D1117] p-5 hover:border-[#38BDF855] transition-all duration-300"
              >

                <div className="flex items-start gap-4">

                  {/* Number */}

                  <div className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center bg-[#111827] border border-[#1E293B] text-[#38BDF8] font-mono text-xs">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <div className="min-w-0 flex-1">

                    {/* Status */}

                    <div className="flex items-center gap-1.5 mb-2">

                      <CheckCircle2
                        size={12}
                        className="text-[#38BDF8]"
                      />

                      <span className="text-[#38BDF8] text-[9px] font-mono uppercase tracking-widest">
                        Completed
                      </span>

                    </div>

                    {/* Title */}

                    <h4 className="text-[#F8FAFC] font-semibold text-base leading-snug group-hover:text-[#38BDF8] transition-colors">
                      {course.title}
                    </h4>

                    {/* Description */}

                    <p className="text-[#64748B] text-xs leading-relaxed mt-2">
                      {course.description}
                    </p>

                  </div>

                </div>

              </motion.div>
            ))}

          </div>

        </motion.div>

        {/* ================= CURRENTLY LEARNING ================= */}

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
            duration: 0.5,
            delay: 0.35,
          }}
        >

          {/* Section heading */}

          <div className="flex items-center justify-between mb-6">

            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#A78BFA0D] border border-[#A78BFA33]">
                <BookOpen
                  size={20}
                  className="text-[#A78BFA]"
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#F8FAFC]">
                  Currently Learning
                </h3>

                <p className="text-[#475569] text-xs mt-0.5">
                  Expanding my technical knowledge
                </p>
              </div>

            </div>

            <span className="text-[#A78BFA] text-xs font-mono">
              {inProgressCourses.length} IN PROGRESS
            </span>

          </div>

          {/* In-progress cards */}

          <div className="grid md:grid-cols-2 gap-4">

            {inProgressCourses.map((course, index) => (
              <motion.div
                key={course.title}
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
                  duration: 0.5,
                  delay: 0.4 + index * 0.1,
                }}
                whileHover={{
                  y: -4,
                }}
                className="group relative rounded-2xl border border-[#2E1F4D] bg-[#0D1117] p-5 hover:border-[#A78BFA66] transition-all duration-300"
              >

                {/* Progress accent */}

                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#A78BFA] to-transparent" />

                <div className="flex items-start gap-4">

                  {/* Icon */}

                  <div className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center bg-[#A78BFA0D] border border-[#A78BFA33]">
                    <BookOpen
                      size={19}
                      className="text-[#A78BFA]"
                    />
                  </div>

                  <div className="min-w-0 flex-1">

                    {/* Status */}

                    <div className="flex items-center gap-2 mb-2">

                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-[#A78BFA] opacity-50 animate-ping" />

                        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#A78BFA]" />
                      </span>

                      <span className="text-[#A78BFA] text-[9px] font-mono uppercase tracking-widest">
                        In Progress
                      </span>

                    </div>

                    {/* Title */}

                    <h4 className="text-[#F8FAFC] font-semibold text-base leading-snug group-hover:text-[#A78BFA] transition-colors">
                      {course.title}
                    </h4>

                    {/* Description */}

                    <p className="text-[#64748B] text-xs leading-relaxed mt-2">
                      {course.description}
                    </p>

                  </div>

                </div>

              </motion.div>
            ))}

          </div>

        </motion.div>

        {/* ================= BOTTOM NOTE ================= */}

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
          className="mt-10 flex items-center justify-center"
        >

          <div className="inline-flex items-center gap-2 text-[#475569] text-xs">

            <span>
              Continuous learning is part of my development journey.
            </span>

            <ArrowUpRight
              size={13}
              className="text-[#38BDF8]"
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
}