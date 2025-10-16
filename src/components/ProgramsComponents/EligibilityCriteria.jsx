import HighlightedText from "./../Utility Components/HighlightedText";
function EligibilityCriteria({ eligibility }) {
  return (
    <div className="col-span-3 p-6">
      <h1 className="text-[40px] font-thin mb-8">
        <HighlightedText size={"40px"} weight={700}>
          Eligibility{" "}
        </HighlightedText>
        Criteria
      </h1>
      <div className="max-w-[800px] space-y-2">
        {eligibility.map((criteria, idx) => (
          <div className="flex gap-3 text-base" key={idx}>
            <img src="/Icons/list-icon.svg" alt="list icon" />
            <p className="line-clamp-2">{criteria}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default EligibilityCriteria;
