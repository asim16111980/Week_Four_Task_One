const ServiceCard = ({ img, alt, title, subTitle }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* <div className="size-20 flex justify-center items-center rounded-full border-[20px] border-[#2F2E30] border-opacity-30 bg-black"> */}
      {/* <div className="size-14 flex justify-center items-center bg-black rounded-full"> */}
      {/* </div> */}
      {/* </div> */}
      <div className="size-20 flex justify-center items-center rounded-full bg-[#2F2E30] bg-opacity-30">
        <div className="size-[58px] rounded-full bg-black flex justify-center items-center">
          <img src={img} alt={alt} />
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-lg font-semibold text-black">{title}</h2>
        <p className="text-sm text-black">{subTitle}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
