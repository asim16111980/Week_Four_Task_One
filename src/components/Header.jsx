import { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faTimes, faThLarge } from '@fortawesome/free-solid-svg-icons';
import Icon from './Icon';
import SearchBox from './SearchBox';
import { SearchBoxContext } from '../context/SearchBoxProvider';

const Header = () => {
    const [isNavMenuOpened, setIsNavMenuOpened] = useState(false);
    const [isCatsMenuOpened, setIsCatsMenuOpened] = useState(false);
    const { state, dispatch } = useContext(SearchBoxContext);

    return (
        <header className="w-full h-auto flex flex-col items-stretch relative shadow">
            <div className='h-12 flex items-center justify-between relative px-2'>
                <h1 className="font-bold text-black text-lg">
                    Exclusive</h1>
                <div className='ml-auto flex items-center gap-2'>
                    <button type='button' onClick={() => dispatch({ type: "TOGGLE" })}><FontAwesomeIcon icon={faSearch} /></button>
                    <button type='button'><Icon icon="../public/icons/IWishlist.svg" badgeCount="1" /></button>
                    <button type='button'><Icon icon="../public/icons/ICart.svg" badgeCount="2" /></button>
                </div>
                <div>{state.isSearchBoxOpened && <SearchBox />}</div>
            </div>
            <div className='flex-1 flex items-center gap-2 py-2'>
                <button type="button" className='w-8 h-8 text-xl text-black md:hidden mr-auto' onClick={() => setIsNavMenuOpened(!isNavMenuOpened)}><FontAwesomeIcon icon={isNavMenuOpened ? faTimes : faBars} /></button>
                <button type='button'><Icon icon="../public/icons/IUser.svg" /></button>
                <button type="button" className='w-8 h-8 text-xl text-black md:hidden ' onClick={() => setIsCatsMenuOpened(!isCatsMenuOpened)}><FontAwesomeIcon icon={isCatsMenuOpened ? faTimes : faThLarge} /></button>
            </div>
            <nav className={`w-full h-auto md:gap-6 absolute md:static top-full left-0 text-black bg-white transition-all duration-300 ease-in-out shadow  ${isNavMenuOpened ? "block" : "hidden"
                }`}>
                <ul className={`flex flex-col bg-transparent md:flex-row `}>
                    <li className='p-2 md:py-0 text-sm hover:bg-[#7D8184] transition-all duration-300 ease-in-out'><a href="/">Home</a></li>
                    <li className='p-2 md:py-0 text-sm hover:bg-[#7D8184] transition-all duration-300 ease-in-out'><a href="/contact">Contact</a></li>
                    <li className='p-2 md:py-0 text-sm hover:bg-[#7D8184] transition-all duration-300 ease-in-out'><a href="/about">About</a></li>
                    <li className='p-2 md:py-0 text-sm hover:bg-[#7D8184] transition-all duration-300 ease-in-out'><a href="/signup"></a>Sign Up</li>
                </ul>
            </nav>
        </header>

    )
}

export default Header