import Icon from "./Icon"

const SearchBox = () => {
  return (
    <div className="absolute w-full h-full inset-0"><Icon icon="../public/icons/IArrowLeft.svg"/> <input type="search" className='' placeholder="What are you looking for?"/></div>
  )
}

export default SearchBox