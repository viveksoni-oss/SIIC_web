import { useEffect, useState } from "react";
import {
  Sprout,
  BriefcaseBusiness,
  BrainCircuit,
  Recycle,
  Shield,
  CircuitBoard,
  Banknote,
  Stethoscope,
  Scale,
  Users,
  Cpu,
  Megaphone,
} from "lucide-react"; // remove Lightbulb import

import LinkedinIcon from "../IconComponents/LinkedinIcon";
// Exact domain-to-icon mapping
const domainIconMap = {
  // Vertical / sector domains
  "AgriTech / CSR": Sprout,
  "Business Development & CSR": BriefcaseBusiness,
  "COE - MedTech & AI / ML": BrainCircuit,
  "CleanTech/GreenTech/SocialTech/MSME": Recycle,
  "Defence and Aerospace/ Cyber Security/ FinTech": Shield,
  "IOT/Electrical & Electronics/ Manufacturing": CircuitBoard,
  Investment: Banknote,
  "MedTech/BioTech": Stethoscope,
  "Portfolio Compliance / Govt. Business Development": Scale,

  // Functional / internal domains
  Administration: Scale,
  "Finance & Accounts": Banknote,
  "Human Resource": Users,
  "Information Technology": Cpu,
  "Legal & Secretarial": Scale,
  "Media & Communication Team": Megaphone,
};

const getDomainIcon = (domain) => {
  return domainIconMap[domain] || BriefcaseBusiness; // fallback icon
};

function NewTeamCard({ data, imageFilter, imageF }) {
  const { name, role, domain, image, linkedin } = data;
  const [isHovered, setIsHovered] = useState(false);

  const DomainIcon = getDomainIcon(domain);

  return (
    <div
      className="group/card m-10 w-[320px] -mb-5 rounded-md overflow-hidden bg-white transition-transform duration-500 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex h-[320px] items-end justify-center overflow-hidden border-neutral-200  rounded-t-md  bg-gradient-to-b from-gray-50 via-gray-100 to-transparent ">
        <img
          className=" max-h-[320px] w-full transition-transform duration-700 ease-in-out group-hover/card:scale-110"
          src={image }
          alt={name}
          loading="lazy"
        />
      </div>

      <div
        className={`rounded-b-md border group-hover/card:border-primary border-gray-100 p-6 transition-colors duration-500 ease-in-out group-hover/card:bg-primary`}
      >
        <h1 className="text-2xl font-bold text-[#1f1f1f]/90 transition-colors group-hover/card:text-white">
          {name}
        </h1>

        <p className="mt-1 text-sm text-gray-500 transition-colors group-hover/card:text-neutral-100">
          {role}
        </p>

        <div className="mt-6 flex items-center justify-between border-t border-gray-200 py-2 text-xs capitalize text-neutral-600 transition-colors group-hover/card:text-white">
          <div className="flex max-w-[200px] items-center gap-2">
            {/* Domain-based icon */}
            {DomainIcon && (
              <DomainIcon
                className="shrink-0 text-primary-highlight transition-transform group-hover/card:scale-105 group-hover/card:text-orange-200"
                size={18}
              />
            )}
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
              <LinkedinIcon isHovered={!isHovered} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default NewTeamCard;
