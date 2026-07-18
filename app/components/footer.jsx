// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { IoLogoGithub } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";

function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-[#22d3ee] to-transparent"></div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row items-center justify-between text-center md:text-left">
          <p className="text-sm">
            © 2026 Benjamin Jasinski. Senior Software Engineer.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href={`mailto:${personalData.email}`}
              aria-label="Email Benjamin Jasinski"
            >
              <MdAlternateEmail
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={40}
              />
            </Link>
            <Link
              target="_blank"
              href={personalData.github}
              aria-label="Benjamin Jasinski on GitHub"
            >
              <IoLogoGithub
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={40}
              />
            </Link>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Footer;
