function NewsLetterForm() {
  const inputStyle =
    "px-4 py-2 bg-white min-w-80 border-primary rounded-lg text-base font-[500] focus:outline-none focus:ring-3 focus:ring-primary-highlight focus:ring-offset-0 transition-all duration-300 text-black";

  return (
    <div className="flex flex-col gap-4 justify-self-end  ">
      <h3 className="text-xl font-extrabold w-40 capitalize mb-6">
        Signup for NewsLetter
      </h3>
      <div className="flex gap-5 flex-col">
        <input type="text" placeholder="Name" className={inputStyle} />
        <input type="text" className={inputStyle} placeholder="Email" />
      </div>
      <div className="flex justify-end ml-auto">
        <button className="relative transition-color duration-300 hover:text-primary-highlight group/link">
          Subscribe
          <span
            className={`absolute left-0 -bottom-0.5 w-full group-hover/link:-bottom-[2px] bg-[#9ca3a5] group-hover/link:bg-white h-[1px] `}
          ></span>
        </button>
      </div>
    </div>
  );
}

export default NewsLetterForm;
