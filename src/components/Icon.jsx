const Icon = ({
  icon,
  className = "size-6",
  badgeCount = null,
}) => {
  return (
    <span
      className={`flex relative transition-transform duration-300 ease-in-out caret-transparent ${className}`}
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
