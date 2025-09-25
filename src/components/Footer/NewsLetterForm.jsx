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
        <button className="border-b-2 border-[#848c8e] hover:border-primary-highlight transition-colors duration-200">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default NewsLetterForm;
