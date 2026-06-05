import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Share2, Clock, User } from 'lucide-react';
import { useEffect } from 'react';
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';
import { NotFoundPage } from './NotFoundPage';

export function NewsDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Data lookup
    const newsData: Record<string, { title: string; date: string; author: string; readTime: string; image: string; content: string }> = {
        '1': {
            title: '从内容合规到企业知识系统：星河卓越如何构建可治理的 AI 平台',
            date: '2025-11-20',
            author: '星河卓越',
            readTime: '8 min read',
            image: '/images/news/news_1.png',
            content: `
        <p class="lead">在一次大型企业的内部评审会上，一位业务负责人提出了一个看似简单却极具分量的问题：<strong>“如果这条 AI 生成的内容被质疑，我们还能不能把整个生成过程完整还原出来？”</strong></p>
        
        <p>短暂的沉默之后，问题的本质逐渐清晰——这并不是在讨论模型能力的高低，而是在追问一个更根本的命题：<strong>AI 是否具备被企业长期托付的系统能力</strong>。</p>

        <h3>大客户真正关心的，从来不是“效果演示”</h3>
        <p>在长期服务中大型企业与机构客户的过程中，北京星河卓越科技有限公司观察到一个愈发明显的趋势：企业规模越大，对 AI 的态度反而越谨慎。</p>
        <p>原因并不复杂：</p>
        <ul>
            <li>组织结构复杂，责任链条清晰且漫长</li>
            <li>合规、审计、舆情与安全要求极高</li>
            <li>系统必须长期稳定运行，而非停留在试点或展示阶段</li>
        </ul>
        <p>在这样的环境中，任何不可解释、不可回溯、不可审计的系统，都会被天然排除在核心业务系统之外。</p>

        <h3>为什么传统企业系统能跑十年，而 AI 系统却难以长期运行？</h3>
        <p>ERP、OA、CRM 等传统企业系统之所以能够稳定运行十年甚至更久，依靠的并非“智能”，而是一整套成熟的工程化机制：</p>
        <div class="grid grid-cols-2 gap-4 my-6">
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center font-medium text-slate-700">行为可记录</div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center font-medium text-slate-700">权限可约束</div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center font-medium text-slate-700">流程可复盘</div>
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center font-medium text-slate-700">问题可追责</div>
        </div>
        <p>反观大量 AI 应用，却普遍存在以下问题：</p>
        <ul>
            <li>输出结果难以复盘</li>
            <li>模型、规则与知识版本无法对齐</li>
            <li>出现问题时责任边界模糊</li>
        </ul>
        <p>这并非模型能力不足，而是 <strong>AI 工程范式尚未真正建立</strong>。</p>

        <h3>工程化转向：xingheAI 给出的系统性答案</h3>
        <p>基于多个复杂政企场景的真实交付经验，星河卓越推出了企业级 AI 平台 <strong>xingheAI</strong>，其设计目标并非“让 AI 更自由”，而是让 AI 更可控、更可治理。</p>
        <p>在平台架构层面，xingheAI 将 AI 行为完整纳入企业系统治理体系：</p>
        <ul class="list-disc pl-6 space-y-2">
            <li><strong>输出前：</strong>规则校验、权限判断、数据边界控制</li>
            <li><strong>输出中：</strong>完整记录模型版本、规则命中、知识来源与上下文</li>
            <li><strong>输出后：</strong>支持审计、回放、问题复盘与责任定位</li>
        </ul>
        <p>在这一架构下，AI 的每一次决策与生成行为，都可以被记录、被追溯、被审计。</p>

        <h3>合规与安全，不能只靠制度，而必须靠架构</h3>
        <p>在企业级环境中，任何仅依赖“使用规范”的安全方案，都会在规模化应用后逐渐失效。</p>
        <p>因此，xingheAI 从系统底层入手，将合规与安全能力固化为平台机制：</p>
        <ul>
            <li>通过去标识化与数据治理技术降低数据暴露风险</li>
            <li>通过规则引擎与工作流机制约束 AI 行为边界</li>
            <li>通过审计与评测体系持续监控系统运行质量</li>
        </ul>
        <p>这也是其能够完成国家网信办算法备案，并获得多项发明专利授权的重要技术基础。</p>

        <h3>一个正在被反复验证的行业趋势</h3>
        <p>在越来越多企业的 AI 选型过程中，关注点正在发生明显变化：</p>
        <p>不再只是询问——“你们用的是什么模型？”</p>
        <p>而是更加关注——</p>
        <div class="bg-blue-50 p-6 rounded-2xl border border-blue-100 my-6 space-y-3">
             <div class="flex items-center gap-3">
                <div class="w-2 h-2 rounded-full bg-blue-500"></div>
                <span class="font-bold text-blue-800">是否可审计</span>
             </div>
             <div class="flex items-center gap-3">
                <div class="w-2 h-2 rounded-full bg-blue-500"></div>
                <span class="font-bold text-blue-800">是否可追溯</span>
             </div>
             <div class="flex items-center gap-3">
                <div class="w-2 h-2 rounded-full bg-blue-500"></div>
                <span class="font-bold text-blue-800">是否能够长期稳定运行</span>
             </div>
             <div class="flex items-center gap-3">
                <div class="w-2 h-2 rounded-full bg-blue-500"></div>
                <span class="font-bold text-blue-800">是否支持一客一套的系统级交付</span>
             </div>
        </div>
        <p>这意味着，中国企业级 AI 正在从“拼模型能力”，走向“拼系统工程能力”。</p>

        <hr />
        
        <p class="text-xl font-serif italic text-slate-800 text-center my-10">
            “AI 的真正价值，并不在于它生成了多少内容，<br/>而在于——它是否值得被托付到企业的核心系统之中。”
        </p>
        <p class="text-center text-slate-500">这，正是星河卓越持续投入并构建可治理 AI 平台的根本原因。</p>
      `
        },
        '2': {
            title: '从“能用”到“可长期运行”：中国首个企业级 AI 可治理平台',
            date: '2025-10-08',
            author: '星河卓越',
            readTime: '6 min read',
            image: '/images/news/news_2.png',
            content: `
        <p class="lead text-xl font-medium text-slate-700 mb-8 border-l-4 border-blue-600 pl-4">当 AI 进入企业治理结构，真正的分水岭才刚刚到来。</p>

        <p>过去一年，生成式 AI 在中国企业中完成了一次几乎同步的“启蒙运动”。</p>
        <p>从企业知识问答、营销内容生成，到客服辅助、内部制度解读，大模型能力被快速接入到各类业务流程中。短期内，效率提升显著，使用门槛大幅下降，AI 的“能用性”得到了广泛验证。</p>

        <p>但随着应用逐渐深入，一个更本质的问题开始浮出水面：</p>
        <div class="bg-amber-50 border border-amber-200 p-6 rounded-xl my-6 text-amber-900 font-medium">
            AI 如果不能被长期、安全、可控地运行，它是否真的适合进入企业核心系统？
        </div>
        <p>这并不是一个技术细节问题，而是一个<strong>企业治理问题</strong>。</p>

        <h3>企业级 AI 的真正挑战，并不在模型能力</h3>
        <p>在消费级场景中，AI 的评价标准往往非常直接：生成是否流畅、回答是否聪明、体验是否足够好。</p>
        <p>但在企业级环境中，评价体系完全不同。企业关心的是：</p>
        <ul class="list-disc pl-6 space-y-2">
            <li>这条 AI 输出是否符合内部制度与业务规范</li>
            <li>内容出现问题时，是否可以回溯生成依据</li>
            <li>数据是否在可控、合规的边界内被使用</li>
            <li>模型、知识、规则发生变化后，历史结果是否仍可解释</li>
        </ul>
        <p>这些问题的共同指向只有一个：<strong>AI 是否具备系统级的治理能力</strong>。</p>

        <h3>一个长期被忽视的事实：企业不是在“用 AI”，而是在“托管风险”</h3>
        <p>对中大型企业而言，引入 AI 从来不是一个纯粹的技术决策。每一次 AI 输出，都可能意味着：</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
             <div class="flex items-center gap-2 text-red-600 font-medium p-3 bg-red-50 rounded-lg"><span class="w-2 h-2 bg-red-500 rounded-full"></span>对外传播风险</div>
             <div class="flex items-center gap-2 text-red-600 font-medium p-3 bg-red-50 rounded-lg"><span class="w-2 h-2 bg-red-500 rounded-full"></span>合规与监管风险</div>
             <div class="flex items-center gap-2 text-red-600 font-medium p-3 bg-red-50 rounded-lg"><span class="w-2 h-2 bg-red-500 rounded-full"></span>品牌与声誉风险</div>
             <div class="flex items-center gap-2 text-red-600 font-medium p-3 bg-red-50 rounded-lg"><span class="w-2 h-2 bg-red-500 rounded-full"></span>内控与审计风险</div>
        </div>
        <p>而现实情况是，大多数 AI 系统并不具备清晰的责任边界。当问题出现时，往往无法回答：是哪一条知识导致的错误？是规则配置问题，还是模型推理问题？当时使用的是哪个版本？</p>
        <p>这类不可追溯性，正是企业迟迟不敢规模化使用 AI 的根本原因。</p>

        <h3>中国首个“AI 可治理平台”的出现</h3>
        <p>正是在这样的行业背景下，北京星河卓越科技有限公司推出了 <strong>xingheAI</strong>。</p>
        <p>与市面上大量以“更强模型、更快生成”为卖点的产品不同，xingheAI 从设计之初就明确了一个方向：<strong>不做工具级 AI，而是构建企业级 AI 系统底座</strong>。</p>
        <p>其核心理念只有一句话：<strong>AI 必须像企业系统一样被管理</strong>。</p>

        <h3>什么是“可治理的 AI”？</h3>
        <p>在 xingheAI 的体系中，AI 不再是一个自由生成的黑盒，而是被纳入完整系统架构：</p>
        <ul class="space-y-3 my-6">
            <li class="flex gap-3"><span class="font-bold text-blue-600 min-w-[6em]">输入可控：</span> <span>数据来源、知识范围、权限边界明确</span></li>
            <li class="flex gap-3"><span class="font-bold text-blue-600 min-w-[6em]">过程可记录：</span> <span>模型版本、规则命中、知识引用全量留痕</span></li>
            <li class="flex gap-3"><span class="font-bold text-blue-600 min-w-[6em]">输出可解释：</span> <span>答案必须能对应到具体依据</span></li>
            <li class="flex gap-3"><span class="font-bold text-blue-600 min-w-[6em]">结果可审计：</span> <span>支持回放、复盘与责任定位</span></li>
        </ul>
        <p>这意味着，AI 首次具备了进入企业治理结构的条件。</p>

        <h3>三个“硬事实”，构成平台可信基础</h3>
        
        <div class="space-y-6 my-8">
            <div class="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <h4 class="text-lg font-bold text-slate-900 mb-2">第一层：合规基础 —— 国家网信办算法备案</h4>
                <p class="text-sm text-slate-600">xingheAI 相关算法已完成境内深度合成服务算法备案。在当前监管环境下，这并非形式要求，而是企业级 AI 能否被采购、被部署、被长期运行的前置条件。</p>
            </div>
            <div class="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <h4 class="text-lg font-bold text-slate-900 mb-2">第二层：技术基础 —— 发明专利级隐私保护</h4>
                <p class="text-sm text-slate-600">围绕“去标识化信息传输、用户隐私保护”，星河卓越已取得多项发明专利授权，将隐私保护能力固化为系统底层机制，而非依赖人工规范。</p>
            </div>
            <div class="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <h4 class="text-lg font-bold text-slate-900 mb-2">第三层：实践基础 —— 来自真实大客户的长期运行</h4>
                <p class="text-sm text-slate-600">xingheAI 并非从产品反推场景，而是从复杂项目、合规要求和长期运行中反向抽象能力，其设计天然面向企业真实约束。</p>
            </div>
        </div>

        <h3>一个明确的产业分水岭正在形成</h3>
        <p>当企业开始频繁提出这样的问题：</p>
        <p class="pl-4 border-l-2 border-slate-300 italic text-slate-600 my-2">“这条回答引用的是哪一条制度？”</p>
        <p class="pl-4 border-l-2 border-slate-300 italic text-slate-600 my-2">“三个月前的 AI 输出还能不能复盘？”</p>
        <p class="pl-4 border-l-2 border-slate-300 italic text-slate-600 my-2">“这个错误到底该由谁负责？”</p>
        <p>这意味着，AI 已经不再是“效率工具”，而是<strong>治理对象</strong>。</p>
        <p>xingheAI 的出现，标志着中国企业级 AI 正在从“能用阶段”，迈入“可长期运行阶段”。</p>

        <hr />
        
        <p class="text-center font-medium text-slate-800 my-8 text-lg">
            未来真正具有规模化价值的，不是最聪明的 AI，<br/>
            而是<strong>最值得被信任的 AI 系统</strong>。
        </p>
      `
        },
        '3': {
            title: '关于星河卓越',
            date: '2025-08-15',
            author: '星河卓越',
            readTime: '4 min read',
            image: '/images/news/news_3.png?v=2',
            content: `
        <p>北京星河卓越科技有限公司（简称“星河卓越”）成立于2017年6月13日，总部位于北京中关村软件园，是一家面向政企客户提供 AI 智能系统与智能体解决方案的科技企业，长期聚焦企业知识智能化、内容生成与审核、数字人及多模态生成、隐私保护与数据治理等方向，支持将大模型能力以“可治理、可审计、可追溯”的方式接入业务生产系统。公司在服务大型客户与复杂交付场景中积累了系统化的方法论与工程化能力，能够按行业与组织流程进行一客一套的落地实施，并形成可复制的交付规范与运营体系。</p>
        
        <p>星河卓越在 ToB/ToG 场景具备大型客户与复杂交付经验，能够面向组织级业务流程进行系统对接与工程化实施，覆盖从需求梳理、数据治理、知识入库、权限体系、工作流编排、评测验收、上线运维到持续优化的完整闭环。</p>

        <h3>核心产品</h3>
        <p><strong>xingheAI</strong> 是星河卓越面向企业级场景构建的 AI 产品，强调从“可用的 AI”升级为“可长期运行的 AI 系统”。</p>
        <p>拥有企业知识与数据接入能力、可治理的智能问答与任务执行、 AI 输出可追溯与审计机制、问答准确度与效果评测体系、运行监控与风险管理能力、 合规与安全能力、一客一套的系统化交付模式、多模态生成与数字人能力、隐私保护与数据安全能力。</p>
        
        <p>xingheAI 的能力体系可应用于多个企业级场景，包括但不限于：</p>
        <ul class="list-disc pl-6 space-y-1">
            <li>企业内部知识管理与智能问答</li>
            <li>内容审核与合规发布</li>
            <li>客服与业务支持系统</li>
            <li>法务、合规与运营辅助系统</li>
            <li>行业级AI应用与智能体系统</li>
        </ul>

        <h3>公司理念</h3>
        <p>星河卓越认为，企业级人工智能的核心在于：</p>
        <ul class="list-disc pl-6 space-y-1">
            <li>AI 是否可被管理</li>
            <li>是否能够融入企业现有系统</li>
            <li>是否满足长期运行与合规要求</li>
        </ul>
        <p>公司以“让 AI 成为企业可信赖的系统能力”为长期目标，持续推进人工智能在真实业务环境中的落地应用。</p>

        <h3>企业资质</h3>
        <p>2025年，北京星河卓越科技有限公司<span class="font-bold text-red-600">“星河AI多模态分析及合成算法”</span>已入选中国国家互联网信息办公室第十二批深度合成服务算法备案清单 。</p>

        <h3>企业专利</h3>
        <ul class="list-disc pl-6 space-y-1">
            <li>去标识化的信息传输方法、装置、设备和计算机可读介质</li>
            <li>保护用户隐私的去标识化信息传输方法、装置、设备</li>
        </ul>
        <p>上述专利围绕“数据去标识化与隐私保护传输”提供系统性技术支撑，可用于企业在引入生成式 AI、智能体与知识系统时的合规落地与安全治理。</p>

        <h3>软著信息</h3>
        <p>公司已形成多项软件著作权登记，覆盖企业知识系统、数字人、多模态内容生成与音视频生产等方向，代表性登记包括：</p>
        <ul class="space-y-2 mt-4 text-sm bg-slate-50 p-4 rounded-xl border border-slate-100">
            <li>2024年8月，北京星河卓越科技有限公司完成星河企业知识库系统的软件著作权，原始取得软件著作全部权利，登记号2024SR1262463。</li>
            <li>2024年5月，北京星河卓越科技有限公司完成星河数字人系统的软件著作权，原始取得软件著作全部权利，登记号2024SR0616265。</li>
            <li>2025年3月，北京星河卓越科技有限公司完成AI智能音视频剪辑系统的软件著作权，原始取得软件著作全部权利，登记号2025SR0417929。</li>
            <li>2025年3月，北京星河卓越科技有限公司完成AI智能硬件系统的软件著作权，原始取得软件著作全部权利，登记号2025SR0417919。</li>
        </ul>
      `
        }
    };

    const newsItem = id ? newsData[id] : null;

    if (!newsItem) {
        return <NotFoundPage />;
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Reusing Navigation but might need layout adjustment if Navigation is fixed */}
            {/* Assuming Navigation is handled in App Layout/Outlet, but here we can just ensure padding top if needed. 
          Actually App.tsx puts Navigation at the top. */}

            <div className="pt-28 pb-20">
                <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mb-8"
                    >
                        <Link to="/about" className="inline-flex items-center text-slate-500 hover:text-blue-600 transition-colors font-medium">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            返回
                        </Link>
                    </motion.div>

                    <motion.header
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mb-12 text-center"
                    >
                        <div className="flex items-center justify-center gap-4 text-sm text-slate-500 mb-6">
                            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {newsItem.date}</span>
                            <span className="w-1 h-1 bg-slate-300 rounded-full" />
                            <span className="flex items-center gap-1"><User className="w-4 h-4" /> {newsItem.author}</span>
                            <span className="w-1 h-1 bg-slate-300 rounded-full" />
                            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {newsItem.readTime}</span>
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-8">
                            {newsItem.title}
                        </h1>

                        {/* Feature Image */}
                        <div className="w-full h-[300px] md:h-[450px] bg-slate-50 rounded-[2rem] mb-12 flex items-center justify-center overflow-hidden border border-slate-100 shadow-xl shadow-blue-500/5">
                            <img
                                src={newsItem.image}
                                alt={newsItem.title}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </motion.header>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="prose prose-lg prose-slate mx-auto prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-a:text-blue-600 hover:prose-a:text-blue-700"
                        dangerouslySetInnerHTML={{ __html: newsItem.content }}
                    />

                    <div className="mt-16 pt-8 border-t border-slate-100 flex justify-between items-center">
                        <div className="text-slate-500 italic">
                            本文由星河卓越官方发布
                        </div>
                        <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                            <Share2 className="w-4 h-4" />
                            分享本文
                        </button>
                    </div>
                </article>
            </div>

            <Footer />
        </div>
    );
}
