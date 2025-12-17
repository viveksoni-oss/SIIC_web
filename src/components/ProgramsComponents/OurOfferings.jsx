import { IconsMap } from "@/lib/iconsMap";
import HighlightedText from "../Utility Components/HighlightedText";

export default function OurOfferings({ offerings }) {
  return (
    <div className="col-span-3 space-y-6 sm:space-y-8 justify-items-start relative">
      <h1 className="text-[28px] sm:text-[32px] lg:text-[40px] font-thin mb-4 sm:mb-7">
        Our <HighlightedText weight={700}>Offerings</HighlightedText>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
        {offerings?.map(({ icon, title, description }, idx) => {
          // 1. Get the component from the map using the string key
          const IconComponent = IconsMap[icon];

          return (
            <div
              className="w-full bg-secondary-gray/30 rounded-2xl p-5 flex justify-center items-center flex-col gap-4 sm:gap-6 min-h-[200px] hover:bg-secondary-gray/40 transition-colors"
              key={title + idx}
            >
              {/* 2. Render it as a Component if it exists */}
              {IconComponent ? (
                <IconComponent
                  className="w-12 h-12 text-primary-highlight"
                  strokeWidth={1.5}
                />
              ) : null}

              <div className="flex flex-col gap-2 text-center">
                <h3 className="text-sm sm:text-base font-semibold">{title}</h3>
                <p className="text-xs sm:text-sm text-gray-700 line-clamp-3">
                  {description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="hidden lg:block border-b-1 absolute -bottom-10 left-0 xl:left-20 border-black/50 w-full xl:w-[415px] opacity-25"></div>
    </div>
  );
}
