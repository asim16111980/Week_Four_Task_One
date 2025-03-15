
const BlackCard = ({ cardStyle, img, alt, imgStyle }) => {
    return (
        <div className={`${cardStyle}relative size-96 flex flex-col items-center bg-black py-3 gap-3`}>
             <div className="">
                <img src={img} alt={alt} className={`${imgStyle} w-full h-64 object-cover`} />
            </div>
            <div className="absolute bottom-8 left-8 p-2 flex flex-col gap-3 text-[#fafafa]">
                <h2 className='text-xl font-semibold'>
                    PlayStation 5
                </h2>
                <p className="text-xs">
                    Black and White version of the PS5 coming out on sale.
                </p>
                <a href="/" className="font-['Poppins'] flex items-center gap-2 text-white text-sm font-medium underline underline-offset-4">
                    Shop Now
                </a>
            </div>
        </div>
    )
}

export default BlackCard