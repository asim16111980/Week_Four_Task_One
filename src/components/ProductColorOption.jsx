
const ProductColorOption = ({bgColor}) => {
  return (
    <> <input type="radio" name="color" className={`size-5 appearance-none relative before:content-none before:inset-0 before:absolute before:size-full before:bg-[${bgColor}] border-red-800  border rounded-full bg-green-900`} /></>
  )
}

export default ProductColorOption