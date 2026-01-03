import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { MessageSquare, FileCheck, FileText, Search, BarChart3, Workflow, AlertCircle, ArrowRight, Zap } from 'lucide-react';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';
const decorativeImage = '/images/decorative-scenarios.png';

export function ScenariosPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <HeroSection />

      {/* Main Scenarios */}
      <MainScenariosSection />

      {/* Relationship with Agent */}
      <AgentRelationshipSection />

      {/* Configuration & Extension */}
      <ConfigurationSection />

      {/* Bottom Notice */}
      <BottomNoticeSection />

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
    <section
      className="relative min-h-[55vh] flex items-center py-12 overflow-hidden"
      style={{
        backgroundImage: 'url(/images/changjing.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* 高端AI氛围装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 1. 科技感网格 - 极其微弱，仅在中心区域可见 */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:120px_120px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

        {/* 2. 顶部光效 - 增加通透感 */}
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-blue-500/10 via-cyan-500/5 to-transparent" />

        {/* 3. 动态呼吸光晕 - 缓慢移动 (增强可见度) */}
        <motion.div
          className="absolute top-[-20%] left-[20%] w-[800px] h-[800px] rounded-full bg-blue-500/30 blur-[100px] mix-blend-screen"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-[-20%] right-[10%] w-[600px] h-[600px] rounded-full bg-purple-500/30 blur-[80px] mix-blend-screen"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* 4. 悬浮粒子 - 模拟数据节点 */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}

        {/* 5. 扫描光线 - 极细微的科技扫描感 */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-[2px] w-full"
          animate={{
            top: ['0%', '100%'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8,
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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              产品应用场景
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl text-foreground/70 mb-8"
        >
          平台能力在不同业务场景中的应用形态
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto space-y-4 text-base text-foreground/75 leading-relaxed"
        >
          <p>
            星河卓越的 Agent 平台，已在多类企业业务场景中持续使用。
          </p>
          <p>
            以下为平台在实际业务流程中的典型使用方式
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function MainScenariosSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scenarios = [
    {
      icon: MessageSquare,
      title: '客户服务与业务咨询支持',
      background: '在客户服务与业务支持场景中，一线人员需要频繁查询产品信息、业务规则、历史记录，并处理大量重复咨询与工单。',
      usage: '星河卓越平台通过 客服支持 Agent，接入企业内部知识库与业务系统，用于辅助客服人员完成日常答复与问题定位。',
      methods: [
        '客服人员通过对话方式查询业务知识',
        'Agent 返回结构化答案与参考信息',
        '复杂问题由人工确认后继续处理或升级',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FileCheck,
      title: '内容审核与合规检查支持',
      background: '在制度管理、内容发布与材料审核过程中，业务人员需要反复核查文本是否符合内部规范与合规要求，人工成本高且容易遗漏。',
      usage: '通过 内容审核 Agent，平台对接制度文件、规范条款与历史材料，辅助业务人员进行文本比对与风险提示。',
      methods: [
        '业务人员提交待审核内容',
        'Agent 标注潜在不一致或风险点',
        '人工确认后进入审批或发布流程',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: BarChart3,
      title: '运营数据分析与管理汇总',
      background: '在运营与管理场景中，业务负责人需要定期了解业务运行情况，但原始数据分散在多个系统中，整理与解读成本高。',
      usage: '星河卓越平台通过 分析与汇总 Agent，对接业务数据与报表系统，辅助完成数据汇总与初步解读。',
      methods: [
        '管理人员以自然语言查询业务情况',
        'Agent 汇总相关数据并给出结构化结果',
        '输出内容用于内部汇报与管理参考',
      ],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Search,
      title: '内部知识查询与流程指引',
      background: '企业内部制度、流程与经验信息分散在多个系统中，新员工或跨部门协作时，信息查找效率低。',
      usage: '通过 知识与导航 Agent，平台统一接入制度文档、流程说明与常见问题，用于支持员工日常查询与操作指引。',
      methods: [
        '员工通过对话查询制度或流程',
        'Agent 返回对应说明并指向原始来源',
        '知识内容可持续补充与更新',
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: FileText,
      title: '业务文档理解与辅助处理',
      background: '在合同、方案、报告等文档处理场景中，业务人员需要快速理解内容要点、识别关键条款与差异信息。',
      usage: '星河卓越平台通过 文档理解 Agent，辅助业务人员对文本进行结构化理解与重点提取。',
      methods: [
        '业务人员提交待处理文档',
        'Agent 提取核心要点与关注信息',
        '人工基于结果进行判断与决策',
      ],
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Workflow,
      title: '跨系统操作与业务流程辅助',
      background: '在涉及多个业务系统的操作场景中，人员需要频繁切换系统、查找入口与流程说明，操作复杂且易出错。',
      usage: '通过 流程辅助 Agent，平台对接现有业务系统，用于提供操作指引与流程辅助。',
      methods: [
        '用户描述当前业务目标或操作需求',
        'Agent 提供对应流程说明与操作提示',
        '关键步骤由人工执行与确认',
      ],
      color: 'from-teal-500 to-cyan-500',
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-50/30 via-cyan-50/25 to-indigo-50/30">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-blue-300/8 to-cyan-300/8 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -60, 0],
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
            x: [0, -70, 0],
            y: [0, 90, 0],
          }}
          transition={{
            duration: 23,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ bottom: '10%', right: '5%' }}
        />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            主要
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              应用场景类型
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scenarios.map((scenario, index) => {
            const Icon = scenario.icon;
            return (
              <motion.div
                key={scenario.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-white/40 shadow-xl hover:shadow-2xl hover:bg-white/90 transition-all duration-300 overflow-hidden"
              >
                {/* Subtle gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${scenario.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />

                {/* Top glow line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${scenario.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative z-10 space-y-8">
                  {/* Header: Icon & Title */}
                  <div className="flex items-start gap-5">
                    <div className={`flex-shrink-0 p-3.5 rounded-2xl bg-gradient-to-br ${scenario.color} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="flex-1 font-bold text-xl pt-1.5 leading-tight text-foreground/90 group-hover:text-primary transition-colors">
                      {scenario.title}
                    </h3>
                  </div>

                  {/* Content Sections */}
                  <div className="space-y-6">
                    {/* Business Background */}
                    <div className="bg-slate-50/50 rounded-2xl p-4 border border-slate-100 group-hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-sm tracking-wide font-bold bg-gradient-to-r ${scenario.color} bg-clip-text text-transparent opacity-90`}>
                          业务背景
                        </span>
                      </div>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        {scenario.background}
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                    {/* How it works */}
                    <div className="space-y-3">
                      <h4 className="flex items-center gap-2 text-sm font-semibold text-foreground/80">
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${scenario.color}`} />
                        核心能力
                      </h4>
                      <p className="text-sm font-medium text-foreground/80 leading-relaxed">
                        {scenario.usage}
                      </p>
                    </div>

                    {/* Methods List */}
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {scenario.methods.map((method, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center px-2.5 py-1 rounded-lg bg-slate-100/80 text-xs font-medium text-foreground/60 border border-slate-200/50 group-hover:border-slate-200 transition-colors"
                          >
                            {method}
                          </span>
                        ))}
                      </div>
                    </div>
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

function AgentRelationshipSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative flex items-center py-16 bg-gradient-to-br from-purple-50/25 via-pink-50/20 to-blue-50/25">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-purple-300/10 to-pink-300/10 blur-3xl"
          animate={{
            x: [0, -60, 0],
            y: [0, 70, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: '20%', left: '10%' }}
        />
      </div>

      <div ref={ref} className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
            应用场景如何通过
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Agent 运行
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl border border-border shadow-sm">
            <p className="text-lg text-foreground/75 leading-relaxed mb-6">
              在星河卓越平台中，
              上述应用场景并非独立系统或单点功能，
              而是通过 Agent 作为运行形态加以实现。
            </p>
            <p className="text-lg text-foreground/75 leading-relaxed">
              Agent 将模型、知识与流程能力进行组合，
              并在平台的统一治理与管理下运行，
              以适配具体业务场景的实际需求。
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative p-8"
          >
            {/* Placeholder to maintain height */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ConfigurationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const supportMethods = [
    '基于既有平台能力进行组合与调整',
    '支持跨场景复用 Agent 能力',
    '支持随业务变化进行扩展与演进',
  ];

  return (
    <section className="relative flex items-center py-16 bg-gradient-to-br from-green-50/20 via-emerald-50/25 to-teal-50/20">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-green-300/8 to-emerald-300/8 blur-3xl"
          animate={{
            x: [0, 80, 0],
            y: [0, -70, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ bottom: '15%', right: '10%' }}
        />
      </div>

      <div ref={ref} className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
            应用场景的
            <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
              配置与扩展方式
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl border border-border shadow-sm">
            <p className="text-lg text-foreground/75 leading-relaxed text-center mb-8">
              平台支持根据业务需求，
              对应用场景进行灵活配置与组合，
              而非以固定方案或一次性实现为前提。
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-center mb-6">支持方式</h3>
              {supportMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4 p-6 bg-gradient-to-r from-green-50/80 to-emerald-50/80 rounded-2xl border border-green-200/50"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-foreground/75 leading-relaxed">
                    {method}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function BottomNoticeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-16 bg-gradient-to-br from-amber-50/40 via-yellow-50/30 to-orange-50/30">
      <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Removed notice box */}
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