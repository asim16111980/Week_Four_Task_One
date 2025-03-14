
const ProductColorOption = ({ id, bgColor, onCheck, state }) => {
  return (
    <div className={`relative size-5 rounded-full ${state ? "border-2 border-black" : "border-0"}`} style={{ backgroundColor: state ? "transparent" : bgColor }}>
      <span className="absolute size-3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black" style={{ backgroundColor: state ? bgColor : "transparent" }} ></span>
      <input id={id} type="radio" name="color" className="appearance-none absolute inset-0 z-10 size-full bg-transparent rounded-full" onChange={onCheck} />
    </div>
  )
}

export default ProductColorOption