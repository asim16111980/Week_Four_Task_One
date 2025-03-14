import Button from '../components/Button';
import Carousel from '../components/Carousel';
import CategoryPhone from '../components/CategoryPhone';
import FlashSaleTimer from '../components/FlashSaleTimer';
import ProductCard from '../components/ProductCard';
import NavigationButtons from '../components/NavigationButtons';
import SectionHeader from '../components/SectionHeader';
import { MenusContext } from '../context/MenusProvider';
import { useContext } from 'react';

const Home = () => {
    const { state, dispatch } = useContext(MenusContext);
    return (
        <div className='w-full h-screen' onClick={() => dispatch({ currentMenu: null })}>
            <Carousel />
            <div className='flex flex-col gap-8'>
                <SectionHeader title={"Today’s"} subTitle={"Flash Sales"} />
                <FlashSaleTimer />
                <NavigationButtons />
                <ProductCard img={"/public/images/cart/g92-2-500x500 1.png"} discount={40} discountStyle={"bg-[#DB4444]"} title={"HAVIT HV-G92 Gamepad"} netPrice={120} totalPrice={160} stars={5} ratings={88} />
                <Button style={"px-12 py-4"} value={"View All Products"}/>
                <Button style={"px-4 py-2"} value={"View All Products"}/>
                <Button filled={false} style={"px-12 py-4"} value={"View All Products"} />
                <CategoryPhone img={"/public/images/phone/Category-CellPhone.svg"} title={"Phones"} style={"w-20 h-24"}/>
            </div>
        </div>
    )
}

export default Home