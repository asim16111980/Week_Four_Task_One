// const Children = ({ icon, badgeCount = null }) => {
//   return (
//     <span className="size-full flex relative transition-transform duration-300 ease-in-out caret-transparent">
//       <img src={icon} loading="lazy" className="pointer-events-none" />
//       {badgeCount && (
//         <span className="w-4 h-4 absolute -top-1 left-3 rounded-full bg-[#DB4444] text-neutral-50 text-xs">
//           {badgeCount}
//         </span>
//       )}
//     </span>
//   );
// };

// const Icon = ({
//   type = "button",
//   onClick = null,
//   href = "",
//   icon,
//   className = "size-6",
//   badgeCount = null,
// }) => {
//   return (
//     (type === "button" && (
//       <button type="button" onClick={onClick} className={className}>
//         <Children icon={icon} badgeCount={badgeCount} />
//       </button>
//     )) ||
//     (type === "link" && (
//       <a href={href} className={className}>
//         <Children icon={icon} badgeCount={badgeCount} />
//       </a>
//     ))
//   );
// };

// export default Icon;

const Children = ({ icon, badgeCount = null }) => {
  return (
    <span className="size-full flex justify-center items-center relative transition-transform duration-300 ease-in-out">
      {icon}
      {badgeCount > 0 && (
        <span className="w-4 h-4 absolute -top-1 left-3 flex items-center justify-center rounded-full bg-[#DB4444] text-neutral-50 text-xs">
          {badgeCount}
        </span>
      )}
    </span>
  );
};

const Icon = ({
  type = "button",
  onClick = null,
  href = "#",
  icon,
  className = "",
  badgeCount = null,
}) => {
  return (
    <>
      {type === "button" ? (
        <button type="button" onClick={onClick} className={className}>
          <Children icon={icon} badgeCount={badgeCount} />
        </button>
      ) : (
        <a href={href} className={className}>
          <Children icon={icon} badgeCount={badgeCount} />
        </a>
      )}
    </>
  );
};

export default Icon;
