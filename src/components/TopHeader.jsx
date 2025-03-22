const TopHeader = () => {
  return (
    <div className='font-["Poppins"] w-full flex items-center justify-end min-h-12 bg-black text-[#FAFAFA] p-2 lg:px-16 xl:px-32 mb-4'>
      <div className="flex flex-wrap gap-2 justify-center items-center w-full lg:w-10/12 md:justify-between text-xs md:text-base">
          <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <a
            href="#"
            className="ms-2 font-semibold underline hover:text-gray-300 transition"
          >
            Shop Now
          </a></p>
        <select
          name="langs"
          className="bg-transparent text-white outline-0 cursor-pointer *:text-black"
          aria-label="Select Language"
        >
          <option value="en" defaultValue>
            English
          </option>
          <option value="ar">Arabic</option>
        </select>
      </div>
    </div>
  );
};

export default TopHeader;
