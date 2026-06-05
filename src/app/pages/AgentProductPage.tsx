import { ArrowRight, Bot, Film, FileText, Sparkles, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';

type AgentProductKey = 'yingqing' | 'shiqing' | 'wenqing';

const productContent: Record<AgentProductKey, {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  icon: typeof Film;
  highlights: string[];
}> = {
  yingqing: {
    badge: 'AI 影像生成引擎',
    title: '星河影擎',
    subtitle: '面向企业内容生产的影像智能生成系统',
    description: '围绕品牌视觉、营销物料、知识内容与业务表达场景，提供可治理、可复用、可交付的 AI 影像生成能力。',
    icon: Film,
    highlights: ['品牌素材生成', '视觉风格管理', '多场景内容生产', '生成结果审核'],
  },
  shiqing: {
    badge: 'AI 视频与多模态引擎',
    title: '星河视擎',
    subtitle: '面向视频理解、生成与分析的多模态能力底座',
    description: '支持视频内容理解、脚本生成、素材编排与多模态分析，帮助企业把视频能力纳入可管理的业务流程。',
    icon: Video,
    highlights: ['视频内容理解', '脚本与分镜辅助', '多模态分析', '内容安全治理'],
  },
  wenqing: {
    badge: 'AI 文档与知识引擎',
    title: '星河文擎',
    subtitle: '面向企业知识、文档与内容流程的智能系统',
    description: '覆盖文档理解、知识入库、智能问答、内容生成与合规审核，支撑企业知识资产长期沉淀与复用。',
    icon: FileText,
    highlights: ['文档理解与解析', '企业知识问答', '内容生成协作', '合规审核流程'],
  },
};

export function AgentProductPage({ product }: { product: AgentProductKey }) {
  const content = productContent[product];
  const Icon = content.icon;

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-blue-50/40 via-white to-purple-50/30">
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[-8rem] top-20 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl" />
          <div className="absolute right-[-6rem] top-32 h-96 w-96 rounded-full bg-purple-300/20 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(44,75,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(44,75,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
                <Sparkles className="h-4 w-4" />
                {content.badge}
              </div>

              <h1 className="mb-6 text-5xl font-black tracking-normal text-slate-950 sm:text-6xl">
                {content.title}
              </h1>
              <h2 className="mb-6 text-2xl font-semibold text-slate-800">
                {content.subtitle}
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                {content.description}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/agent"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition-colors hover:bg-blue-700"
                >
                  返回 Agent智能体中台
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 transition-colors hover:border-blue-200 hover:text-blue-700"
                >
                  联系我们
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-2xl shadow-blue-950/10 backdrop-blur">
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-600/20">
                  <Icon className="h-10 w-10" />
                </div>

                <div className="space-y-4">
                  {content.highlights.map((item, index) => (
                    <div key={item} className="flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50/80 p-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-blue-600 shadow-sm">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <span className="font-semibold text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-5 text-white">
                  <div className="mb-2 flex items-center gap-2 text-sm font-semibold opacity-90">
                    <Bot className="h-4 w-4" />
                    星河卓越 AI 产品体系
                  </div>
                  <p className="text-sm leading-6 text-white/85">
                    与 Agent智能体中台协同，形成从模型能力、知识治理到业务落地的完整产品矩阵。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
