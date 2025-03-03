import { SearchBoxContext } from "../context/SearchBoxProvider";
import Icon from "./Icon";
import {  useContext } from 'react';

const SearchBox = () => {
  // const [isClosed, setIsClosed] = useState(false);
  const { state, dispatch } = useContext(SearchBoxContext)
  return (
    <div className={`absolute w-full h-full flex items-center gap-2 inset-0 bg-white p-1 ${!state.isSearchBoxOpened ? "hidden" : "block"}`}><button type="button" onClick={() => dispatch({ type: "TOGGLE" })}><Icon icon="../public/icons/IArrowLeft.svg" /> </button><input type="search" className='flex-1 h-full px-2 border-2 rounded-3xl' placeholder="What are you looking for?" /></div>
  )
}

export default SearchBox