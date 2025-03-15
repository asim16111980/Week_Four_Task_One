import Button from '../components/Button';
import Carousel from '../components/Carousel';
import CategoryPhone from '../components/CategoryPhone';
import FlashSaleTimer from '../components/FlashSaleTimer';
import NavigationButtons from '../components/NavigationButtons';
import SectionHeader from '../components/SectionHeader';
import { MenusContext } from '../context/MenusProvider';
import { useContext } from 'react';
import FlatCard from '../components/FlatCard';
import DiscCard from '../components/DiscCard';
import BlackCard from '../components/BlackCard';

const Home = () => {
    const { state, dispatch } = useContext(MenusContext);
    return (
        <div className='w-full h-screen' onClick={() => dispatch({ currentMenu: null })}>
            <Carousel />
            <div className='flex flex-col gap-8'>
                <SectionHeader title={"Today’s"} subTitle={"Flash Sales"} />
                <FlashSaleTimer />
                <NavigationButtons />
                <FlatCard img={"/public/images/cart/g92-2-500x500 1.png"} alt={""} title={"HAVIT HV-G92 Gamepad"} netPrice={120} rating={3.5} rateCount={88} productColorOptions={[{ id: "red", color: "red", state: false }, { id: "blue", color: "blue", state: false }]} />
                <DiscCard img={"/public/images/cart/g92-2-500x500 1.png"} alt={""} discount={40} title={"HAVIT HV-G92 Gamepad"} netPrice={120} totalPrice={160} rating={3.5} rateCount={88} productColorOptions={[{ id: "red", color: "red", state: false }, { id: "blue", color: "blue", state: false }]} />
                <Button style={"px-12 py-4"} value={"View All Products"} />
                <Button style={"px-4 py-2"} value={"View All Products"} />
                <Button filled={false} style={"px-12 py-4"} value={"View All Products"} />
                <CategoryPhone img={"/public/images/phone/Category-CellPhone.svg"} title={"Phones"} style={"w-20 h-24"} />
                <BlackCard cardStyle={""} img={"/public/images/cart/g92-2-500x500 1.png"} alt={""}/>
            </div>
        </div>
    )
}

export default Home