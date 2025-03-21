const Icon = ({ icon,alt, width=24, height=24,style="", badgeCount = null }) => {
  return (
    <div
      className={`relative ${style}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <img src={icon} alt={alt} loading="lazy"/>
      {badgeCount && (
        <span className="w-4 h-4 absolute -top-1 left-3 rounded-full bg-[#DB4444] text-[#fafafa] text-xs">
          {badgeCount}
        </span>
      )}
    </div>
  );
};

export default Icon;
