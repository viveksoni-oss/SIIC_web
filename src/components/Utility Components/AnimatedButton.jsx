function AnimatedButton({ children }) {
  return (
    <div className="animated-button px-[12px] py-[10px] sm:px-[30px] sm:py-[14px] max-h-[46px] flex items-center justify-center rounded-full ">
      {children}
    </div>
  );
}

export default AnimatedButton;
