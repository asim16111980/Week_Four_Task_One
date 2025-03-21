const BlackCard = ({title, desc, img, alt}) => {
  return (
    <div
      className="relative size-96 flex flex-col items-center bg-black pt-10"
    >
      <div className="size-full flex justify-end items-center px-6">
        <img
          src={img}
          alt={alt}
          className="max-h-full object-cover"
        />
      </div>
      <div className="absolute w-56 bottom-8 left-8 p-2 flex flex-col gap-3 text-[#fafafa]">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-xs">{desc}</p>
        <a
          href="/"
          className="font-['Poppins'] flex items-center gap-2 text-white text-sm font-medium underline underline-offset-4"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default BlackCard;
