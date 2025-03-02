const TopHeader = () => {
    return (
        <div className='font-["Poppins"] w-full flex items-center justify-center min-h-12 bg-black text-[#fafafa] p-2'>
            <div className='flex flex-wrap justify-center items-center gap-2'>
                <div className='flex flex-wrap gap-2'>
                    <p className='text-xs'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                    <a href='#' className='text-xs font-semibold underline'>ShopNow</a>
                </div>
                <select name='langs' className='bg-transparent text-white text-xs outline-0 *:text-black'>
                    <option value="en" className="" defaultValue>English</option>
                    <option value="ar">Arabic</option>
                </select>
            </div>
        </div>
    )
}

export default TopHeader