// @flow strict

import { personalData } from "@/utils/data/personal-data";
import { FiActivity, FiCloud, FiCpu, FiDatabase, FiGitBranch, FiShield } from "react-icons/fi";

const systemNodes = [
  { label: "APIs", icon: FiCpu, position: "left-6 top-8" },
  { label: "CI/CD", icon: FiGitBranch, position: "right-6 top-8" },
  { label: "Search", icon: FiDatabase, position: "left-8 bottom-24" },
  { label: "Ops", icon: FiActivity, position: "right-8 bottom-24" },
];

function EngineeringVisual() {
  return (
    <div className="relative w-full max-w-[420px] aspect-square rounded-lg border border-[#22304f] bg-[#0f1629] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.35)] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_75%_75%,rgba(99,102,241,0.22),transparent_34%)]" />
      <div className="absolute inset-x-8 top-1/2 h-px bg-gradient-to-r from-transparent via-[#22d3ee] to-transparent opacity-70" />
      <div className="absolute inset-y-8 left-1/2 w-px bg-gradient-to-b from-transparent via-[#6366f1] to-transparent opacity-70" />
      <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#263756] bg-[#101b31]/90 shadow-[0_0_60px_rgba(34,211,238,0.18)]" />
      <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#22d3ee]/40 bg-[#0d1224] flex items-center justify-center">
        <div className="text-center">
          <FiCloud className="mx-auto text-[#22d3ee]" size={30} />
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.22em] text-white">Platform</p>
        </div>
      </div>

      {systemNodes.map((node) => {
        const Icon = node.icon;
        return (
          <div key={node.label} className={`absolute ${node.position} w-24 rounded-lg border border-[#263756] bg-[#111d34]/95 p-3 text-center backdrop-blur`}>
            <Icon className="mx-auto text-[#22d3ee]" size={21} />
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#dce6f8]">{node.label}</p>
          </div>
        );
      })}

      <div className="absolute bottom-5 left-6 right-6 rounded-lg border border-[#263756] bg-[#0b1020]/90 p-3">
        <div className="flex items-center gap-2 text-[#9ca8c3]">
          <FiShield className="text-[#fbbf24]" size={16} />
          <span className="text-[11px] uppercase tracking-[0.14em]">Secure production systems</span>
        </div>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            About
          </p>
          <div className="space-y-5 text-gray-200 text-sm lg:text-lg leading-7">
            <p>{personalData.description}</p>
            <p>
              I have worked across insurance and healthcare technology environments where reliability, traceability, secure integrations, and careful release management matter. I am comfortable owning work from requirements and API design through implementation, review, deployment, monitoring, and production support.
            </p>
          </div>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <EngineeringVisual />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
