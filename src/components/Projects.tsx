import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import {
  ArrowUpRight,
  ExternalLink,
  Sparkles,
  Layers3,
  BrainCircuit,
  Users,
  QrCode,
  GraduationCap,
  HeartHandshake,
  BriefcaseBusiness,
} from 'lucide-react';

/* =========================================================
   GITHUB ICON
   Custom SVG avoids lucide-react Github import issues
========================================================= */

const GithubIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.6-2.67-.31-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.14 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
  </svg>
);

/* =========================================================
   PROJECT TYPE
========================================================= */

interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  highlights: string[];
  github: string;
  live?: string;
  featured?: boolean;
  icon: typeof Layers3;
  accent: string;
  preview: 'ai' | 'whiteboard' | 'qr' | 'education' | 'food' | 'job';
}

/* =========================================================
   PROJECT DATA
========================================================= */

const projects: Project[] = [
  {
    title: 'AI Business Knowledge Assistant',
    category: 'AI / RAG',
    description:
      'An AI knowledge platform that lets users upload business documents and ask questions using semantic retrieval and streaming AI responses.',
    tech: [
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'pgvector',
      'Gemini',
      'RAG',
    ],
    highlights: [
      'Document-based RAG question answering',
      'Semantic search with vector embeddings',
      'Streaming responses using Gemini',
    ],
    github:
      'https://github.com/Deepakmeena-123/AI-Business-Knowledge-Assistant',
    featured: true,
    icon: BrainCircuit,
    accent: '#A78BFA',
    preview: 'ai',
  },

  {
    title: 'Real-Time Collaborative Whiteboard',
    category: 'REAL-TIME / FULL STACK',
    description:
      'A collaborative whiteboard where multiple users can draw and work together on shared canvases with real-time synchronization and persistent storage.',
    tech: [
      'React',
      'Node.js',
      'Socket.IO',
      'MongoDB',
      'Canvas',
    ],
    highlights: [
      'Real-time collaboration using WebSockets',
      'Canvas-based drawing and shared workspaces',
      'Persistent drawings with MongoDB',
    ],
    github:
      'https://github.com/Deepakmeena-123/realtime-collaborative-whiteboard',
    featured: true,
    icon: Users,
    accent: '#38BDF8',
    preview: 'whiteboard',
  },

  {
    title: 'Smart QR Attendance System',
    category: 'WEB APPLICATION',
    description:
      'A role-based attendance system using dynamic QR codes, location verification and time restrictions to make attendance more controlled and reliable.',
    tech: [
      'Django',
      'Python',
      'MySQL',
      'JWT',
      'QR Code',
      'Geolocation',
    ],
    highlights: [
      'Dynamic QR-based attendance',
      'Location and time verification',
      'Admin, staff and student workflows',
    ],
    github:
      'https://github.com/Deepakmeena-123/Smart-QR-Attendance-System',
    live:
      'https://smart-qr-attendance-system-az9y.onrender.com',
    icon: QrCode,
    accent: '#22D3EE',
    preview: 'qr',
  },

  {
    title: 'StudyNotion',
    category: 'EDTECH / FULL STACK',
    description:
      'A full-stack learning platform connecting students and instructors through course creation, learning workflows, authentication and online payments.',
    tech: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Razorpay',
    ],
    highlights: [
      'Student and instructor workflows',
      'Course creation and management',
      'Authentication and payment integration',
    ],
    github:
      'https://github.com/Deepakmeena-123/StudyNotion',
    live:
      'https://studynotion-frontend.vercel.app/',
    icon: GraduationCap,
    accent: '#60A5FA',
    preview: 'education',
  },

  {
    title: 'Social Serving Food Delivery System',
    category: 'FULL STACK / SOCIAL IMPACT',
    description:
      'A food delivery and donation platform connecting customers, restaurants and NGOs while supporting leftover food distribution.',
    tech: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'EJS',
      'Geolocation',
    ],
    highlights: [
      'Customer, restaurant and NGO workflows',
      'Leftover food donation management',
      'Location-based food and delivery logic',
    ],
    github:
      'https://github.com/Deepakmeena-123/social-serving-food-delivery-system-',
    icon: HeartHandshake,
    accent: '#4ADE80',
    preview: 'food',
  },

  {
    title: 'JobFit AI',
    category: 'AI / CAREER',
    description:
      'An AI-focused application designed to help users evaluate job opportunities against their skills and profile for more targeted job searching.',
    tech: [
      'Python',
      'AI',
      'Machine Learning',
      'NLP',
    ],
    highlights: [
      'AI-assisted job and profile matching',
      'Job-fit analysis',
      'Intelligent career recommendations',
    ],
    github:
      'https://github.com/Deepakmeena-123/JobFit-AI',
    icon: BriefcaseBusiness,
    accent: '#F472B6',
    preview: 'job',
  },
];

/* =========================================================
   MINI UI HELPERS
========================================================= */

const MiniDot = ({
  color,
}: {
  color: string;
}) => (
  <span
    className="w-1.5 h-1.5 rounded-full"
    style={{
      backgroundColor: color,
      boxShadow: `0 0 8px ${color}`,
    }}
  />
);

/* =========================================================
   AI PREVIEW
========================================================= */

function AIPreview({
  reduceMotion,
}: {
  reduceMotion: boolean | null;
}) {
  return (
    <div className="absolute inset-0 p-5 md:p-7">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-2">
          <BrainCircuit
            size={15}
            className="text-[#A78BFA]"
          />

          <span className="text-[9px] text-[#CBD5E1] font-mono">
            KNOWLEDGE ASSISTANT
          </span>
        </div>

        <span className="text-[8px] text-[#64748B]">
          AI ONLINE
        </span>

      </div>

      <div className="grid grid-cols-[0.7fr_1.3fr] gap-3 mt-5">

        <div className="rounded-xl border border-[#A78BFA25] bg-[#A78BFA08] p-3">

          <p className="text-[8px] text-[#94A3B8] mb-3">
            DOCUMENTS
          </p>

          {['Business.pdf', 'Report.pdf', 'Guide.pdf'].map(
            (file, index) => (
              <motion.div
                key={file}
                animate={
                  reduceMotion
                    ? {}
                    : {
                        x: [0, 2, 0],
                      }
                }
                transition={{
                  duration: 3,
                  delay: index * 0.3,
                  repeat: Infinity,
                }}
                className="flex items-center gap-2 py-1.5"
              >
                <div className="w-5 h-6 rounded bg-[#A78BFA12] border border-[#A78BFA20]" />

                <span className="text-[7px] text-[#94A3B8]">
                  {file}
                </span>
              </motion.div>
            )
          )}

        </div>

        <div className="rounded-xl border border-[#38BDF825] bg-[#38BDF808] p-3">

          <div className="flex items-center gap-2 mb-3">

            <MiniDot color="#38BDF8" />

            <span className="text-[8px] text-[#CBD5E1]">
              AI RESPONSE
            </span>

          </div>

          <div className="space-y-2">

            <div className="h-1.5 w-[85%] rounded-full bg-[#334155]" />
            <div className="h-1.5 w-[70%] rounded-full bg-[#26364A]" />
            <div className="h-1.5 w-[90%] rounded-full bg-[#26364A]" />
            <div className="h-1.5 w-[55%] rounded-full bg-[#26364A]" />

          </div>

          <div className="mt-4 flex items-center gap-2">

            <span className="text-[7px] text-[#A78BFA]">
              Semantic Search
            </span>

            <span className="text-[7px] text-[#475569]">
              •
            </span>

            <span className="text-[7px] text-[#64748B]">
              RAG
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}

/* =========================================================
   WHITEBOARD PREVIEW
========================================================= */

function WhiteboardPreview({
  reduceMotion,
}: {
  reduceMotion: boolean | null;
}) {
  return (
    <div className="absolute inset-0">

      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            'linear-gradient(#64748B 1px, transparent 1px), linear-gradient(90deg, #64748B 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="absolute top-5 left-5 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#07111D]/90 border border-[#38BDF825]">

        <span className="text-[8px] text-[#CBD5E1]">
          LIVE CANVAS
        </span>

        <MiniDot color="#4ADE80" />

      </div>

      <motion.div
        animate={
          reduceMotion
            ? {}
            : {
                x: [0, 25, 0],
                y: [0, 10, 0],
              }
        }
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute left-[27%] top-[43%] w-24 h-12 border-2 border-[#38BDF8] rounded-lg rotate-[-8deg]"
      />

      <motion.div
        animate={
          reduceMotion
            ? {}
            : {
                x: [0, -18, 0],
                y: [0, 15, 0],
              }
        }
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute right-[20%] top-[30%] w-20 h-14 border-2 border-[#A78BFA] rounded-full"
      />

      <div className="absolute bottom-5 left-5 flex items-center gap-2">

        <div className="flex -space-x-2">

          <span className="w-6 h-6 rounded-full bg-[#38BDF8] border-2 border-[#08111C]" />

          <span className="w-6 h-6 rounded-full bg-[#A78BFA] border-2 border-[#08111C]" />

          <span className="w-6 h-6 rounded-full bg-[#4ADE80] border-2 border-[#08111C]" />

        </div>

        <span className="text-[8px] text-[#64748B]">
          3 collaborators
        </span>

      </div>

    </div>
  );
}

/* =========================================================
   QR PREVIEW
========================================================= */

function QRPreview({
  reduceMotion,
}: {
  reduceMotion: boolean | null;
}) {
  const qrCells = Array.from({ length: 81 });

  return (
    <div className="absolute inset-0 flex items-center justify-center">

      <div className="absolute left-7 top-6">

        <div className="flex items-center gap-2">

          <QrCode
            size={15}
            className="text-[#22D3EE]"
          />

          <span className="text-[8px] text-[#CBD5E1] font-mono">
            SMART ATTENDANCE
          </span>

        </div>

      </div>

      <motion.div
        animate={
          reduceMotion
            ? {}
            : {
                scale: [1, 1.04, 1],
              }
        }
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="relative w-[105px] h-[105px] rounded-xl bg-white p-3 shadow-[0_0_40px_rgba(34,211,238,0.15)]"
      >

        <div className="grid grid-cols-9 gap-[2px] w-full h-full">

          {qrCells.map((_, index) => {

            const filled =
              (index * 7 + index * index) % 5 !== 0;

            return (
              <span
                key={index}
                className={`rounded-[1px] ${
                  filled
                    ? 'bg-[#07111C]'
                    : 'bg-white'
                }`}
              />
            );
          })}

        </div>

      </motion.div>

      <div className="absolute right-7 bottom-6 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#07111D] border border-[#4ADE8030]">

        <MiniDot color="#4ADE80" />

        <span className="text-[8px] text-[#A7F3D0]">
          VERIFIED
        </span>

      </div>

    </div>
  );
}

/* =========================================================
   EDUCATION PREVIEW
========================================================= */

function EducationPreview() {
  return (
    <div className="absolute inset-0 p-5 md:p-7">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-2">

          <GraduationCap
            size={15}
            className="text-[#60A5FA]"
          />

          <span className="text-[8px] text-[#CBD5E1] font-mono">
            STUDYNOTION
          </span>

        </div>

        <span className="text-[8px] text-[#64748B]">
          DASHBOARD
        </span>

      </div>

      <div className="grid grid-cols-3 gap-3 mt-6">

        {[
          'React',
          'Node.js',
          'DSA',
        ].map((course, index) => (

          <motion.div
            key={course}
            animate={{
              y: [0, index % 2 === 0 ? -3 : 3, 0],
            }}
            transition={{
              duration: 4,
              delay: index * 0.3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="rounded-xl border border-[#60A5FA25] bg-[#60A5FA08] p-3"
          >

            <div className="h-14 rounded-lg bg-gradient-to-br from-[#60A5FA20] to-[#A78BFA12] mb-3" />

            <p className="text-[8px] text-[#CBD5E1]">
              {course}
            </p>

            <div className="mt-2 h-1 rounded-full bg-[#1E293B]">

              <div
                className="h-full rounded-full bg-[#60A5FA]"
                style={{
                  width: `${55 + index * 15}%`,
                }}
              />

            </div>

          </motion.div>

        ))}

      </div>

    </div>
  );
}

/* =========================================================
   FOOD PREVIEW
========================================================= */

function FoodPreview({
  reduceMotion,
}: {
  reduceMotion: boolean | null;
}) {
  return (
    <div className="absolute inset-0 p-5 md:p-7">

      <div className="flex items-center gap-2">

        <HeartHandshake
          size={15}
          className="text-[#4ADE80]"
        />

        <span className="text-[8px] text-[#CBD5E1] font-mono">
          SOCIAL FOOD NETWORK
        </span>

      </div>

      <div className="relative flex items-center justify-between mt-12 px-3">

        <motion.div
          animate={
            reduceMotion
              ? {}
              : {
                  y: [0, -5, 0],
                }
          }
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="flex flex-col items-center"
        >

          <div className="w-12 h-12 rounded-xl bg-[#38BDF80D] border border-[#38BDF830] flex items-center justify-center text-[#38BDF8]">
            <Users size={20} />
          </div>

          <span className="text-[7px] text-[#94A3B8] mt-2">
            Customer
          </span>

        </motion.div>

        <div className="flex-1 h-px mx-4 bg-gradient-to-r from-[#38BDF8] to-[#4ADE80]" />

        <motion.div
          animate={
            reduceMotion
              ? {}
              : {
                  y: [0, 5, 0],
                }
          }
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 0.5,
          }}
          className="flex flex-col items-center"
        >

          <div className="w-12 h-12 rounded-xl bg-[#4ADE800D] border border-[#4ADE8030] flex items-center justify-center text-[#4ADE80]">
            <HeartHandshake size={20} />
          </div>

          <span className="text-[7px] text-[#94A3B8] mt-2">
            NGO
          </span>

        </motion.div>

      </div>

      <div className="absolute bottom-5 left-5 right-5 flex items-center justify-center gap-2">

        <MiniDot color="#4ADE80" />

        <span className="text-[8px] text-[#A7F3D0]">
          Food donation workflow active
        </span>

      </div>

    </div>
  );
}

/* =========================================================
   JOBFIT PREVIEW
========================================================= */

function JobPreview({
  reduceMotion,
}: {
  reduceMotion: boolean | null;
}) {
  return (
    <div className="absolute inset-0 p-5 md:p-7">

      <div className="flex items-center gap-2">

        <BriefcaseBusiness
          size={15}
          className="text-[#F472B6]"
        />

        <span className="text-[8px] text-[#CBD5E1] font-mono">
          JOBFIT AI
        </span>

      </div>

      <div className="flex items-center justify-center gap-4 mt-9">

        <div className="w-28 rounded-xl border border-[#334155] bg-[#111827] p-3">

          <p className="text-[7px] text-[#64748B]">
            YOUR PROFILE
          </p>

          <div className="mt-3 space-y-2">

            <div className="h-1.5 w-full bg-[#334155] rounded-full" />
            <div className="h-1.5 w-[75%] bg-[#334155] rounded-full" />
            <div className="h-1.5 w-[90%] bg-[#334155] rounded-full" />

          </div>

        </div>

        <motion.div
          animate={
            reduceMotion
              ? {}
              : {
                  scale: [1, 1.15, 1],
                }
          }
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
          className="w-10 h-10 rounded-full bg-[#F472B612] border border-[#F472B640] flex items-center justify-center"
        >

          <Sparkles
            size={17}
            className="text-[#F472B6]"
          />

        </motion.div>

        <div className="w-28 rounded-xl border border-[#F472B625] bg-[#F472B608] p-3">

          <p className="text-[7px] text-[#64748B]">
            JOB MATCH
          </p>

          <p className="text-xl font-bold text-[#F8FAFC] mt-2">
            92%
          </p>

          <div className="mt-2 h-1.5 bg-[#1E293B] rounded-full">

            <div className="h-full w-[92%] rounded-full bg-[#F472B6]" />

          </div>

        </div>

      </div>

      <div className="absolute bottom-5 left-0 right-0 flex justify-center">

        <span className="px-3 py-1.5 rounded-lg bg-[#F472B60D] border border-[#F472B625] text-[#F9A8D4] text-[8px]">
          AI-powered matching
        </span>

      </div>

    </div>
  );
}

/* =========================================================
   PROJECT PREVIEW
========================================================= */

function ProjectPreview({
  type,
  reduceMotion,
}: {
  type: Project['preview'];
  reduceMotion: boolean | null;
}) {
  return (
    <div
      className="relative h-full w-full"
      style={{
        background:
          'radial-gradient(circle at 70% 20%, rgba(56,189,248,0.08), transparent 35%), linear-gradient(135deg, #0A1422, #070C14)',
      }}
    >

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(148,163,184,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.4) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      {type === 'ai' && (
        <AIPreview reduceMotion={reduceMotion} />
      )}

      {type === 'whiteboard' && (
        <WhiteboardPreview reduceMotion={reduceMotion} />
      )}

      {type === 'qr' && (
        <QRPreview reduceMotion={reduceMotion} />
      )}

      {type === 'education' && (
        <EducationPreview />
      )}

      {type === 'food' && (
        <FoodPreview reduceMotion={reduceMotion} />
      )}

      {type === 'job' && (
        <JobPreview reduceMotion={reduceMotion} />
      )}

    </div>
  );
}

/* =========================================================
   PROJECT CARD
========================================================= */

function FeaturedProjectCard({
  project,
  index,
  inView,
  reduceMotion,
}: {
  project: Project;
  index: number;
  inView: boolean;
  reduceMotion: boolean | null;
}) {
  const Icon = project.icon;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 45,
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
        delay: 0.15 + index * 0.12,
        ease: 'easeOut',
      }}
      whileHover={
        reduceMotion
          ? {}
          : {
              y: -8,
            }
      }
      className="group relative"
    >

      {/* Glow */}

      <div
        className="absolute -inset-px rounded-[26px] opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${project.accent}55, transparent 50%, #A78BFA30)`,
        }}
      />

      {/* Card */}

      <div className="relative h-full rounded-[25px] border border-[#29364B] bg-[#090F19]/95 backdrop-blur-xl overflow-hidden group-hover:border-[#3B4C65] transition-all duration-500">

        {/* Accent */}

        <div
          className="h-[2px] w-full"
          style={{
            background: `linear-gradient(90deg, ${project.accent}, #A78BFA, transparent)`,
          }}
        />

        <div className="p-5 md:p-7">

          {/* =====================================================
              PROJECT PREVIEW
          ===================================================== */}

          <div
            className="relative h-[230px] md:h-[250px] rounded-2xl border border-[#29364B] overflow-hidden mb-7"
            style={{
              boxShadow: `0 20px 60px ${project.accent}08`,
            }}
          >

            <ProjectPreview
              type={project.preview}
              reduceMotion={reduceMotion}
            />

            {/* Featured badge */}

            <div className="absolute left-5 top-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-[#050810]/70 backdrop-blur-md">

              <Sparkles
                size={11}
                className="text-[#67E8F9]"
              />

              <span className="text-[#CBD5E1] text-[9px] font-mono uppercase tracking-wider">
                Featured Project
              </span>

            </div>

            {/* Number */}

            <span className="absolute right-5 bottom-3 text-7xl font-black font-mono text-white/[0.045] select-none">
              0{index + 1}
            </span>

          </div>

          {/* =====================================================
              TITLE
          ===================================================== */}

          <div className="flex items-start justify-between gap-5">

            <div>

              <p
                className="text-[10px] font-mono tracking-[0.2em] uppercase"
                style={{
                  color: project.accent,
                }}
              >
                {project.category}
              </p>

              <h3 className="mt-2 text-2xl md:text-[27px] font-bold text-[#F8FAFC] leading-tight">
                {project.title}
              </h3>

            </div>

            <div className="hidden sm:flex w-10 h-10 shrink-0 rounded-xl border border-[#29364B] items-center justify-center text-[#475569] group-hover:text-[#67E8F9] group-hover:border-[#38BDF855] transition-all">

              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />

            </div>

          </div>

          {/* Description */}

          <p className="mt-4 text-[#A8B5C7] text-sm leading-6">
            {project.description}
          </p>

          {/* Highlights */}

          <div className="mt-6 space-y-3">

            {project.highlights.map((highlight) => (

              <div
                key={highlight}
                className="flex items-start gap-3"
              >

                <span
                  className="mt-[7px] w-1.5 h-1.5 rounded-full shrink-0"
                  style={{
                    backgroundColor: project.accent,
                    boxShadow: `0 0 8px ${project.accent}`,
                  }}
                />

                <span className="text-[#CBD5E1] text-xs md:text-sm leading-5">
                  {highlight}
                </span>

              </div>

            ))}

          </div>

          {/* Tech */}

          <div className="flex flex-wrap gap-2 mt-7">

            {project.tech.map((technology) => (

              <span
                key={technology}
                className="px-2.5 py-1.5 rounded-lg border border-[#29364B] bg-[#0D1522] text-[#B8C5D6] text-[10px] font-mono hover:text-white hover:border-[#3D4E67] transition-all"
              >
                {technology}
              </span>

            ))}

          </div>

          {/* Links */}

          <div className="flex items-center gap-3 mt-8 pt-6 border-t border-[#1E293B]">

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#F8FAFC] text-[#070A0F] text-xs font-semibold hover:bg-[#38BDF8] transition-all duration-300"
            >

              <GithubIcon />

              <span>
                View Source
              </span>

              <ArrowUpRight
                size={13}
                className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
              />

            </a>

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#334155] text-[#CBD5E1] text-xs font-medium hover:text-[#67E8F9] hover:border-[#38BDF855] transition-all duration-300"
              >

                <ExternalLink size={14} />

                Live Demo

              </a>
            )}

          </div>

        </div>

      </div>

    </motion.article>
  );
}

/* =========================================================
   SMALL PROJECT CARD
========================================================= */

function SmallProjectCard({
  project,
  index,
  inView,
  reduceMotion,
}: {
  project: Project;
  index: number;
  inView: boolean;
  reduceMotion: boolean | null;
}) {
  const Icon = project.icon;

  return (
    <motion.article
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
        delay: 0.55 + index * 0.1,
      }}
      whileHover={
        reduceMotion
          ? {}
          : {
              y: -6,
            }
      }
      className="group relative"
    >

      <div className="relative rounded-2xl border border-[#29364B] bg-[#090F19]/95 overflow-hidden hover:border-[#3B4C65] transition-all duration-300">

        <div className="relative h-[170px] overflow-hidden">

          <ProjectPreview
            type={project.preview}
            reduceMotion={reduceMotion}
          />

          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(to top, rgba(7,10,15,0.8), transparent 60%)',
            }}
          />

          <span className="absolute right-5 bottom-3 text-5xl font-black font-mono text-white/[0.05]">
            0{index + 3}
          </span>

        </div>

        <div className="p-6">

          <div className="flex items-start justify-between">

            <div
              className="w-11 h-11 rounded-xl border flex items-center justify-center"
              style={{
                color: project.accent,
                backgroundColor: `${project.accent}0D`,
                borderColor: `${project.accent}30`,
              }}
            >
              <Icon size={20} />
            </div>

            <ArrowUpRight
              size={16}
              className="text-[#475569] group-hover:text-[#67E8F9] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
            />

          </div>

          <p
            className="mt-5 text-[9px] font-mono tracking-[0.2em] uppercase"
            style={{
              color: project.accent,
            }}
          >
            {project.category}
          </p>

          <h3 className="mt-2 text-xl font-bold text-[#F8FAFC]">
            {project.title}
          </h3>

          <p className="mt-3 text-[#8FA0B7] text-xs leading-5">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mt-5">

            {project.tech.map((technology) => (

              <span
                key={technology}
                className="px-2 py-1 rounded-md border border-[#29364B] bg-[#0D1522] text-[#8FA0B7] text-[9px] font-mono"
              >
                {technology}
              </span>

            ))}

          </div>

          <div className="flex items-center gap-4 mt-6 pt-4 border-t border-[#1E293B]">

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#94A3B8] text-xs hover:text-white transition-colors"
            >

              <GithubIcon />

              GitHub

            </a>

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#94A3B8] text-xs hover:text-[#67E8F9] transition-colors"
              >

                <ExternalLink size={13} />

                Demo

              </a>
            )}

          </div>

        </div>

      </div>

    </motion.article>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function Projects() {
  const ref = useRef<HTMLElement | null>(null);

  const inView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  const reduceMotion = useReducedMotion();

  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <section
      id="projects"
      ref={ref}
      className="relative overflow-hidden bg-[#060912] py-24 md:py-32"
    >

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        <motion.div
          animate={
            reduceMotion
              ? {}
              : {
                  x: [0, 50, -25, 0],
                  y: [0, -25, 20, 0],
                }
          }
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -left-60 top-20 w-[550px] h-[550px] rounded-full bg-[#0EA5E9] opacity-[0.045] blur-[150px]"
        />

        <motion.div
          animate={
            reduceMotion
              ? {}
              : {
                  x: [0, -45, 25, 0],
                  y: [0, 30, -20, 0],
                }
          }
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -right-60 bottom-10 w-[550px] h-[550px] rounded-full bg-[#8B5CF6] opacity-[0.05] blur-[150px]"
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
          CONTAINER
      ===================================================== */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

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
            duration: 0.7,
          }}
          className="mb-16"
        >

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-7">

            <div>

              <div className="inline-flex items-center gap-3">

                <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#38BDF8]" />

                <span className="text-[#67E8F9] text-xs font-mono tracking-[0.28em] uppercase">
                  Selected Work
                </span>

                <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#A78BFA]" />

              </div>

              <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#F8FAFC]">

                Projects I've{' '}

                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      'linear-gradient(100deg, #22D3EE, #38BDF8, #A78BFA)',
                  }}
                >
                  Built
                </span>

              </h2>

            </div>

            <p className="max-w-lg text-[#A8B5C7] text-sm md:text-base leading-7 lg:text-right">
              A selection of software projects focused on
              AI, full-stack development, real-time systems
              and practical problem solving.
            </p>

          </div>

        </motion.div>

        {/* =====================================================
            FEATURED PROJECTS
        ===================================================== */}

        <div className="grid lg:grid-cols-2 gap-6">

          {featuredProjects.map((project, index) => (

            <FeaturedProjectCard
              key={project.title}
              project={project}
              index={index}
              inView={inView}
              reduceMotion={reduceMotion}
            />

          ))}

        </div>

        {/* =====================================================
            MORE PROJECTS
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
          className="mt-14"
        >

          <div className="flex items-center gap-4 mb-7">

            <div className="flex items-center gap-2">

              <Layers3
                size={15}
                className="text-[#38BDF8]"
              />

              <span className="text-[#CBD5E1] text-xs font-mono uppercase tracking-[0.2em]">
                More Projects
              </span>

            </div>

            <div className="h-px flex-1 bg-gradient-to-r from-[#29364B] to-transparent" />

          </div>

          <div className="grid md:grid-cols-2 gap-5">

            {otherProjects.map((project, index) => (

              <SmallProjectCard
                key={project.title}
                project={project}
                index={index}
                inView={inView}
                reduceMotion={reduceMotion}
              />

            ))}

          </div>

        </motion.div>

        {/* =====================================================
            GITHUB CTA
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
            delay: 1,
          }}
          className="mt-12 flex justify-center"
        >

          <a
            href="https://github.com/Deepakmeena-123"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-[#334155] bg-[#0A101B] text-[#A8B5C7] text-sm hover:text-white hover:border-[#38BDF855] hover:bg-[#0D1522] transition-all duration-300"
          >

            <GithubIcon />

            <span>
              Explore more projects
            </span>

            <ArrowUpRight
              size={15}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />

          </a>

        </motion.div>

      </div>

    </section>
  );
}