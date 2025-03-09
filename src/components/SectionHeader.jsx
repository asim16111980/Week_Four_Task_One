const SectionHeader = ({ title, subTitle }) => {
  return (
    <div className="">
      <div className="w-24 px-4 py-1 bg-[#DB4444] rounded mb-3">
        <span className="hidden bg-[#DB4444]"></span>
        <h2 className='font-["poppins"] text-lg text-white'>{title}</h2>
      </div>
        <p className="font-semibold text-2xl">{subTitle}</p>
    </div>
  );
};

export default SectionHeader;
