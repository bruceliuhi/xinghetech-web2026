import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

export function HeroSection() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const phrases = ['AI能力平台', '多智能体系统', '全链路安全保障', '系统集成能力'];
  
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
    <section id="home" className="relative py-[160px] overflow-hidden">
      {/* Background gradient - 阿里云百炼风格 */}
      <div className="hero-bg">
        <div className="bailian-spot"></div>
        {/* 鼠标跟随呼吸光圈 */}
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
          }}
        />
      </div>

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
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 min-h-[1.2em]"
          >
            <span className="text-[#26244C]/80 text-[rgb(26,31,46)]">面向行业的</span>
            <span className="bg-gradient-to-r from-[#2C4BFF] to-[#9122FA] bg-clip-text text-transparent">
              {displayedText}
            </span>
            <span className="inline-block w-1 h-[0.9em] bg-gradient-to-r from-primary to-accent ml-1 animate-pulse" />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl lg:text-2xl text-foreground/50 mb-12 max-w-3xl mx-auto leading-relaxed text-[rgba(26,31,46,0.9)]"
          >
            为企业提供<span className="text-[rgb(0,0,0)] font-bold">可构建、可管理、可持续运行</span>的 AI 能力体系
            <br />
            支撑 AI 能力稳定融入业务
          </motion.p>

          {/* 统计数据 - 移到钮上方 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#2C4BFF] to-[#9122FA] bg-clip-text text-transparent text-[26px]">行业级能力体系</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#2C4BFF] to-[#9122FA] bg-clip-text text-transparent text-[26px]">Agent 业务执行</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#2C4BFF] to-[#9122FA] bg-clip-text text-transparent text-[26px]">全链路治理能力</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-32"
          >
            <button
              onClick={() => scrollToSection('#capabilities')}
              className="group px-8 py-4 bg-[rgb(44,75,255)] hover:bg-primary/90 text-primary-foreground rounded-lg transition-all flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
            >
              平台能力概览
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('#agent')}
              className="group px-8 py-4 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-lg transition-all flex items-center gap-2 border border-border"
            >
              Agent 与应用场景
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}