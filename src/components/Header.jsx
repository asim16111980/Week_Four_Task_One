import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faTimes, faThLarge, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Icon from './Icon';
import SearchBox from './SearchBox';
import { SearchBoxContext } from '../context/SearchBoxProvider';
import { MenusContext } from '../context/MenusProvider';

const Header = () => {
    const { isSearchBoxOpened, setIsSearchBoxOpened } = useContext(SearchBoxContext);
    const { state, dispatch } = useContext(MenusContext);

    return (
        <header className="w-full h-auto flex flex-col items-stretch relative shadow z-20">
            <div className='h-12 flex items-center justify-between relative px-2'>
                <h1 className="font-bold text-black text-lg">
                    Exclusive</h1>
                <div className='ml-auto flex items-center gap-2'>
                    <button type='button' onClick={() => setIsSearchBoxOpened(true)}><FontAwesomeIcon icon={faSearch} /></button>
                    <button type='button'><Icon icon="../public/icons/IWishlist.svg" badgeCount="1" /></button>
                    <button type='button'><Icon icon="../public/icons/ICart.svg" badgeCount="2" /></button>
                </div>
                <div>{isSearchBoxOpened && <SearchBox />}</div>
            </div>
            <div className='flex-1 flex items-center gap-2 py-2'>
                <button type="button" className='w-8 h-8 text-xl text-black md:hidden mr-auto' onClick={() => dispatch({ currentMenu: "NavMenuOpened" })}><FontAwesomeIcon icon={state.NavMenuOpened ? faTimes : faBars} /></button>
                <button type='button'><Icon icon="../public/icons/IUser.svg" /></button>
                <button type="button" className='w-8 h-8 text-xl text-black md:hidden ' onClick={() => dispatch({currentMenu:"CatsMenuOpened"})}><FontAwesomeIcon icon={state.CatsMenuOpened ? faTimes : faThLarge} /></button>
            </div>
            <nav className={`w-full h-auto md:gap-6 absolute md:static top-full left-0 text-black bg-white transition-all duration-300 ease-in-out shadow  ${state.NavMenuOpened ? "block" : "hidden"
                }`}>
                <ul className="flex flex-col bg-transparent md:flex-row">
                    <li className='p-2 md:py-0 text-sm cursor-pointer'><a href="/">Home</a></li>
                    <li className='p-2 md:py-0 text-sm cursor-pointer'><a href="/contact">Contact</a></li>
                    <li className='p-2 md:py-0 text-sm'><a href="/about">About</a></li>
                    <li className='p-2 md:py-0 text-sm cursor-pointer'><a href="/signup"></a>Sign Up</li>
                </ul>
            </nav>
            <div className={`w-full h-auto md:gap-6 absolute md:static top-full left-0 text-black bg-white transition-all duration-300 ease-in-out shadow  ${state.CatsMenuOpened ? "block" : "hidden"
                }`}>
                <ul className="flex flex-col bg-transparent md:flex-row">
                    <li className='p-2 md:py-0 text-sm cursor-pointer flex items-center justify-between'>
                        <a href="/">
                            Woman’s Fashion
                        </a>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </li>
                    <li className='p-2 md:py-0 text-sm cursor-pointer flex items-center justify-between'>
                        <a href="/">
                            Men’s Fashion
                        </a>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </li>
                    <li className='p-2 md:py-0 text-sm cursor-pointer'>
                        <a href="/">
                            Electronics
                        </a>
                    </li>
                    <li className='p-2 md:py-0 text-sm cursor-pointer'>
                        <a href="/">
                            Home & Lifestyle
                        </a>
                    </li>
                    <li className='p-2 md:py-0 text-sm cursor-pointer'>
                        <a href="/">
                            Medicine
                        </a>
                    </li>
                    <li className='p-2 md:py-0 text-sm cursor-pointer'>
                        <a href="/">
                            Sports & Outdoor
                        </a>
                    </li>
                    <li className='p-2 md:py-0 text-sm cursor-pointer'>
                        <a href="/">
                            Baby’s & Toys
                        </a>
                    </li>
                    <li className='p-2 md:py-0 text-sm cursor-pointer'>
                        <a href="/">
                            Groceries & Pets
                        </a>
                    </li>
                    <li className='p-2 md:py-0 text-sm cursor-pointer'>
                        <a href="/">
                            Health & Beauty
                        </a>
                    </li>
                </ul>
            </div>
        </header>

    )
}

export default Header