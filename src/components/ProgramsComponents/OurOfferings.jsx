import HighlightedText from "../Utility Components/HighlightedText";

export default function OurOfferings({ offerings }) {
  return (
    <div className="col-span-3 p-6 space-x-8 relative">
      <h1 className="text-[40px] font-thin mb-7">
        Our{" "}
        <HighlightedText size={"40px"} weight={700}>
          Offerings
        </HighlightedText>
      </h1>

      <div className="flex justify-center items-end gap-[70px] flex-wrap">
        {offerings.map(({ icon, title, description }, idx) => (
          <div
            className="w-60 h-50 bg-secondary-gray/30 rounded-2xl p-5 flex justify-center items-center flex-col gap-6"
            key={title + idx}
          >
            <img src={`/ProgramsDashboard/${icon}.png`} alt={`icon-${title}`} />
            <p className="text-xs text-center line-clamp-2">{description}</p>
          </div>
        ))}
      </div>
      {/* <div className="border-b-1 container absolute bottom-10 left-20 border-black/50 w-[415px] opacity-25 mt-10 place-items-start"></div> */}
    </div>
  );
}
