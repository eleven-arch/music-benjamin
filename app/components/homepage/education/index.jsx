// @flow strict
import { engineeringImpact } from "@/utils/data/engineering-impact";
import Image from "next/image";
import { FaBullhorn, FaChartLine, FaComments, FaShareAlt } from "react-icons/fa";
import GlowCard from "../../helper/glow-card";

const impactIcons = {
  1: FaShareAlt,
  2: FaBullhorn,
  3: FaComments,
  4: FaChartLine,
}

function EngineeringImpact() {
  return (
    <div id="engineering-impact" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
        priority
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Content Impact
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {
            engineeringImpact.map((impact) => {
              const Icon = impactIcons[impact.id] || FaShareAlt;

              return (
                <GlowCard key={impact.id} identifier={`impact-${impact.id}`}>
                  <div className="p-5 relative min-h-[190px] text-white">
                    <Image
                      src="/blur-23.svg"
                      alt="Hero"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 left-0 opacity-70"
                    />
                    <div className="relative flex h-full flex-col gap-5">
                      <div className="flex items-center gap-4">
                        <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                          <Icon size={34} />
                        </div>
                        <p className="text-base sm:text-xl font-medium uppercase">
                          {impact.title}
                        </p>
                      </div>
                      <p className="text-sm sm:text-base leading-7 text-[#c8d1e5]">
                        {impact.summary}
                      </p>
                    </div>
                  </div>
                </GlowCard>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default EngineeringImpact;
