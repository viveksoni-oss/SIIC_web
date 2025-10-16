function ArrowBg({ color = "#2d415c", size = "100", customStyle = {} }) {
  return (
    <div
      style={{
        height: `${size}px`,
        aspectRatio: "1 / 1",
        backgroundColor: color,
        clipPath: "polygon(100% 0, 0 0, 100% 100%)",
        transform: "rotateY(180deg)",

        ...customStyle,
      }}
    ></div>
  );
}
export default ArrowBg;
