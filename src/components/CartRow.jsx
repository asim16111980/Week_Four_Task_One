import { useState } from "react";
import Input from "./Input";

const CartRow = ({ thumbnail = "", title = "", price = 0 }) => {
  const [quantity, setQuantity] = useState(1);
  const [subtotal, setSubtotal] = useState(0);

  const handleChangeQuantity = (e) => {
    setQuantity(e.target.value + 1);
  };
  return (
    <>
      <tr>
        <td>
          <img src={thumbnail} alt={thumbnail} />
          <span>{title}</span>
        </td>
        <td>{price}</td>
        <td>
          <Input
            type="number"
            className="border-opacity-40"
            borderType="outlined"
            value={quantity}
            onChange={() => handleChangeQuantity}
          />
        </td>
        <td>{subtotal}</td>
      </tr>
    </>
  );
};

export default CartRow;
