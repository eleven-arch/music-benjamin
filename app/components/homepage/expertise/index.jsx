// @flow strict

import { expertiseData } from "@/utils/data/expertise";
import { FiActivity, FiCloud, FiCpu, FiShield } from "react-icons/fi";

const icons = [FiCpu, FiCloud, FiActivity, FiShield];

function Expertise() {
  return (
    <section id="expertise" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#22d3ee] to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-20 h-[2px] bg-[#1a2443]"></span>
          <span className="bg-[#10172d] border border-[#24304f] w-fit text-white p-2 px-5 text-xl rounded-md">
            Expertise
          </span>
          <span className="w-20 h-[2px] bg-[#1a2443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {expertiseData.map((item, index) => {
          const Icon = icons[index];
          return (
            <article key={item.title} className="rounded-lg border border-[#1f2a44] bg-[#0f1629] p-5 transition-all duration-300 hover:border-[#22d3ee] hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="rounded-md border border-[#263756] bg-[#111d34] p-3 text-[#22d3ee]">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#c8d1e5]">{item.description}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Expertise;
