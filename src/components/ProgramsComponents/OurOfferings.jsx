import HighlightedText from "../Utility Components/HighlightedText";

export default function OurOfferings({ offerings }) {
  return (
    <div className="col-span-3 p-4 sm:p-6 space-y-6 sm:space-y-8 relative">
      <h1 className="text-[28px] sm:text-[32px] lg:text-[40px] font-thin mb-4 sm:mb-7">
        Our{" "}
        <HighlightedText weight={700}>
          Offerings
        </HighlightedText>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
        {offerings?.map(({ icon, title, description }, idx) => (
          <div
            className="w-full bg-secondary-gray/30 rounded-2xl p-5 flex justify-center items-center flex-col gap-4 sm:gap-6 min-h-[200px] hover:bg-secondary-gray/40 transition-colors"
            key={title + idx}
          >
            <img
              src={`/ProgramBrief/icons/${icon}.svg`}
              alt={`icon-${title}`}
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <div className="flex flex-col gap-2 text-center">
              <h3 className="text-sm sm:text-base font-semibold">{title}</h3>
              <p className="text-xs sm:text-sm text-gray-700 line-clamp-3">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Divider line - Hidden on small screens, visible on lg+ */}
      <div className="hidden lg:block border-b-1 absolute -bottom-10 left-0 xl:left-20 border-black/50 w-full xl:w-[415px] opacity-25"></div>
    </div>
  );
}
