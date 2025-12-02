/** Reusable Heading component */
function SectionHeading({
  children,
  // Default: 32px (mobile) -> 36px (tablet) -> 40px (desktop)
  size = "text-[32px] md:text-[36px] lg:text-[40px]",
  className = "",
}) {
  return (
    <h1 className={`${size} font-thin leading-tight mb-6 ${className}`}>
      {children}
    </h1>
  );
}

export default SectionHeading;
