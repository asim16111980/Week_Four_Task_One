const Icon = ({
  icon,
  width = 24,
  height = 24,
  className = "",
  badgeCount = null,
}) => {
  return (
    <span
      tabIndex="-1"
      className={`flex relative transition-all duration-300 ease-in-out ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <img src={icon} loading="lazy" className="pointer-events-none" />
      {badgeCount && (
        <span className="w-4 h-4 absolute -top-1 left-3 rounded-full bg-[#DB4444] text-[#fafafa] text-xs">
          {badgeCount}
        </span>
      )}
    </span>
  );
};

export default Icon;
