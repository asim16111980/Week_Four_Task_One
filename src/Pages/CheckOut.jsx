import Breadcrumb from "../components/BreadCrumb";

const CheckOut = () => {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Account", href: "/account" },
          { label: "My Account", href: "/myaccount" },
          { label: "Product", href: "/product" },
          { label: "View Cart", href: "/cart" },
          { label: "CheckOut" },
        ]}
      />
    </div>
  );
};

export default CheckOut;