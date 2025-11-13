/** Reusable Heading component */
function SectionHeading({ children, size = "text-[40px]", className = "" }) {
  // Usage: <SectionHeading>My Section <HighlightedText>Text</HighlightedText></SectionHeading>
  return (
    <h1 className={`${size} font-thin leading-tight mb-6 ${className}`}>
      {children}
    </h1>
  );
}
export default SectionHeading