import { Lightbulb, Linkedin } from "lucide-react";

function NewTeamCard({ data }) {
  const { name, role, domain, image, linkedin } = data;

  return (
    <div className="group/card m-10  w-[320px] rounded-md overflow-hidden bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1">
      <div className="flex h-[320px] items-center justify-center overflow-hidden bg-neutral-50">
        <img
          className="max-h-[320px] translate-y-4 transition-transform duration-500 ease-in-out group-hover/card:scale-110"
          src={image || "/Rajesh ji.png"}
          alt={name}
          loading="lazy"
        />
      </div>

      <div className="rounded-b-md border border-t-0 border-gray-200 p-6 transition-colors duration-500 ease-in-out group-hover/card:bg-primary">
        <h1 className="text-2xl font-bold text-[#1f1f1f]/90 transition-colors group-hover/card:text-white">
          {name}
        </h1>

        <p className="mt-1 text-sm text-gray-500 transition-colors group-hover/card:text-neutral-100">
          {role}
        </p>

        <div className="mt-6 flex items-center justify-between border-t border-gray-200 py-2 text-xs capitalize text-neutral-600 transition-colors group-hover/card:text-white">
          <div className="flex max-w-[200px] items-center gap-2">
            <Lightbulb className="shrink-0 text-primary-highlight transition-transform group-hover/card:scale-105" />
            <span className="text-[12px] font-semibold wrap-anywhere">{domain}</span>
          </div>

          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="mr-2 inline-flex items-center text-indigo-800 hover:text-indigo-900"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default NewTeamCard;
