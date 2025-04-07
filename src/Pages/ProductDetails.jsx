import Breadcrumb from "../components/BreadCrumb";
import Button from "../components/Button";
import Divider from "../components/Divider";
import ProductColorOption from "../components/ProductColorOption";
import ProductQuantitySelector from "../components/ProductQuantitySelector";
import ProductSizeOption from "../components/ProductSizeOption";
import StarRating from "../components/StartRating";

const ProductDetails = () => {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Account", href: "/Account" },
          { label: "Gaming", href: "/Gaming" },
          { label: "Havic HV G-92 Gamepad" },
        ]}
      />
      <section>
        <div>
          <div>
            <img src="/public/images/product_details/image_1.png" alt="Image" />
            <img src="/public/images/product_details/image_2.png" alt="Image" />
            <img src="/public/images/product_details/image_3.png" alt="Image" />
            <img src="/public/images/product_details/image_4.png" alt="Image" />
          </div>
          <div>
            <img src="/public/images/product_details/image_5.png" alt="Image" />
          </div>
        </div>
        <div>
          <div>
            <h2>Havic HV G-92 Gamepad</h2>
            <div>
              <div>
                <StarRating initialRating={4} /> <span>(150 Reviews)</span>
              </div>
              <Divider />
              <span>In Stock</span>
            </div>
          </div>
          <span>$192.00</span>
          <p>
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </p>
          <div>
            <div>
              <span>Colours:</span>
              <ProductColorOption />
            </div>
            <div>
              <span>Size:</span>
              <div>
                <ProductSizeOption />
                <ProductSizeOption />
                <ProductSizeOption />
                <ProductSizeOption />
                <ProductSizeOption />
              </div>
            </div>
            <div>
              <ProductQuantitySelector />
              <Button />
              <Icon />
            </div>
          </div>
          <div>
            <div>
              <img src="" alt="" />
              <div>
                <h3>Free Delivery</h3>
                <p>
                  <a href="">
                    Enter your postal code for Delivery Availability
                  </a>
                </p>
              </div>
            </div>
            <div>
              <img src="" alt="" />
              <div>
                <h3>Return Delivery</h3>
                <p>
                  Free 30 Days Delivery Returns.<a href=""> Details</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
