const ServiceCard = ({ img, alt, title, desc }) => {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="size-20 flex justify-center items-center rounded-full bg-[#2F2E30] bg-opacity-30">
        <div className="size-[58px] rounded-full bg-black flex justify-center items-center">
          <img src={img} alt={alt} />
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 text-center">
        <h2 className="text-base md:text-xl font-semibold text-black">{title}</h2>
        <p className="text-xs lg:text-sm text-black">{desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
