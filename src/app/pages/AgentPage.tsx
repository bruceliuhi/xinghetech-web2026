import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import {
  Bot, Database, Settings, Shield, Zap, TrendingUp,
  MessageSquare, FileText, BarChart, Users, Clock, CheckCircle2,
  Boxes, GitBranch, Lock, Eye, Code, Workflow, ArrowRight, Briefcase, BookOpen,
  Sparkles, Cpu, Network, Layers, Brain, Activity, Server, Building2, ClipboardList, Target
} from 'lucide-react';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';
const heroImage = '/images/agent-background.png';
const bgPattern = '/images/decorative-pattern.png';

// Agent types data
const agents = [
  {
    icon: MessageSquare,
    title: '智能客服 Agent',
    description: '面向服务与咨询场景',
    gradient: 'from-blue-400 to-cyan-400',
  },
  {
    icon: TrendingUp,
    title: '智能营销 Agent',
    description: '面向传播分析与业务洞察',
    gradient: 'from-indigo-400 to-purple-400',
  },
  {
    icon: MessageSquare,
    title: '智能舆情 Agent',
    description: '面向信息感知与风险分析',
    gradient: 'from-blue-400 to-indigo-400',
  },
  {
    icon: Users,
    title: '数字人交互 Agent',
    description: '面向智能交互场景',
    gradient: 'from-cyan-400 to-blue-400',
  },
  {
    icon: ClipboardList,
    title: '工单助手 Agent',
    description: '面向工单处理与管理场景',
    gradient: 'from-orange-400 to-amber-400',
  },
  {
    icon: Target,
    title: '商机分析 Agent',
    description: '面向商业机会挖掘与分析',
    gradient: 'from-emerald-400 to-green-400',
  },
];

// Platform capabilities data
const platformCapabilities = [
  { icon: Layers, title: 'Agent 构建', color: 'from-blue-500 to-cyan-500' },
  { icon: Database, title: '知识治理', color: 'from-indigo-500 to-purple-500' },
  { icon: Brain, title: '模型能力', color: 'from-blue-500 to-indigo-500' },
  { icon: Shield, title: '流程权限', color: 'from-cyan-500 to-blue-500' },
  { icon: Activity, title: '评测安全', color: 'from-purple-500 to-indigo-500' },
  { icon: Server, title: '系统集成', color: 'from-teal-500 to-cyan-500' },
];

export function AgentPage() {
  return (
    <div className="pt-16 bg-gradient-to-br from-blue-50/30 via-indigo-50/20 to-purple-50/20">
      {/* Hero Section */}
      <HeroSection />

      {/* Product Matrix */}
      <ProductMatrixSection />

      {/* Agent Architecture Section */}
      <AgentArchitectureSection />

      {/* Agent Builder */}
      <AgentBuilderSection />

      {/* Knowledge Base */}
      <KnowledgeBaseSection />

      {/* Platform Capabilities */}
      <PlatformCapabilitiesSection />

      {/* Agent Types */}
      <AgentTypesSection />

      {/* CTA Section */}
      <CTASection />

      {/* Use Cases */}
      <UseCasesSection />

      {/* Final CTA */}
      <FinalCTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative py-20 overflow-hidden">{/* AI背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 动态渐变球体 */}
        <motion.div
          className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-blue-400/20 to-cyan-400/20 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-0 w-80 h-80 rounded-full bg-gradient-to-br from-purple-400/15 to-pink-400/15 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* AI网格背景 */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #3b82f6 1px, transparent 1px),
              linear-gradient(to bottom, #3b82f6 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* 左侧内容 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-600 rounded-full text-sm mb-6 shadow-sm"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4" />
              <span className="font-medium">AI智能体平台</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
              企业级<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI智能体</span>中台
            </h1>

            <p className="text-foreground/75 mb-8 leading-relaxed text-[16px]">
              构建可信、可控、可持续演进的智能体平台，
              <br />
              为企业提供完整的AI能力底座与治理体系。
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white rounded-xl hover:shadow-xl transition-all font-medium relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">立即体验</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
              </motion.button>
              <motion.button
                className="px-8 py-4 bg-white border-2 border-gray-300 text-foreground rounded-xl hover:border-primary hover:shadow-lg transition-all font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                查看文档
              </motion.button>
            </div>

            <div className="grid grid-cols-3 gap-8">
              {[
                { value: '1000+', label: '智能体实例', icon: Bot },
                { value: '99.9%', label: '平台可用性', icon: Zap },
                { value: '100+', label: '企业客户', icon: Users },
              ].map((stat) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="relative group"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
                      <Icon className="w-5 h-5 text-primary mb-2" />
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                      <div className="text-xs text-foreground/60">{stat.label}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* 右侧图片 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* 装饰性边框 */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-3xl blur-2xl" />

            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={heroImage}
                  alt="星河卓越企业级AI智能体平台界面展示"
                  className="w-full h-auto rounded-2xl shadow-2xl border border-white/20"
                />
              </motion.div>


            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProductMatrixSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const products = [
    {
      icon: Bot,
      title: '对话式智能体构建平台',
      description: '低代码可视化构建对话式AI，支持多轮对话、意图识别与知识库集成，快速落地企业级对话应用。',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50/80 to-cyan-50/50',
      lightColor: 'from-blue-400/20 to-cyan-400/20',
    },
    {
      icon: Workflow,
      title: '工作流智能体编排中心',
      description: '通过拖拽式编排实现复杂业务流程自动化，集成多个AI能力与业务系统，构建端到端智能流程。',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50/80 to-pink-50/50',
      lightColor: 'from-purple-400/20 to-pink-400/20',
    },
    {
      icon: Code,
      title: 'Agent SDK 与开发框架',
      description: '提供完整的SDK与开发工具链，支持自定义智能体开发、调试与部署，灵活适配各类业务场景。',
      color: 'from-orange-500 to-amber-500',
      bgColor: 'from-orange-50/80 to-amber-50/50',
      lightColor: 'from-orange-400/20 to-amber-400/20',
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-200/40 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-full bg-gradient-to-b from-transparent via-purple-200/40 to-transparent" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm mb-4">
            <Network className="w-4 h-4 text-primary" />
            <span className="font-medium text-primary">核心产品</span>
          </div>
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              产品矩阵
            </span>
          </h2>
          <p className="text-xl text-foreground/70">
            三大核心产品，覆盖智能体全生命周期
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                {/* 光晕效果 */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${product.lightColor} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className={`relative bg-gradient-to-br ${product.bgColor} backdrop-blur-sm rounded-2xl p-8 border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-500 h-full`}>
                  {/* 装饰性网格 */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                    <div className="w-full h-full" style={{
                      backgroundImage: `
                        linear-gradient(to right, currentColor 1px, transparent 1px),
                        linear-gradient(to bottom, currentColor 1px, transparent 1px)
                      `,
                      backgroundSize: '8px 8px',
                    }} />
                  </div>

                  <motion.div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${product.color} mb-6 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{product.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{product.description}</p>

                  {/* 底部装饰线 */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AgentArchitectureSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-50/30 via-indigo-50/20 to-purple-50/20">
      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm mb-4">
            <Bot className="w-4 h-4 text-primary" />
            <span className="font-medium text-primary">产品架构</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[48px]">
            Agent：智能能力的组织与运行形态
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-10"
        >
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border">
            <p className="text-foreground/80 leading-relaxed">
              在星河Agent平台中，<span className="text-[rgb(0,0,0)] font-semibold">Agent 并非独立系统或黑盒程序</span>，而是可被<span className="text-[rgb(0,0,0)] font-semibold">构建、配置、管理与评估</span>的智能能力单元。
              平台通过 Agent 形态，将<span className="text-[rgb(0,0,0)] font-semibold">模型、知识与流程能力</span>进行组合，以适配不同行业与企业场景的使用需求。
            </p>
          </div>
        </motion.div>

        {/* Unified Hierarchy View */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Container with unified border */}
          <div className="relative bg-gradient-to-b from-blue-50/50 via-purple-50/30 to-pink-50/20 rounded-2xl p-6 md:p-8 border-2 border-white/30">
            {/* Level 1: Agent Platform */}
            <div className="relative mb-6">
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-primary to-accent flex-shrink-0">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">Agent Platform</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      提供统一的 Agent 运行、治理与评测环境
                    </p>

                    {/* Platform Capabilities Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-3">
                      {platformCapabilities.map((capability) => {
                        const Icon = capability.icon;
                        return (
                          <div key={capability.title} className="flex flex-col items-center gap-2 p-2 rounded-lg bg-gradient-to-br from-blue-50/50 to-purple-50/30 hover:from-blue-50 hover:to-purple-50 transition-all">
                            <div className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${capability.color} shadow-sm`}>
                              <Icon className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-xs font-medium text-center leading-tight">{capability.title}</span>
                          </div>
                        );
                      })}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-blue-50 text-[rgba(38,36,76,0.8)] text-sm font-medium">
                        统一运行环境
                      </span>
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-indigo-50 text-[rgb(38,36,76)] text-sm font-medium">
                        全链路监控
                      </span>
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-purple-50 text-[rgba(38,36,76,0.8)] text-sm font-medium">
                        安全合规
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Connection line */}
              <div className="flex justify-center my-3">
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-6 bg-gradient-to-b from-primary/40 to-purple-500/40 rounded-full"></div>
                  <svg className="w-4 h-4 text-purple-500/60 -mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Level 2: Industry Agent */}
            <div className="relative mb-6">
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-primary to-accent flex-shrink-0">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">行业 Agent</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      面向不同行业与业务类型的标准化能力组合
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-purple-50 text-[rgba(38,36,76,0.8)] text-sm font-medium">
                        金融行业
                      </span>
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-indigo-50 text-[rgba(38,36,76,0.8)] text-sm font-medium">
                        政务服务
                      </span>
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-purple-50 text-[rgba(38,36,76,0.8)] text-sm font-medium">
                        零售电商
                      </span>
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-blue-50 text-[rgb(38,36,76)] text-sm font-medium">
                        制造工业
                      </span>
                    </div>
                  </div>
                  <div className="hidden lg:flex flex-col gap-1.5 text-sm text-muted-foreground/70 min-w-[140px]">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1 h-1 rounded-full bg-purple-500/50 bg-[rgba(38,36,76,0.5)]"></div>
                      <span>领域知识</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1 h-1 rounded-full bg-purple-500/50 bg-[rgba(38,36,76,0.5)]"></div>
                      <span>业务流程</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1 h-1 rounded-full bg-purple-500/50"></div>
                      <span>合规要求</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Connection line */}
              <div className="flex justify-center my-3">
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-6 bg-gradient-to-b from-purple-500/40 to-pink-500/40 rounded-full"></div>
                  <svg className="w-4 h-4 text-purple-500/60 -mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Level 3: Specialized Agent */}
            <div className="relative">
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <h3 className="text-xl font-bold text-center mb-2">专项 Agent（应用场景示例）</h3>
                <p className="text-center text-sm text-muted-foreground mb-6 max-w-2xl mx-auto">
                  专项 Agent 是平台能力在具体业务场景中的应用形态基于行业 Agent 能力进行场景化封装与优化。
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {agents.map((agent, index) => {
                    const Icon = agent.icon;
                    return (
                      <motion.div
                        key={agent.title}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                        className="group relative bg-white rounded-lg p-4 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-md hover:shadow-primary/10"
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className={`inline-flex p-2.5 rounded-lg bg-gradient-to-br ${agent.gradient} mb-3 group-hover:scale-110 transition-transform shadow-sm`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <h4 className="text-sm font-semibold mb-1.5 leading-tight">{agent.title}</h4>
                          <p className="text-sm text-muted-foreground leading-snug">{agent.description}</p>
                        </div>
                        {/* Subtle glow on hover */}
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function AgentBuilderSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-br from-green-400/20 to-emerald-400/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* 左侧：模拟界面 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* 装饰边框 */}
            <div className="absolute -inset-2 bg-gradient-to-br from-green-400/30 to-emerald-400/30 rounded-3xl blur-xl" />

            <div className="relative bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-gray-200/50">
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-4 border-b">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-sm text-foreground/60 ml-2">智能体构建器</span>
                  <div className="ml-auto flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-green-500" />
                    <span className="text-xs text-green-600 font-medium">运行中</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { name: '意图识别模块', status: 'active', progress: 100 },
                    { name: 'NLU处理引擎', status: 'active', progress: 85 },
                    { name: '知识库检索', status: 'processing', progress: 60 },
                    { name: '响应生成器', status: 'idle', progress: 0 }
                  ].map((item, i) => (
                    <motion.div
                      key={item.name}
                      className="flex items-center gap-3 p-4 bg-gradient-to-r from-gray-50 to-gray-50/50 rounded-xl border border-gray-100 hover:border-green-200 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                    >
                      <motion.div
                        className={`w-2.5 h-2.5 rounded-full ${item.status === 'active' ? 'bg-green-500' :
                          item.status === 'processing' ? 'bg-yellow-500' :
                            'bg-gray-300'
                          }`}
                        animate={item.status === 'active' ? { scale: [1, 1.2, 1] } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <div className="flex-1">
                        <span className="text-sm font-medium">{item.name}</span>
                        {item.progress > 0 && (
                          <div className="mt-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full rounded-full ${item.status === 'active' ? 'bg-green-500' : 'bg-yellow-500'
                                }`}
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${item.progress}%` } : {}}
                              transition={{ duration: 1, delay: 0.6 + i * 0.1 }}
                            />
                          </div>
                        )}
                      </div>
                      {item.status === 'active' && (
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* 右侧：内容 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-600 rounded-full text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="font-medium">核心能力</span>
            </div>

            <h2 className="text-5xl font-bold mb-6">
              可视化<br />
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                智能体构建平台
              </span>
            </h2>

            <p className="text-xl text-foreground/75 mb-10 leading-relaxed">
              通过低代码可视化编排，快速构建企业级智能体应用。
              无需深度AI开发能力，业务人员也能轻松配置与管理智能体流程。
            </p>

            <div className="space-y-6">
              {[
                { icon: Boxes, title: '模块化设计', desc: '丰富的预置组件库，开箱即用', color: 'from-blue-500 to-cyan-500' },
                { icon: GitBranch, title: '流程编排', desc: '拖拽式可视化编排，所见即所得', color: 'from-purple-500 to-pink-500' },
                { icon: Eye, title: '实时预览', desc: '即时调试反馈，快速迭代优化', color: 'from-orange-500 to-amber-500' },
              ].map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    className="flex items-start gap-5 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  >
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                      <p className="text-foreground/70">{feature.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function KnowledgeBaseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 bg-gradient-to-br from-purple-50/50 via-pink-50/30 to-purple-50/40 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-br from-green-400/20 to-emerald-400/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* 左侧：内容 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600 rounded-full text-sm mb-6">
              <Database className="w-4 h-4" />
              <span className="font-medium">知识底座</span>
            </div>

            <h2 className="text-5xl font-bold mb-6">
              企业级<br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                知识库与数据治理
              </span>
            </h2>

            <p className="text-xl text-foreground/75 mb-10 leading-relaxed">
              统一的知识与数据管理平台，支持海量文档、结构化数据的接入、处理与检索，
              为智能体提供准确可靠的知识来源。
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: '知识库容量', value: '100TB+', icon: Database, color: 'from-purple-500 to-purple-600' },
                { label: '文档处理', value: '10M+', icon: FileText, color: 'from-pink-500 to-pink-600' },
                { label: '检索准确率', value: '95%+', icon: TrendingUp, color: 'from-purple-600 to-pink-600' },
                { label: '并发查询', value: '10K+', icon: Zap, color: 'from-pink-600 to-purple-600' },
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    className="relative group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative bg-white/90 backdrop-blur-sm rounded-xl p-5 border border-purple-200/50 shadow-lg hover:shadow-xl transition-shadow">
                      <Icon className="w-5 h-5 text-purple-600 mb-2" />
                      <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-foreground/60">{stat.label}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* 右侧：可视化 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-2 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-3xl blur-xl" />

            <div className="relative bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-purple-200/50">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-purple-100">
                  <div className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-purple-600" />
                    <span className="font-bold text-lg">知识库概览</span>
                  </div>
                  <motion.span
                    className="text-xs text-green-600 bg-green-100 px-3 py-1.5 rounded-full font-medium flex items-center gap-1"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    运行中
                  </motion.span>
                </div>

                {[
                  { name: '产品知识库', size: '12.5GB', docs: '8,524', color: 'from-blue-500 to-blue-600', progress: 85 },
                  { name: '技术文档库', size: '8.2GB', docs: '5,231', color: 'from-purple-500 to-purple-600', progress: 65 },
                  { name: '客服问答库', size: '3.8GB', docs: '12,845', color: 'from-pink-500 to-pink-600', progress: 92 },
                ].map((kb, i) => (
                  <motion.div
                    key={kb.name}
                    className="space-y-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  >
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold text-foreground">{kb.name}</span>
                      <span className="text-foreground/60 font-medium">{kb.size}</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${kb.color} rounded-full shadow-sm`}
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${kb.progress}%` } : {}}
                            transition={{ duration: 1.5, delay: 0.7 + i * 0.1 }}
                          />
                        </div>
                        <span className="text-xs text-foreground/60 font-medium min-w-[60px]">{kb.docs} 文档</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PlatformCapabilitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 overflow-hidden">
      {/* 网格背景 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #6366f1 1px, transparent 1px),
              linear-gradient(to bottom, #6366f1 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* 装饰性渐变 */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm mb-4">
            <Settings className="w-4 h-4 text-primary" />
            <span className="font-medium text-primary">核心特性</span>
          </div>
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              平台核心能力
            </span>
          </h2>
          <p className="text-xl text-foreground/70">
            企业级平台能力，满足生产环境严苛要求
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platformCapabilities.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="relative group"
              >
                {/* 悬浮光效 */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${cap.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500`} />

                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-7 border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 h-full">
                  {/* 顶部装饰线 */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cap.color} opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl`} />

                  <motion.div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${cap.color} mb-5 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>

                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{cap.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{cap.desc}</p>

                  {/* 装饰性角标 */}
                  <div className="absolute bottom-4 right-4 w-8 h-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Icon className="w-full h-full" />
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

function AgentTypesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/40 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-400/20 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* 圆点装饰 */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #3b82f6 2px, transparent 2px)',
            backgroundSize: '50px 50px',
          }} />
        </div>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full text-sm mb-4">
            <Bot className="w-4 h-4 text-primary" />
            <span className="font-medium text-primary">智能体类型</span>
          </div>
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              丰富的智能体类型
            </span>
          </h2>
          <p className="text-xl text-foreground/70">
            覆盖企业各类应用场景
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((type, index) => {
            const Icon = type.icon;
            return (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative group"
              >
                {/* 光晕效果 */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${type.gradient} opacity-0 group-hover:opacity-30 rounded-2xl blur-xl transition-opacity duration-500`} />

                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-7 border border-gray-200 hover:border-gray-300 hover:shadow-2xl transition-all duration-500 h-full flex flex-col items-center text-center">
                  <motion.div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${type.gradient} mb-5 shadow-lg`}
                    whileHover={{ scale: 1.15, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>

                  <h3 className="font-bold text-lg mb-2 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    {type.title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{type.description}</p>

                  {/* 右上角徽章 */}
                  <motion.div
                    className="absolute top-3 right-3 w-2 h-2 rounded-full bg-green-500 opacity-0 group-hover:opacity-100"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return null;
}

function UseCasesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const useCases = [
    {
      text: '智能客服：自动化客户咨询处理，提升服务效率',
      icon: MessageSquare,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      text: '知识管理：企业知识智能检索与问答',
      icon: Database,
      color: 'from-purple-500 to-pink-500'
    },
    {
      text: '流程自动化：业务流程智能化编排与执行',
      icon: Workflow,
      color: 'from-green-500 to-emerald-500'
    },
    {
      text: '数据分析：自然语言驱动的数据洞察',
      icon: BarChart,
      color: 'from-orange-500 to-amber-500'
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-blue-200/40 to-transparent" />
      </div>

      <div ref={ref} className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="font-medium text-primary">应用场景</span>
          </div>
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              典型应用场景
            </span>
          </h2>
        </motion.div>

        <div className="space-y-5">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* 悬浮光效 */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${useCase.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500`} />

                <div className="relative flex items-center gap-5 bg-white/80 backdrop-blur-sm rounded-2xl p-7 border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${useCase.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-medium text-foreground leading-relaxed">{useCase.text}</p>
                  </div>
                  <CheckCircle2 className="w-6 h-6 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="relative py-16 bg-gradient-to-br from-white via-blue-50/30 to-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Decorative lines */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200/30 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              继续探索
            </h3>
            <p className="text-foreground/60">
              了解更多关于星河卓越的 AI 能力
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-stretch">
            <Link
              to="/scenarios"
              className="group relative flex-1 max-w-md"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative px-8 py-6 rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-blue-200/50 hover:border-blue-400/50 hover:shadow-xl transition-all overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center gap-4 relative z-10">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Briefcase className="w-6 h-6 text-blue-600" />
                  </motion.div>
                  <div className="flex-1 text-left">
                    <div className="font-bold text-lg text-foreground group-hover:text-blue-600 transition-colors">
                      应用场景示例
                    </div>
                    <div className="text-sm text-foreground/60">
                      探索智能体应用场景
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <div className="hidden sm:block w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent self-stretch" />

            <Link
              to="/practices"
              className="group relative flex-1 max-w-md"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative px-8 py-6 rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-purple-200/50 hover:border-purple-400/50 hover:shadow-xl transition-all overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center gap-4 relative z-10">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                  >
                    <BookOpen className="w-6 h-6 text-purple-600" />
                  </motion.div>
                  <div className="flex-1 text-left">
                    <div className="font-bold text-lg text-foreground group-hover:text-purple-600 transition-colors">
                      案例与实践
                    </div>
                    <div className="text-sm text-foreground/60">
                      查看成功案例
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-purple-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}