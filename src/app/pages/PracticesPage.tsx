import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { BookOpen, FileCheck, BarChart3, MessageCircle, Layers, Cog, RefreshCw, Shield, ArrowRight } from 'lucide-react';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';

export function PracticesPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Practice Types */}
      <PracticeTypesSection />
      
      {/* Common Characteristics */}
      <CommonCharacteristicsSection />
      
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
    <section className="relative py-16 bg-gradient-to-br from-indigo-50/30 via-purple-50/40 to-blue-50/30 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 网格背景 */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, rgb(99, 102, 241, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(99, 102, 241, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* 浮动渐变球 */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-indigo-400/10 to-purple-400/10 blur-3xl"
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
          className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-blue-400/10 to-cyan-400/10 blur-3xl"
          animate={{
            x: [0, -70, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ bottom: '15%', right: '8%' }}
        />

        {/* AI 神经网络节点 */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-2.5 h-2.5 rounded-full bg-indigo-500/30"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-purple-500/40"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-blue-500/35"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.35, 0.65, 0.35],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-2/3 right-1/3 w-2.5 h-2.5 rounded-full bg-cyan-500/30"
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />

        {/* 连接线 - 模拟神经网络 */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <motion.line
            x1="25%"
            y1="25%"
            x2="33%"
            y2="33%"
            stroke="url(#gradient-p1)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.line
            x1="75%"
            y1="33%"
            x2="66%"
            y2="66%"
            stroke="url(#gradient-p2)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
          />
          <motion.line
            x1="33%"
            y1="66%"
            x2="66%"
            y2="33%"
            stroke="url(#gradient-p3)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 1 }}
          />
          <defs>
            <linearGradient id="gradient-p1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(99, 102, 241)" />
              <stop offset="100%" stopColor="rgb(139, 92, 246)" />
            </linearGradient>
            <linearGradient id="gradient-p2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(139, 92, 246)" />
              <stop offset="100%" stopColor="rgb(236, 72, 153)" />
            </linearGradient>
            <linearGradient id="gradient-p3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(59, 130, 246)" />
              <stop offset="100%" stopColor="rgb(99, 102, 241)" />
            </linearGradient>
          </defs>
        </svg>

        {/* 几何装饰 - 代表数据流 */}
        <motion.div
          className="absolute top-1/4 right-1/5 w-16 h-16 border border-indigo-500/20 rounded-lg"
          animate={{
            rotate: [0, 90, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/5 w-14 h-14 border border-purple-500/15 rounded-full"
          animate={{
            rotate: [0, -90, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div ref={ref} className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              案例与实践
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto space-y-4 text-lg text-foreground/75 leading-relaxed"
        >
          <p>
            本页面展示的是星河卓越平台能力在真实业务环境中的应用实践方式。
          </p>
          <p>
            相关内容侧重于<span className="text-primary font-semibold">平台能力如何在业务体系中运行、配置与演进</span>，
            而非具体项目、客户或商业成果展示。
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function PracticeTypesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const practiceTypes = [
    {
      icon: BookOpen,
      title: '内部知识与流程辅助',
      description: '平台能力被用于支持组织内部的知识理解、信息检索与流程辅助，帮助业务人员在既有系统与流程中高效获取所需信息。',
      note: '该类实践通常以 Agent 形式运行，并与组织现有的业务系统协同使用。',
      characteristics: [
        '与既有系统与业务流程协同运行',
        '覆盖多个业务角色与使用场景',
        '支持长期使用与持续配置',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FileCheck,
      title: '内容理解与合规支持',
      description: '平台能力被用于对文本、材料与内容进行理解、校验与辅助分析，支持业务过程中对规范性、一致性与合规性的要求。',
      note: '相关能力通常嵌入到业务流程中，在日常工作中持续运行。',
      characteristics: [
        '支持多类文本与材料的结构化理解',
        '支持规则、规范与业务要求的统一管理',
        '在业务流程中长期运行与使用',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: BarChart3,
      title: '业务分析与决策辅助',
      description: '平台能力被嵌入业务分析与决策支持流程，用于信息整理、分析辅助与判断支持。',
      note: '该类实践强调"辅助决策"而非"替代决策"，并通过平台机制保障结果可控、可解释。',
      characteristics: [
        '与业务数据体系协同运行',
        '支持周期性使用与分析',
        '能力随业务需求持续演进',
      ],
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: MessageCircle,
      title: '服务与交互支持',
      description: '平台能力被用于支持面向客户或内部人员的交互与服务场景，如咨询、问答与业务指引等。',
      note: '相关能力以 Agent 形式运行，并通过平台统一管理其行为与使用范围。',
      characteristics: [
        '面向不同角色提供一致的服务体验',
        '支持多渠道、多场景使用',
        '行为可管理、可评估',
      ],
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-50/30 via-cyan-50/25 to-indigo-50/30">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-blue-300/8 to-cyan-300/8 blur-3xl"
          animate={{
            x: [0, 90, 0],
            y: [0, -70, 0],
          }}
          transition={{
            duration: 21,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: '10%', left: '8%' }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-indigo-300/8 to-purple-300/8 blur-3xl"
          animate={{
            x: [0, -60, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 23,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ bottom: '10%', right: '5%' }}
        />
      </div>

      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {practiceTypes.map((practice, index) => {
            const Icon = practice.icon;
            return (
              <motion.div
                key={practice.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                {/* 背景渐变装饰 */}
                <motion.div
                  className="absolute top-0 right-0 w-40 h-40 opacity-10 group-hover:opacity-15 transition-opacity"
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
                  <div className={`w-full h-full bg-gradient-to-br ${practice.color} rounded-full blur-3xl`} />
                </motion.div>

                <div className="relative">
                  {/* Icon */}
                  <motion.div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${practice.color} mb-6`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-semibold mb-4">
                    {practice.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-foreground/75 leading-relaxed mb-4">
                    {practice.description}
                  </p>

                  {/* Note */}
                  <p className="text-sm text-foreground/60 italic mb-6 p-3 bg-slate-50 rounded-lg border border-slate-200/50">
                    {practice.note}
                  </p>

                  {/* Characteristics */}
                  <div className="space-y-3">
                    <p className="text-xs font-semibold text-foreground/50 uppercase tracking-wider">
                      运行特征
                    </p>
                    {practice.characteristics.map((char, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${practice.color} mt-2 flex-shrink-0`}></div>
                        <span className="text-sm text-foreground/70 leading-relaxed">{char}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CommonCharacteristicsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const characteristics = [
    {
      icon: Layers,
      title: '平台统一管理',
      description: '所有智能能力均运行在统一的平台环境中，由平台进行构建、运行与治理。',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Cog,
      title: 'Agent 作为运行形态',
      description: 'Agent 用于组织与运行智能能力，而非作为独立系统或单一产品存在。',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: RefreshCw,
      title: '长期运行与持续配置',
      description: '平台能力支持在真实业务环境中的长期使用，并可根据业务变化进行配置与调整。',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Shield,
      title: '可控演进',
      description: '平台支持能力在既有体系中逐步优化与扩展，避免频繁重构或不可控变化。',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center py-24 bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/25">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-purple-300/10 to-pink-300/10 blur-3xl"
          animate={{
            x: [0, -70, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: '20%', left: '10%' }}
        />
      </div>

      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
            平台运行的
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              共性特征
            </span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            尽管应用场景不同，上述实践在平台运行方式上具有一致特征
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {characteristics.map((char, index) => {
            const Icon = char.icon;
            return (
              <motion.div
                key={char.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                {/* 标签 */}
                <div className="absolute -top-3 left-6">
                  <span className="px-3 py-1 bg-gradient-to-r from-slate-600 to-slate-700 text-white text-xs font-semibold rounded-full">
                    共性特征 {index + 1}
                  </span>
                </div>

                <div className="flex items-start gap-4 mt-2">
                  <motion.div
                    className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-br ${char.color}`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      {char.title}
                    </h3>
                    
                    <p className="text-foreground/75 leading-relaxed">
                      {char.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BottomCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30">
      <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground/80">
            了解更多
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/capabilities"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
            >
              查看平台能力体系
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/agent"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-primary text-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
            >
              了解 Agent 产品体系
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}