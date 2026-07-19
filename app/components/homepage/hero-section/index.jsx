// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { FiCheckCircle, FiMusic, FiShare2 } from "react-icons/fi";

const focusSkills = [
  "Content Planning",
  "Post Creation",
  "Page Management",
  "Audience Engagement",
  "Performance Tracking",
  "Multimedia",
];

const highlights = [
  "Music, entertainment & online media",
  "Remote content collaboration",
  "Digital media services for U.S.-based companies",
];

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
        priority
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#22d3ee]">
            {personalData.designation}
          </p>
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[3.2rem] lg:leading-[4rem]">
            Managing and publishing social content for music, entertainment, and online media.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#c8d1e5] lg:text-lg">
            {personalData.title}
          </p>

          <div className="my-10 flex items-center gap-5">
            {personalData.linkedIn && (
              <Link
                href={personalData.linkedIn}
                target='_blank'
                className="transition-all text-[#22d3ee] hover:scale-125 duration-300"
              >
                <BsLinkedin size={30} />
              </Link>
            )}
          </div>

          <div className="flex items-center gap-3">
            <Link href="#contact" className="bg-gradient-to-r to-[#22d3ee] from-[#6366f1] p-[1px] rounded-full transition-all duration-300 hover:from-[#22d3ee] hover:to-[#6366f1]">
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Start a conversation</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            {personalData.resume && (
              <Link className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-[#22d3ee] to-[#6366f1] px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button" target="_blank" href={personalData.resume}
              >
                <span>Get Resume</span>
                <MdDownload size={16} />
              </Link>
            )}
          </div>

        </div>

        <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] overflow-hidden">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>

          <div className="px-5 lg:px-8 py-5 flex items-center justify-between gap-3 border-b border-indigo-900/80">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#263756] bg-[#111d34] text-[#22d3ee]">
                <FiShare2 size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#9ca8c3]">Content Snapshot</p>
                <p className="text-sm font-semibold text-white">{personalData.name}</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2 rounded-full border border-[#263756] bg-[#111d34] px-3 py-1.5 text-[#fbbf24]">
              <FiMusic size={14} />
              <span className="text-[11px] uppercase tracking-[0.14em]">Music & Media</span>
            </div>
          </div>

          <div className="px-5 lg:px-8 py-6 space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#16f2b3] mb-2">Role</p>
              <p className="text-lg font-semibold text-white">{personalData.designation}</p>
              <p className="mt-2 text-sm leading-6 text-[#c8d1e5]">
                Planning, creating, and publishing social content across platforms.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#16f2b3] mb-3">What I do</p>
              <div className="flex flex-wrap gap-2">
                {focusSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#263756] bg-[#111d34] px-3 py-1.5 text-xs text-[#dce6f8]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3 rounded-lg border border-[#263756] bg-[#0b1020]/80 p-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-[#c8d1e5]">
                  <FiCheckCircle className="mt-0.5 shrink-0 text-[#22d3ee]" size={16} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
