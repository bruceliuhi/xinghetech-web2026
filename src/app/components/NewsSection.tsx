import { motion } from 'motion/react';
import { Calendar, ArrowRight, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NewsItem {
    id: string;
    title: string;
    date: string;
    summary: string;
    image?: string;
}

const newsData: NewsItem[] = [
    {
        id: '1',
        title: '从内容合规到企业知识系统：星河卓越如何构建可治理的 AI 平台',
        date: '2025-11-20',
        summary: '在一次大型企业的内部评审会上，一位业务负责人提出了一个看似简单却极具分量的问题：“如果这条 AI 生成的内容被质疑，我们还能不能把整个生成过程完整还原出来？”这并不是在讨论模型能力的高低，而是在追问一个更根本的命题...',
    },
    {
        id: '2',
        title: '从“能用”到“可长期运行”：中国首个企业级 AI 可治理平台',
        date: '2025-10-08',
        summary: '当 AI 进入企业治理结构，真正的分水岭才刚刚到来。过去一年，生成式 AI 在中国企业中完成了一次几乎同步的“启蒙运动”。大模型能力被快速接入到各类业务流程中，但随着应用逐渐深入，一个更本质的问题开始浮出水面...',
    },
    {
        id: '3',
        title: '星河卓越：面向政企客户的 AI 智能系统与智能体解决方案',
        date: '2025-08-15',
        summary: '北京星河卓越科技有限公司（简称“星河卓越”）成立于2017年6月13日，总部位于北京中关村软件园，是一家面向政企客户提供 AI 智能系统与智能体解决方案的科技企业，长期聚焦企业知识智能化、内容生成与审核...',
    }
];

export function NewsSection() {
    return (
        <section className="relative py-24 bg-white overflow-hidden">
            {/* Simplified Background */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-semibold text-sm tracking-wide mb-6">
                        <Newspaper className="w-4 h-4" />
                        NEWS & UPDATES
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-black mb-6 text-slate-900 tracking-tight">
                        新闻
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent px-2">
                            资讯
                        </span>
                    </h2>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-light">
                        了解星河卓越的最新动态、技术进展与行业洞察
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {newsData.map((news, index) => (
                        <motion.div
                            key={news.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-white rounded-[2rem] p-8 border border-slate-100 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="mb-6 flex items-center gap-2 text-sm text-slate-400 font-medium">
                                <Calendar className="w-4 h-4" />
                                {news.date}
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">
                                {news.title}
                            </h3>

                            <p className="text-slate-500 leading-relaxed mb-8 flex-grow line-clamp-3">
                                {news.summary}
                            </p>

                            <Link
                                to={`/news/${news.id}`}
                                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                            >
                                阅读详情 <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <button className="px-8 py-3 rounded-full bg-slate-50 text-slate-600 font-medium hover:bg-slate-100 transition-colors border border-slate-200">
                        查看更多资讯
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
