import React from "react";

function OurUps() {
  return (
    <section className=" mt-32 flex flex-col md:flex-row justify-between  items-center w-full relative py-8">
      {/* Text Block */}
      <div className="flex flex-col items-start max-w-2xl">
        <h1 className="text-[40px] font-thin mb-6">
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
      <div className="mt-25 pr-15">
        <div className="w-[400px] h-[242px] border-2 border-secondary-gray mx-0 md:mx-12 rounded-2xl relative">
          <div className=" px-4 py-2 aspect-square w-[180px] bg-secondary rounded-lg absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 flex justify-center items-center text-center flex-col text-white gap-2">
            <img
              src="/WhoWeAre/icons/Frame-1.svg"
              width={75}
              height={75}
              alt=""
            />
            <p>Multidisciplinary Team</p>
          </div>
          <div className=" px-4 py-2  aspect-square w-[180px] bg-secondary rounded-lg  absolute left-0 bottom-0 translate-y-1/2 -translate-x-1/2 flex justify-center items-center text-center flex-col text-white gap-2">
            {" "}
            <img
              src="/WhoWeAre/icons/Frame-3.svg"
              width={75}
              height={75}
              alt=""
            />
            <p>
              Mentored <br /> 200+
            </p>
          </div>
          <div className=" px-4 py-2  aspect-square w-[180px] bg-secondary rounded-lg absolute right-0 bottom-0 translate-y-1/2 translate-x-1/2 flex justify-center items-center text-center flex-col text-white gap-2">
            {" "}
            <img
              src="/WhoWeAre/icons/Frame-2.svg"
              width={75}
              height={75}
              alt=""
            />
            <p>Unmatched Industrial Connects</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurUps;
