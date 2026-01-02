import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { CheckCircle2, Settings, TrendingUp } from 'lucide-react';

// Background image path


const practices = [
  {
    icon: CheckCircle2,
    title: '稳定运行',
    description: '平台能力可在实际业务环境中持续运行,支持长期使用与日常业务承载。',
  },
  {
    icon: Settings,
    title: '持续配置',
    description: '智能能力可根据业务变化进行配置与调整,无需重复构建或推翻既有体系。',
  },
  {
    icon: TrendingUp,
    title: '持续演进',
    description: '平台支持能力的逐步优化与扩展,适配业务规模与需求的持续变化。',
  },
];

export function PracticesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="practices"
      className="relative py-[120px] bg-gradient-to-b from-slate-50 via-white to-blue-50/30 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large soft blur blob - Top Left */}
        <motion.div
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-blue-100/40 blur-[100px]"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Large soft blur blob - Bottom Right */}
        <motion.div
          className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-purple-100/40 blur-[80px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto w-full"
        >

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-slate-900 tracking-tight">
            实践与运行经验
          </h2>
          <p className="text-xl text-slate-600 mt-4 leading-relaxed max-w-2xl">
            星河卓越的平台能力，已在真实业务环境中持续运行与演进
            <br className="hidden sm:block" />
            为企业提供经得起考验的智能化支撑
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {practices.map((practice, index) => {
            const Icon = practice.icon;
            const gradients = [
              'from-blue-500 to-indigo-600',
              'from-indigo-500 to-purple-600',
              'from-purple-500 to-pink-600',
            ];
            const iconBg = [
              'bg-blue-50 text-blue-600',
              'bg-indigo-50 text-indigo-600',
              'bg-purple-50 text-purple-600',
            ];

            return (
              <motion.div
                key={practice.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl ${iconBg[index]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-slate-900">
                    {practice.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed text-sm">
                    {practice.description}
                  </p>
                </div>

                {/* Hover gradient border via inset shadow or absolute div */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradients[index]} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 pointer-events-none`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
