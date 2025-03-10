import Carousel from '../components/Carousel';
import FlashSaleTimer from '../components/FlashSaleTimer';
import FlatCard from '../components/FlatCard';
import NavigationButtons from '../components/NavigationButtons';
import SectionHeader from '../components/SectionHeader';
import { MenusContext } from '../context/MenusProvider';
import { useContext } from 'react';

const Home = () => {
    const { state, dispatch } = useContext(MenusContext);
    return (
        <div className='w-full h-screen' onClick={() => dispatch({ currentMenu: null })}>
            <Carousel />
            <div>
                <SectionHeader title={"Today’s"} subTitle={"Flash Sales"} />
                <FlashSaleTimer />
                <NavigationButtons />
                <FlatCard img={"/public/images/cart/g92-2-500x500 1.png"} discount={40} title={"HAVIT HV-G92 Gamepad"} netPrice={120 } totalPrice={160} stars={5} ratings={88}/>
            </div>
        </div>
    )
}

export default Home