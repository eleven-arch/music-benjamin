// @flow strict

function ProjectCard({ project }) {
  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full overflow-hidden">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>

      <div className="px-5 lg:px-8 py-5 border-b border-indigo-900/80">
        <p className="text-xs uppercase tracking-[0.18em] text-[#16f2b3] mb-2">Featured Work</p>
        <h3 className="text-lg lg:text-xl font-semibold text-white">
          {project.name}
        </h3>
      </div>

      <div className="px-5 lg:px-8 py-5 lg:py-7 space-y-5">
        <p className="text-sm lg:text-base leading-7 text-[#c8d1e5]">
          {project.description}
        </p>

        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-[#9ca8c3] mb-3">Focus areas</p>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#263756] bg-[#111d34] px-3 py-1.5 text-xs text-[#dce6f8]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
