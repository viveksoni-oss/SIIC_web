import { mentorsData } from "../../data/MentorsData.js";
function MentorsCard({ mentor }) {
  return (
    <div className="bg-secondary-gray/31 pl-20 p-4 text-xs relative mt-4   container max-h-[195px] group ml-20 rounded-2xl max-w-[21.875rem]">
      <div className="absolute -left-18 top-10  transition-transform transform duration-500">
        <div className="relative">
          <img
            src={mentor.image}
            alt={mentor.name.toLowerCase().replace(/\s+/g, "-")}
          />
          <div className="h-[95px] w-[95px] -left-4 -bottom-4 border-l-5 border-b-5 absolute border-primary"></div>
        </div>
      </div>

      <div>
        <div className="">
          <div className="text-sm">
            <h2 className="font-semibold text-base text-primary-highlight">
              {(mentor.suffix != undefined
                ? mentor.suffix
                : mentor.gender == "male"
                ? "Mr"
                : "Mrs") +
                ". " +
                mentor.name}
            </h2>
            <div className="flex justify-between">
              <div className="text-[10px] font-medium">
                <p className="uppercase">{mentor.position}</p>
                <p className="text-gray-400">{mentor.company}</p>
              </div>
              <div className="flex gap-3">
                <div className="border-l-2 rounded-4xl border-secondary-blue w-0 min-h-[30px]"></div>
                <img
                  src="/Mentors/icons/wave.svg"
                  className="transition-transform ease-in-out transform duration-500 group-hover:animate-wave "
                  alt="waving hand"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-2">
          <h3 className="text-sm font-semibold text-gray-700">Strengths</h3>
          <ul className="space-y-2">
            <li className="list-disc ml-4 text-[12px] text-gray-600 p-1 pt-0">
              {mentor.strengths}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// Container component to render multiple mentor cards
function MentorsSection({ domain, search }) {
  let filteredMentors = mentorsData.filter((data) =>
    domain === "All" ? true : data.domains.includes(domain)
  );
  filteredMentors = filteredMentors.filter((data) =>
    data.name.toLowerCase().includes(search.trim().toLowerCase())
  );
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2  gap-15   justify-items-center p-8  h-[750px] ">
      {filteredMentors.length == 0 ? (
        <div className="sticky top-0 flex items-center justify-center h-[200px] text-gray-400 font-semibold text-4xl w-full col-span-2 capitalize bg-white">
          No mentors available with {domain} Domain
        </div>
      ) : (
        filteredMentors.map((mentor) => (
          <MentorsCard key={mentor.id} mentor={mentor} />
        ))
      )}
    </div>
  );
}
export default MentorsSection;
