import Button from "./Button";

const CardHeader = ({
  cardImg,
  altText,
  hasBadge = false,
  discount = null,
  badgeBgColor,
  headerIcons = [],
  buttonIcon = null,
  buttonValue,
}) => {
  const badgeText = discount ? discount && `-${discount}%` : "New";
  return (
    <div className="w-full h-[250px] md:h-60 bg-[#F5F5F5] rounded relative flex justify-center pt-6">
      <div className="size-44 md:size-40 flex items-center justify-center">
        <img src={cardImg} alt={altText} loading="lazy" />
      </div>
      <div className="absolute inset-0 w-full h-full bg-transparent flex flex-col justify-between">
        <div className="flex justify-between items-start p-3">
          {hasBadge && (
            <span
              className={`${badgeBgColor} text-neutral-50 text-xs px-3 py-1 rounded`}
            >
              {badgeText}
            </span>
          )}
          <div className="flex flex-col gap-2 items-center ml-auto">
            {headerIcons.map((icon) => {
              return (
                <span className="rounded-full p-2 text-xl bg-white">
                  {icon}
                </span>
              );
            })}
            {/* <FontAwesomeIcon
              icon={faHeart}
              className="rounded-full p-2 text-xl bg-white"
            />
            <FontAwesomeIcon
              icon={faEye}
              className="rounded-full p-2 text-xl bg-white"
            /> */}
          </div>
        </div>
        {/* <button
          type="button"
          className="hidden group-hover:block w-full h-10 bg-black rounded-b text-base font-medium text-white"
        >
          Add To Cart
              </button> */}
        <Button value={buttonValue} icon={buttonIcon} />
      </div>
    </div>
  );
};

export default CardHeader;
