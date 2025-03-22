const Divider = ({ type = "hr", thickness = 1, className = "" }) => {
  return (
    <div
      className={`border-black border-opacity-30 ${className} ${
        type === "vr" ? "border-l" : "border-t"
      }`}
      style={{
        borderWidth: `${thickness}px`,
      }}
    ></div>
  );
};

export default Divider;
