import { motion } from 'motion/react';
const heroBg = '/images/hero-bg-capabilities.png';
const summaryBg = '/images/summary-bg.png';
const agentManagementImg = '/images/agent-management.png';
const knowledgeGovernanceImg = '/images/knowledge-governance.png';
const modelEvolutionImg = '/images/model-evolution.png';
const processPermissionImg = '/images/process-permission.png';
const evaluationSecurityImg = '/images/evaluation-security.png';
const runtimeIntegrationImg = '/images/runtime-integration.png';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Layers, Database, Brain, Shield, Activity, Server, ArrowRight, ChevronDown,
  Users, RefreshCw, Boxes, FolderOpen, GitBranch, ShieldCheck,
  Plug, Package, TrendingUp, Workflow, UserCheck, FileCheck,
  FileText, MonitorCheck, AlertTriangle, Cloud, Link as LinkIcon, Target,
  Sparkles, Lock, Zap, Settings
} from 'lucide-react';
import { Footer } from '../components/Footer';

const capabilities = [
  {
    id: 'agent-management',
    icon: Layers,
    title: 'Agent 构建与运行管理',
    description: '平台提供统一的 Agent 构建、编排与运行环境,支持将模型、知识与流程能力组织为可管理、可运行的智能单元。',
    points: [
      { text: '支持多 Agent 的协同运行与统一调度', icon: Users },
      { text: '覆盖 Agent 的创建、配置、运行与生命周期管理', icon: RefreshCw },
      { text: '支持在不同业务场景中复用与组合 Agent 能力', icon: Boxes }
    ],
    value: '让智能能力不再是零散脚本或一次性应用，而是可以被长期管理和持续使用的系统能力。',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 via-cyan-50 to-blue-50',
    iconBg: 'from-blue-100 to-cyan-100',
    decorativeIcons: [Workflow, Sparkles, Settings]
  },
  {
    id: 'knowledge-governance',
    icon: Database,
    title: '知识与数据治理',
    description: '平台支持对业务数据与行业知识进行结构化管理，为 AI 能力提供稳定、可信的输入基础。',
    points: [
      { text: '支持多来源数据与文档的统一管理', icon: FolderOpen },
      { text: '支持知识结构化、版本控制与权限管理', icon: GitBranch },
      { text: '支持数据使用过程中的安全与合规要求', icon: ShieldCheck }
    ],
    value: '保障 AI 对业务信息的理解始终建立在可控、可追溯的基础之上。',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-50 via-pink-50 to-purple-50',
    iconBg: 'from-purple-100 to-pink-100',
    decorativeIcons: [Lock, GitBranch, FolderOpen]
  },
  {
    id: 'model-evolution',
    icon: Brain,
    title: '模型能力构建与演进',
    description: '平台支持多模型能力的接入、使用与管理，并提供模型能力持续演进的管理机制。',
    points: [
      { text: '支持不同模型能力的统一接入与调用', icon: Plug },
      { text: '支持模型能力的版本管理与能力适配', icon: Package },
      { text: '支持模型能力在业务运行中的受控演进', icon: TrendingUp }
    ],
    value: '避免模型能力随意替换、不可回溯，确保模型使用过程稳定、可控、可管理。',
    gradient: 'from-orange-500 to-amber-500',
    bgGradient: 'from-orange-50 via-amber-50 to-orange-50',
    iconBg: 'from-orange-100 to-amber-100',
    decorativeIcons: [Zap, TrendingUp, Sparkles]
  },
  {
    id: 'process-permission',
    icon: Shield,
    title: '流程与权限体系',
    description: '平台将智能能力纳入企业既有业务流程与权限体系，确保 AI 行为符合组织管理与业务规范。',
    points: [
      { text: '支持与现有业务流程的协同与嵌入', icon: Workflow },
      { text: '支持基于角色与权限的使用控制', icon: UserCheck },
      { text: '支持关键操作的记录与审计', icon: FileCheck }
    ],
    value: '让 AI 能力成为业务流程的一部分，而不是绕开流程的外挂工具。',
    gradient: 'from-green-500 to-emerald-500',
    bgGradient: 'from-green-50 via-emerald-50 to-green-50',
    iconBg: 'from-green-100 to-emerald-100',
    decorativeIcons: [Lock, UserCheck, Settings]
  },
  {
    id: 'evaluation-security',
    icon: Activity,
    title: '评测、安全与合规管理',
    description: '平台提供对 Agent 行为与运行状态的持续评测与监控能力，支撑对稳定性与可靠性要求较高的应用场景。',
    points: [
      { text: '支持 Agent 行为的评测与日志记录', icon: FileText },
      { text: '支持运行状态监控与异常识别', icon: MonitorCheck },
      { text: '支持安全控制与合规要求的落实', icon: ShieldCheck }
    ],
    value: '为智能能力的长期运行提供风险控制与安全保障。',
    gradient: 'from-red-500 to-rose-500',
    bgGradient: 'from-red-50 via-rose-50 to-red-50',
    iconBg: 'from-red-100 to-rose-100',
    decorativeIcons: [ShieldCheck, AlertTriangle, FileText]
  },
  {
    id: 'runtime-integration',
    icon: Server,
    title: '运行环境与系统集成能力',
    description: '平台支持在不同运行环境中进行部署与集成，并与企业现有系统进行对接与协同。',
    points: [
      { text: '支持私有环境、混合架构等部署方式', icon: Cloud },
      { text: '支持与现有业务系统的数据与流程对接', icon: LinkIcon },
      { text: '支持平台能力稳定融入实际业务环境', icon: Target }
    ],
    value: '确保平台能力不仅能构建，更能运行、能落地、能长期使用。',
    gradient: 'from-indigo-500 to-violet-500',
    bgGradient: 'from-indigo-50 via-violet-50 to-indigo-50',
    iconBg: 'from-indigo-100 to-violet-100',
    decorativeIcons: [Cloud, LinkIcon, Settings]
  }
];

export function CapabilitiesPage() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-[#FAFCFF] via-[#F8FAFF] to-[#F9FBFF] overflow-hidden"
      >
        {/* Decorative background elements */}
        <div className="absolute inset-0">
          {/* Background Image */}
          <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#2C4BFF] to-[#9122FA] bg-clip-text text-transparent">
              平台能力体系
            </h1>
            <h2 className="text-2xl sm:text-3xl text-foreground/80 mb-8 text-[24px] text-[rgba(26,31,46,0.9)] font-normal font-bold">
              支撑 AI 能力在复杂业务体系中长期运行与持续演进
            </h2>
            <p className="text-foreground/70 max-w-4xl mx-auto leading-relaxed text-[16px] text-[rgb(26,31,46)]">
              星河卓越通过平台化方式，<br />
              将 AI 能力在构建、运行、治理与演进等关键环节进行统一设计与管理，<br />
              为企业与行业场景提供稳定、可控、可持续的智能能力基础。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12"
          >
            <ChevronDown className="w-8 h-8 mx-auto text-[#2C4BFF] opacity-60 animate-bounce" />
          </motion.div>
        </div>

        {/* Topmost Overlay Effects */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          {/* Rotating Energy Effect */}
          <motion.div
            className="absolute inset-[-50%] opacity-30"
            style={{
              background: 'conic-gradient(from 0deg at 50% 50%, transparent, rgba(44, 75, 255, 0.08), transparent, rgba(145, 34, 250, 0.08), transparent)'
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />

          {/* Pulsing Center Gradient */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at center, rgba(44, 75, 255, 0.08) 0%, transparent 60%)'
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Soft Color Flow */}
          <motion.div
             className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-purple-500/5 to-cyan-500/5 mix-blend-overlay"
             animate={{
               opacity: [0.2, 0.5, 0.2],
             }}
             transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </section>

      {/* Navigation Section */}
      <section className="sticky top-16 z-10 bg-gradient-to-r from-white/95 via-blue-50/95 to-white/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {capabilities.map((capability, idx) => {
              const NavIcon = capability.icon;
              return (
                <button
                  key={capability.id}
                  onClick={() => scrollToSection(capability.id)}
                  className={`group flex-shrink-0 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm rounded-xl bg-white/80 border border-[#E3EEFF] hover:border-transparent transition-all whitespace-nowrap relative overflow-hidden`}
                >
                  {/* Gradient hover effect */}

                  
                  {/* Content */}
                  <div className="flex items-center gap-2 relative z-10">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-[#E8F0FF] flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                      <NavIcon className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-blue-600" />
                    </div>
                    <span className="hidden sm:inline group-hover:font-semibold transition-all">{capability.title}</span>
                    <span className="sm:hidden text-[10px] font-medium">{capability.title.split(' ')[0]}</span>
                  </div>
                  
                  {/* Bottom indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2C4BFF] scale-x-0 group-hover:scale-x-100 transition-transform"></div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capability Sections */}
      {capabilities.map((capability, index) => (
        <CapabilitySection key={capability.id} capability={capability} index={index} />
      ))}

      {/* Platform Capability Summary Section */}
      <section className="relative py-16 bg-gradient-to-br from-[#FAFCFF] via-[#F8FAFF] to-[#F9FBFF] overflow-hidden z-0">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
          
          {/* Floating sparkles */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-32 left-[20%]"
          >
            <Sparkles className="w-8 h-8 text-blue-400" />
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-32 right-[25%]"
          >
            <Sparkles className="w-10 h-10 text-purple-400" />
          </motion.div>
          
          {/* Background Image */}
          <img src={summaryBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200/50 mb-6">
              <Zap className="w-4 h-4 text-blue-500" />
              <span className="font-medium text-blue-600">
                平台能力总结
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#2C4BFF] to-[#9122FA]">
              一个面向长期运行的 AI 平台能力体系
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-foreground/80 leading-relaxed text-[14px]">
                星河卓越的平台能力并非围绕单一功能或应用场景构建，<br />
                而是以长期运行与持续演进为目标，<br />
                为 AI 能力在复杂业务体系中的稳定应用提供基础支撑。
              </p>
            </div>
            
            {/* Capability grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
              {capabilities.map((cap, idx) => {
                const CapIcon = cap.icon;
                return (
                  <motion.div
                    key={cap.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="group relative rounded-xl p-4 transition-all cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-[0.35] rounded-xl transition-opacity"></div>
                    <div className={`w-12 h-12 rounded-lg bg-white/90 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform mx-auto`}>
                      <svg width="0" height="0" className="absolute">
                        <defs>
                          <linearGradient id={`gradient-${cap.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#2C4BFF" />
                            <stop offset="100%" stopColor="#9122FA" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <CapIcon className="w-6 h-6" style={{ stroke: `url(#gradient-${cap.id})` }} />
                    </div>
                    <p className="text-sm font-medium text-foreground/75 group-hover:text-foreground transition-colors leading-relaxed">
                      {cap.title}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Links Section */}
      <section className="relative py-20 bg-gradient-to-br from-white via-blue-50/30 to-white overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
          
          {/* Decorative lines */}
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-foreground/80 mb-2">
                继续探索
              </h3>
              <p className="text-sm text-foreground/60">
                了解更多关于星河卓越的 AI 能力
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/#agent"
                className="group relative px-8 py-4 rounded-xl bg-white/80 backdrop-blur-sm border border-blue-200/50 hover:border-blue-400/50 transition-all overflow-hidden"
              >
                <div className="flex items-center gap-3 relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Layers className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-foreground transition-colors">
                      Agent 产品体系
                    </div>
                    <div className="text-xs text-foreground/60">
                      探索智能体能力
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform ml-2" />
                </div>
              </Link>

              <div className="hidden sm:block w-px h-16 bg-gradient-to-b from-transparent via-border to-transparent"></div>

              <Link 
                to="/#scenarios"
                className="group relative px-8 py-4 rounded-xl bg-white/80 backdrop-blur-sm border border-purple-200/50 hover:border-purple-400/50 transition-all overflow-hidden"
              >
                <div className="flex items-center gap-3 relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-[#F1ECFF] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Target className="w-5 h-5 text-[#7347FF]" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-foreground transition-colors">
                      应用场景示例
                    </div>
                    <div className="text-xs text-foreground/60">
                      查看实际案例
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-purple-600 group-hover:translate-x-1 transition-transform ml-2" />
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

interface CapabilitySectionProps {
  capability: typeof capabilities[0];
  index: number;
}

function CapabilitySection({ capability, index }: CapabilitySectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = capability.icon;
  const [DecorIcon1, DecorIcon2, DecorIcon3] = capability.decorativeIcons;

  return (
    <section 
      id={capability.id}
      ref={ref}
      className={`py-24 relative overflow-hidden ${index % 2 === 0 ? 'bg-white' : 'bg-[#F8F9FE]'}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-16 border-b border-border/10 pb-8">
             <div className="flex items-center gap-4">

               <div className={`p-3 rounded-xl bg-[#E8F0FF]`}>
                 <svg width="0" height="0" className="absolute">
                   <defs>
                     <linearGradient id={`section-gradient-${capability.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                       <stop offset="0%" stopColor="#2C4BFF" />
                       <stop offset="100%" stopColor="#9122FA" />
                     </linearGradient>
                   </defs>
                 </svg>
                 <Icon className="w-8 h-8" style={{ stroke: `url(#section-gradient-${capability.id})` }} />
               </div>
             </div>
             <div>
               <h2 className="text-3xl font-bold text-foreground text-[36px]">
                 {capability.title}
               </h2>
               <p className="text-foreground/70 text-[16px] whitespace-nowrap mt-2">
                 {capability.description}
               </p>

             </div>
          </div>
          
          <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
            {/* Content Column */}
            <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} space-y-8`}>
              <div className="space-y-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 text-foreground/90 text-[24px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                  核心能力
                </h3>
                <div className="grid gap-4">
                  {capability.points.map((point, i) => {
                    const PointIcon = point.icon;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                        className="flex items-start gap-4 p-4 rounded-xl bg-white border border-border/40 hover:border-blue-200 transition-all group"
                      >
                        <div className="mt-0.5 p-2 rounded-lg bg-blue-50/50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <PointIcon className="w-4 h-4" />
                        </div>
                        <span className="text-foreground/70 group-hover:text-foreground transition-colors leading-relaxed">
                          {point.text}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-6 border-t border-border/10">
                 <div className="flex items-start gap-3">
                   <div className="mt-1 p-1 rounded-full bg-blue-100/50">
                     <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                   </div>
                   <div>

                     <p className="text-foreground/80 font-medium italic text-[14px]">
                       "{capability.value}"
                     </p>
                   </div>
                 </div>
              </div>
            </div>

            {/* Visual Column */}
            <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} relative`}>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
                <motion.img 
                  src={{
                    'agent-management': agentManagementImg,
                    'knowledge-governance': knowledgeGovernanceImg,
                    'model-evolution': modelEvolutionImg,
                    'process-permission': processPermissionImg,
                    'evaluation-security': evaluationSecurityImg,
                    'runtime-integration': runtimeIntegrationImg,
                  }[capability.id] || 'https://images.unsplash.com/photo-1764776264351-8a9c86d05338?q=80&w=1080&auto=format&fit=crop'}
                  alt={capability.title}
                  className="absolute inset-0 w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-105 border-none outline-none"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                />
              </div>
              
              {/* Decorative elements behind image */}
              <div className="absolute -z-10 top-8 -right-8 w-full h-full border-2 border-blue-100 rounded-2xl hidden lg:block"></div>
              <div className="absolute -z-10 -bottom-8 -left-8 w-32 h-32 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}