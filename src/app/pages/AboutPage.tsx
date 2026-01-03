import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Shield, Target, Users, AlertTriangle, Layers, ArrowRight, Sparkles, Zap, Cpu } from 'lucide-react';
// Shared Background Component for AI Feel
const TechBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
    {/* Subtle Grid */}
    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />

    {/* Floating Gradient Blobs */}
    <motion.div
      className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px]"
      animate={{
        y: [0, 50, 0],
        opacity: [0.3, 0.5, 0.3]
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-[100px]"
      animate={{
        y: [0, -50, 0],
        opacity: [0.3, 0.5, 0.3]
      }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    />
  </div>
);
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';

export function AboutPage() {
  return (
    <div className="pt-0">
      {/* Hero Section */}
      <HeroSection />

      {/* What We Do / Problems INTRO */}
      <WhatWeDoSection />

      {/* Problems We Address CARDS */}
      <ProblemsSection />

      {/* Core Characteristics */}
      <CoreCharacteristicsSection />

      {/* How We Build / Approach */}
      <HowWeBuildSection />

      {/* Closing Statement / Vision */}
      <ClosingSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative min-h-[85vh] flex items-center py-32 overflow-hidden">
      {/* Background Image - Clean, no dark overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/changjing2.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Dynamic AI Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-500/10 backdrop-blur-sm border border-blue-200/20 rounded-full"
            style={{
              width: Math.random() * 20 + 10 + 'px',
              height: Math.random() * 20 + 10 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -150, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 0.6, 0],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: Math.random() * 8 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center gap-6 mb-10"
        >
          <div className="p-5 rounded-[2rem] bg-white/60 backdrop-blur-xl border border-white/50 mb-6 inline-flex shadow-xl shadow-blue-500/5">
            <img src="/images/logo.png" alt="XingheAI Logo" className="w-14 h-14 object-contain" />
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-wide bg-gradient-to-r from-[#0f172a] via-[#3b82f6] to-[#0f172a] bg-clip-text text-transparent pb-4 drop-shadow-sm">
            关于星河卓越
          </h1>

          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full my-6"
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-16 text-slate-800 tracking-tight"
        >
          面向行业与企业的 <span className="text-blue-600">AI 系统服务商</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto space-y-8 text-lg text-slate-700 leading-relaxed font-medium"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-white/40 backdrop-blur-xl rounded-[2.5rem] shadow-2xl shadow-blue-900/5 border border-white/60 transform transition-transform duration-500 group-hover:scale-[1.02]" />
            <div className="relative p-10 lg:p-14 text-center">
              <p className="text-xl md:text-3xl font-normal leading-relaxed mb-10 text-slate-800 tracking-wide">
                星河卓越是一家专注于<span className="text-blue-600 font-bold mx-2 relative inline-block">
                  行业与企业级 AI 系统建设
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-200/50 rounded-full"></span>
                </span>的技术公司，<br className="hidden md:block" />
                致力于将 AI 能力稳定融入复杂业务体系，<br className="hidden md:block" />
                支撑智能系统在真实组织环境中的<span className="text-blue-600 font-bold mx-2 relative inline-block">
                  长期运行与持续演进
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-200/50 rounded-full"></span>
                </span>。
              </p>

              <div className="bg-gradient-to-br from-blue-50/80 to-purple-50/80 backdrop-blur-sm border border-blue-100/50 rounded-2xl p-8 shadow-inner inline-block w-full">
                <p className="text-xl md:text-2xl font-serif italic text-slate-700">
                  "我们关注的不是单一模型、工具或功能，<br />
                  而是 AI 在组织中的<span className="text-blue-700 font-black mx-1 not-italic">可用性、可管理性与可持续性</span>。"
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WhatWeDoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-28 bg-white overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <TechBackground />

      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-semibold text-sm tracking-wide mb-6">
            <AlertTriangle className="w-4 h-4" />
            CHALLENGES
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 text-slate-900 tracking-tight">
            我们在
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent px-2">
              解决什么问题
            </span>
          </h2>

          <p className="text-xl sm:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light">
            在企业与行业场景中，AI 的落地往往面临以下挑战：
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ProblemsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const problems = [
    {
      icon: Layers,
      title: '能力零散',
      description: '难以融入既有业务体系',
      color: 'from-orange-500 to-red-500',
      bgvals: 'bg-orange-50/50',
      border: 'border-orange-100'
    },
    {
      icon: Cpu,
      title: '缺乏运行机制',
      description: '无法长期稳定使用',
      color: 'from-blue-500 to-cyan-500',
      bgvals: 'bg-blue-50/50',
      border: 'border-blue-100'
    },
    {
      icon: AlertTriangle,
      title: '缺乏治理与边界',
      description: '存在安全与责任风险',
      color: 'from-purple-500 to-pink-500',
      bgvals: 'bg-purple-50/50',
      border: 'border-purple-100'
    },
  ];

  return (
    <section className="relative pb-32 bg-white">
      <TechBackground />
      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className={`group relative ${problem.bgvals} backdrop-blur-sm rounded-[2rem] p-10 border ${problem.border} hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300`}
              >
                <div className="relative z-10 flex flex-col items-center text-center h-full">
                  <motion.div
                    className={`inline-flex p-6 rounded-2xl bg-gradient-to-br ${problem.color} mb-8 shadow-lg shadow-blue-500/20 text-white ring-4 ring-white`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-8 h-8" />
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-4 text-slate-800 tracking-tight">
                    {problem.title}
                  </h3>

                  <p className="text-slate-500 text-lg flex-grow">
                    {problem.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-24 text-center max-w-5xl mx-auto"
        >
          <div className="p-10 md:p-16 bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 relative overflow-hidden text-slate-800 group">
            {/* Subtle animated background in box */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none group-hover:bg-blue-100/30 transition-colors duration-500" />

            <h3 className="text-2xl md:text-4xl font-medium leading-relaxed relative z-10 tracking-tight">
              星河卓越通过<span className="font-bold text-slate-900 border-b-4 border-blue-200">系统化方式</span>，<br />
              帮助企业将分散的 AI 能力组织为<br />
              <span className="text-blue-600 font-extrabold mx-1">可运行</span>、
              <span className="text-blue-600 font-extrabold mx-1">可治理</span>、
              <span className="text-blue-600 font-extrabold mx-1">可演进</span>
              的系统能力，<br />
              <span className="text-slate-400 text-xl md:text-2xl mt-6 block font-normal">
                而非一次性工具或实验性应用。
              </span>
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CoreCharacteristicsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const characteristics = [
    {
      icon: Cpu,
      title: '可运行的系统能力',
      description: '不是“功能交付”，而是可在业务中持续运行的系统形态。',
      color: 'from-blue-600 to-cyan-600',
    },
    {
      icon: Target,
      title: '面向长期的设计理念',
      description: '从系统架构、能力组织到治理机制，均以长期使用为前提。',
      color: 'from-purple-600 to-pink-600',
    },
    {
      icon: Shield,
      title: '面向企业与行业的实践经验',
      description: '服务于对稳定性、合规性与可靠性要求较高的组织与行业场景。',
      color: 'from-indigo-600 to-purple-600',
    },
  ];

  return (
    <section className="relative py-32 bg-slate-50 overflow-hidden">
      <TechBackground />
      <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px]" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 font-semibold text-sm tracking-wide mb-6">
            <Sparkles className="w-4 h-4" />
            CORE VALUE
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 text-slate-900 tracking-tight">
            我们的
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent px-2">
              核心能力与特点
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            围绕 AI 的长期运行需求，星河卓越构建了以下核心能力
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {characteristics.map((char, index) => {
            const Icon = char.icon;
            return (
              <motion.div
                key={char.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -5 }}
                className="group relative bg-white rounded-[2rem] p-8 lg:p-12 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 border border-slate-100"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${char.color} flex items-center justify-center mb-8 shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-300 ring-4 ring-slate-50`}>
                  <Icon className="w-8 h-8 text-white relative z-10" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-slate-800 tracking-tight">
                  {char.title}
                </h3>

                <p className="text-slate-600 leading-relaxed text-lg">
                  {char.description}
                </p>

                <div className={`absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r ${char.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-[2rem]`} />
              </motion.div>
            );
          })}
        </div >
      </div >
    </section >
  );
}

function HowWeBuildSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 bg-white text-slate-900 overflow-hidden">
      <TechBackground />

      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-semibold text-sm tracking-wide mb-8">
              <Layers className="w-4 h-4" />
              OUR APPROACH
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 leading-tight text-slate-900 tracking-tight">
              我们如何推进<br />
              <span className="text-blue-600">AI 在组织中的落地</span>
            </h2>

            <p className="text-xl text-slate-500 mb-10 font-medium">
              在实际实践中，星河卓越遵循以下原则：
            </p>

            <div className="space-y-6">
              {[
                {
                  text: "以业务体系为中心，而非技术能力堆叠",
                  desc: "Business System Centric"
                },
                {
                  text: "以组织运行需求为导向，设计 AI 的参与方式",
                  desc: "Organization Needs Oriented"
                },
                {
                  text: "以治理与责任为前提，确保系统可控、可追溯",
                  desc: "Governance & Responsibility"
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-6 group p-4 rounded-2xl hover:bg-slate-50 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-white border-2 border-slate-100 flex items-center justify-center shrink-0 group-hover:border-blue-500 group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300">
                    <span className="text-xl font-bold text-slate-300 group-hover:text-blue-600 font-mono transition-colors">0{i + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-slate-800 mb-1 group-hover:text-blue-700 transition-colors">{item.text}</h4>
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side Quote / Visionary Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 bg-gradient-to-br from-white to-blue-50 p-12 lg:p-14 rounded-[3rem] border border-white shadow-[0_30px_60px_-15px_rgba(59,130,246,0.1)]">
              <div className="absolute top-10 right-10 opacity-10">
                <Sparkles className="w-24 h-24 text-blue-600" />
              </div>
              <Sparkles className="w-10 h-10 text-blue-600 mb-8" />
              <p className="text-2xl sm:text-4xl font-serif italic leading-relaxed text-slate-800 relative z-10">
                "我们相信，<br />
                只有被组织真正接纳并长期使用的 AI，<br />
                才具有真正的业务价值。"
              </p>
              <div className="mt-10 flex items-center gap-4">
                <div className="w-12 h-1 bg-blue-600 rounded-full" />
                <span className="text-slate-400 uppercase tracking-widest text-xs font-bold">XINGHE AI VISION</span>
              </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/30 blur-[80px] rounded-full -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function ClosingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 bg-white">
      <div ref={ref} className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="w-16 h-16 mx-auto bg-blue-600 rounded-2xl flex items-center justify-center mb-10 shadow-lg shadow-blue-500/30 transform rotate-3">
            <Target className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-2xl font-bold text-slate-500 uppercase tracking-widest mb-6 border-b border-slate-200 pb-6 inline-block">
            星河卓越的定位与愿景
          </h2>

          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-12 leading-tight">
            行业与企业在 AI 系统建设<br />
            与长期运行过程中的<br />
            <span className="text-blue-600">长期合作伙伴</span>
          </h3>

          <p className="text-2xl text-slate-600 leading-relaxed font-light">
            我们将持续投入于行业级 AI 系统能力的建设，<br />
            推动 AI 从“可用”走向“<span className="font-semibold text-slate-900 border-b-2 border-blue-600/30">可长期可依赖</span>”。
          </p>

          <div className="w-full h-8" />
        </motion.div>
      </div>
    </section>
  );
}