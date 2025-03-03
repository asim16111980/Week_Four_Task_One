import { useState,useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Icon from './Icon';
import SearchBox from './SearchBox';
import { SearchBoxContext} from '../context/SearchBoxProvider';

const Header = () => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const { state, dispatch } = useContext(SearchBoxContext);
  
    return (
   
            <header className="w-full h-[38px] flex items-center justify-between p-2 relative">
                <h1 className="font-bold text-black text-lg">
                    Exclusive</h1>
                <div className='flex-1 flex items-center justify-end gap-1'>
                    <button type='button' onClick={() => dispatch({type:"TOGGLE"})}><FontAwesomeIcon icon={faSearch} /></button>
                    <button type='button'><Icon icon="../public/icons/IWishlist.svg" badgeCount="1" /></button>
                    <button type='button'><Icon icon="../public/icons/ICart.svg" badgeCount="2" /></button>
                    <button type='button'><Icon icon="../public/icons/IUser.svg" /></button>
                    <button type="button" className='w-8 h-8 text-xl text-black md:hidden ml-0' onClick={() => setIsMenuOpened(!isMenuOpened)}><FontAwesomeIcon icon={isMenuOpened ? faTimes : faBars} /></button>
                </div>
                {state.isSearchBoxOpened && <SearchBox />}
                <nav className={`w-full h-auto md:gap-6 absolute md:static top-[38px] left-0 text-black bg-white transition-all duration-300 ease-in-out shadow  ${isMenuOpened ? "block" : "hidden"
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