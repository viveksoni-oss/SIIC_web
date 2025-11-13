function StepsCard({
  step = 1,
  title = "Submit EOI",
  description = "Express interest online to begin the mentor onboarding process officially.",
  className = "",
}) {
  return (
    <div
      className={`w-full max-w-[410px] min-h-[210px] px-6 sm:px-8 rounded-2xl shadow-md border border-secondary-gray bg-white flex flex-col justify-center items-center gap-0 ${className}`}
    >
      <div className="text-secondary text-[48px] sm:text-[64px] font-extrabold mb-2">
        {step}
      </div>
      <div className="font-bold text-base sm:text-[18px] text-center mb-1">
        {title}
      </div>
      <p className="text-sm sm:text-[15px] text-center px-2 line-clamp-2 text-gray-700">
        {description}
      </p>
    </div>
  );
}
export default StepsCard;
