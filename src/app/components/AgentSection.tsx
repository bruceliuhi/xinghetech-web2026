import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { MessageSquare, TrendingUp, Radio, User, Layers, Database, Brain, Shield, Activity, Server, CreditCard, Landmark, ShoppingCart, Factory } from 'lucide-react';
const bgImage = '/images/shouye-agent-bg.webp';

const agents = [
  {
    icon: MessageSquare,
    title: '智能客服 Agent',
    description: '面向服务与咨询场景',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: TrendingUp,
    title: '智能营销 Agent',
    description: '面向传播分析与业务洞察',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Radio,
    title: '智能舆情 Agent',
    description: '面向信息感知与风险分析',
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    icon: User,
    title: '数字人交互 Agent',
    description: '面向智能交互场景',
    gradient: 'from-cyan-500 to-blue-500',
  },
];

const platformCapabilities = [
  { icon: Layers, title: 'Agent 构建', color: 'from-blue-500 to-cyan-500' },
  { icon: Database, title: '知识治理', color: 'from-indigo-500 to-purple-500' },
  { icon: Brain, title: '模型能力', color: 'from-blue-500 to-indigo-500' },
  { icon: Shield, title: '流程权限', color: 'from-cyan-500 to-blue-500' },
  { icon: Activity, title: '评测安全', color: 'from-purple-500 to-indigo-500' },
  { icon: Server, title: '系统集成', color: 'from-teal-500 to-cyan-500' },
];

export function AgentSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="agent" className="relative py-[160px] overflow-hidden" style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#1e1b4b] via-[#3b82f6] to-[#1e1b4b] bg-clip-text text-transparent pb-1">
            面向组织级运行的AI能力架构
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            在星河卓越的系统中，Agent 并非独立产品，<br />而是AI能力在组织中的运行与协作形态。
          </p>
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

                  <div className="flex-1 text-center">
                    <h3 className="text-xl font-bold mb-1">Agent Platform</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      提供统一的 Agent 运行、治理与评测环境
                    </p>

                    {/* Platform Capabilities Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-4">
                      {platformCapabilities.map((capability, index) => {
                        const Icon = capability.icon;
                        return (
                          <div key={capability.title} className="group flex flex-col items-center gap-3 p-3 bg-white rounded-xl border border-slate-100 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 transition-all duration-300">
                            <div className="inline-flex p-2.5 rounded-lg bg-gradient-to-br from-[#2C4BFF] to-[#9122FA] shadow-sm group-hover:scale-110 transition-transform duration-300">
                              <Icon className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-xs font-medium text-slate-700 text-center leading-tight">{capability.title}</span>
                          </div>
                        );
                      })}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-medium border border-blue-100">
                        统一运行环境
                      </span>
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-medium border border-indigo-100">
                        全链路监控
                      </span>
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-purple-50 text-purple-700 text-xs font-medium border border-purple-100">
                        安全合规
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Connection line */}
              <div className="flex justify-center mt-6">
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
                <div className="flex items-start gap-4 mb-4">

                  <div className="flex-1 text-center">
                    <h3 className="text-xl font-bold mb-1">行业 Agent</h3>
                    <p className="text-sm text-muted-foreground">
                      面向不同行业沉淀标准化 Agent 能力组合
                    </p>
                  </div>
                </div>

                {/* 行业卡片网格 - 紧凑版 */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                  <div className="group flex flex-col items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 transition-all duration-300">
                    <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-[#2C4BFF] to-[#9122FA] shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <CreditCard className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-slate-700 text-[12px]">金融行业</span>
                  </div>
                  <div className="group flex flex-col items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 transition-all duration-300">
                    <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-[#2C4BFF] to-[#9122FA] shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <Landmark className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-slate-700 text-[12px] text-[13px]">政务服务</span>
                  </div>
                  <div className="group flex flex-col items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 transition-all duration-300">
                    <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-[#2C4BFF] to-[#9122FA] shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <ShoppingCart className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-slate-700 text-[12px] text-[13px]">零售电商</span>
                  </div>
                  <div className="group flex flex-col items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 transition-all duration-300">
                    <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-[#2C4BFF] to-[#9122FA] shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <Factory className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-slate-700 text-[12px]">制造工业</span>
                  </div>
                </div>

                {/* 底部能力标签 - 紧凑版 */}
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-medium border border-blue-100">
                    领域知识
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-medium border border-indigo-100">
                    业务流程
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-purple-50 text-purple-700 text-xs font-medium border border-purple-100">
                    合规要求
                  </span>
                </div>
              </div>
              {/* Connection line */}
              <div className="flex justify-center mt-6">
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
                <h3 className="text-xl font-bold text-center mb-2">专项 Agent（应用层）</h3>
                <p className="text-center text-sm text-muted-foreground mb-6 max-w-2xl mx-auto">
                  行业 Agent 在具体业务场景中的应用形态
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
                        className="group relative flex flex-col items-center p-4 bg-white rounded-xl border border-slate-100 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 transition-all duration-300"
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-[#2C4BFF] to-[#9122FA] mb-3 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <h4 className="text-sm font-semibold mb-1.5 leading-tight">{agent.title}</h4>
                          <p className="text-xs text-muted-foreground leading-snug">{agent.description}</p>
                        </div>
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