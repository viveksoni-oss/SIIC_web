function AnimatedButton({ children }) {
  return (
    <div className="animated-button px-[30px] py-[14px] max-h-[46px] flex items-center justify-center rounded-full">
      {children}
    </div>
  );
}

export default AnimatedButton;
