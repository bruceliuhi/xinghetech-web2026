import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

export function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        {/* 404 大号数字 */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-[120px] md:text-[180px] font-bold bg-gradient-to-r from-[#2C4BFF] to-[#9122FA] bg-clip-text text-transparent leading-none">
            404
          </h1>
        </motion.div>

        {/* 提示文字 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4 mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            页面未找到
          </h2>
          <p className="text-foreground/60 text-lg">
            抱歉，您访问的页面不存在或已被移除
          </p>
        </motion.div>

        {/* 操作按钮 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#2C4BFF] to-[#9122FA] text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all"
          >
            <Home size={20} />
            返回首页
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 border border-foreground/20 text-foreground rounded-lg hover:bg-white/60 hover:shadow-md transition-all"
          >
            <ArrowLeft size={20} />
            返回上一页
          </button>
        </motion.div>

        {/* 装饰元素 */}
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-md mx-auto">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
              className="h-2 bg-gradient-to-r from-[#2C4BFF]/20 to-[#9122FA]/20 rounded-full"
            />
          ))}
        </div>

        {/* 建议链接 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 pt-8 border-t border-foreground/10"
        >
          <p className="text-sm text-foreground/50 mb-4">您可能感兴趣的页面：</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/capabilities" className="text-sm px-4 py-2 rounded-full bg-white/60 hover:bg-white transition-colors text-foreground/70 hover:text-foreground">
              平台能力
            </Link>
            <Link to="/agent" className="text-sm px-4 py-2 rounded-full bg-white/60 hover:bg-white transition-colors text-foreground/70 hover:text-foreground">
              智能体
            </Link>
            <Link to="/scenarios" className="text-sm px-4 py-2 rounded-full bg-white/60 hover:bg-white transition-colors text-foreground/70 hover:text-foreground">
              应用场景
            </Link>
            <Link to="/about" className="text-sm px-4 py-2 rounded-full bg-white/60 hover:bg-white transition-colors text-foreground/70 hover:text-foreground">
              关于我们
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
