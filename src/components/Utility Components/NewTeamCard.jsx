import useIsMobile from "@/Hooks/useIsMobile";
import { Lightbulb, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import LinkedinIcon from "../IconComponents/LinkedinIcon";

function NewTeamCard({ data, imageFilter, imageF }) {
  const { name, role, domain, image, linkedin } = data;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group/card m-10  w-[320px] -mb-5 rounded-md overflow-hidden bg-white  transition-transform duration-500 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex h-[320px] items-end justify-center overflow-hidden bg-white">
        <img
          className="max-h-[320px] w-full transition-transform duration-500 ease-in-out group-hover/card:scale-110"
          src={imageFilter || imageF ? image : "/Rajesh ji.png"}
          alt={name}
          loading="lazy"
        />
      </div>

      <div
        className={`rounded-b-md border border-t-transparent border-gray-100 p-6 transition-colors duration-500 ease-in-out group-hover/card:bg-primary 
        }`}
      >
        <h1 className="text-2xl font-bold text-[#1f1f1f]/90 transition-colors group-hover/card:text-white">
          {name}
        </h1>

        <p className="mt-1 text-sm text-gray-500 transition-colors group-hover/card:text-neutral-100">
          {role}
        </p>

        <div className="mt-6 flex items-center justify-between border-t border-gray-200 py-2 text-xs capitalize text-neutral-600 transition-colors group-hover/card:text-white">
          <div className="flex max-w-[200px] items-center gap-2">
            <Lightbulb className="shrink-0 text-primary-highlight transition-transform group-hover/card:scale-105 group-hover/card:text-orange-200" />
            <span className="text-[12px] font-semibold wrap-anywhere">
              {domain}
            </span>
          </div>

          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="mr-2 inline-flex items-center text-indigo-800 hover:text-indigo-900"
            >
              <LinkedinIcon isHovered={!isHovered}></LinkedinIcon>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default NewTeamCard;
