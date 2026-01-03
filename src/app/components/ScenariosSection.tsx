import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MessageCircle, FileSearch, FileText, Database, TrendingUp, GitBranch } from 'lucide-react';
const chat3dIcon = '/images/icon-chat-3d.png';
const cluster3dIcon = '/images/icon-cluster-3d.png';
const report3dIcon = '/images/icon-report-3d.png';
const knowledge3dIcon = '/images/icon-knowledge-3d.png';
const analysis3dIcon = '/images/icon-analysis-3d.png';
const workflow3dIcon = '/images/icon-workflow-3d.png';

const scenarios = [
  {
    icon: MessageCircle,
    image: chat3dIcon,
    title: '服务与交互类应用',
    description: '面向客户与内部人员的智能交互支持',
    bgColor: 'bg-gradient-to-br from-blue-100/60 via-cyan-50/40 to-blue-50/30',
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-100/80',
  },
  {
    icon: FileSearch,
    image: cluster3dIcon,
    title: '内容理解与审核类应用',
    description: '面向文本、文档与材料的理解与校验',
    bgColor: 'bg-gradient-to-br from-indigo-100/60 via-purple-50/40 to-indigo-50/30',
    iconColor: 'text-indigo-600',
    iconBg: 'bg-indigo-100/80',
  },
  {
    icon: FileText,
    image: report3dIcon,
    title: '报告与总结类应用',
    description: '面向结构化输出与周期性总结',
    bgColor: 'bg-gradient-to-br from-sky-100/60 via-blue-50/40 to-sky-50/30',
    iconColor: 'text-sky-600',
    iconBg: 'bg-sky-100/80',
  },
  {
    icon: Database,
    image: knowledge3dIcon,
    title: '知识管理与检索类应用',
    description: '面向企业知识的管理、检索与复用',
    bgColor: 'bg-gradient-to-br from-cyan-100/60 via-teal-50/40 to-cyan-50/30',
    iconColor: 'text-cyan-600',
    iconBg: 'bg-cyan-100/80',
  },
  {
    icon: TrendingUp,
    image: analysis3dIcon,
    title: '数据分析与洞察类应用',
    description: '面向业务数据分析与趋势洞察',
    bgColor: 'bg-gradient-to-br from-purple-100/60 via-violet-50/40 to-purple-50/30',
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-100/80',
  },
  {
    icon: GitBranch,
    image: workflow3dIcon,
    title: '流程与系统辅助类应用',
    description: '面向业务流程协同与系统操作辅助',
    bgColor: 'bg-gradient-to-br from-violet-100/60 via-indigo-50/40 to-violet-50/30',
    iconColor: 'text-violet-600',
    iconBg: 'bg-violet-100/80',
  },
];

export function ScenariosSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="scenarios" className="relative py-[128px] bg-gradient-to-br from-[#F9FFF9] via-[#F9FFFC] to-[#FAFFFD]">
      {/* Hexagon pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="hexagons" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <polygon points="40,5 70,22.5 70,57.5 40,75 10,57.5 10,22.5" fill="none" stroke="#8B5CF6" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-cyan-300/20 to-blue-300/20 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-purple-300/15 to-indigo-300/15 blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ bottom: '5%', right: '5%' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-[48px] bg-gradient-to-r from-[#1e1b4b] via-[#3b82f6] to-[#1e1b4b] bg-clip-text text-transparent pb-1">
            应用场景示例
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            基于统一的平台能力,支持多类业务场景的智能应用落地
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scenarios.map((scenario, index) => {
            const Icon = scenario.icon;
            return (
              <motion.div
                key={scenario.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative rounded-2xl overflow-hidden border border-white/40 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 backdrop-blur-xl"
              >
                {/* 顶部图标区域 - 渐变背景 + 毛玻璃 */}
                <div className={`relative h-44 ${scenario.bgColor} overflow-hidden backdrop-blur-md`}>
                  <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    {/* 外层光晕 - 呼吸动效 */}
                    <motion.div
                      className={`absolute w-24 h-24 rounded-2xl ${scenario.bgColor} blur-xl`}
                      animate={{
                        opacity: [0.4, 0.7, 0.4],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    ></motion.div>

                    {/* 图标容器 - 增强毛玻璃和渐变 */}
                    <motion.div
                      className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br from-white/90 via-white/70 to-white/50 backdrop-blur-xl shadow-2xl flex items-center justify-center border border-white/60 overflow-hidden`}
                      whileHover={{
                        scale: 1.15,
                        rotate: [0, -5, 5, 0],
                      }}
                      transition={{
                        scale: {
                          type: "spring",
                          stiffness: 300,
                          damping: 15,
                        },
                        rotate: {
                          duration: 0.5,
                          ease: "easeInOut",
                        }
                      }}
                    >
                      {/* 内部光泽效果 - 动态移动 */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent"
                        animate={{
                          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      ></motion.div>

                      {/* 彩色渐变背景 - 脉动效果 */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${scenario.iconBg.replace('bg-', 'from-')}/30 to-transparent`}
                        animate={{
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      ></motion.div>

                      {/* 图标 - 悬浮微动 */}
                      <motion.div
                        animate={{
                          y: [0, -3, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <Icon className={`relative z-10 w-10 h-10 ${scenario.iconColor} drop-shadow-lg`} strokeWidth={2} />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>

                {/* 底部内容区域 - 毛玻璃效果 */}
                <div className="p-5 bg-white/60 backdrop-blur-lg border-t border-white/40">
                  <h3 className="font-semibold mb-2 text-center">{scenario.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed text-center">
                    {scenario.description}
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