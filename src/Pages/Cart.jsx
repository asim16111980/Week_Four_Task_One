import { useEffect, useState } from "react";
import { Home } from "lucide-react";
import Breadcrumb from "../components/BreadCrumb";
import Button from "../components/Button";
import Input from "../components/Input";
import Divider from "../components/Divider";
import CartRow from "../components/CartRow";
import { getCart } from "../utils/crud";

const Cart = ({ thumbnail = "", title = "", price = 0, shipping = 0 }) => {
  const [cart, setCart] = useState([]);
  const [priceSum, setPriceSum] = useState(0);
  const [total, setTotal] = useState(0);
  const [coupon, setCoupon] = useState("");

  useEffect(() => {
    const userCart = getCart();
    setCart(userCart);
  }, []);

  return (
    <div className="w-full flex flex-col gap-24 pb-4 font-poppins text-black py-10">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Cart" }]} />
      <section className="flex flex-col items-center">
        <table className="w-full mx-auto text-sm sm:text-base">
          <thead>
            <tr>
              <td>Product</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Subtotal</td>
            </tr>
          </thead>
          <tbody>
            {console.log(cart)}
            {/* <CartRow /> */}
          </tbody>
        </table>
        <div className="text-sm sm:text-base">
          <Button value="Return To Shop" />
          <Button value="Update Cart" />
        </div>
      </section>
      <div>
        <div>
          <Input
            className="indent-6"
            borderType="outlined"
            placeholder="Coupon Code"
            value={coupon}
            onChange={() => setCoupon(e.target.value)}
          />
          <Button
            value="Apply Coupon"
            className="w-60 h-14 rounded bg-[#DB4444] text-neutral-50 hover:bg-[#E07575]"
          />
        </div>
        <section>
          <h2 className="text-lg sm:text-xl font-medium">Cart Total</h2>
          <div>
            <ul>
              <li>
                <h3>Subtotal:</h3>
                <span>{priceSum}</span>
              </li>
              <Divider />
              <li>
                <h3>Shipping:</h3>
                <span>{shipping | "Free"}</span>
              </li>
              <li>
                <h3>Total:</h3>
                <span>{total}</span>
              </li>
            </ul>
          </div>
          <Button
            value="Process to checkout"
            className="w-60 h-14 rounded bg-[#DB4444] text-neutral-50 hover:bg-[#E07575]"
          />
        </section>
      </div>
    </div>
  );
};

export default Cart;
