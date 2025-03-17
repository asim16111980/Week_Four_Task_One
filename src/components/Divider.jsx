const Divider = ({ type = "hr", thickness }) => {
  return (
    <div
      className={` border-[0.5px] border-black border-opacity-30 w-full ${
        type === "vr" ? "rotate-90 h-full" : "w-full"
      }`}
      style={{
        borderWidth: `${thickness}px`,
        transform: thickness < 1 ? "scaleY(0.5)" : "none",
      }}
    ></div>
  );
};

export default Divider;
