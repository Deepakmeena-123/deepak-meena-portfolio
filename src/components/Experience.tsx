import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  ArrowUpRight,
} from 'lucide-react';

const responsibilities = [
  'Developed the Complaint Management Module for the FUSION Portal, covering registration, assignment, tracking, escalation and resolution.',
  'Implemented role-based workflows, REST APIs and database operations to support complaint management functionality.',
  'Contributed to testing, debugging and validation to improve application reliability and maintainability.',
];

const technologies = [
  'Django',
  'Python',
  'REST APIs',
  'Database',
  'RBAC',
  'Testing',
];

export default function Experience() {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-24 md:py-28 bg-[#080C13] overflow-hidden"
    >
      {/* Background */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute -top-40 right-[-100px] w-[500px] h-[500px] rounded-full bg-[#38BDF8] opacity-[0.035] blur-[140px]" />

        <div className="absolute bottom-[-250px] left-[-150px] w-[450px] h-[450px] rounded-full bg-[#A78BFA] opacity-[0.025] blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(148,163,184,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.8) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">

        {/* =====================================================
            HEADER
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
            duration: 0.6,
          }}
          className="mb-14"
        >

          <div className="flex items-center gap-3">

            <span className="w-8 h-px bg-gradient-to-r from-transparent to-[#38BDF8]" />

            <span className="text-[#67E8F9] font-mono text-xs tracking-[0.25em] uppercase">
              Experience
            </span>

          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mt-4">
            Where I've{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(100deg, #38BDF8, #A78BFA)',
              }}
            >
              worked.
            </span>
          </h2>

          <p className="text-[#94A3B8] max-w-xl mt-5 text-sm md:text-base leading-7">
            Practical software engineering experience focused on
            building reliable application workflows and backend
            functionality.
          </p>

        </motion.div>

        {/* =====================================================
            EXPERIENCE CARD
        ===================================================== */}

        <motion.article
          initial={{
            opacity: 0,
            y: 40,
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
            delay: 0.15,
          }}
          className="group relative rounded-3xl border border-[#29364B] bg-[#0C121C]/95 overflow-hidden hover:border-[#38BDF855] transition-all duration-500"
        >

          {/* Top accent */}

          <div className="h-[2px] w-full bg-gradient-to-r from-[#38BDF8] via-[#A78BFA] to-transparent" />

          <div className="p-7 md:p-10">

            {/* =================================================
                TOP
            ================================================= */}

            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">

              {/* Company information */}

              <div className="flex items-start gap-4">

                <div className="w-13 h-13 min-w-[52px] rounded-2xl flex items-center justify-center bg-[#38BDF80D] border border-[#38BDF833]">

                  <BriefcaseBusiness
                    size={23}
                    className="text-[#38BDF8]"
                  />

                </div>

                <div>

                  <p className="text-[#67E8F9] text-[10px] font-mono uppercase tracking-[0.18em] mb-2">
                    Software Engineering Intern
                  </p>

                  <h3 className="text-2xl md:text-3xl font-bold text-[#F8FAFC]">
                    FUSION Portal
                  </h3>

                  <p className="text-[#94A3B8] text-sm mt-1.5">
                    IIITDM Jabalpur
                  </p>

                </div>

              </div>

              {/* Metadata */}

              <div className="flex flex-col gap-2.5 text-sm text-[#94A3B8] lg:text-right">

                <div className="flex items-center gap-2 lg:justify-end">

                  <CalendarDays
                    size={15}
                    className="text-[#38BDF8]"
                  />

                  <span>
                    Internship
                  </span>

                </div>

                <div className="flex items-center gap-2 lg:justify-end">

                  <MapPin
                    size={15}
                    className="text-[#38BDF8]"
                  />

                  <span>
                    Jabalpur, India
                  </span>

                </div>

              </div>

            </div>

            {/* Divider */}

            <div className="h-px bg-[#1E293B] my-8" />

            {/* =================================================
                CONTENT
            ================================================= */}

            <div className="grid lg:grid-cols-[1fr_260px] gap-10">

              {/* Contributions */}

              <div>

                <div className="flex items-center gap-3 mb-6">

                  <span className="w-7 h-7 rounded-lg bg-[#38BDF80D] border border-[#38BDF825] flex items-center justify-center text-[#38BDF8] text-[10px] font-mono">
                    01
                  </span>

                  <p className="text-[#F8FAFC] text-sm font-semibold uppercase tracking-wider">
                    Key Contributions
                  </p>

                </div>

                <div className="space-y-5">

                  {responsibilities.map(
                    (responsibility, index) => (

                      <motion.div
                        key={responsibility}
                        initial={{
                          opacity: 0,
                          x: -15,
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
                          duration: 0.4,
                          delay:
                            0.3 + index * 0.1,
                        }}
                        className="flex items-start gap-4"
                      >

                        <span
                          className="mt-2 w-1.5 h-1.5 rounded-full bg-[#38BDF8] shrink-0"
                          style={{
                            boxShadow:
                              '0 0 8px rgba(56,189,248,0.8)',
                          }}
                        />

                        <p className="text-[#A8B5C7] text-sm md:text-[15px] leading-7">
                          {responsibility}
                        </p>

                      </motion.div>

                    )
                  )}

                </div>

              </div>

              {/* Tech Stack */}

              <div>

                <div className="flex items-center gap-3 mb-6">

                  <span className="w-7 h-7 rounded-lg bg-[#A78BFA0D] border border-[#A78BFA25] flex items-center justify-center text-[#A78BFA] text-[10px] font-mono">
                    02
                  </span>

                  <p className="text-[#F8FAFC] text-sm font-semibold uppercase tracking-wider">
                    Tech Stack
                  </p>

                </div>

                <div className="flex flex-wrap gap-2">

                  {technologies.map(
                    (technology) => (

                      <span
                        key={technology}
                        className="px-3 py-2 rounded-lg bg-[#111827] border border-[#29364B] text-[#B8C5D6] text-[11px] font-mono hover:text-[#67E8F9] hover:border-[#38BDF855] transition-all duration-200"
                      >
                        {technology}
                      </span>

                    )
                  )}

                </div>

              </div>

            </div>

            {/* =================================================
                BOTTOM HIGHLIGHT
            ================================================= */}

            <div className="mt-9 pt-6 border-t border-[#1E293B]">

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                <div>

                  <p className="text-[#64748B] text-[10px] font-mono uppercase tracking-[0.18em]">
                    Focus Area
                  </p>

                  <p className="text-[#CBD5E1] text-sm mt-1">
                    Complaint Management Module
                  </p>

                </div>

                <div className="inline-flex items-center gap-2 text-[#67E8F9] text-xs font-medium">

                  <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />

                  Software Engineering

                  <ArrowUpRight size={14} />

                </div>

              </div>

            </div>

          </div>

        </motion.article>

      </div>
    </section>
  );
}