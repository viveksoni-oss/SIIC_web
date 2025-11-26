export const NewPageLayout = ({ heading, description, children }) => {
  return (
    <div className="min-h-screen  -mb-20 bg-white relative rounded-b-2xl px-4 sm:px-8 sm: py-8 pb-16">
      {/* Gradient top bar */}
      <div className="relative mx-auto bg-white   h-[203px] rounded-2xl overflow-hidden  flex justify-start items-center  ">
        {/* Blurred backdrop */}
        <div className="backdrop-blur-xl absolute z-20 w-full h-full"></div>
        {/* Background image */}
        <img
          src="/knowUsGradient.svg"
          className="absolute z-10 object-cover w-full h-full"
          alt=""
        />
        <div className="relative z-30  text-white p-8">
          <h2 className="text-[36px] xl:text-[56px] font-medium mb-6">
            {" "}
            {heading}
          </h2>
          {/* Add BoardOfDirectors content/components here */}
          <p className="text-xs md:text-base -mt-2 md:mt-0">{description}</p>
        </div>
      </div>
      {children}
    </div>
  );
};
