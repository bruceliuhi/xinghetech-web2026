import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function HeroSection() {
  const navigate = useNavigate();
  const [displayedText, setDisplayedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const phrases = ['面向行业与企业的 AI 系统服务商', '专注将 AI 能力稳定融入业务体系', '支持智能系统的长期运行与持续演进'];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];

    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // 正在打字
        if (displayedText.length < currentPhrase.length) {
          setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));
        } else {
          // 打完了，等待后开始删除
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // 正在删除
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          // 删完了，切换到下一个短语
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentPhraseIndex]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative py-[160px] overflow-hidden"
      style={{
        backgroundImage: 'url(/images/changjing.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* 鼠标跟随呼吸光圈 - 保留 */}
      <motion.div
        className="pointer-events-none absolute w-96 h-96 rounded-full opacity-0"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          x: { type: "spring", damping: 30, stiffness: 200 },
          y: { type: "spring", damping: 30, stiffness: 200 },
          opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, rgba(96, 165, 250, 0.35) 30%, rgba(147, 197, 253, 0.15) 50%, transparent 70%)',
          filter: 'blur(35px)',
          zIndex: 1
        }}
      />

      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      {/* AI Neural network decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated connection lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <motion.line
            x1="10%" y1="20%" x2="30%" y2="40%"
            stroke="url(#gradient1)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          />
          <motion.line
            x1="70%" y1="30%" x2="90%" y2="50%"
            stroke="url(#gradient1)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2, delay: 1, repeat: Infinity, repeatDelay: 3 }}
          />
          <motion.line
            x1="50%" y1="10%" x2="60%" y2="90%"
            stroke="url(#gradient2)"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.2 }}
            transition={{ duration: 2.5, delay: 0.5, repeat: Infinity, repeatDelay: 3 }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating AI nodes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-br from-primary/40 to-accent/40"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* 浮动装饰元素 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 渐变球体 - 统一蓝紫色系 */}
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-blue-400/10 to-indigo-400/10 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: '5%', right: '5%' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10 bg-[rgba(255,34,34,0)]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bold mb-8 flex flex-col items-center"
          >
            {/* 公司名 - 字号微调 - 稍微缩小 */}
            <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-[#1e1b4b] via-[#3b82f6] to-[#1e1b4b] bg-clip-text text-transparent pb-2">
              星河卓越
            </div>

            {/* 轮播文案 - 字号加大 */}
            <div
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium
                         whitespace-nowrap max-w-[90%] mx-auto overflow-visible
                         bg-gradient-to-r from-[#2C4BFF] to-[#9122FA] bg-clip-text text-transparent
                         h-[1.6em] flex items-center justify-center gap-1"
              style={{ wordBreak: 'keep-all' }}
            >
              {displayedText}
              <span className="inline-block w-1 h-[0.9em] bg-gradient-to-r from-primary to-accent animate-pulse" />
            </div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl lg:text-2xl text-slate-600 font-medium mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            为企业提供<span className="text-slate-900 font-bold">可构建、可管理、可持续运行</span>的 AI 能力体系
            <br />
            支撑 AI 能力稳定融入业务
          </motion.p>

          {/* 按钮区域 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 mt-32"
          >
            <button
              onClick={() => navigate('/about')}
              className="group px-8 py-4 bg-[rgb(44,75,255)] hover:bg-primary/90 text-primary-foreground rounded-lg transition-all flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
            >
              了解星河卓越
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate('/capabilities')}
              className="group px-8 py-4 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-lg transition-all flex items-center gap-2 border border-border"
            >
              查看系统能力与实践
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>


        </div>
      </div>

      {/* Bottom fade for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/60 to-transparent z-20 pointer-events-none" />
    </section >
  );
}