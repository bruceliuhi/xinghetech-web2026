import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Shield, Target, Users, AlertTriangle, Layers, ArrowRight, Sparkles, Zap, Cpu } from 'lucide-react';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';

export function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <HeroSection />
      
      {/* What We Do */}
      <WhatWeDoSection />
      
      {/* Problems We Address */}
      <ProblemsSection />
      
      {/* Core Characteristics */}
      <CoreCharacteristicsSection />
      
      {/* How We Build */}
      <HowWeBuildSection />
      
      {/* Our Practice */}
      <OurPracticeSection />
      
      {/* Our Boundaries */}
      <OurBoundariesSection />
      
      {/* Closing Statement */}
      <ClosingSection />
      
      {/* Bottom CTA */}
      <BottomCTASection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative min-h-[60vh] flex items-center py-32 bg-gradient-to-br from-blue-50/40 via-indigo-50/40 to-purple-50/30 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 网格背景 */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

        {/* 浮动渐变球 */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-blue-400/10 to-indigo-400/10 blur-3xl"
          animate={{
            x: [0, 120, 0],
            y: [0, -90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: '5%', left: '3%' }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-purple-400/10 to-pink-400/10 blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ bottom: '10%', right: '5%' }}
        />

        {/* AI 神经网络节点 */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/20"
            style={{
              width: `${6 + (i % 3) * 2}px`,
              height: `${6 + (i % 3) * 2}px`,
              top: `${15 + (i * 7)}%`,
              left: `${10 + (i * 8)}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}

        {/* 连接线条 */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <motion.line
            x1="20%" y1="30%" x2="45%" y2="60%"
            stroke="url(#gradient1)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.line
            x1="60%" y1="20%" x2="80%" y2="70%"
            stroke="url(#gradient2)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Cpu className="w-12 h-12 text-primary/30" />
          </motion.div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            星河卓越
          </h1>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-10 h-10 text-accent/30" />
          </motion.div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
        >
          打造面向长期运行的企业级AI平台
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto space-y-8 text-lg text-foreground/75 leading-relaxed"
        >
          <p className="text-xl">
            星河卓越是一家专注于企业与行业场景的AI平台公司。
          </p>
          <p className="text-lg">
            我们关注的不只是智能能力"能否实现"，<br />
            更关注其是否能够在真实业务体系中长期、稳定、可控地运行。
          </p>
          <p className="text-lg">
            围绕这一目标，<br />
            星河卓越以平台化方式构建智能能力底座，<br />
            支撑 AI 能力在复杂业务环境中的持续使用与演进。
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function WhatWeDoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/25">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* AI粒子效果 */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/20"
            style={{
              top: `${20 + (i * 10)}%`,
              left: `${15 + (i * 12)}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + (i % 2),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}

        <motion.div
          className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-blue-300/8 to-indigo-300/8 blur-3xl"
          animate={{
            x: [0, -70, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: '10%', right: '8%' }}
        />

        {/* 装饰图标 */}
        <motion.div
          className="absolute top-1/4 left-[10%]"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Zap className="w-8 h-8 text-primary/10" />
        </motion.div>
      </div>

      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
            星河卓越
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              在做什么
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative group bg-white/60 backdrop-blur-xl p-12 md:p-16 rounded-3xl border border-white/40 shadow-xl shadow-primary/5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 max-w-4xl mx-auto"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.5) 100%)',
          }}
        >
          {/* 玻璃反光效果 */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />
          
          {/* 边框光晕 */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
          
          {/* 装饰元素 */}
          <motion.div
            className="absolute top-6 right-6"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-6 h-6 text-primary/20" />
          </motion.div>
          
          <div className="relative space-y-8">
            <p className="text-xl text-foreground/80 leading-relaxed">
              星河卓越围绕企业与行业在引入 AI 过程中面临的实际问题，<br />
              提供面向长期运行的智能平台能力。
            </p>
            <p className="text-lg text-foreground/75 leading-relaxed">
              我们将模型、数据、流程与安全等关键要素进行系统化组织，<br />
              通过统一的平台机制，<br />
              让智能能力能够被构建、管理，并持续融入业务体系。
            </p>
          </div>
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
      icon: AlertTriangle,
      title: '智能能力难以长期运行',
      description: '许多 AI 应用在初期有效，但难以在业务环境中长期稳定使用。',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Layers,
      title: '业务体系复杂，难以直接嵌入 AI',
      description: '企业流程、权限与系统复杂，单点智能能力难以真正融入其中。',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Target,
      title: '能力演进不可控',
      description: '模型更新、需求变化频繁，缺乏统一平台容易导致能力失序与重复建设。',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-br from-purple-50/25 via-pink-50/20 to-blue-50/25">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 神经网络节点 */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-purple-500/20"
            style={{
              top: `${10 + (i * 6)}%`,
              left: `${5 + (i * 7)}%`,
            }}
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + (i % 2),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.15,
            }}
          />
        ))}

        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-purple-300/8 to-pink-300/8 blur-3xl"
          animate={{
            x: [0, 90, 0],
            y: [0, -70, 0],
          }}
          transition={{
            duration: 21,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ bottom: '10%', left: '5%' }}
        />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
            我们
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              关注的问题
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative bg-white/60 backdrop-blur-xl rounded-2xl p-10 border border-white/40 shadow-lg hover:shadow-2xl transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.5) 100%)',
                }}
              >
                {/* 玻璃反光效果 */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />
                
                {/* 背景渐变装饰 */}
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
                  <div className={`w-full h-full bg-gradient-to-br ${problem.color} rounded-full blur-2xl`} />
                </motion.div>

                {/* AI装饰点 */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary/30"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <div className="relative">
                  <motion.div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${problem.color} mb-8`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold mb-6 leading-tight">
                    {problem.title}
                  </h3>
                  
                  <p className="text-foreground/70 leading-relaxed">
                    {problem.description}
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

function CoreCharacteristicsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const characteristics = [
    {
      icon: Shield,
      title: '可信基础',
      description: '围绕数据治理、模型使用与安全控制，构建支撑智能能力长期运行的可信基础。',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Target,
      title: '长期运行',
      description: '平台能力以持续使用为目标进行设计，支持智能能力在真实业务环境中的长期运行与演进。',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Users,
      title: '企业级',
      description: '以企业与行业场景为核心，支持智能能力深度融入复杂业务体系。',
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-br from-cyan-50/25 via-blue-50/30 to-indigo-50/25">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 数据流动线条 */}
        <svg className="absolute inset-0 w-full h-full opacity-5">
          {[...Array(5)].map((_, i) => (
            <motion.path
              key={i}
              d={`M ${i * 20}% 0 Q ${i * 20 + 10}% 50 ${i * 20}% 100`}
              stroke="url(#blueGradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5,
              }}
            />
          ))}
          <defs>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>

        <motion.div
          className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-cyan-300/8 to-blue-300/8 blur-3xl"
          animate={{
            x: [0, 80, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: '10%', right: '10%' }}
        />

        {/* AI脉冲点 */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-cyan-500/20"
            style={{
              top: `${15 + (i * 8)}%`,
              right: `${10 + (i * 9)}%`,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
            星河卓越的
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              核心特征
            </span>
          </h2>
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
                className="group relative bg-white/60 backdrop-blur-xl rounded-2xl p-10 border border-white/40 shadow-lg hover:shadow-2xl transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.5) 100%)',
                }}
              >
                {/* 玻璃反光效果 */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />
                
                {/* 背景渐变装饰 */}
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
                    delay: index * 0.3,
                  }}
                >
                  <div className={`w-full h-full bg-gradient-to-br ${char.color} rounded-full blur-2xl`} />
                </motion.div>

                {/* 装饰粒子 */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-primary/30"
                    style={{
                      top: `${20 + i * 30}%`,
                      right: `${10 + i * 15}%`,
                    }}
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.2, 0.6, 0.2],
                    }}
                    transition={{
                      duration: 2 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3,
                    }}
                  />
                ))}

                <div className="relative">
                  <motion.div
                    className={`inline-flex p-5 rounded-xl bg-gradient-to-br ${char.color} mb-8 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-semibold mb-6">
                    {char.title}
                  </h3>
                  
                  <p className="text-foreground/75 leading-relaxed text-lg">
                    {char.description}
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

function HowWeBuildSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 bg-gradient-to-br from-indigo-50/25 via-purple-50/30 to-pink-50/20">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* AI电路板效果 */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-40 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div className="absolute top-1/2 right-1/4 w-32 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          <div className="absolute bottom-1/3 left-1/3 w-48 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
        </div>

        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-indigo-300/8 to-purple-300/8 blur-3xl"
          animate={{
            x: [0, -70, 0],
            y: [0, 70, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: '20%', left: '10%' }}
        />

        {/* 浮动图标 */}
        <motion.div
          className="absolute top-1/3 right-[15%]"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Cpu className="w-10 h-10 text-purple-500/10" />
        </motion.div>
      </div>

      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
            我们如何
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              构建平台能力
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative group bg-white/60 backdrop-blur-xl p-12 md:p-16 rounded-3xl border border-white/40 shadow-xl shadow-purple-500/5 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 max-w-4xl mx-auto"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.5) 100%)',
          }}
        >
          {/* 玻璃反光效果 */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />
          
          {/* 边框光晕 */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
          
          {/* 角落装饰 */}
          <motion.div
            className="absolute top-8 right-8"
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-7 h-7 text-purple-500/20" />
          </motion.div>
          
          <div className="relative space-y-8">
            <p className="text-xl text-foreground/80 leading-relaxed">
              星河卓越并非围绕单一产品或功能展开，<br />
              而是以平台化方式构建完整的智能能力体系。
            </p>
            <p className="text-lg text-foreground/75 leading-relaxed">
              平台能力覆盖 Agent 构建与运行、<br />
              知识与数据治理、模型能力管理、<br />
              流程与权限控制以及运行安全等关键环节，<br />
              为智能能力在业务体系中的长期应用提供基础支撑。
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-8 flex justify-center"
            >
              <Link
                to="/capabilities"
                className="group/link inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 font-semibold"
              >
                查看完整平台能力体系
                <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function OurPracticeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 bg-gradient-to-br from-green-50/20 via-emerald-50/25 to-teal-50/20">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 生长的藤蔓效果 */}
        <svg className="absolute inset-0 w-full h-full opacity-5">
          <motion.path
            d="M 10% 100% Q 20% 70% 30% 50% T 50% 20%"
            stroke="url(#greenGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <defs>
            <linearGradient id="greenGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>

        <motion.div
          className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-green-300/8 to-emerald-300/8 blur-3xl"
          animate={{
            x: [0, 80, 0],
            y: [0, -70, 0],
          }}
          transition={{
            duration: 21,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ bottom: '15%', right: '10%' }}
        />

        {/* 能量波动点 */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2.5 h-2.5 rounded-full bg-emerald-500/25"
            style={{
              bottom: `${20 + i * 12}%`,
              right: `${15 + i * 10}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
            我们的
            <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
              实践方式
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative group bg-white/60 backdrop-blur-xl p-12 md:p-16 rounded-3xl border border-white/40 shadow-xl shadow-green-500/5 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 max-w-4xl mx-auto"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.5) 100%)',
          }}
        >
          {/* 玻璃反光效果 */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />
          
          {/* 边框光晕 */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
          
          {/* 装饰图标 */}
          <motion.div
            className="absolute bottom-8 left-8"
            animate={{
              rotate: [0, -15, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Zap className="w-6 h-6 text-emerald-500/20" />
          </motion.div>
          
          <div className="relative space-y-8">
            <p className="text-xl text-foreground/80 leading-relaxed">
              在实际业务环境中，<br />
              星河卓越的平台能力已支持多种智能应用形态的运行。
            </p>
            <p className="text-lg text-foreground/75 leading-relaxed">
              通过平台化机制，<br />
              智能能力可以根据业务需求进行配置、组合与演进，<br />
              而无需频繁推倒重来。
            </p>
            <p className="text-lg text-foreground/75 leading-relaxed">
              我们更关注能力在真实环境中的持续使用状态，<br />
              而非一次性的展示效果。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function OurBoundariesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 bg-gradient-to-br from-amber-50/30 via-orange-50/25 to-yellow-50/20">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 边界线条 */}
        <svg className="absolute inset-0 w-full h-full opacity-5">
          <motion.rect
            x="10%" y="20%" width="80%" height="60%"
            stroke="url(#amberGradient)"
            strokeWidth="2"
            fill="none"
            rx="20"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <defs>
            <linearGradient id="amberGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#f97316" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>

        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-amber-300/8 to-orange-300/8 blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 70, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: '15%', right: '8%' }}
        />

        {/* 边界标记点 */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-amber-500/30 border-2 border-amber-500/50"
            style={{
              top: i < 2 ? '25%' : '70%',
              left: i % 2 === 0 ? '15%' : '85%',
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
            我们的
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              定位边界
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative group bg-white/60 backdrop-blur-xl p-12 md:p-16 rounded-3xl border border-white/40 shadow-xl shadow-amber-500/5 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 max-w-4xl mx-auto"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.5) 100%)',
          }}
        >
          {/* 玻璃反光效果 */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />
          
          {/* 边框光晕 */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
          
          {/* 装饰元素 */}
          <motion.div
            className="absolute top-8 left-8"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="w-5 h-5 border-2 border-amber-500/20 rounded-sm" />
          </motion.div>
          
          <div className="relative space-y-8">
            <p className="text-xl text-foreground/80 leading-relaxed">
              星河卓越并不以一次性交付、<br />
              或单点功能实现作为主要目标。
            </p>
            <p className="text-lg text-foreground/75 leading-relaxed">
              我们关注的是：<br />
              如何为企业与行业提供一个<br />
              <span className="text-primary font-semibold text-xl">可以长期使用、持续演进的智能平台基础</span>。
            </p>
            <p className="text-lg text-foreground/75 leading-relaxed">
              这一定位，决定了我们始终以平台能力与运行体系为核心，<br />
              而非短期解决方案。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ClosingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 bg-gradient-to-br from-blue-50/30 via-indigo-50/35 to-purple-50/25">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 汇聚的能量流 */}
        <svg className="absolute inset-0 w-full h-full opacity-8">
          {[...Array(8)].map((_, i) => {
            const angle = (i / 8) * Math.PI * 2;
            const startX = 50 + Math.cos(angle) * 40;
            const startY = 50 + Math.sin(angle) * 40;
            return (
              <motion.line
                key={i}
                x1={`${startX}%`}
                y1={`${startY}%`}
                x2="50%"
                y2="50%"
                stroke="url(#convergingGradient)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              />
            );
          })}
          <defs>
            <linearGradient id="convergingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="1" />
            </linearGradient>
          </defs>
        </svg>

        <motion.div
          className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-blue-300/10 to-indigo-300/10 blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: '20%', left: '50%', transform: 'translateX(-50%)' }}
        />

        {/* 核心光芒 */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl" />
        </motion.div>
      </div>

      <div ref={ref} className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative group bg-white/60 backdrop-blur-xl p-16 md:p-20 rounded-3xl border border-white/40 shadow-xl shadow-primary/10 hover:shadow-2xl hover:shadow-primary/15 transition-all duration-500 max-w-3xl mx-auto"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.55) 100%)',
          }}
        >
          {/* 玻璃反光效果 */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/25 via-transparent to-transparent pointer-events-none" />
          
          {/* 边框光晕 */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
          
          {/* 顶部装饰 */}
          <motion.div
            className="absolute -top-4 left-1/2 -translate-x-1/2"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Sparkles className="w-8 h-8 text-primary/40" />
          </motion.div>
          
          <p className="relative text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground/80 leading-relaxed">
            星河卓越，<br />
            致力于成为企业与行业<br />
            <span className="bg-gradient-to-r from-primary via-accent to-purple-600 bg-clip-text text-transparent">
              长期可信的智能平台基础
            </span>
          </p>

          {/* 底部装饰点 */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-primary/30"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function BottomCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 向前的箭头效果 */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${30 + i * 10}%`,
              left: `${10 + i * 15}%`,
            }}
            animate={{
              x: [0, 50, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          >
            <ArrowRight className="w-6 h-6 text-primary/20" />
          </motion.div>
        ))}
      </div>

      <div ref={ref} className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <h2 className="text-4xl sm:text-5xl font-semibold text-foreground/80">
            了解更多
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/capabilities"
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-primary to-accent text-white rounded-xl hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 text-lg font-semibold"
              >
                查看平台能力
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/agent"
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-white border-2 border-primary text-primary rounded-xl hover:bg-primary hover:text-white hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 text-lg font-semibold"
              >
                了解 Agent 体系
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}