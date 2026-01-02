import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Layers, ArrowRight, Target } from 'lucide-react';

export function ExploreSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50/50 via-blue-50/40 to-white overflow-hidden">
      {/* 细腻网格纹理 */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="32" height="32" fill="none" stroke="#3B82F6" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* 柔和光晕 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-blue-200/20 to-cyan-200/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: '20%', left: '50%', transform: 'translateX(-50%)' }}
        />
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
              to="/capabilities"
              className="group relative px-8 py-4 rounded-xl bg-white/80 backdrop-blur-sm border border-blue-200/50 hover:border-blue-400/50 transition-all overflow-hidden"
            >

              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-lg bg-[#F2F4FE] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Layers className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-foreground group-hover:text-blue-600 transition-colors">
                    查看平台能力
                  </div>
                  <div className="text-sm text-foreground/60">
                    探索完整能力体系
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform ml-2" />
              </div>
            </Link>

            <div className="hidden sm:block w-px h-16 bg-gradient-to-b from-transparent via-border to-transparent"></div>

            <Link 
              to="/#agent"
              className="group relative px-8 py-4 rounded-xl bg-white/80 backdrop-blur-sm border border-purple-200/50 hover:border-purple-400/50 transition-all overflow-hidden"
            >

              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-lg bg-[#F2F4FE] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Target className="w-5 h-5 text-purple-600" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-foreground group-hover:text-purple-600 transition-colors">
                    了解 Agent 体系
                  </div>
                  <div className="text-sm text-foreground/60">
                    深入智能体产品
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-purple-600 group-hover:translate-x-1 transition-transform ml-2" />
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}