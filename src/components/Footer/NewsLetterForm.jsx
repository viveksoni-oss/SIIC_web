function NewsLetterForm() {
  const inputStyle =
    "px-4 py-2 bg-white min-w-80 border-primary rounded-lg text-base font-[500] focus:outline-none focus:ring-3 focus:ring-primary-highlight focus:ring-offset-0 transition-all duration-300 text-black";

  return (
    <div className="flex flex-col gap-4 justify-self-start  w-full lg:justify-self-end  ">
      <h3 className="text-lg lg:text-xl font-extrabold capitalize mb-2 md:self-center lg:self-auto lg:mb-6">
        SignUp for <br className="hidden lg:block" /> News Letter
      </h3>
      <div className="flex gap-5 flex-col  items-start md:items-end lg:items-start">
        <input type="text" placeholder="Name" className={inputStyle} />
        <input type="text" className={inputStyle} placeholder="Email" />
        <div className="flex justify-end min-w-80 ">
          <button className="relative transition-color duration-300 hover:text-primary-highlight group/link">
            Subscribe
            <span
              className={`absolute left-0 -bottom-0.5 w-full group-hover/link:-bottom-[2px] bg-[#9ca3a5] group-hover/link:bg-white h-[1px] `}
            ></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsLetterForm;
