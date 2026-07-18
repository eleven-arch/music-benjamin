// @flow strict

function page() {
  return (
    <div className="py-16">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            Writing
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="mx-auto max-w-2xl rounded-lg border border-[#1f2a44] bg-[#0f1629] p-6 text-center">
        <p className="text-[#c8d1e5]">
          Technical writing and engineering notes will be added here when available.
        </p>
      </div>
    </div>
  );
};

export default page;
