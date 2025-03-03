const Icon = ({ icon, badgeCount }) => {
  return (
    <div className="relative w-6 h-6"><img src={icon} alt="Icon" />{badgeCount && (<span className="w-4 h-4 absolute -top-1 left-3 rounded-full bg-[#DB4444] text-[#fafafa] text-xs">{badgeCount}</span>)}</div>
  )
}

export default Icon