import { motion } from 'motion/react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/app/components/ui/accordion";
import { HelpCircle } from 'lucide-react';

export function FAQSection() {
    const faqs = [
        {
            question: "星河卓越是什么类型的公司？",
            answer: "星河卓越是一家面向行业与企业提供 AI 平台与智能系统能力的技术公司，专注于将大模型与 Agent 能力组织为可长期运行的行业级 AI 系统。平台适用于对系统稳定性、可管理性与合规性要求较高的业务场景。"
        },
        {
            question: "星河卓越提供的是产品，还是定制开发？",
            answer: "星河卓越以平台化产品为核心，而非以一次性定制开发为主要交付方式。平台通过统一架构支撑 AI 能力在不同行业场景中的配置、集成与运行，以保证系统的可持续演进与长期稳定运行。"
        },
        {
            question: "行业级 AI 系统与通用大模型工具有什么区别？",
            answer: "通用大模型提供基础智能能力，而行业级 AI 系统关注的是智能能力在具体业务中的长期运行、治理与演进。星河卓越平台侧重于系统层面的集成与运行管理。"
        },
        {
            question: "AI Agent 在平台中扮演什么角色？",
            answer: "在星河卓越平台中，AI Agent 是智能能力的组织与运行单元，并非孤立的工具或演示组件，而是作为系统的一部分，与业务流程、数据与权限体系协同运行。"
        },
        {
            question: "平台是否支持企业级部署与系统集成？",
            answer: "平台支持与企业现有系统进行集成，并可根据合规要求部署于私有或专有运行环境，适用于企业级与行业级应用场景。"
        }
    ];

    // Schema.org JSON-LD Struct - Only include top 3 definition-type questions
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.slice(0, 3).map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <section className="relative py-20 bg-gradient-to-b from-white via-blue-50/20 to-white overflow-hidden">
            {/* 装饰背景 - 极简科技感 */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-100 to-transparent"></div>
                <motion.div
                    className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-100/30 blur-[100px]"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
                        <HelpCircle className="w-4 h-4" />
                        <span>常见问题</span>
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900">关于星河卓越与行业级 AI 系统</h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white rounded-2xl shadow-xl shadow-slate-200/40 border border-blue-100/50 p-6 sm:p-8"
                >
                    <Accordion type="single" collapsible defaultValue="item-0" className="w-full space-y-2">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border-b-slate-100 last:border-0 px-4 rounded-lg transition-all duration-200 data-[state=open]:bg-blue-50/50 data-[state=open]:border-transparent"
                            >
                                <AccordionTrigger className="text-left text-base sm:text-lg font-medium text-slate-800 hover:text-blue-600 data-[state=open]:text-blue-700 transition-colors py-4">
                                    <h3 className="text-inherit font-inherit m-0">{faq.question}</h3>
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-600/90 leading-relaxed text-base pb-4">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>

                {/* JSON-LD Script for SEO */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </div>
        </section>
    );
}
