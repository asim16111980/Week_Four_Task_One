import Carousel from '../components/Carousel';
import { MenusContext } from '../context/MenusProvider';
import { useContext } from 'react';

const Home = () => {
    const { state, dispatch } = useContext(MenusContext);
    return (
        <div className='w-full h-screen' onClick={() => dispatch({ currentMenu: null })}>
            <Carousel />
        </div>
    )
}

export default Home