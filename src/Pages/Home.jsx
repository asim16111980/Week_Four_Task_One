import Carousel from '../components/Carousel';
import FlashSaleTimer from '../components/FlashSaleTimer';
import NavigationButtons from '../components/NavigationButtons';
import SectionHeader from '../components/SectionHeader';
import { MenusContext } from '../context/MenusProvider';
import { useContext } from 'react';


const Home = () => {
    const { state, dispatch } = useContext(MenusContext);
    return (
        <div className='w-full h-screen' onClick={() => dispatch({ currentMenu: null })}>
            <Carousel />
            <div className='flex flex-col gap-8 px-2 py-4'>
                <section>
                    <header className='flex flex-col items-center gap-3'>
                        <SectionHeader title="Today’s" subTitle="Flash Sales" />
                        <FlashSaleTimer />
                        <NavigationButtons />
                    </header>

               </section>
            </div>
        </div>
    )
}

export default Home