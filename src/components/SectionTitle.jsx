const SectionTitle = ({ title, subTitle = null }) => {
  return (
    <div className="flex flex-col items-center sm:items-start gap-2 sm:gap-6">
      <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-4 text-[#DB4444]">
        <span className="w-10 h-5 bg-[#DB4444] rounded sm:w-5 sm:h-10"></span>
        <h2 className="font-poppins text-base font-semibold">{title}</h2>
      </div>
      {subTitle && (
        <p className="font-semibold text-2xl sm:text-4xl">{subTitle}</p>
      )}
    </div>
  );
};

export default SectionTitle;
