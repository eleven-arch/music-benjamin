// @flow strict

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import { FiCalendar, FiEdit3, FiHeart, FiTrendingUp } from "react-icons/fi";
import GlowCard from "../../helper/glow-card";

const contentSteps = [
  { label: "Plan", detail: "Content calendar", icon: FiCalendar },
  { label: "Create", detail: "Posts & media", icon: FiEdit3 },
  { label: "Engage", detail: "Audience replies", icon: FiHeart },
  { label: "Track", detail: "Performance", icon: FiTrendingUp },
];

function ContentWorkflowVisual() {
  return (
    <div className="relative w-full max-w-[420px] mx-auto rounded-lg border border-[#22304f] bg-[#0f1629] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.16),transparent_32%),radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.18),transparent_34%)]" />
      <div className="relative">
        <p className="text-xs uppercase tracking-[0.2em] text-[#16f2b3]">Content Workflow</p>
        <h3 className="mt-2 text-xl font-semibold text-white">From plan to publish</h3>
        <p className="mt-2 text-sm leading-6 text-[#c8d1e5]">
          A simple cycle for managing social content across music and entertainment channels.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3">
          {contentSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.label}
                className="rounded-lg border border-[#263756] bg-[#111d34]/95 p-4"
              >
                <Icon className="text-[#22d3ee]" size={20} />
                <p className="mt-3 text-sm font-semibold text-white">{step.label}</p>
                <p className="mt-1 text-xs text-[#9ca8c3]">{step.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
        priority
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Content Experience
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <ContentWorkflowVisual />
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {
                experiences.map(experience => (
                  <GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
                    <div className="p-3 relative">
                      <Image
                        src="/blur-23.svg"
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                          <BsPersonWorkspace size={36} />
                        </div>
                        <div>
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                            {experience.area}
                          </p>
                          <p className="mt-3 text-xs sm:text-sm leading-6 text-[#c8d1e5]">
                            {experience.summary}
                          </p>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
