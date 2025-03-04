import { useContext } from "react";
import { SearchBoxContext } from '../context/SearchBoxProvider';
import Icon from "./Icon";

const SearchBox = () => {
  const { state, dispatch } = useContext(SearchBoxContext);
  return (
    <div className={`absolute inset-0 bg-white  ${state.isSearchBoxOpened ? "block" : "hidden"}`} ><div className="w-full h-full flex items-center gap-1 p-1"><button type="button" onClick={() => dispatch({ type: "TOGGLE" })}> <Icon icon="../public/icons/IArrowLeft.svg" /> </button><input type="search" className='h-full text-sm text-black placeholder:text-[#A0A3BD] border-2 rounded-3xl px-3 outline-0 bg-[#D9DBE9]' placeholder="What are you looking for?" /></div></div>
  )
}

export default SearchBox