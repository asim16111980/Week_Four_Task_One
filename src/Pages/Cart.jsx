import { Home } from "lucide-react";
import Breadcrumb from "../components/BreadCrumb";

const Cart = () => {
  return (
    <div>
      <Breadcrumb items={[{ label: Home, href: "/" }, { label: "Cart" }]} />
    </div>
  );
};

export default Cart;
