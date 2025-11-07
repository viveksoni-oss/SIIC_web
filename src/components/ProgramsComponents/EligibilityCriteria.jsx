import HighlightedText from "./../Utility Components/HighlightedText";

function EligibilityCriteria({ eligibility }) {
  return (
    <div className="col-span-3 p-4 sm:p-6 relative mb-5">
      <h1 className="text-[28px] sm:text-[32px] lg:text-[40px] font-thin mb-6 sm:mb-8">
        <HighlightedText size="inherit" weight={700}>
          Eligibility{" "}
        </HighlightedText>
        Criteria
      </h1>

      <div className="max-w-full xl:max-w-[800px]  space-y-3 sm:space-y-4">
        {eligibility?.map((criteria, idx) => (
          <div
            className="flex gap-2 sm:gap-3 text-sm sm:text-base items-center "
            key={idx}
          >
            <img
              src="/Icons/list-icon.svg"
              alt="list icon"
              className="flex-shrink-0"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <p className="line-clamp-3 leading-relaxed">{criteria}</p>
          </div>
        ))}
      </div>

      {/* Divider line - Hidden on small screens, visible on lg+ */}
      <div className="hidden lg:block border-b-1 absolute -bottom-10 left-0 xl:left-20 border-black/50 w-full xl:w-[415px] opacity-25"></div>
    </div>
  );
}

export default EligibilityCriteria;
