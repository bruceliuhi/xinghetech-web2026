import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Layers, Database, Brain, Shield, Activity, Server, CheckCircle2, Settings, TrendingUp } from 'lucide-react';

const capabilities = [
  {
    icon: Layers,
    title: 'Agent 构建与运行管理',
    description: '统一 Agent 构建与运行体系',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Database,
    title: '知识与数据治理',
    description: '支撑业务知识的安全治理',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Brain,
    title: '模型能力构建与演进',
    description: '支持模型接入、适配与演进',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    icon: Shield,
    title: '流程与权限体系',
    description: '将 AI 纳入既有业务流程',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Activity,
    title: '评测、安全与合规管理',
    description: '保障 Agent 行为可控可信',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    icon: Server,
    title: '运行环境与系统集成能力',
    description: '稳定融入现有业务系统',
    color: 'from-teal-500 to-cyan-500',
  },
];

const practices = [
  {
    icon: CheckCircle2,
    title: '稳定运行',
    description: '平台能力可在实际业务环境中持续运行,支持长期使用与日常业务承载。',
  },
  {
    icon: Settings,
    title: '持续配置',
    description: '智能能力可根据业务变化进行配置与调整,无需重复构建或推翻既有体系。',
  },
  {
    icon: TrendingUp,
    title: '持续演进',
    description: '平台支持能力的逐步优化与扩展,适配业务规模与需求的持续变化。',
  },
];

export function CapabilitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="capabilities" className="relative py-[160px] bg-gradient-to-br from-blue-50/30 via-indigo-50/20 to-purple-50/30">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, rgba(99, 102, 241, 0.4) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-indigo-300/10 to-purple-300/10 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -80, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: '10%', left: '5%' }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-blue-300/10 to-cyan-300/10 blur-3xl"
          animate={{
            x: [0, -60, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ bottom: '20%', right: '10%' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-[48px] bg-gradient-to-r from-[#1e1b4b] via-[#3b82f6] to-[#1e1b4b] bg-clip-text text-transparent pb-1">
            我们做什么｜行业 AI 运行系统
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            星河卓越通过系统化方式，
            <br />
            将 AI 能力组织为可构建、可管理、可持续运行的行业级系统。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 overflow-hidden"
              >
                {/* Icon background gradient with breathing animation */}
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.15, 0.1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                >
                  <div className={`w-full h-full bg-gradient-to-br ${capability.color} rounded-full blur-2xl`} />
                </motion.div>

                {/* Flowing gradient overlay */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(139, 92, 246, 0.1), transparent 50%)`,
                  }}
                />

                <div className="relative text-center">
                  <div className="flex justify-center mb-6">
                    <motion.div
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${capability.color}`}
                      animate={{
                        boxShadow: [
                          '0 0 0 0 rgba(139, 92, 246, 0)',
                          '0 0 20px 5px rgba(139, 92, 246, 0.2)',
                          '0 0 0 0 rgba(139, 92, 246, 0)',
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3,
                      }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>

                  <h3 className="text-xl font-semibold mb-4">
                    {capability.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Practices Section (Merged) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center text-center mt-24 mb-12 max-w-3xl mx-auto w-full"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-[#1e1b4b] via-[#3b82f6] to-[#1e1b4b] bg-clip-text text-transparent pb-1">
            实践与运行经验
          </h2>
          <p className="text-xl text-slate-600 mt-4 leading-relaxed max-w-2xl">
            星河卓越的平台能力，已在真实业务环境中持续运行与演进
            <br className="hidden sm:block" />
            为企业提供经得起考验的智能化支撑
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {practices.map((practice, index) => {
            const Icon = practice.icon;
            const iconBg = [
              'bg-blue-50 text-blue-600',
              'bg-indigo-50 text-indigo-600',
              'bg-purple-50 text-purple-600',
            ];

            return (
              <motion.div
                key={practice.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className={`w-16 h-16 rounded-2xl ${iconBg[index]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-slate-900">
                    {practice.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed text-sm">
                    {practice.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}