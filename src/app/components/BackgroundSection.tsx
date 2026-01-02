import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { AlertCircle } from 'lucide-react';
const bgImage = '/images/senario.jpg';

export function BackgroundSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-28 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Data flow lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <svg width="100%" height="100%">
          <defs>
            <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="1" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.line
            x1="0%" y1="30%" x2="100%" y2="30%"
            stroke="url(#flowGrad)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.line
            x1="0%" y1="70%" x2="100%" y2="70%"
            stroke="url(#flowGrad)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 8, delay: 1, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-pink-300/10 to-purple-300/10 blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: '15%', right: '8%' }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-blue-300/8 to-cyan-300/8 blur-3xl"
          animate={{
            x: [0, 70, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ bottom: '10%', left: '5%' }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        {/* 标题 - 问题引入 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="sm:text-4xl font-bold text-foreground/80 leading-tight text-[rgb(26,31,46)] text-[48px]">
            在行业与企业场景中，
            <span className="block mt-2 text-foreground/90 text-[rgb(26,31,46)]">AI 的关键不在模型，而在体系能力</span>
          </h2>
        </motion.div>

        {/* 副说明 + 事实说明 - 问题展开 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50/60 via-purple-50/40 to-blue-50/30 rounded-2xl p-6 sm:p-8 border border-blue-100/40">
            {/* 副说明 */}
            <p className="text-foreground/70 text-center mb-6 leading-relaxed">
              真正的挑战，是让 AI 能力<span className="text-[rgb(44,75,255)] font-bold">长期稳定地运行</span>在业务体系中
            </p>

            {/* 3条事实说明 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-white/50">
                <div className="w-2 h-2 rounded-full bg-primary/40 mt-2 flex-shrink-0"></div>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  数据复杂、语义不统一
                </p>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-white/50">
                <div className="w-2 h-2 rounded-full bg-accent/40 mt-2 flex-shrink-0"></div>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  流程多样，难以直接接入
                </p>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-white/50">
                <div className="w-2 h-2 rounded-full bg-primary/40 mt-2 flex-shrink-0"></div>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  运行周期长，对稳定性要求高
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 核心重点：星河卓越的解决方案 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center relative"
        >
          {/* 光晕效果 */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent blur-2xl"></div>
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-3xl blur-xl"></div>

          {/* 主要内容卡片 */}
          <div className="relative max-w-4xl mx-auto bg-gradient-to-br from-white/95 via-blue-50/90 to-purple-50/90 backdrop-blur-md rounded-3xl px-10 py-12 border-2 border-white/50 shadow-2xl shadow-primary/10">

            <p className="text-xl sm:text-2xl text-foreground/85 leading-relaxed font-medium">
              星河卓越以平台化方式<span className="text-[rgb(44,75,255)] font-bold">统一管理数据、模型与运行流程，</span>支撑AI能力在行业与企业中的长期稳定运行。
            </p>

            {/* 底部装饰点 */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              <div className="w-2 h-2 rounded-full bg-primary/30"></div>
              <div className="w-2 h-2 rounded-full bg-accent/30"></div>
              <div className="w-2 h-2 rounded-full bg-primary/30"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}