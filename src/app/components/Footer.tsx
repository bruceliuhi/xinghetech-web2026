const logoSmall = '/images/logo-small.png';
import { motion } from 'motion/react';
import { Mail, MapPin, ArrowRight, Phone } from 'lucide-react';
const logo = '/images/logo.png';
const qrCode = '/images/qr-code.svg';

export function Footer() {
  return (
    <>
      {/* Footer Main */}
      <footer className="relative py-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 overflow-hidden" role="contentinfo" aria-label="页脚">
        {/* 装饰性背景元素 */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.02]" aria-hidden="true">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="footer-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="#3B82F6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#footer-grid)" />
          </svg>
        </div>

        {/* 顶部渐变装饰线 */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent" aria-hidden="true"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12"
          >
            {/* Left: Brand & Description */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-1.5">
                  <img src={logoSmall} alt="星河卓越 Logo" className="w-full h-full object-contain" />
                </div>
                <div className="text-2xl font-bold text-foreground">星河卓越</div>
              </div>

              {/* 主要描述 */}
              {/* 主要描述 - 按照高端 To B 风格排版 */}
              <div className="space-y-4">
                <p className="text-sm text-foreground/75 leading-relaxed">
                  星河卓越是一家面向行业与企业提供 AI 平台与智能系统能力的技术公司，专注于将大模型与 Agent 能力组织为可长期运行的行业级 AI 系统。
                </p>

                <p className="text-sm text-foreground/75 leading-relaxed">
                  平台支撑 AI 能力的构建、运行与持续演进，帮助 AI 能力稳定融入复杂业务体系，适用于对系统稳定性、可管理性与合规性要求较高的行业场景。
                </p>

                <p className="text-sm text-foreground/75 leading-relaxed">
                  核心团队长期从事数据安全、数据治理与企业级系统建设，能够在复杂合规环境下推进 AI 系统的安全部署与长期运行，为智能系统的长期可用与持续演进提供可靠基础。
                </p>
              </div>
            </div>

            {/* Center: Contact Info */}
            <div className="md:col-span-4">
              <h3 className="font-semibold mb-6 text-foreground flex items-center gap-2">
                <div className="w-1 h-5 bg-[#2C4BFF] rounded-full"></div>
                联系与沟通
              </h3>
              <div className="space-y-4">
                <div className="group flex items-start gap-3 p-3 rounded-lg hover:bg-white/60 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-blue-100/80 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1 pt-0.5">
                    <div className="text-xs text-foreground/50 mb-0.5">公司地址</div>
                    <span className="text-sm text-foreground/75">北京市海淀区中关村软件园</span>
                  </div>
                </div>

                <div className="group flex items-start gap-3 p-3 rounded-lg hover:bg-white/60 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-blue-100/80 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1 pt-0.5">
                    <div className="text-xs text-foreground/50 mb-0.5">商务邮箱</div>
                    <a href="mailto:business@xinghetech.cn" className="text-sm text-foreground/75 hover:text-purple-600 transition-colors">
                      business@xinghetech.cn
                    </a>
                  </div>
                </div>

                <div className="group flex items-start gap-3 p-3 rounded-lg hover:bg-white/60 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-blue-100/80 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1 pt-0.5">
                    <div className="text-xs text-foreground/50 mb-0.5">联系电话</div>
                    <span className="text-sm text-foreground/75">400 110 8776</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: QR Code */}
            <div className="md:col-span-3 flex flex-col items-center md:items-end">
              <h3 className="font-semibold mb-6 text-foreground flex items-center gap-2">
                <div className="w-1 h-5 bg-[#2C4BFF] rounded-full"></div>
                关注我们
              </h3>
              <div className="bg-white p-4 rounded-2xl shadow-lg border border-blue-100/50 hover:shadow-xl hover:scale-105 transition-all">
                <img src={qrCode} alt="企业微信" className="w-32 h-32 rounded-lg" />
              </div>
              <p className="text-sm text-foreground/60 mt-3">扫码咨询 · 获取平台方案</p>
            </div>
          </motion.div>

          {/* Footer Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-foreground/10"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
              <p className="text-center md:text-left">
                Copyright © 2017-2026 xingheai.net All Rights Reserved 版权所有 · 北京星河卓越科技有限公司 备案号：<a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">京ICP备17041981号-14</a>
              </p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-primary transition-colors">隐私政策</a>
                <a href="#" className="hover:text-primary transition-colors">服务条款</a>
                <a href="#" className="hover:text-primary transition-colors">Cookie政策</a>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  );
}