import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Database, Settings, ShieldCheck, Activity } from 'lucide-react';

const trustPoints = [
  {
    icon: Database,
    title: '数据治理',
    description: '完善的数据管理与保护机制，保障业务数据的安全性与可控性。',
  },
  {
    icon: Settings,
    title: '模型使用与管理',
    description: '规范模型接入、使用与更新方式，确保模型能力在实际业务中的稳定与可追溯。',
  },
  {
    icon: ShieldCheck,
    title: '安全与合规控制',
    description: '围绕访问控制、使用审计与合规要求，建立多层级的安全防护体系。',
  },
  {
    icon: Activity,
    title: '稳定运行保障',
    description: '通过平台化设计与运行监控机制，支撑系统在长期使用过程中的可靠运行。',
  },
];

export function TrustSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-[160px] bg-gradient-to-br from-[#F9FAFC] via-[#FAFAFC] to-[#F9FAFB] overflow-hidden">
      {/* Network grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="network" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="2" fill="#6366F1" />
              <line x1="30" y1="0" x2="30" y2="60" stroke="#6366F1" strokeWidth="0.5" opacity="0.3" />
              <line x1="0" y1="30" x2="60" y2="30" stroke="#6366F1" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#1e1b4b] via-[#3b82f6] to-[#1e1b4b] bg-clip-text text-transparent pb-1">
            面向长期运行的可信基础
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            星河卓越在平台设计中，重点保障AI能力能够在实际业务体系中<span className="text-foreground font-medium">长期、稳定地运行</span>。<br />
            围绕数据、模型与运行安全，平台建立了系统化的管理与控制能力。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="relative group"
              >
                {/* Card background with gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-primary/10 to-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                <div className="h-full relative bg-white rounded-2xl p-6 border border-border/50 text-center transition-all duration-500 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1">
                  {/* Icon container with unified style */}
                  <div className="relative mx-auto w-16 h-16 mb-5">
                    {/* Background circle */}
                    <div className="absolute inset-0 bg-[#E9ECFE]/60 rounded-2xl group-hover:scale-110 transition-transform duration-500" />

                    {/* Icon */}
                    <div className="relative h-full flex items-center justify-center">
                      <Icon className="w-7 h-7 text-[#2C4BFF] transition-colors duration-500" strokeWidth={2.25} />
                    </div>
                  </div>

                  <h3 className="font-semibold mb-3 text-foreground/90 group-hover:text-foreground transition-colors duration-300">
                    {point.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>

                  {/* Bottom accent indicator */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}