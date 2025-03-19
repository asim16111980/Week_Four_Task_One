const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex flex-col items-center gap-1 text-[#DB4444]">
        <span className="w-10 h-5 bg-[#DB4444] rounded"></span>
        <h2 className='font-["poppins"] text-lg font-semibold'>{title}</h2>
      </div>
        <p className="font-semibold text-2xl">{subTitle}</p>
    </div>
  );
};

export default SectionTitle;
