import svgPaths from "./svg-cpn0b10m7u";
const imgImage = '/images/qr-code.png';
const imgImageAiAgent = '/images/hero-visual.png';

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[80px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-black text-nowrap top-0 tracking-[-0.3125px]">工作流编排</p>
      </div>
    </div>
  );
}

function Container() {
  return <div className="bg-[#00c950] rounded-[3.35544e+07px] shrink-0 size-[8px]" data-name="Container" />;
}

function Container1() {
  return <div className="bg-[#f0b100] rounded-[3.35544e+07px] shrink-0 size-[8px]" data-name="Container" />;
}

function Container2() {
  return <div className="basis-0 bg-[#fb2c36] grow h-[8px] min-h-px min-w-px rounded-[3.35544e+07px] shrink-0" data-name="Container" />;
}

function Container3() {
  return (
    <div className="h-[8px] relative shrink-0 w-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
        <Container />
        <Container1 />
        <Container2 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[37px] items-center justify-between pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Text />
      <Container3 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2e7662c0} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pbd81000} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2a44e700} id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#dbeafe] relative rounded-[8px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[84px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-0 tracking-[-0.1504px]">数据输入节点</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="basis-0 bg-[#eff6ff] grow h-[40px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[14px] pr-[2px] py-[2px] relative size-full">
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-0 top-0 w-[470px]" data-name="Container">
      <Container5 />
      <Container6 />
    </div>
  );
}

function Container8() {
  return <div className="absolute bg-[#d1d5dc] h-[24px] left-[20px] top-[52px] w-[2px]" data-name="Container" />;
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p15ab6200} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3b27f100} id="Vector_2" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#f3e8ff] relative rounded-[8px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[68.891px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-0 tracking-[-0.1504px]">AI处理节点</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="basis-0 bg-[#faf5ff] grow h-[40px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e9d4ff] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[14px] pr-[2px] py-[2px] relative size-full">
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-0 top-[88px] w-[470px]" data-name="Container">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container12() {
  return <div className="absolute bg-[#d1d5dc] h-[24px] left-[20px] top-[140px] w-[2px]" data-name="Container" />;
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p140c1100} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M15 14.1667V7.5" id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10.8333 14.1667V4.16667" id="Vector_3" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M6.66667 14.1667V11.6667" id="Vector_4" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#dcfce7] relative rounded-[8px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[84px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-0 tracking-[-0.1504px]">结果输出节点</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="basis-0 bg-[#f0fdf4] grow h-[40px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#b9f8cf] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[14px] pr-[2px] py-[2px] relative size-full">
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-0 top-[176px] w-[470px]" data-name="Container">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[216px] relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container8 />
      <Container11 />
      <Container12 />
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[16px] h-[317px] items-start left-[32px] pb-0 pt-[24px] px-[24px] rounded-[8px] top-[32px] w-[518px]" data-name="Container">
      <Container4 />
      <Container16 />
    </div>
  );
}

function Container18() {
  return <div className="absolute bg-gradient-to-t from-[rgba(43,127,255,0.1)] h-[96px] left-0 rounded-bl-[16px] rounded-br-[16px] to-[rgba(0,0,0,0)] top-[285px] via-50% via-[rgba(173,70,255,0.05)] w-[582px]" data-name="Container" />;
}

function Container19() {
  return (
    <div className="absolute border border-[#e5e7eb] border-solid h-[383px] left-0 overflow-clip rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[-1.39px] w-[584px]" data-name="Container" style={{ backgroundImage: "linear-gradient(146.742deg, rgb(249, 250, 251) 0%, rgb(243, 244, 246) 100%)" }}>
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bg-[#dbeafe] h-[40px] left-0 rounded-[3.35544e+07px] top-0 w-[96px]" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#1447e6] text-[16px] text-nowrap top-[8px] tracking-[-0.3125px]">核心功能</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[40px] left-0 top-[64px] w-[584px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[40px] left-0 not-italic text-[#101828] text-[36px] text-nowrap top-0 tracking-[0.3691px]">企业级 AI 智能体工作流编排平台</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal h-[65px] leading-[32.5px] left-0 not-italic text-[#4a5565] text-[20px] text-nowrap top-[128px] tracking-[-0.4492px] w-[584px]" data-name="Paragraph">
      <p className="absolute left-0 top-[-1px]">通过可视化拖拽方式，将数据处理、AI 推理与业务规则统一编排，</p>
      <p className="absolute left-0 top-[31.5px]">无需复杂开发，即可构建可复用、可治理的 AI 智能体流程。</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p203cabc0} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute bg-[#dcfce7] content-stretch flex items-center justify-center left-0 rounded-[3.35544e+07px] size-[24px] top-[2px]" data-name="Container">
      <Icon3 />
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-start left-0 top-[3px] w-[80px]" data-name="Text">
      <p className="font-['Inter:Semi_Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#101828] text-[16px] text-nowrap tracking-[-0.3125px]">拖拽式设计</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-start left-[80px] top-[3px] w-[207.609px]" data-name="Text">
      <p className="font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4a5565] text-[16px] text-nowrap tracking-[-0.3125px]">- 低门槛构建复杂智能体流程</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[24px] left-[36px] top-0 w-[287.609px]" data-name="Container">
      <Text4 />
      <Text5 />
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="List Item">
      <Container21 />
      <Container22 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p203cabc0} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute bg-[#dcfce7] content-stretch flex items-center justify-center left-0 rounded-[3.35544e+07px] size-[24px] top-[2px]" data-name="Container">
      <Icon4 />
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-start left-0 top-[3px] w-[64px]" data-name="Text">
      <p className="font-['Inter:Semi_Bold','Noto_Sans_SC:Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#101828] text-[16px] text-nowrap tracking-[-0.3125px]">实时预览</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-start left-[64px] top-[3px] w-[223.609px]" data-name="Text">
      <p className="font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4a5565] text-[16px] text-nowrap tracking-[-0.3125px]">- 流程执行结果可视化与可调试</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute h-[24px] left-[36px] top-0 w-[287.609px]" data-name="Container">
      <Text6 />
      <Text7 />
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="List Item">
      <Container23 />
      <Container24 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p203cabc0} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute bg-[#dcfce7] content-stretch flex items-center justify-center left-0 rounded-[3.35544e+07px] size-[24px] top-[2px]" data-name="Container">
      <Icon5 />
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-start left-0 top-[3px] w-[64px]" data-name="Text">
      <p className="font-['Inter:Semi_Bold','Noto_Sans_JP:Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#101828] text-[16px] text-nowrap tracking-[-0.3125px]">版本管理</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-start left-[64px] top-[3px] w-[191.609px]" data-name="Text">
      <p className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#4a5565] text-[16px] text-nowrap tracking-[-0.3125px]">- 流程版本控制与安全回滚</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute h-[24px] left-[36px] top-0 w-[255.609px]" data-name="Container">
      <Text8 />
      <Text9 />
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="List Item">
      <Container25 />
      <Container26 />
    </div>
  );
}

function List() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[102px] items-start left-0 top-[217px] w-[584px]" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute h-[319px] left-[632px] top-[32px] w-[584px]" data-name="Container">
      <Container20 />
      <Heading1 />
      <Paragraph />
      <List />
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[383px] relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Container27 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute bg-[#f3e8ff] h-[40px] left-0 rounded-[3.35544e+07px] top-0 w-[96px]" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[#8200db] text-[16px] text-nowrap top-[8px] tracking-[-0.3125px]">底座能力</p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute h-[40px] left-0 top-[64px] w-[584px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[40px] left-0 not-italic text-[#101828] text-[36px] text-nowrap top-0 tracking-[0.3691px]">企业级数据与知识底座</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute font-normal h-[97.5px] leading-[32.5px] left-0 not-italic text-[#4a5565] text-[20px] top-[128px] tracking-[-0.4492px] w-[584px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] left-0 top-[-1px] w-[580px]">集成化的数据与知识管理平台，支持多源数据接入、清洗、存储与治理，</p>
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_KR:Regular','Noto_Sans_SC:Regular',sans-serif] left-0 text-nowrap top-[64px]">为 AI 智能体提供稳定、可信、可持续演进的数据基础。</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[#155dfc] text-[30px] tracking-[0.3955px]">10+</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-0 tracking-[-0.3125px]">数据源类型</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute bg-[#eff6ff] content-stretch flex flex-col gap-[4px] h-[98px] items-start left-0 pb-px pt-[17px] px-[17px] rounded-[12px] top-0 w-[284px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#dbeafe] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container30 />
      <Container31 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[#9810fa] text-[30px] tracking-[0.3955px]">100TB</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-0 tracking-[-0.3125px]">数据管理规模</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute bg-[#faf5ff] content-stretch flex flex-col gap-[4px] h-[98px] items-start left-[300px] pb-px pt-[17px] px-[17px] rounded-[12px] top-0 w-[284px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3e8ff] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container33 />
      <Container34 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[#00a63e] text-[30px] tracking-[0.3955px]">99.8%</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-0 tracking-[-0.3125px]">平台可用性</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute bg-[#f0fdf4] content-stretch flex flex-col gap-[4px] h-[98px] items-start left-0 pb-px pt-[17px] px-[17px] rounded-[12px] top-[114px] w-[584px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#dcfce7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container36 />
      <Container37 />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute h-[212px] left-0 top-[249.5px] w-[584px]" data-name="Container">
      <Container32 />
      <Container35 />
      <Container38 />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute h-[461.5px] left-0 top-0 w-[584px]" data-name="Container">
      <Container29 />
      <Heading3 />
      <Paragraph1 />
      <Container39 />
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[24px] relative shrink-0 w-[64px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-black text-nowrap top-0 tracking-[-0.3125px]">数据概览</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[20px] relative shrink-0 w-[56px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] text-nowrap top-0 tracking-[-0.1504px]">实时更新</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex h-[37px] items-center justify-between pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Text10 />
      <Text11 />
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[20px] relative shrink-0 w-[92.547px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 tracking-[-0.1504px]">MySQL 数据库</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[20px] relative shrink-0 w-[42px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#00a63e] text-[14px] text-nowrap top-0 tracking-[-0.1504px]">已连接</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text12 />
      <Text13 />
    </div>
  );
}

function Container43() {
  return <div className="bg-gradient-to-r from-[#2b7fff] h-[8px] rounded-[3.35544e+07px] shrink-0 to-[#155dfc] w-full" data-name="Container" />;
}

function Container44() {
  return (
    <div className="bg-[#e5e7eb] h-[8px] relative rounded-[3.35544e+07px] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pl-0 pr-[117.5px] py-0 relative size-full">
          <Container43 />
        </div>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <Container42 />
      <Container44 />
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[20px] relative shrink-0 w-[63.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 tracking-[-0.1504px]">MongoDB</p>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[20px] relative shrink-0 w-[42px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#00a63e] text-[14px] text-nowrap top-0 tracking-[-0.1504px]">已连接</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text14 />
      <Text15 />
    </div>
  );
}

function Container47() {
  return <div className="bg-gradient-to-r from-[#ad46ff] h-[8px] rounded-[3.35544e+07px] shrink-0 to-[#9810fa] w-full" data-name="Container" />;
}

function Container48() {
  return (
    <div className="bg-[#e5e7eb] h-[8px] relative rounded-[3.35544e+07px] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pl-0 pr-[188px] py-0 relative size-full">
          <Container47 />
        </div>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <Container46 />
      <Container48 />
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[20px] relative shrink-0 w-[67.375px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 tracking-[-0.1504px]">Redis 缓存</p>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[20px] relative shrink-0 w-[42px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#00a63e] text-[14px] text-nowrap top-0 tracking-[-0.1504px]">已连接</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text16 />
      <Text17 />
    </div>
  );
}

function Container51() {
  return <div className="bg-gradient-to-r from-[#00c950] h-[8px] rounded-[3.35544e+07px] shrink-0 to-[#00a63e] w-full" data-name="Container" />;
}

function Container52() {
  return (
    <div className="bg-[#e5e7eb] h-[8px] relative rounded-[3.35544e+07px] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pl-0 pr-[47px] py-0 relative size-full">
          <Container51 />
        </div>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <Container50 />
      <Container52 />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[132px] items-start relative shrink-0 w-full" data-name="Container">
      <Container45 />
      <Container49 />
      <Container53 />
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-[61.97px] not-italic text-[#155dfc] text-[16px] text-center text-nowrap top-0 tracking-[-0.3125px] translate-x-[-50%]">1.2M</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] text-center">总记录数</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute bg-[#eff6ff] content-stretch flex flex-col h-[64px] items-start left-0 pb-0 pt-[12px] px-[12px] rounded-[8px] top-[8px] w-[148.656px]" data-name="Container">
      <Container55 />
      <Container56 />
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-[62.97px] not-italic text-[#9810fa] text-[16px] text-center text-nowrap top-0 tracking-[-0.3125px] translate-x-[-50%]">856</p>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] text-center">日增量</p>
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute bg-[#faf5ff] content-stretch flex flex-col h-[64px] items-start left-[160.66px] pb-0 pt-[12px] px-[12px] rounded-[8px] top-[8px] w-[148.672px]" data-name="Container">
      <Container58 />
      <Container59 />
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-[62.8px] not-italic text-[#00a63e] text-[16px] text-center text-nowrap top-0 tracking-[-0.3125px] translate-x-[-50%]">99.8%</p>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#4a5565] text-[12px] text-center">可用性</p>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute bg-[#f0fdf4] content-stretch flex flex-col h-[64px] items-start left-[321.33px] pb-0 pt-[12px] px-[12px] rounded-[8px] top-[8px] w-[148.672px]" data-name="Container">
      <Container61 />
      <Container62 />
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Container">
      <Container57 />
      <Container60 />
      <Container63 />
    </div>
  );
}

function Container65() {
  return (
    <div className="bg-white h-[321px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[24px] px-[24px] relative size-full">
          <Container41 />
          <Container54 />
          <Container64 />
        </div>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute content-stretch flex flex-col h-[387px] items-start left-[632px] pb-px pt-[33px] px-[33px] rounded-[16px] top-[35.86px] w-[584px]" data-name="Container" style={{ backgroundImage: "linear-gradient(146.469deg, rgb(250, 245, 255) 0%, rgb(253, 242, 248) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[#e9d4ff] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Container65 />
    </div>
  );
}

function Container67() {
  return (
    <div className="h-[461.5px] relative shrink-0 w-full" data-name="Container">
      <Container40 />
      <Container66 />
    </div>
  );
}

function FeatureShowcase() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[128px] h-[1132.5px] items-start left-0 pb-0 pt-[80px] px-[380px] top-[1743px] w-[1976px]" data-name="FeatureShowcase">
      <Container28 />
      <Container67 />
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute bg-[#dbeafe] h-[40px] left-[552px] rounded-[3.35544e+07px] top-0 w-[112px]" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] left-[56.5px] not-italic text-[#1447e6] text-[16px] text-center text-nowrap top-[8px] tracking-[-0.3125px] translate-x-[-50%]">企业级特性</p>
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-[40px] left-0 top-[56px] w-[1216px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[40px] left-[608.5px] not-italic text-[#101828] text-[36px] text-center text-nowrap top-0 tracking-[0.3691px] translate-x-[-50%]">面向政企的企业级核心能力</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[28px] left-[224px] top-[112px] w-[768px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[28px] left-[384px] not-italic text-[#4a5565] text-[20px] text-center text-nowrap top-0 tracking-[-0.4492px] translate-x-[-50%]">从安全、性能到服务保障，全面满足企业级应用要求。</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[140px] relative shrink-0 w-full" data-name="Container">
      <Container68 />
      <Heading4 />
      <Paragraph2 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p1a3063b0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[25px] rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[56px] top-[25px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(43, 127, 255) 0%, rgb(173, 70, 255) 100%)" }}>
      <Icon6 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[24px] left-[25px] top-[97px] w-[334px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 tracking-[-0.3125px]">企业级安全保障</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[52px] left-[25px] top-[133px] w-[334px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#4a5565] text-[16px] top-0 tracking-[-0.3125px] w-[320px]">多层安全防护机制，数据加密传输存储，符合国际安全标准认证，保障您的数据安全。</p>
    </div>
  );
}

function Container71() {
  return (
    <div className="[grid-area:1_/_1] bg-white place-self-stretch relative rounded-[16px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Container70 />
      <Heading2 />
      <Paragraph3 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p184ba090} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p5d36b00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p36197298} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p362f90c0} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[25px] rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[56px] top-[25px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(43, 127, 255) 0%, rgb(173, 70, 255) 100%)" }}>
      <Icon7 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute h-[24px] left-[25px] top-[97px] w-[334px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 tracking-[-0.3125px]">多租户隔离架构</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[52px] left-[25px] top-[133px] w-[334px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#4a5565] text-[16px] top-0 tracking-[-0.3125px] w-[320px]">完善的权限管理体系，支持多团队协作，数据完全隔离，适配各种组织架构需求。</p>
    </div>
  );
}

function Container73() {
  return (
    <div className="[grid-area:1_/_2] bg-white place-self-stretch relative rounded-[16px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Container72 />
      <Heading5 />
      <Paragraph4 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.pbe19f80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[25px] rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[56px] top-[25px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(43, 127, 255) 0%, rgb(173, 70, 255) 100%)" }}>
      <Icon8 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute h-[24px] left-[25px] top-[97px] w-[334px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 tracking-[-0.3125px]">高性能并发处理</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[52px] left-[25px] top-[133px] w-[334px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#4a5565] text-[16px] top-0 tracking-[-0.3125px] w-[320px]">分布式架构设计，支持高并发请求处理，弹性伸缩能力，确保系统稳定运行。</p>
    </div>
  );
}

function Container75() {
  return (
    <div className="[grid-area:1_/_3] bg-white place-self-stretch relative rounded-[16px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Container74 />
      <Heading6 />
      <Paragraph5 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.pb26ca00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M21 19.8333V10.5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M15.1667 19.8333V5.83333" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M9.33333 19.8333V16.3333" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[25px] rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[56px] top-[25px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(43, 127, 255) 0%, rgb(173, 70, 255) 100%)" }}>
      <Icon9 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute h-[24px] left-[25px] top-[97px] w-[334px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 tracking-[-0.3125px]">全方位监控分析</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[52px] left-[25px] top-[133px] w-[334px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#4a5565] text-[16px] top-0 tracking-[-0.3125px] w-[320px]">实时监控系统运行状态，详细的日志记录，可视化数据分析，助力业务决策优化。</p>
    </div>
  );
}

function Container77() {
  return (
    <div className="[grid-area:2_/_1] bg-white place-self-stretch relative rounded-[16px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Container76 />
      <Heading7 />
      <Paragraph6 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p10ff480} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p29789dc0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[25px] rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[56px] top-[25px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(43, 127, 255) 0%, rgb(173, 70, 255) 100%)" }}>
      <Icon10 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="absolute h-[24px] left-[25px] top-[97px] w-[334px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 tracking-[-0.3125px]">完善的备份机制</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[52px] left-[25px] top-[133px] w-[334px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#4a5565] text-[16px] top-0 tracking-[-0.3125px] w-[320px]">自动化数据备份，多地域容灾部署，快速恢复能力，确保业务连续性。</p>
    </div>
  );
}

function Container79() {
  return (
    <div className="[grid-area:2_/_2] bg-white place-self-stretch relative rounded-[16px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Container78 />
      <Heading8 />
      <Paragraph7 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d="M14 16.3333L18.6667 11.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p112a3aec} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container80() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[25px] rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[56px] top-[25px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(43, 127, 255) 0%, rgb(173, 70, 255) 100%)" }}>
      <Icon11 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="absolute h-[24px] left-[25px] top-[97px] w-[334px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-0 tracking-[-0.3125px]">SLA服务保障</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute h-[52px] left-[25px] top-[133px] w-[334px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#4a5565] text-[16px] top-0 tracking-[-0.3125px] w-[324px]">99.9%可用性承诺，7x24小时技术支持，专属客户成功团队，保障您的业务无忧。</p>
    </div>
  );
}

function Container81() {
  return (
    <div className="[grid-area:2_/_3] bg-white place-self-stretch relative rounded-[16px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Container80 />
      <Heading9 />
      <Paragraph8 />
    </div>
  );
}

function Container82() {
  return (
    <div className="gap-[32px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[452px] relative shrink-0 w-full" data-name="Container">
      <Container71 />
      <Container73 />
      <Container75 />
      <Container77 />
      <Container79 />
      <Container81 />
    </div>
  );
}

function Container83() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute bg-clip-text font-['Inter:Bold',sans-serif] font-bold leading-[40px] left-[132.27px] not-italic text-[36px] text-[rgba(0,0,0,0)] text-center text-nowrap top-0 tracking-[0.3691px] translate-x-[-50%]" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(21, 93, 252) 0%, rgb(152, 16, 250) 100%)" }}>
        99.9%
      </p>
    </div>
  );
}

function Container84() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[24px] left-[132.25px] not-italic text-[#4a5565] text-[16px] text-center text-nowrap top-0 tracking-[-0.3125px] translate-x-[-50%]">系统可用性</p>
    </div>
  );
}

function Container85() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[8px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Container83 />
      <Container84 />
    </div>
  );
}

function Container86() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute bg-clip-text font-['Inter:Bold',sans-serif] font-bold leading-[40px] left-[132.44px] not-italic text-[36px] text-[rgba(0,0,0,0)] text-center text-nowrap top-0 tracking-[0.3691px] translate-x-[-50%]" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(21, 93, 252) 0%, rgb(152, 16, 250) 100%)" }}>{`<100ms`}</p>
    </div>
  );
}

function Container87() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[24px] left-[132.25px] not-italic text-[#4a5565] text-[16px] text-center text-nowrap top-0 tracking-[-0.3125px] translate-x-[-50%]">平均响应时间</p>
    </div>
  );
}

function Container88() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[8px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Container86 />
      <Container87 />
    </div>
  );
}

function Container89() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute bg-clip-text font-['Inter:Bold',sans-serif] font-bold leading-[40px] left-[132.17px] not-italic text-[36px] text-[rgba(0,0,0,0)] text-center text-nowrap top-0 tracking-[0.3691px] translate-x-[-50%]" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(21, 93, 252) 0%, rgb(152, 16, 250) 100%)" }}>
        10K+
      </p>
    </div>
  );
}

function Container90() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[24px] left-[131.75px] not-italic text-[#4a5565] text-[16px] text-center text-nowrap top-0 tracking-[-0.3125px] translate-x-[-50%]">企业用户</p>
    </div>
  );
}

function Container91() {
  return (
    <div className="[grid-area:1_/_3] content-stretch flex flex-col gap-[8px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Container89 />
      <Container90 />
    </div>
  );
}

function Container92() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute bg-clip-text font-['Inter:Bold',sans-serif] font-bold leading-[40px] left-[131.97px] not-italic text-[36px] text-[rgba(0,0,0,0)] text-center text-nowrap top-0 tracking-[0.3691px] translate-x-[-50%]" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(21, 93, 252) 0%, rgb(152, 16, 250) 100%)" }}>
        24/7
      </p>
    </div>
  );
}

function Container93() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[24px] left-[131.75px] not-italic text-[#4a5565] text-[16px] text-center text-nowrap top-0 tracking-[-0.3125px] translate-x-[-50%]">技术支持</p>
    </div>
  );
}

function Container94() {
  return (
    <div className="[grid-area:1_/_4] content-stretch flex flex-col gap-[8px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Container92 />
      <Container93 />
    </div>
  );
}

function Container95() {
  return (
    <div className="gap-[32px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[72px] relative shrink-0 w-full" data-name="Container">
      <Container85 />
      <Container88 />
      <Container91 />
      <Container94 />
    </div>
  );
}

function Container96() {
  return (
    <div className="bg-white h-[138px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-px pt-[33px] px-[33px] relative size-full">
          <Container95 />
        </div>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="h-[858px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-start px-[32px] py-0 relative size-full">
          <Container69 />
          <Container82 />
          <Container96 />
        </div>
      </div>
    </div>
  );
}

function EnterpriseFeatures() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1018px] items-start left-0 pb-0 pt-[80px] px-[348px] top-[2875.5px] w-[1976px]" data-name="EnterpriseFeatures" style={{ backgroundImage: "linear-gradient(152.743deg, rgb(239, 246, 255) 0%, rgb(238, 242, 255) 50%, rgb(250, 245, 255) 100%)" }}>
      <Container97 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d="M16 10.6667V5.33333H10.6667" id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.pbea9f00} id="Vector_2" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M2.66667 18.6667H5.33333" id="Vector_3" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M26.6667 18.6667H29.3333" id="Vector_4" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M20 17.3333V20" id="Vector_5" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M12 17.3333V20" id="Vector_6" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[28px] relative shrink-0 w-[154.938px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold','Noto_Sans_JP:Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[20px] text-nowrap text-white top-0 tracking-[-0.4492px]">星河Agent智能体</p>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon12 />
      <Text18 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal h-[68.25px] leading-[22.75px] not-italic relative shrink-0 text-[#d1d5dc] text-[14px] text-nowrap tracking-[-0.1504px] w-full" data-name="Paragraph">
      <p className="absolute left-0 top-0">星河 Agent 智能体是面向政务与企业的AI智能体中台平台，</p>
      <p className="absolute left-0 top-[22.75px]">提供安全、可控、可扩展的AI智能体开发与运营能力，</p>
      <p className="absolute left-0 top-[45.5px]">助力企业实现AI规模化落地与业务智能化升级。</p>
    </div>
  );
}

function Container99() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[16px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Container98 />
      <Paragraph9 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-0 tracking-[-0.3125px]">联系我们</p>
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p26ddc800} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p35ba4680} id="Vector_2" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text19() {
  return (
    <div className="absolute h-[20px] left-[28px] top-0 w-[255.359px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#d1d5dc] text-[14px] text-nowrap top-0 tracking-[-0.1504px]">北京市海淀区中关村软件园2号楼B座一层</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[22px] relative shrink-0 w-full" data-name="List Item">
      <Icon13 />
      <Text19 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2010_1521)" id="Icon">
          <path d={svgPaths.p149d6300} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_2010_1521">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text20() {
  return (
    <div className="absolute h-[20px] left-[28px] top-0 w-[88.594px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#d1d5dc] text-[14px] text-nowrap top-0 tracking-[-0.1504px]">15011569988</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[22px] relative shrink-0 w-full" data-name="List Item">
      <Icon14 />
      <Text20 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2010_1521)" id="Icon">
          <path d={svgPaths.p149d6300} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_2010_1521">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text21() {
  return (
    <div className="absolute h-[20px] left-[28px] top-0 w-[80.828px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#d1d5dc] text-[14px] text-nowrap top-0 tracking-[-0.1504px]">4001108776</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[22px] relative shrink-0 w-full" data-name="List Item">
      <Icon15 />
      <Text21 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pd919a80} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p189c1170} id="Vector_2" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text22() {
  return (
    <div className="absolute h-[20px] left-[28px] top-0 w-[167.875px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#d1d5dc] text-[14px] text-nowrap top-0 tracking-[-0.1504px]">Marketing@xinghetech.cn</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[22px] relative shrink-0 w-full" data-name="List Item">
      <Icon16 />
      <Text22 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[124px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem3 />
      <ListItem4 />
      <ListItem5 />
      <ListItem6 />
    </div>
  );
}

function Container100() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[16px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Heading10 />
      <List1 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-0 tracking-[-0.3125px]">关注我们</p>
    </div>
  );
}

function Image() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-[160px]" data-name="Image (微信二维码)">
      <div aria-hidden="true" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none rounded-[8px]">
        <div className="absolute bg-clip-padding bg-white border-0 border-[transparent] border-solid inset-0 rounded-[8px]" />
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[112px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] text-nowrap top-0 tracking-[-0.1504px]">扫一扫，添加微信</p>
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[188px] items-start relative shrink-0 w-full" data-name="Container">
      <Image />
      <Paragraph10 />
    </div>
  );
}

function Container102() {
  return (
    <div className="[grid-area:1_/_3] content-stretch flex flex-col gap-[16px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Heading11 />
      <Container101 />
    </div>
  );
}

function Container103() {
  return (
    <div className="gap-[32px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[228px] relative shrink-0 w-full" data-name="Container">
      <Container99 />
      <Container100 />
      <Container102 />
    </div>
  );
}

function Container104() {
  return (
    <div className="h-[20px] relative shrink-0 w-[818.344px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] text-nowrap top-0 tracking-[-0.1504px]">Copyright © 2017-2026 xinghetech.cn All Rights Reserved 版权所有 · 北京星河卓越科技有限公司 备案号：京ICP备17041981号-4</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="h-[20px] relative shrink-0 w-[56px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#d1d5dc] text-[14px] text-nowrap top-0 tracking-[-0.1504px]">隐私政策</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[56px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#d1d5dc] text-[14px] text-nowrap top-0 tracking-[-0.1504px]">服务条款</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#d1d5dc] text-[14px] text-nowrap top-0 tracking-[-0.1504px]">Cookie政策</p>
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="h-[20px] relative shrink-0 w-[232.734px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start relative size-full">
        <Link />
        <Link1 />
        <Link2 />
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container104 />
      <Container105 />
    </div>
  );
}

function Container107() {
  return (
    <div className="content-stretch flex flex-col h-[53px] items-start pb-0 pt-[33px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#1e2939] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container106 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#101828] content-stretch flex flex-col gap-[32px] h-[409px] items-start left-[348px] pb-0 pt-[48px] px-[32px] top-[5845.25px] w-[1280px]" data-name="Footer">
      <Container103 />
      <Container107 />
    </div>
  );
}

function Container108() {
  return <div className="absolute bg-[#bedbff] blur-3xl filter left-[1591.65px] opacity-30 rounded-[3.35544e+07px] size-[367.01px] top-[17.34px]" data-name="Container" />;
}

function Container109() {
  return <div className="absolute bg-[#e9d4ff] blur-3xl filter left-[1.89px] opacity-30 rounded-[3.35544e+07px] size-[363.435px] top-[14.03px]" data-name="Container" />;
}

function Container110() {
  return <div className="absolute bg-[#fccee8] blur-3xl filter left-[997.57px] opacity-30 rounded-[3.35544e+07px] size-[418.03px] top-[310.68px]" data-name="Container" />;
}

function Icon17() {
  return (
    <div className="absolute left-[16px] size-[16px] top-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2010_1510)" id="Icon">
          <path d={svgPaths.p319d7580} id="Vector" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M13.3333 2V4.66667" id="Vector_2" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14.6667 3.33333H12" id="Vector_3" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2.66667 11.3333V12.6667" id="Vector_4" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M3.33333 12H2" id="Vector_5" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_2010_1510">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text23() {
  return (
    <div className="absolute h-[24px] left-[40px] top-[8px] w-[141.422px]" data-name="Text">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1447e6] text-[16px] text-nowrap top-0 tracking-[-0.3125px]">AI Agent智能体平台</p>
    </div>
  );
}

function Container111() {
  return (
    <div className="absolute bg-[#dbeafe] h-[40px] left-0 rounded-[3.35544e+07px] top-0 w-[197.422px]" data-name="Container">
      <Icon17 />
      <Text23 />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute content-stretch flex h-[71px] items-start left-0 top-[74px] w-[537.953px]" data-name="Heading 1">
      <p className="bg-clip-text font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[75px] not-italic relative shrink-0 text-[60px] text-[rgba(0,0,0,0)] text-nowrap tracking-[0.2637px]" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(21, 93, 252) 0%, rgb(152, 16, 250) 100%)" }}>
        企业级AI智能体中台
      </p>
    </div>
  );
}

function Text24() {
  return (
    <div className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal h-[48px] leading-[24px] left-0 not-italic text-[#6a7282] text-[16px] text-nowrap top-[77px] tracking-[-0.3125px] w-[584px]" data-name="Text">
      <p className="absolute left-0 top-0">深度融合 Agentic 工作流、RAG 知识引擎与智能体 DevOps，</p>
      <p className="absolute left-0 top-[24px]">支撑企业规模化落地高价值 AI 应用。</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[125px] left-0 top-[179px] w-[584px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[32.5px] left-0 not-italic text-[#4a5565] text-[20px] text-nowrap top-[-1px] tracking-[-0.4492px]">面向政企与大型企业的一站式 AI 智能体开发、运行与治理平台，</p>
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[32.5px] left-0 not-italic text-[#4a5565] text-[20px] text-nowrap top-[31.5px] tracking-[-0.4492px]">覆盖智能体从构建、部署到持续运营的全生命周期。</p>
      <Text24 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="absolute left-[104px] size-[20px] top-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1ae0b780} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#155dfc] h-[56px] left-0 rounded-[8px] top-[336px] w-[156px]" data-name="Button">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[24px] left-[64px] not-italic text-[16px] text-center text-nowrap text-white top-[16px] tracking-[-0.3125px] translate-x-[-50%]">立即咨询</p>
      <Icon18 />
    </div>
  );
}

function Container112() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[#101828] text-[30px] tracking-[0.3955px]">100+</p>
    </div>
  );
}

function Container113() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-0 tracking-[-0.3125px]">企业与行业用户</p>
    </div>
  );
}

function Container114() {
  return (
    <div className="h-[60px] relative shrink-0 w-[112px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container112 />
        <Container113 />
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[36px] not-italic relative shrink-0 text-[#101828] text-[30px] text-nowrap tracking-[0.3955px]">99.9%</p>
    </div>
  );
}

function Container116() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-0 tracking-[-0.3125px]">系统可用性</p>
    </div>
  );
}

function Container117() {
  return (
    <div className="h-[60px] relative shrink-0 w-[93.75px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container115 />
        <Container116 />
      </div>
    </div>
  );
}

function Container118() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[#101828] text-[30px] tracking-[0.3955px]">24/7</p>
    </div>
  );
}

function Container119() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-0 tracking-[-0.3125px]">企业级技术支持</p>
    </div>
  );
}

function Container120() {
  return (
    <div className="h-[60px] relative shrink-0 w-[112px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container118 />
        <Container119 />
      </div>
    </div>
  );
}

function Container121() {
  return (
    <div className="absolute content-stretch flex gap-[32px] h-[76px] items-center left-0 top-[424px] w-[584px]" data-name="Container">
      <Container114 />
      <Container117 />
      <Container120 />
    </div>
  );
}

function Container122() {
  return (
    <div className="absolute h-[500px] left-0 top-0 w-[584px]" data-name="Container">
      <Container111 />
      <Heading />
      <Paragraph11 />
      <Button />
      <Container121 />
    </div>
  );
}

function ImageAiAgent() {
  return (
    <div className="absolute h-[387.375px] left-[632px] top-[54.92px] w-[584px]" data-name="Image (AI-Agent智能体中台)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageAiAgent} />
    </div>
  );
}

function Container123() {
  return (
    <div className="absolute h-[500px] left-[380px] top-[128px] w-[1216px]" data-name="Container">
      <Container122 />
      <ImageAiAgent />
    </div>
  );
}

function Hero() {
  return (
    <div className="absolute h-[756px] left-0 overflow-clip top-[64px] w-[1976px]" data-name="Hero" style={{ backgroundImage: "linear-gradient(159.064deg, rgb(239, 246, 255) 0%, rgb(250, 245, 255) 50%, rgb(253, 242, 248) 100%)" }}>
      <Container108 />
      <Container109 />
      <Container110 />
      <Container123 />
    </div>
  );
}

function Container124() {
  return <div className="absolute bg-[#bedbff] blur-3xl filter left-[1592px] opacity-20 rounded-[3.35544e+07px] size-[384px] top-0" data-name="Container" />;
}

function Container125() {
  return <div className="absolute bg-[#e9d4ff] blur-3xl filter left-0 opacity-20 rounded-[3.35544e+07px] size-[384px] top-[539px]" data-name="Container" />;
}

function Container126() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.6)] h-[40px] left-[560px] rounded-[3.35544e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-0 w-[96px]" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[24px] left-[48px] not-italic text-[#155dfc] text-[16px] text-center text-nowrap top-[8px] tracking-[-0.3125px] translate-x-[-50%]">核心优势</p>
    </div>
  );
}

function Heading12() {
  return (
    <div className="absolute h-[40px] left-0 top-[56px] w-[1216px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[40px] left-[608px] not-italic text-[#101828] text-[36px] text-center text-nowrap top-0 tracking-[0.3691px] translate-x-[-50%]">产品优势</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute h-[28px] left-[272px] top-[112px] w-[672px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[28px] left-[336.5px] not-italic text-[#4a5565] text-[20px] text-center text-nowrap top-0 tracking-[-0.4492px] translate-x-[-50%]">为什么选择我们的Agent智能体平台</p>
    </div>
  );
}

function Container127() {
  return (
    <div className="h-[140px] relative shrink-0 w-full" data-name="Container">
      <Container126 />
      <Heading12 />
      <Paragraph12 />
    </div>
  );
}

function Image1() {
  return <div className="absolute h-[265.5px] left-0 top-0 w-[594px]" data-name="Image (企业级私有化与本地化部署)" />;
}

function Container128() {
  return <div className="absolute h-[265.5px] left-0 opacity-90 top-0 w-[594px]" data-name="Container" style={{ backgroundImage: "linear-gradient(155.917deg, rgb(43, 127, 255) 0%, rgb(0, 184, 219) 100%)" }} />;
}

function Container129() {
  return (
    <div className="absolute h-[265.5px] left-px opacity-0 top-px w-[594px]" data-name="Container">
      <Image1 />
      <Container128 />
    </div>
  );
}

function Container130() {
  return <div className="absolute left-[499px] opacity-5 rounded-bl-[3.35544e+07px] size-[96px] top-px" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(43, 127, 255) 0%, rgb(0, 184, 219) 100%)" }} />;
}

function Container131() {
  return <div className="bg-gradient-to-r from-[rgba(0,0,0,0)] h-[265.5px] shrink-0 to-[rgba(0,0,0,0)] via-50% via-[rgba(255,255,255,0.1)] w-full" data-name="Container" />;
}

function Container132() {
  return (
    <div className="absolute content-stretch flex flex-col h-[265.5px] items-start left-px opacity-0 pl-[565.783px] pr-[-622.217px] py-0 top-px w-[594px]" data-name="Container">
      <Container131 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="absolute h-[28px] left-[32px] top-[120px] w-[530px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[20px] text-nowrap top-0 tracking-[-0.4492px]">企业级私有化与本地化部署</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute h-[45.5px] left-[32px] top-[160px] w-[530px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] w-[518px]">支持本地、专有云与私有云部署，数据与模型全程可控，满足政企对安全合规、数据主权与内控审计的严格要求。</p>
    </div>
  );
}

function Container133() {
  return <div className="absolute bg-gradient-to-r from-[#2b7fff] h-[4px] left-[32px] rounded-[3.35544e+07px] to-[#00b8db] top-[229.5px] w-[48px]" data-name="Container" />;
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <div className="absolute inset-[-9.38%_-13.54%_-34.39%_-13.54%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.6667 46.0045">
          <g filter="url(#filter0_d_2010_1504)" id="Icon">
            <path d={svgPaths.p3e97c580} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="48" id="filter0_d_2010_1504" width="48" x="-3.66667" y="-0.999349">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="4" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2010_1504" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_2010_1504" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container134() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] size-[64px] top-0" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(43, 127, 255) 0%, rgb(0, 184, 219) 100%)" }}>
      <Icon19 />
    </div>
  );
}

function Container135() {
  return <div className="absolute blur-xl filter left-0 opacity-30 rounded-[16px] size-[64px] top-0" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(43, 127, 255) 0%, rgb(0, 184, 219) 100%)" }} />;
}

function Container136() {
  return <div className="absolute border-2 border-solid border-white left-0 opacity-0 rounded-[16px] size-[64px] top-0" data-name="Container" />;
}

function Container137() {
  return (
    <div className="absolute h-[64px] left-[32px] top-[32px] w-[530px]" data-name="Container">
      <Container134 />
      <Container135 />
      <Container136 />
    </div>
  );
}

function Container138() {
  return (
    <div className="absolute h-[265.5px] left-px top-px w-[594px]" data-name="Container">
      <Heading13 />
      <Paragraph13 />
      <Container133 />
      <Container137 />
    </div>
  );
}

function Container139() {
  return (
    <div className="[grid-area:1_/_1] place-self-stretch relative rounded-[16px] shrink-0" data-name="Container" style={{ backgroundImage: "linear-gradient(155.828deg, rgb(243, 232, 255) 0%, rgb(239, 246, 255) 50%, rgb(255, 255, 255) 100%)" }}>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container129 />
        <Container130 />
        <Container132 />
        <Container138 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Image2() {
  return <div className="absolute h-[265.5px] left-0 top-0 w-[594px]" data-name="Image (业务数据与企业知识库统一接入)" />;
}

function Container140() {
  return <div className="absolute h-[265.5px] left-0 opacity-90 top-0 w-[594px]" data-name="Container" style={{ backgroundImage: "linear-gradient(155.917deg, rgb(0, 201, 80) 0%, rgb(0, 188, 125) 100%)" }} />;
}

function Container141() {
  return (
    <div className="absolute h-[265.5px] left-px opacity-0 top-px w-[594px]" data-name="Container">
      <Image2 />
      <Container140 />
    </div>
  );
}

function Container142() {
  return <div className="absolute left-[499px] opacity-5 rounded-bl-[3.35544e+07px] size-[96px] top-px" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 201, 80) 0%, rgb(0, 188, 125) 100%)" }} />;
}

function Container143() {
  return <div className="bg-gradient-to-r from-[rgba(0,0,0,0)] h-[265.5px] shrink-0 to-[rgba(0,0,0,0)] via-50% via-[rgba(255,255,255,0.1)] w-full" data-name="Container" />;
}

function Container144() {
  return (
    <div className="absolute content-stretch flex flex-col h-[265.5px] items-start left-px opacity-0 pl-[565.783px] pr-[-622.217px] py-0 top-px w-[594px]" data-name="Container">
      <Container143 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="absolute h-[28px] left-[32px] top-[120px] w-[530px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[20px] text-nowrap top-0 tracking-[-0.4492px]">业务数据与企业知识库统一接入</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="absolute h-[45.5px] left-[32px] top-[160px] w-[530px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] w-[525px]">统一接入企业结构化数据、业务系统与知识文档，让 AI 真正理解业务语境，服务于日常决策与业务执行。</p>
    </div>
  );
}

function Container145() {
  return <div className="absolute bg-gradient-to-r from-[#00c950] h-[4px] left-[32px] rounded-[3.35544e+07px] to-[#00bc7d] top-[229.5px] w-[48px]" data-name="Container" />;
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <div className="absolute inset-[-9.38%_-17.71%_-34.38%_-17.71%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.3333 46">
          <g filter="url(#filter0_d_2010_1499)" id="Icon">
            <path d={svgPaths.p3f38e700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
            <path d={svgPaths.pf618880} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
            <path d={svgPaths.p183a9025} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="48" id="filter0_d_2010_1499" width="48" x="-2.33333" y="-1">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="4" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2010_1499" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_2010_1499" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container146() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] size-[64px] top-0" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 201, 80) 0%, rgb(0, 188, 125) 100%)" }}>
      <Icon20 />
    </div>
  );
}

function Container147() {
  return <div className="absolute blur-xl filter left-0 opacity-30 rounded-[16px] size-[64px] top-0" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 201, 80) 0%, rgb(0, 188, 125) 100%)" }} />;
}

function Container148() {
  return <div className="absolute border-2 border-solid border-white left-0 opacity-0 rounded-[16px] size-[64px] top-0" data-name="Container" />;
}

function Container149() {
  return (
    <div className="absolute h-[64px] left-[32px] top-[32px] w-[530px]" data-name="Container">
      <Container146 />
      <Container147 />
      <Container148 />
    </div>
  );
}

function Container150() {
  return (
    <div className="absolute h-[265.5px] left-px top-px w-[594px]" data-name="Container">
      <Heading14 />
      <Paragraph14 />
      <Container145 />
      <Container149 />
    </div>
  );
}

function Container151() {
  return (
    <div className="[grid-area:1_/_2] place-self-stretch relative rounded-[16px] shrink-0" data-name="Container" style={{ backgroundImage: "linear-gradient(155.828deg, rgb(219, 234, 254) 0%, rgb(238, 242, 255) 50%, rgb(255, 255, 255) 100%)" }}>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container141 />
        <Container142 />
        <Container144 />
        <Container150 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function ImageAi() {
  return <div className="absolute h-[265.5px] left-0 top-0 w-[594px]" data-name="Image (多模态 AI 能力统一管理)" />;
}

function Container152() {
  return <div className="absolute h-[265.5px] left-0 opacity-90 top-0 w-[594px]" data-name="Container" style={{ backgroundImage: "linear-gradient(155.917deg, rgb(173, 70, 255) 0%, rgb(246, 51, 154) 100%)" }} />;
}

function Container153() {
  return (
    <div className="absolute h-[265.5px] left-px opacity-0 top-px w-[594px]" data-name="Container">
      <ImageAi />
      <Container152 />
    </div>
  );
}

function Container154() {
  return <div className="absolute left-[499px] opacity-5 rounded-bl-[3.35544e+07px] size-[96px] top-px" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(173, 70, 255) 0%, rgb(246, 51, 154) 100%)" }} />;
}

function Container155() {
  return <div className="bg-gradient-to-r from-[rgba(0,0,0,0)] h-[265.5px] shrink-0 to-[rgba(0,0,0,0)] via-50% via-[rgba(255,255,255,0.1)] w-full" data-name="Container" />;
}

function Container156() {
  return (
    <div className="absolute content-stretch flex flex-col h-[265.5px] items-start left-px opacity-0 pl-[565.783px] pr-[-622.217px] py-0 top-px w-[594px]" data-name="Container">
      <Container155 />
    </div>
  );
}

function Heading15() {
  return (
    <div className="absolute h-[28px] left-[32px] top-[120px] w-[530px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[20px] text-nowrap top-0 tracking-[-0.4492px]">多模态 AI 能力统一管理</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="absolute h-[45.5px] left-[32px] top-[160px] w-[530px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] w-[504px]">支持文本、图片、语音等多模态能力接入，一个中台实现多能力协同与快速业务落地。</p>
    </div>
  );
}

function Container157() {
  return <div className="absolute bg-gradient-to-r from-[#ad46ff] h-[4px] left-[32px] rounded-[3.35544e+07px] to-[#f6339a] top-[229.5px] w-[48px]" data-name="Container" />;
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <div className="absolute inset-[-9.39%_-17.72%_-34.39%_-17.72%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.3424 46.007">
          <g filter="url(#filter0_d_2010_1496)" id="Icon">
            <path d={svgPaths.p6835380} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="48" id="filter0_d_2010_1496" width="48" x="-2.32877" y="-0.99658">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="4" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2010_1496" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_2010_1496" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container158() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] size-[64px] top-0" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(173, 70, 255) 0%, rgb(246, 51, 154) 100%)" }}>
      <Icon21 />
    </div>
  );
}

function Container159() {
  return <div className="absolute blur-xl filter left-0 opacity-30 rounded-[16px] size-[64px] top-0" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(173, 70, 255) 0%, rgb(246, 51, 154) 100%)" }} />;
}

function Container160() {
  return <div className="absolute border-2 border-solid border-white left-0 opacity-0 rounded-[16px] size-[64px] top-0" data-name="Container" />;
}

function Container161() {
  return (
    <div className="absolute h-[64px] left-[32px] top-[32px] w-[530px]" data-name="Container">
      <Container158 />
      <Container159 />
      <Container160 />
    </div>
  );
}

function Container162() {
  return (
    <div className="absolute h-[265.5px] left-px top-px w-[594px]" data-name="Container">
      <Heading15 />
      <Paragraph15 />
      <Container157 />
      <Container161 />
    </div>
  );
}

function Container163() {
  return (
    <div className="[grid-area:2_/_1] place-self-stretch relative rounded-[16px] shrink-0" data-name="Container" style={{ backgroundImage: "linear-gradient(155.828deg, rgb(252, 231, 243) 0%, rgb(250, 245, 255) 50%, rgb(255, 255, 255) 100%)" }}>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container153 />
        <Container154 />
        <Container156 />
        <Container162 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Image3() {
  return <div className="absolute h-[265.5px] left-0 top-0 w-[594px]" data-name="Image (可扩展的工具与智能体生态)" />;
}

function Container164() {
  return <div className="absolute h-[265.5px] left-0 opacity-90 top-0 w-[594px]" data-name="Container" style={{ backgroundImage: "linear-gradient(155.917deg, rgb(255, 105, 0) 0%, rgb(240, 177, 0) 100%)" }} />;
}

function Container165() {
  return (
    <div className="absolute h-[265.5px] left-px opacity-0 top-px w-[594px]" data-name="Container">
      <Image3 />
      <Container164 />
    </div>
  );
}

function Container166() {
  return <div className="absolute left-[499px] opacity-5 rounded-bl-[3.35544e+07px] size-[96px] top-px" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 105, 0) 0%, rgb(240, 177, 0) 100%)" }} />;
}

function Container167() {
  return <div className="bg-gradient-to-r from-[rgba(0,0,0,0)] h-[265.5px] shrink-0 to-[rgba(0,0,0,0)] via-50% via-[rgba(255,255,255,0.1)] w-full" data-name="Container" />;
}

function Container168() {
  return (
    <div className="absolute content-stretch flex flex-col h-[265.5px] items-start left-px opacity-0 pl-[565.783px] pr-[-622.217px] py-0 top-px w-[594px]" data-name="Container">
      <Container167 />
    </div>
  );
}

function Heading16() {
  return (
    <div className="absolute h-[28px] left-[32px] top-[120px] w-[530px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[20px] text-nowrap top-0 tracking-[-0.4492px]">可扩展的工具与智能体生态</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="absolute h-[45.5px] left-[32px] top-[160px] w-[530px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] w-[521px]">提供丰富的工具组件与接口能力，支持按需定制与二次开发，持续构建企业专属的 AI 应用与智能体体系。</p>
    </div>
  );
}

function Container169() {
  return <div className="absolute bg-gradient-to-r from-[#ff6900] h-[4px] left-[32px] rounded-[3.35544e+07px] to-[#f0b100] top-[229.5px] w-[48px]" data-name="Container" />;
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <div className="absolute inset-[-9.38%_-17.78%_-34.38%_-17.78%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.3802 46">
          <g filter="url(#filter0_d_2010_1547)" id="Icon">
            <path d={svgPaths.p25308900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
            <path d={svgPaths.p2c2fbb00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="48" id="filter0_d_2010_1547" width="48" x="-2.30989" y="-1">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="4" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2010_1547" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_2010_1547" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container170() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] size-[64px] top-0" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 105, 0) 0%, rgb(240, 177, 0) 100%)" }}>
      <Icon22 />
    </div>
  );
}

function Container171() {
  return <div className="absolute blur-xl filter left-0 opacity-30 rounded-[16px] size-[64px] top-0" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 105, 0) 0%, rgb(240, 177, 0) 100%)" }} />;
}

function Container172() {
  return <div className="absolute border-2 border-solid border-white left-0 opacity-0 rounded-[16px] size-[64px] top-0" data-name="Container" />;
}

function Container173() {
  return (
    <div className="absolute h-[64px] left-[32px] top-[32px] w-[530px]" data-name="Container">
      <Container170 />
      <Container171 />
      <Container172 />
    </div>
  );
}

function Container174() {
  return (
    <div className="absolute h-[265.5px] left-px top-px w-[594px]" data-name="Container">
      <Heading16 />
      <Paragraph16 />
      <Container169 />
      <Container173 />
    </div>
  );
}

function Container175() {
  return (
    <div className="[grid-area:2_/_2] place-self-stretch relative rounded-[16px] shrink-0" data-name="Container" style={{ backgroundImage: "linear-gradient(155.828deg, rgb(206, 250, 254) 0%, rgb(239, 246, 255) 50%, rgb(255, 255, 255) 100%)" }}>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container165 />
        <Container166 />
        <Container168 />
        <Container174 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container176() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[559px] relative shrink-0 w-full" data-name="Container">
      <Container139 />
      <Container151 />
      <Container163 />
      <Container175 />
    </div>
  );
}

function Container177() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] h-[763px] items-start left-[348px] px-[32px] py-0 top-[80px] w-[1280px]" data-name="Container">
      <Container127 />
      <Container176 />
    </div>
  );
}

function ProductAdvantages() {
  return (
    <div className="absolute h-[923px] left-0 overflow-clip top-[820px] w-[1976px]" data-name="ProductAdvantages" style={{ backgroundImage: "linear-gradient(154.962deg, rgb(239, 246, 255) 0%, rgb(238, 242, 255) 50%, rgb(250, 245, 255) 100%)" }}>
      <Container124 />
      <Container125 />
      <Container177 />
    </div>
  );
}

function Container178() {
  return <div className="absolute bg-[#e9d4ff] blur-3xl filter left-[1592px] opacity-20 rounded-[3.35544e+07px] size-[384px] top-0" data-name="Container" />;
}

function Container179() {
  return <div className="absolute bg-[#fccee8] blur-3xl filter left-0 opacity-20 rounded-[3.35544e+07px] size-[384px] top-[1195.25px]" data-name="Container" />;
}

function Container180() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.6)] h-[40px] left-[560px] rounded-[3.35544e+07px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-0 w-[96px]" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] left-[48px] not-italic text-[#9810fa] text-[16px] text-center text-nowrap top-[8px] tracking-[-0.3125px] translate-x-[-50%]">应用场景</p>
    </div>
  );
}

function Heading17() {
  return (
    <div className="absolute h-[40px] left-0 top-[56px] w-[1216px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[40px] left-[607.91px] not-italic text-[#101828] text-[36px] text-center text-nowrap top-0 tracking-[0.3691px] translate-x-[-50%]">覆盖多行业的 AI 智能体应用场景</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="absolute h-[28px] left-[224px] top-[112px] w-[768px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[28px] left-[384.22px] not-italic text-[#4a5565] text-[20px] text-center text-nowrap top-0 tracking-[-0.4492px] translate-x-[-50%]">适用于各行各业，帮助企业快速构建AI应用，提升业务效率</p>
    </div>
  );
}

function Container181() {
  return (
    <div className="h-[140px] relative shrink-0 w-full" data-name="Container">
      <Container180 />
      <Heading17 />
      <Paragraph17 />
    </div>
  );
}

function Image4() {
  return <div className="absolute h-[336.25px] left-0 top-0 w-[382px]" data-name="Image (智能客服系统)" />;
}

function Container182() {
  return <div className="absolute h-[336.25px] left-0 opacity-90 top-0 w-[382px]" data-name="Container" style={{ backgroundImage: "linear-gradient(138.645deg, rgb(43, 127, 255) 0%, rgb(0, 184, 219) 100%)" }} />;
}

function Container183() {
  return (
    <div className="absolute h-[336.25px] left-px opacity-0 top-px w-[382px]" data-name="Container">
      <Image4 />
      <Container182 />
    </div>
  );
}

function Container184() {
  return <div className="absolute left-[287px] opacity-5 rounded-bl-[3.35544e+07px] size-[96px] top-px" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(43, 127, 255) 0%, rgb(0, 184, 219) 100%)" }} />;
}

function Container185() {
  return <div className="bg-gradient-to-r from-[rgba(0,0,0,0)] h-[336.25px] shrink-0 to-[rgba(0,0,0,0)] via-50% via-[rgba(255,255,255,0.1)] w-full" data-name="Container" />;
}

function Container186() {
  return (
    <div className="absolute content-stretch flex flex-col h-[336.25px] items-start left-px opacity-0 pl-[346.264px] pr-[-417.736px] py-0 top-px w-[382px]" data-name="Container">
      <Container185 />
    </div>
  );
}

function Heading18() {
  return (
    <div className="absolute h-[28px] left-[32px] top-[120px] w-[318px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[20px] text-nowrap top-0 tracking-[-0.4492px]">智能客服系统</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="absolute h-[68.25px] left-[32px] top-[160px] w-[318px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] w-[308px]">面向客服与运营部门的 7×24 小时智能服务能力，自动回答常见问题，智能转人工，提升客户满意度。</p>
    </div>
  );
}

function Icon23() {
  return (
    <div className="absolute left-[72px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p43eff00} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute h-[24px] left-[32px] top-[252.25px] w-[88px]" data-name="Button">
      <p className="absolute font-['Inter:Semi_Bold','Noto_Sans_JP:Bold',sans-serif] font-semibold leading-[24px] left-[32px] not-italic text-[#155dfc] text-[16px] text-center text-nowrap top-0 tracking-[-0.3125px] translate-x-[-50%]">了解更多</p>
      <Icon23 />
    </div>
  );
}

function Container187() {
  return <div className="absolute bg-gradient-to-r from-[#2b7fff] h-[4px] left-[32px] rounded-[3.35544e+07px] to-[#00b8db] top-[300.25px] w-[48px]" data-name="Container" />;
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <div className="absolute inset-[-5.21%_-17.71%_-30.21%_-17.71%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.3333 43.3334">
          <g filter="url(#filter0_d_2010_1524)" id="Icon">
            <path d={svgPaths.p24c3c400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="48" id="filter0_d_2010_1524" width="48" x="-2.33333" y="-2.33333">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="4" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2010_1524" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_2010_1524" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container188() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] size-[64px] top-0" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(43, 127, 255) 0%, rgb(0, 184, 219) 100%)" }}>
      <Icon24 />
    </div>
  );
}

function Container189() {
  return <div className="absolute blur-xl filter left-0 opacity-30 rounded-[16px] size-[64px] top-0" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(43, 127, 255) 0%, rgb(0, 184, 219) 100%)" }} />;
}

function Container190() {
  return <div className="absolute border-2 border-black border-solid left-0 opacity-0 rounded-[16px] size-[64px] top-0" data-name="Container" />;
}

function Container191() {
  return (
    <div className="absolute h-[64px] left-[32px] top-[32px] w-[318px]" data-name="Container">
      <Container188 />
      <Container189 />
      <Container190 />
    </div>
  );
}

function Container192() {
  return (
    <div className="absolute h-[336.25px] left-px top-px w-[382px]" data-name="Container">
      <Heading18 />
      <Paragraph18 />
      <Button1 />
      <Container187 />
      <Container191 />
    </div>
  );
}

function Container193() {
  return (
    <div className="[grid-area:1_/_1] bg-[rgba(255,255,255,0.8)] place-self-stretch relative rounded-[16px] shrink-0" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container183 />
        <Container184 />
        <Container186 />
        <Container192 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Image5() {
  return <div className="absolute h-[336.25px] left-0 top-0 w-[382px]" data-name="Image (电商智能助手)" />;
}

function Container194() {
  return <div className="absolute h-[336.25px] left-0 opacity-90 top-0 w-[382px]" data-name="Container" style={{ backgroundImage: "linear-gradient(138.645deg, rgb(0, 201, 80) 0%, rgb(0, 188, 125) 100%)" }} />;
}

function Container195() {
  return (
    <div className="absolute h-[336.25px] left-px opacity-0 top-px w-[382px]" data-name="Container">
      <Image5 />
      <Container194 />
    </div>
  );
}

function Container196() {
  return <div className="absolute left-[287px] opacity-5 rounded-bl-[3.35544e+07px] size-[96px] top-px" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 201, 80) 0%, rgb(0, 188, 125) 100%)" }} />;
}

function Container197() {
  return <div className="bg-gradient-to-r from-[rgba(0,0,0,0)] h-[336.25px] shrink-0 to-[rgba(0,0,0,0)] via-50% via-[rgba(255,255,255,0.1)] w-full" data-name="Container" />;
}

function Container198() {
  return (
    <div className="absolute content-stretch flex flex-col h-[336.25px] items-start left-px opacity-0 pl-[346.264px] pr-[-417.736px] py-0 top-px w-[382px]" data-name="Container">
      <Container197 />
    </div>
  );
}

function Heading19() {
  return (
    <div className="absolute h-[28px] left-[32px] top-[120px] w-[318px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[20px] text-nowrap top-0 tracking-[-0.4492px]">电商智能助手</p>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="absolute h-[45.5px] left-[32px] top-[160px] w-[318px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] w-[308px]">面向电商运营与营销部门的智能化业务支撑，提供商品推荐、订单处理、库存查询等全方位服务。</p>
    </div>
  );
}

function Icon25() {
  return (
    <div className="absolute left-[72px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p43eff00} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute h-[24px] left-[32px] top-[229.5px] w-[88px]" data-name="Button">
      <p className="absolute font-['Inter:Semi_Bold','Noto_Sans_JP:Bold',sans-serif] font-semibold leading-[24px] left-[32px] not-italic text-[#155dfc] text-[16px] text-center text-nowrap top-0 tracking-[-0.3125px] translate-x-[-50%]">了解更多</p>
      <Icon25 />
    </div>
  );
}

function Container199() {
  return <div className="absolute bg-gradient-to-r from-[#00c950] h-[4px] left-[32px] rounded-[3.35544e+07px] to-[#00bc7d] top-[277.5px] w-[48px]" data-name="Container" />;
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <div className="absolute inset-[-9.17%_-22.25%_-34.38%_-21.67%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.0534 45.9336">
          <g filter="url(#filter0_d_2010_1491)" id="Icon">
            <path d={svgPaths.p3030a480} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
            <path d={svgPaths.p74db380} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
            <path d={svgPaths.p34d9a600} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="48" id="filter0_d_2010_1491" width="48" x="-1.06665" y="-1.06641">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="4" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2010_1491" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_2010_1491" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container200() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] size-[64px] top-0" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 201, 80) 0%, rgb(0, 188, 125) 100%)" }}>
      <Icon26 />
    </div>
  );
}

function Container201() {
  return <div className="absolute blur-xl filter left-0 opacity-30 rounded-[16px] size-[64px] top-0" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 201, 80) 0%, rgb(0, 188, 125) 100%)" }} />;
}

function Container202() {
  return <div className="absolute border-2 border-black border-solid left-0 opacity-0 rounded-[16px] size-[64px] top-0" data-name="Container" />;
}

function Container203() {
  return (
    <div className="absolute h-[64px] left-[32px] top-[32px] w-[318px]" data-name="Container">
      <Container200 />
      <Container201 />
      <Container202 />
    </div>
  );
}

function Container204() {
  return (
    <div className="absolute h-[313.5px] left-px top-px w-[382px]" data-name="Container">
      <Heading19 />
      <Paragraph19 />
      <Button2 />
      <Container199 />
      <Container203 />
    </div>
  );
}

function Container205() {
  return (
    <div className="[grid-area:1_/_2] bg-[rgba(255,255,255,0.8)] place-self-stretch relative rounded-[16px] shrink-0" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container195 />
        <Container196 />
        <Container198 />
        <Container204 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Image6() {
  return <div className="absolute h-[336.25px] left-0 top-0 w-[382px]" data-name="Image (文档智能处理)" />;
}

function Container206() {
  return <div className="absolute h-[336.25px] left-0 opacity-90 top-0 w-[382px]" data-name="Container" style={{ backgroundImage: "linear-gradient(138.645deg, rgb(173, 70, 255) 0%, rgb(246, 51, 154) 100%)" }} />;
}

function Container207() {
  return (
    <div className="absolute h-[336.25px] left-px opacity-0 top-px w-[382px]" data-name="Container">
      <Image6 />
      <Container206 />
    </div>
  );
}

function Container208() {
  return <div className="absolute left-[287px] opacity-5 rounded-bl-[3.35544e+07px] size-[96px] top-px" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(173, 70, 255) 0%, rgb(246, 51, 154) 100%)" }} />;
}

function Container209() {
  return <div className="bg-gradient-to-r from-[rgba(0,0,0,0)] h-[336.25px] shrink-0 to-[rgba(0,0,0,0)] via-50% via-[rgba(255,255,255,0.1)] w-full" data-name="Container" />;
}

function Container210() {
  return (
    <div className="absolute content-stretch flex flex-col h-[336.25px] items-start left-px opacity-0 pl-[346.264px] pr-[-417.736px] py-0 top-px w-[382px]" data-name="Container">
      <Container209 />
    </div>
  );
}

function Heading20() {
  return (
    <div className="absolute h-[28px] left-[32px] top-[120px] w-[318px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[20px] text-nowrap top-0 tracking-[-0.4492px]">文档智能处理</p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="absolute h-[68.25px] left-[32px] top-[160px] w-[318px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] w-[308px]">面向行政办公与文档管理部门的自动化处理能力，实现文档分析、内容提取、摘要生成等智能化操作。</p>
    </div>
  );
}

function Icon27() {
  return (
    <div className="absolute left-[72px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p43eff00} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute h-[24px] left-[32px] top-[252.25px] w-[88px]" data-name="Button">
      <p className="absolute font-['Inter:Semi_Bold','Noto_Sans_JP:Bold',sans-serif] font-semibold leading-[24px] left-[32px] not-italic text-[#155dfc] text-[16px] text-center text-nowrap top-0 tracking-[-0.3125px] translate-x-[-50%]">了解更多</p>
      <Icon27 />
    </div>
  );
}

function Container211() {
  return <div className="absolute bg-gradient-to-r from-[#ad46ff] h-[4px] left-[32px] rounded-[3.35544e+07px] to-[#f6339a] top-[300.25px] w-[48px]" data-name="Container" />;
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <div className="absolute inset-[-9.38%_-13.54%_-34.38%_-13.54%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.6667 46">
          <g filter="url(#filter0_d_2010_1484)" id="Icon">
            <path d={svgPaths.p338e5800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
            <path d={svgPaths.p238aa0e0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
            <path d="M17.6667 15H15" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
            <path d="M25.6667 20.3333H15" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
            <path d="M25.6667 25.6667H15" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="48" id="filter0_d_2010_1484" width="48" x="-3.66667" y="-1">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="4" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2010_1484" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_2010_1484" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container212() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] size-[64px] top-0" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(173, 70, 255) 0%, rgb(246, 51, 154) 100%)" }}>
      <Icon28 />
    </div>
  );
}

function Container213() {
  return <div className="absolute blur-xl filter left-0 opacity-30 rounded-[16px] size-[64px] top-0" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(173, 70, 255) 0%, rgb(246, 51, 154) 100%)" }} />;
}

function Container214() {
  return <div className="absolute border-2 border-black border-solid left-0 opacity-0 rounded-[16px] size-[64px] top-0" data-name="Container" />;
}

function Container215() {
  return (
    <div className="absolute h-[64px] left-[32px] top-[32px] w-[318px]" data-name="Container">
      <Container212 />
      <Container213 />
      <Container214 />
    </div>
  );
}

function Container216() {
  return (
    <div className="absolute h-[336.25px] left-px top-px w-[382px]" data-name="Container">
      <Heading20 />
      <Paragraph20 />
      <Button3 />
      <Container211 />
      <Container215 />
    </div>
  );
}

function Container217() {
  return (
    <div className="[grid-area:1_/_3] bg-[rgba(255,255,255,0.8)] place-self-stretch relative rounded-[16px] shrink-0" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container207 />
        <Container208 />
        <Container210 />
        <Container216 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Image7() {
  return <div className="absolute h-[313.5px] left-0 top-0 w-[382px]" data-name="Image (语音交互应用)" />;
}

function Container218() {
  return <div className="absolute h-[313.5px] left-0 opacity-90 top-0 w-[382px]" data-name="Container" style={{ backgroundImage: "linear-gradient(140.625deg, rgb(255, 105, 0) 0%, rgb(251, 44, 54) 100%)" }} />;
}

function Container219() {
  return (
    <div className="absolute h-[313.5px] left-px opacity-0 top-px w-[382px]" data-name="Container">
      <Image7 />
      <Container218 />
    </div>
  );
}

function Container220() {
  return <div className="absolute left-[287px] opacity-5 rounded-bl-[3.35544e+07px] size-[96px] top-px" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 105, 0) 0%, rgb(251, 44, 54) 100%)" }} />;
}

function Container221() {
  return <div className="bg-gradient-to-r from-[rgba(0,0,0,0)] h-[313.5px] shrink-0 to-[rgba(0,0,0,0)] via-50% via-[rgba(255,255,255,0.1)] w-full" data-name="Container" />;
}

function Container222() {
  return (
    <div className="absolute content-stretch flex flex-col h-[313.5px] items-start left-px opacity-0 pl-[348.682px] pr-[-415.318px] py-0 top-px w-[382px]" data-name="Container">
      <Container221 />
    </div>
  );
}

function Heading21() {
  return (
    <div className="absolute h-[28px] left-[32px] top-[120px] w-[318px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[20px] text-nowrap top-0 tracking-[-0.4492px]">语音交互应用</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="absolute h-[45.5px] left-[32px] top-[160px] w-[318px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] w-[308px]">面向客户服务与交互场景的语音智能体解决方案，集成语音识别、语义理解、语音合成等核心能力。</p>
    </div>
  );
}

function Icon29() {
  return (
    <div className="absolute left-[72px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p43eff00} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute h-[24px] left-[32px] top-[229.5px] w-[88px]" data-name="Button">
      <p className="absolute font-['Inter:Semi_Bold','Noto_Sans_JP:Bold',sans-serif] font-semibold leading-[24px] left-[32px] not-italic text-[#155dfc] text-[16px] text-center text-nowrap top-0 tracking-[-0.3125px] translate-x-[-50%]">了解更多</p>
      <Icon29 />
    </div>
  );
}

function Container223() {
  return <div className="absolute bg-gradient-to-r from-[#ff6900] h-[4px] left-[32px] rounded-[3.35544e+07px] to-[#fb2c36] top-[277.5px] w-[48px]" data-name="Container" />;
}

function Icon30() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <div className="absolute inset-[-5.21%_-17.71%_-30.21%_-17.71%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.3333 43.3333">
          <g filter="url(#filter0_d_2010_1481)" id="Icon">
            <path d={svgPaths.p303abec0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="48" id="filter0_d_2010_1481" width="48" x="-2.33333" y="-2.33333">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="4" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2010_1481" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_2010_1481" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container224() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] size-[64px] top-0" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 105, 0) 0%, rgb(251, 44, 54) 100%)" }}>
      <Icon30 />
    </div>
  );
}

function Container225() {
  return <div className="absolute blur-xl filter left-0 opacity-30 rounded-[16px] size-[64px] top-0" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 105, 0) 0%, rgb(251, 44, 54) 100%)" }} />;
}

function Container226() {
  return <div className="absolute border-2 border-black border-solid left-0 opacity-0 rounded-[16px] size-[64px] top-0" data-name="Container" />;
}

function Container227() {
  return (
    <div className="absolute h-[64px] left-[32px] top-[32px] w-[318px]" data-name="Container">
      <Container224 />
      <Container225 />
      <Container226 />
    </div>
  );
}

function Container228() {
  return (
    <div className="absolute h-[313.5px] left-px top-px w-[382px]" data-name="Container">
      <Heading21 />
      <Paragraph21 />
      <Button4 />
      <Container223 />
      <Container227 />
    </div>
  );
}

function Container229() {
  return (
    <div className="[grid-area:2_/_1] bg-[rgba(255,255,255,0.8)] place-self-stretch relative rounded-[16px] shrink-0" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container219 />
        <Container220 />
        <Container222 />
        <Container228 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Image8() {
  return <div className="absolute h-[313.5px] left-0 top-0 w-[382px]" data-name="Image (数据分析助手)" />;
}

function Container230() {
  return <div className="absolute h-[313.5px] left-0 opacity-90 top-0 w-[382px]" data-name="Container" style={{ backgroundImage: "linear-gradient(140.625deg, rgb(246, 51, 154) 0%, rgb(255, 32, 86) 100%)" }} />;
}

function Container231() {
  return (
    <div className="absolute h-[313.5px] left-px opacity-0 top-px w-[382px]" data-name="Container">
      <Image8 />
      <Container230 />
    </div>
  );
}

function Container232() {
  return <div className="absolute left-[287px] opacity-5 rounded-bl-[3.35544e+07px] size-[96px] top-px" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(246, 51, 154) 0%, rgb(255, 32, 86) 100%)" }} />;
}

function Container233() {
  return <div className="bg-gradient-to-r from-[rgba(0,0,0,0)] h-[313.5px] shrink-0 to-[rgba(0,0,0,0)] via-50% via-[rgba(255,255,255,0.1)] w-full" data-name="Container" />;
}

function Container234() {
  return (
    <div className="absolute content-stretch flex flex-col h-[313.5px] items-start left-px opacity-0 pl-[348.682px] pr-[-415.318px] py-0 top-px w-[382px]" data-name="Container">
      <Container233 />
    </div>
  );
}

function Heading22() {
  return (
    <div className="absolute h-[28px] left-[32px] top-[120px] w-[318px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[20px] text-nowrap top-0 tracking-[-0.4492px]">数据分析助手</p>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="absolute h-[45.5px] left-[32px] top-[160px] w-[318px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] w-[308px]">面向业务分析与决策层的智能数据分析能力，提供趋势预测、报表生成，助力业务决策优化。</p>
    </div>
  );
}

function Icon31() {
  return (
    <div className="absolute left-[72px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p43eff00} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute h-[24px] left-[32px] top-[229.5px] w-[88px]" data-name="Button">
      <p className="absolute font-['Inter:Semi_Bold','Noto_Sans_JP:Bold',sans-serif] font-semibold leading-[24px] left-[32px] not-italic text-[#155dfc] text-[16px] text-center text-nowrap top-0 tracking-[-0.3125px] translate-x-[-50%]">了解更多</p>
      <Icon31 />
    </div>
  );
}

function Container235() {
  return <div className="absolute bg-gradient-to-r from-[#f6339a] h-[4px] left-[32px] rounded-[3.35544e+07px] to-[#ff2056] top-[277.5px] w-[48px]" data-name="Container" />;
}

function Icon32() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <div className="absolute inset-[0_-21.88%_-13.54%_-21.88%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 36.3333">
          <g filter="url(#filter0_d_2010_1551)" id="Icon">
            <path d={svgPaths.p31cccaa0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
            <path d={svgPaths.p3ffd88e0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="48" id="filter0_d_2010_1551" width="48" x="-1" y="-4">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="4" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2010_1551" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_2010_1551" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container236() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] size-[64px] top-0" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(246, 51, 154) 0%, rgb(255, 32, 86) 100%)" }}>
      <Icon32 />
    </div>
  );
}

function Container237() {
  return <div className="absolute blur-xl filter left-0 opacity-30 rounded-[16px] size-[64px] top-0" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(246, 51, 154) 0%, rgb(255, 32, 86) 100%)" }} />;
}

function Container238() {
  return <div className="absolute border-2 border-black border-solid left-0 opacity-0 rounded-[16px] size-[64px] top-0" data-name="Container" />;
}

function Container239() {
  return (
    <div className="absolute h-[64px] left-[32px] top-[32px] w-[318px]" data-name="Container">
      <Container236 />
      <Container237 />
      <Container238 />
    </div>
  );
}

function Container240() {
  return (
    <div className="absolute h-[313.5px] left-px top-px w-[382px]" data-name="Container">
      <Heading22 />
      <Paragraph22 />
      <Button5 />
      <Container235 />
      <Container239 />
    </div>
  );
}

function Container241() {
  return (
    <div className="[grid-area:2_/_2] bg-[rgba(255,255,255,0.8)] place-self-stretch relative rounded-[16px] shrink-0" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container231 />
        <Container232 />
        <Container234 />
        <Container240 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Image9() {
  return <div className="absolute h-[313.5px] left-0 top-0 w-[382px]" data-name="Image (企业知识库)" />;
}

function Container242() {
  return <div className="absolute h-[313.5px] left-0 opacity-90 top-0 w-[382px]" data-name="Container" style={{ backgroundImage: "linear-gradient(140.625deg, rgb(97, 95, 255) 0%, rgb(173, 70, 255) 100%)" }} />;
}

function Container243() {
  return (
    <div className="absolute h-[313.5px] left-px opacity-0 top-px w-[382px]" data-name="Container">
      <Image9 />
      <Container242 />
    </div>
  );
}

function Container244() {
  return <div className="absolute left-[287px] opacity-5 rounded-bl-[3.35544e+07px] size-[96px] top-px" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(97, 95, 255) 0%, rgb(173, 70, 255) 100%)" }} />;
}

function Container245() {
  return <div className="bg-gradient-to-r from-[rgba(0,0,0,0)] h-[313.5px] shrink-0 to-[rgba(0,0,0,0)] via-50% via-[rgba(255,255,255,0.1)] w-full" data-name="Container" />;
}

function Container246() {
  return (
    <div className="absolute content-stretch flex flex-col h-[313.5px] items-start left-px opacity-0 pl-[348.682px] pr-[-415.318px] py-0 top-px w-[382px]" data-name="Container">
      <Container245 />
    </div>
  );
}

function Heading23() {
  return (
    <div className="absolute h-[28px] left-[32px] top-[120px] w-[318px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[20px] text-nowrap top-0 tracking-[-0.4492px]">企业知识库</p>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="absolute h-[45.5px] left-[32px] top-[160px] w-[318px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-0 tracking-[-0.1504px] w-[308px]">面向内部员工与管理层的企业级知识问答系统，构建企业专属知识库，提升知识管理效率。</p>
    </div>
  );
}

function Icon33() {
  return (
    <div className="absolute left-[72px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p43eff00} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute h-[24px] left-[32px] top-[229.5px] w-[88px]" data-name="Button">
      <p className="absolute font-['Inter:Semi_Bold','Noto_Sans_JP:Bold',sans-serif] font-semibold leading-[24px] left-[32px] not-italic text-[#155dfc] text-[16px] text-center text-nowrap top-0 tracking-[-0.3125px] translate-x-[-50%]">了解更多</p>
      <Icon33 />
    </div>
  );
}

function Container247() {
  return <div className="absolute bg-gradient-to-r from-[#615fff] h-[4px] left-[32px] rounded-[3.35544e+07px] to-[#ad46ff] top-[277.5px] w-[48px]" data-name="Container" />;
}

function Icon34() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <div className="absolute inset-[-9.38%_-21.88%_-34.38%_-21.88%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
          <g filter="url(#filter0_d_2010_1563)" id="Icon">
            <path d={svgPaths.p266e8500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
            <path d={svgPaths.pf8cbdc0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
            <path d={svgPaths.p3d372380} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
            <path d="M20.3333 11H25.6667" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
            <path d="M20.3333 16.3333H25.6667" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
            <path d="M20.3333 21.6667H25.6667" id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
            <path d="M20.3333 27H25.6667" id="Vector_7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="48" id="filter0_d_2010_1563" width="48" x="-1" y="-1">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="4" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2010_1563" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_2010_1563" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container248() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] size-[64px] top-0" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(97, 95, 255) 0%, rgb(173, 70, 255) 100%)" }}>
      <Icon34 />
    </div>
  );
}

function Container249() {
  return <div className="absolute blur-xl filter left-0 opacity-30 rounded-[16px] size-[64px] top-0" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(97, 95, 255) 0%, rgb(173, 70, 255) 100%)" }} />;
}

function Container250() {
  return <div className="absolute border-2 border-black border-solid left-0 opacity-0 rounded-[16px] size-[64px] top-0" data-name="Container" />;
}

function Container251() {
  return (
    <div className="absolute h-[64px] left-[32px] top-[32px] w-[318px]" data-name="Container">
      <Container248 />
      <Container249 />
      <Container250 />
    </div>
  );
}

function Container252() {
  return (
    <div className="absolute h-[313.5px] left-px top-px w-[382px]" data-name="Container">
      <Heading23 />
      <Paragraph23 />
      <Button6 />
      <Container247 />
      <Container251 />
    </div>
  );
}

function Container253() {
  return (
    <div className="[grid-area:2_/_3] bg-[rgba(255,255,255,0.8)] place-self-stretch relative rounded-[16px] shrink-0" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container243 />
        <Container244 />
        <Container246 />
        <Container252 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container254() {
  return (
    <div className="gap-[32px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[minmax(0px,_338.25fr)_minmax(0px,_1fr)] h-[685.75px] relative shrink-0 w-full" data-name="Container">
      <Container193 />
      <Container205 />
      <Container217 />
      <Container229 />
      <Container241 />
      <Container253 />
    </div>
  );
}

function Container255() {
  return <div className="absolute bg-[rgba(255,255,255,0.1)] blur-3xl filter left-[960px] rounded-[3.35544e+07px] size-[256px] top-0" data-name="Container" />;
}

function Container256() {
  return <div className="absolute bg-[rgba(255,255,255,0.1)] blur-3xl filter left-0 rounded-[3.35544e+07px] size-[256px] top-[193.5px]" data-name="Container" />;
}

function Container257() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] h-[40px] left-0 rounded-[3.35544e+07px] top-0 w-[96px]" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[24px] left-[16px] not-italic text-[16px] text-nowrap text-white top-[8px] tracking-[-0.3125px]">客户案例</p>
    </div>
  );
}

function Heading24() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-start left-0 top-[64px] w-[536px]" data-name="Heading 3">
      <p className="basis-0 font-['Inter:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[30px] text-white tracking-[0.3955px]">某大型电商平台</p>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="absolute h-[20px] left-0 top-[124px] w-[536px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#dbeafe] text-[14px] text-nowrap top-0 tracking-[-0.1504px]">行业：大型电商平台｜应用场景：智能客服与运营支持</p>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="absolute h-[97.5px] left-0 top-[152px] w-[536px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[32.5px] left-0 not-italic text-[#eff6ff] text-[20px] top-[-1px] tracking-[-0.4492px] w-[529px]">通过接入我们的AI管理中台，该电商平台成功部署了智能客服系统，客户满意度提升40%， 人工成本降低60%，日均处理咨询量突破10万次。</p>
    </div>
  );
}

function Container258() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[40px] left-0 not-italic text-[36px] text-nowrap text-white top-0 tracking-[0.3691px]">40%</p>
    </div>
  );
}

function Container259() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#dbeafe] text-[16px] text-nowrap top-0 tracking-[-0.3125px]">满意度提升</p>
    </div>
  );
}

function Container260() {
  return (
    <div className="h-[64px] relative shrink-0 w-[80px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container258 />
        <Container259 />
      </div>
    </div>
  );
}

function Container261() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[40px] left-0 not-italic text-[36px] text-nowrap text-white top-0 tracking-[0.3691px]">60%</p>
    </div>
  );
}

function Container262() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#dbeafe] text-[16px] text-nowrap top-0 tracking-[-0.3125px]">成本降低</p>
    </div>
  );
}

function Container263() {
  return (
    <div className="h-[64px] relative shrink-0 w-[80.25px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container261 />
        <Container262 />
      </div>
    </div>
  );
}

function Container264() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[40px] left-0 not-italic text-[36px] text-nowrap text-white top-0 tracking-[0.3691px]">10万+</p>
    </div>
  );
}

function Container265() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#dbeafe] text-[16px] text-nowrap top-0 tracking-[-0.3125px]">日均咨询</p>
    </div>
  );
}

function Container266() {
  return (
    <div className="h-[64px] relative shrink-0 w-[101.297px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container264 />
        <Container265 />
      </div>
    </div>
  );
}

function Container267() {
  return (
    <div className="absolute content-stretch flex gap-[32px] h-[80px] items-start left-0 pb-0 pt-[16px] px-0 top-[273.5px] w-[536px]" data-name="Container">
      <Container260 />
      <Container263 />
      <Container266 />
    </div>
  );
}

function Container268() {
  return (
    <div className="absolute h-[353.5px] left-0 top-0 w-[536px]" data-name="Container">
      <Container257 />
      <Heading24 />
      <Paragraph24 />
      <Paragraph25 />
      <Container267 />
    </div>
  );
}

function Icon35() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3c61fe80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container269() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative rounded-[3.35544e+07px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon35 />
      </div>
    </div>
  );
}

function Container270() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#dbeafe] text-[14px] text-nowrap top-0 tracking-[-0.1504px]">平均响应时间</p>
    </div>
  );
}

function Container271() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[24px] text-nowrap text-white top-0 tracking-[0.0703px]">{`< 2秒`}</p>
    </div>
  );
}

function Container272() {
  return (
    <div className="basis-0 grow h-[52px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container270 />
        <Container271 />
      </div>
    </div>
  );
}

function Container273() {
  return (
    <div className="content-stretch flex gap-[16px] h-[52px] items-center relative shrink-0 w-full" data-name="Container">
      <Container269 />
      <Container272 />
    </div>
  );
}

function Icon36() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p13253c0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 7H22V13" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container274() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative rounded-[3.35544e+07px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon36 />
      </div>
    </div>
  );
}

function Container275() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#dbeafe] text-[14px] text-nowrap top-0 tracking-[-0.1504px]">问题解决率</p>
    </div>
  );
}

function Container276() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[24px] text-nowrap text-white top-0 tracking-[0.0703px]">95%</p>
    </div>
  );
}

function Container277() {
  return (
    <div className="basis-0 grow h-[52px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container275 />
        <Container276 />
      </div>
    </div>
  );
}

function Container278() {
  return (
    <div className="content-stretch flex gap-[16px] h-[52px] items-center relative shrink-0 w-full" data-name="Container">
      <Container274 />
      <Container277 />
    </div>
  );
}

function Icon37() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2edd0f00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container279() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative rounded-[3.35544e+07px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon37 />
      </div>
    </div>
  );
}

function Container280() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#dbeafe] text-[14px] text-nowrap top-0 tracking-[-0.1504px]">客户满意度</p>
    </div>
  );
}

function Container281() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[24px] text-nowrap text-white top-0 tracking-[0.0703px]">4.8/5.0</p>
    </div>
  );
}

function Container282() {
  return (
    <div className="basis-0 grow h-[52px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container280 />
        <Container281 />
      </div>
    </div>
  );
}

function Container283() {
  return (
    <div className="content-stretch flex gap-[16px] h-[52px] items-center relative shrink-0 w-full" data-name="Container">
      <Container279 />
      <Container282 />
    </div>
  );
}

function Container284() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[188px] items-start relative shrink-0 w-full" data-name="Container">
      <Container273 />
      <Container278 />
      <Container283 />
    </div>
  );
}

function Container285() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col h-[254px] items-start left-[584px] pb-px pt-[33px] px-[33px] rounded-[16px] top-[49.75px] w-[536px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container284 />
    </div>
  );
}

function Container286() {
  return (
    <div className="absolute h-[353.5px] left-[48px] top-[48px] w-[1120px]" data-name="Container">
      <Container268 />
      <Container285 />
    </div>
  );
}

function Container287() {
  return (
    <div className="h-[449.5px] overflow-clip relative rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="Container" style={{ backgroundImage: "linear-gradient(159.713deg, rgb(21, 93, 252) 0%, rgb(152, 16, 250) 100%)" }}>
      <Container255 />
      <Container256 />
      <Container286 />
    </div>
  );
}

function Container288() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] h-[1419.25px] items-start left-[348px] px-[32px] py-0 top-[80px] w-[1280px]" data-name="Container">
      <Container181 />
      <Container254 />
      <Container287 />
    </div>
  );
}

function ApplicationScenarios() {
  return (
    <div className="absolute h-[1579.25px] left-0 overflow-clip top-[3893.5px] w-[1976px]" data-name="ApplicationScenarios" style={{ backgroundImage: "linear-gradient(141.368deg, rgb(250, 245, 255) 0%, rgb(253, 242, 248) 50%, rgb(255, 247, 237) 100%)" }}>
      <Container178 />
      <Container179 />
      <Container288 />
    </div>
  );
}

function Container289() {
  return <div className="absolute bg-[#51a2ff] left-[494px] opacity-40 rounded-[3.35544e+07px] size-[8px] top-[40px]" data-name="Container" />;
}

function Container290() {
  return <div className="absolute bg-[#c27aff] left-[1311.34px] opacity-30 rounded-[3.35544e+07px] size-[6px] top-[128px]" data-name="Container" />;
}

function Container291() {
  return <div className="absolute bg-[#8ec5ff] left-[1478px] opacity-50 rounded-[3.35544e+07px] size-[4px] top-[80px]" data-name="Container" />;
}

function Container292() {
  return <div className="absolute bg-[#dab2ff] left-[658.66px] opacity-40 rounded-[3.35544e+07px] size-[8px] top-[236.5px]" data-name="Container" />;
}

function Container293() {
  return <div className="absolute bg-[#51a2ff] left-[395.19px] opacity-30 rounded-[3.35544e+07px] size-[6px] top-[186.25px]" data-name="Container" />;
}

function Container294() {
  return <div className="absolute bg-[#c27aff] left-[1576.81px] opacity-50 rounded-[3.35544e+07px] size-[4px] top-[124.16px]" data-name="Container" />;
}

function Container295() {
  return <div className="absolute bg-[rgba(190,219,255,0.2)] blur-3xl filter left-0 rounded-[3.35544e+07px] size-[384px] top-0" data-name="Container" />;
}

function Container296() {
  return <div className="absolute bg-[rgba(233,212,255,0.2)] blur-3xl filter left-[1592px] rounded-[3.35544e+07px] size-[384px] top-0" data-name="Container" />;
}

function Container297() {
  return (
    <div className="absolute bg-gradient-to-b from-[rgba(219,234,254,0.4)] h-[372.5px] left-0 overflow-clip to-[#ffffff] top-0 via-50% via-[rgba(250,245,255,0.3)] w-[1976px]" data-name="Container">
      <Container289 />
      <Container290 />
      <Container291 />
      <Container292 />
      <Container293 />
      <Container294 />
      <Container295 />
      <Container296 />
    </div>
  );
}

function Heading25() {
  return (
    <div className="absolute h-[48px] left-[32px] top-0 w-[832px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[48px] left-[416.33px] not-italic text-[48px] text-center text-nowrap text-white top-px tracking-[0.3516px] translate-x-[-50%]">开启企业级 AI 智能体建设</p>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="absolute h-[32.5px] left-[112px] top-[72px] w-[672px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[32.5px] left-[336.02px] not-italic text-[#dbeafe] text-[20px] text-center text-nowrap top-[-1px] tracking-[-0.4492px] translate-x-[-50%]">获取完整的 AI Agent 中台方案与行业实践</p>
    </div>
  );
}

function Icon38() {
  return (
    <div className="absolute left-[144px] size-[20px] top-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1ae0b780} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-white h-[60px] relative rounded-[8px] shrink-0 w-[204px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-semibold leading-[24px] left-[88.5px] not-italic text-[#155dfc] text-[16px] text-center text-nowrap top-[18px] tracking-[-0.3125px] translate-x-[-50%]">申请产品演示</p>
        <Icon38 />
      </div>
    </div>
  );
}

function Icon39() {
  return (
    <div className="absolute left-[146px] size-[20px] top-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1ae0b780} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="h-[60px] relative rounded-[8px] shrink-0 w-[208px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] font-semibold leading-[24px] left-[90.5px] not-italic text-[16px] text-center text-nowrap text-white top-[18px] tracking-[-0.3125px] translate-x-[-50%]">联系销售团队</p>
        <Icon39 />
      </div>
    </div>
  );
}

function Container298() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[60px] items-start justify-center left-[32px] pb-0 pt-[-1.395px] px-0 top-[152.5px] w-[832px]" data-name="Container">
      <Button7 />
      <Button8 />
    </div>
  );
}

function Container299() {
  return (
    <div className="absolute h-[212.5px] left-[540px] top-[80px] w-[896px]" data-name="Container">
      <Heading25 />
      <Paragraph26 />
      <Container298 />
    </div>
  );
}

function CtaSection() {
  return (
    <div className="absolute h-[372.5px] left-0 overflow-clip top-[5472.75px] w-[1976px]" data-name="CTASection" style={{ backgroundImage: "linear-gradient(169.324deg, rgb(21, 93, 252) 0%, rgb(20, 71, 230) 50%, rgb(130, 0, 219) 100%)" }}>
      <Container297 />
      <Container299 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-white h-[6254.25px] left-0 top-0 w-[1976px]" data-name="App">
      <FeatureShowcase />
      <EnterpriseFeatures />
      <Footer />
      <Hero />
      <ProductAdvantages />
      <ApplicationScenarios />
      <CtaSection />
    </div>
  );
}

function Icon40() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d="M16 10.6667V5.33333H10.6667" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.pbea9f00} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M2.66667 18.6667H5.33333" id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M26.6667 18.6667H29.3333" id="Vector_4" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M20 17.3333V20" id="Vector_5" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M12 17.3333V20" id="Vector_6" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text25() {
  return (
    <div className="basis-0 grow h-[28px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute bg-clip-text font-['Inter:Semi_Bold','Noto_Sans_JP:Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[20px] text-[rgba(0,0,0,0)] text-nowrap top-0 tracking-[-0.4492px]" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(21, 93, 252) 0%, rgb(152, 16, 250) 100%)" }}>
          星河Agent智能体
        </p>
      </div>
    </div>
  );
}

function Container300() {
  return (
    <div className="h-[32px] relative shrink-0 w-[194.938px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon40 />
        <Text25 />
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[64px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-0 tracking-[-0.3125px]">产品介绍</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[64px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-0 tracking-[-0.3125px]">功能特性</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[64px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-0 tracking-[-0.3125px]">应用场景</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="basis-0 bg-[#155dfc] grow h-[40px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[24px] left-[48px] not-italic text-[16px] text-center text-nowrap text-white top-[8px] tracking-[-0.3125px] translate-x-[-50%]">立即咨询</p>
      </div>
    </div>
  );
}

function Container301() {
  return (
    <div className="h-[40px] relative shrink-0 w-[384px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative size-full">
        <Link3 />
        <Link4 />
        <Link5 />
        <Button9 />
      </div>
    </div>
  );
}

function Container302() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container300 />
      <Container301 />
    </div>
  );
}

function App1() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[rgba(239,246,255,0.8)] h-[65px] items-start left-0 pb-px pt-0 px-[380px] to-[rgba(250,245,255,0.8)] top-0 via-50% via-[rgba(255,255,255,0.9)] w-[1976px]" data-name="App">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Container302 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="智能体">
      <App />
      <App1 />
    </div>
  );
}