import React from "react";

function OurUps() {
  return (
    <section className="flex flex-col md:flex-row gap-16 justify-evenly items-center w-full relative py-8">
      {/* Text Block */}
      <div className="flex flex-col items-start max-w-2xl">
        <h1 className="text-[40px] font-thin mb-4">
          Our <span className="font-bold text-primary-highlight">UP's</span>
        </h1>
        <p className="  text-[#1f1f1f] text-[20px] font-medium opacity-75 mb-6 leading-[150%] tracking-wide">
          We empower Innovation and entrepreneurship for a better tomorrow.
        </p>
        <ol className="list-decimal text-[16px] text-[#1f1f1f] font-normal space-y-4 ml-8">
          <li>
            The journey of SIIC, at IIT Kanpur, began when a team of creative
            visionaries came together to build an ecosystem with an objective to
            build with a purpose. From then to now, the very dynamic SIIC
            continues to evolve and grow just like another startup!
          </li>
          <li>
            SIIC existed when incubation was in its infancy, seed-funding did
            not exist, mentorship was neither easily available nor popular. A
            bunch of misfits with an out-of-the-box vision—we thought, why not
            overcome the obstacles that we are facing by helping others overcome
            them too?
          </li>
          <li>
            Our journey of growth has been a challenging one, with myriad
            lessons along the way. We are a group of thinkers and
            problem-solvers, continuously monitoring startups' needs.
          </li>
        </ol>
      </div>
      {/* Illustration Block */}
      <div>
        <div className="w-[400px] h-[242px] border-2 border-black mx-0 md:mx-12 rounded-2xl bg-secondary-gray/30">
          <div className="aspect-square w-[180px] bg-secondary rounded-lg "></div>
          <div className="aspect-square w-[180px] bg-secondary rounded-lg  absolute"></div>
          <div className="aspect-square w-[180px] bg-secondary rounded-lg absolute"></div>
        </div>
      </div>
    </section>
  );
}

export default OurUps;
