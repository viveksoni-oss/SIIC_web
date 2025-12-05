import React from "react";

function OurUps() {
  return (
    <section className="w-full py-12 lg:py-24 ">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
        {/* Text Block */}
        <div className="flex flex-col items-start max-w-2xl w-full order-2 lg:order-1">
          <h1 className="text-3xl lg:text-5xl font-thin mb-6 text-gray-900">
            Our <span className="font-bold text-primary-highlight">UP's</span>
          </h1>
          <p className="text-gray-800 text-lg lg:text-xl font-medium opacity-75 mb-8 leading-relaxed tracking-wide">
            We empower Innovation and entrepreneurship for a better tomorrow.
          </p>
          <ol className="list-decimal text-base lg:text-lg text-gray-700 font-normal space-y-6 ml-6 marker:text-gray-900 marker:font-medium">
            <li>
              The journey of SIIC, at IIT Kanpur, began when a team of creative
              visionaries came together to build an ecosystem with an objective
              to build with a purpose. From then to now, the very dynamic SIIC
              continues to evolve and grow just like another startup!
            </li>
            <li>
              SIIC existed when incubation was in its infancy, seed-funding did
              not exist, mentorship was neither easily available nor popular. A
              bunch of misfits with an out-of-the-box vision—we thought, why not
              overcome the obstacles that we are facing by helping others
              overcome them too?
            </li>
            <li>
              Our journey of growth has been a challenging one, with myriad
              lessons along the way. We are a group of thinkers and
              problem-solvers, continuously monitoring startups' needs.
            </li>
          </ol>
        </div>

        {/* Illustration Block */}
        <div className="relative w-full flex justify-center order-2 mt-12 lg:mt-0">
          {/* 
             Central Dashed Box 
             - Mobile: w-[220px] to fit 320px screens when children protrude
             - Desktop: w-[400px]
          */}
          <div className="relative w-[240px] h-[200px]  lg:w-[400px] lg:h-[280px] border-2 border-dashed border-gray-300 rounded-2xl shrink-0">
            {/* Top Card: Multidisciplinary Team */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 
                            flex flex-col justify-center items-center text-center gap-2
                            bg-secondary-blue text-white rounded-xl shadow-lg
                            w-32 h-28 lg:w-48 lg:h-48 p-2 lg:p-4"
            >
              <img
                src="/WhoWeAre/icons/Frame-1.svg"
                alt="Team Icon"
                className="w-8 h-8 lg:w-16 lg:h-16 object-contain"
              />
              <p className="text-xs lg:text-base font-medium leading-tight">
                Multidisciplinary Team
              </p>
            </div>

            {/* Bottom Left Card: Mentored */}
            <div
              className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 
                            flex flex-col justify-center items-center text-center gap-2
                            bg-secondary-blue text-white rounded-xl shadow-lg
                            w-28 h-28 lg:w-48 lg:h-48 p-2 lg:p-4"
            >
              <img
                src="/WhoWeAre/icons/Frame-3.svg"
                alt="Mentored Icon"
                className="w-8 h-8 lg:w-16 lg:h-16 object-contain"
              />
              <p className="text-xs lg:text-base font-medium leading-tight">
                Mentored <br /> 200+
              </p>
            </div>

            {/* Bottom Right Card: Industrial Connects */}
            <div
              className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 
                            flex flex-col justify-center items-center text-center gap-2
                            bg-secondary-blue text-white rounded-xl shadow-lg
                            w-28 h-28 lg:w-48 lg:h-48 p-2 lg:p-4"
            >
              <img
                src="/WhoWeAre/icons/Frame-2.svg"
                alt="Connects Icon"
                className="w-8 h-8 lg:w-16 lg:h-16 object-contain"
              />
              <p className="text-xs lg:text-base font-medium leading-tight">
                Unmatched Industrial Connects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurUps;
