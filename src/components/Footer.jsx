import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { SendHorizontal, Copyright } from "lucide-react";
import Icon from "../components/Icon";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isAtFooter, setIsAtFooter] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const footer = footerRef.current;

      if (footer) {
        const footerTop = footer.getBoundingClientRect().top + scrollY;

        setIsVisible(scrollY > 200);

        setIsAtFooter(scrollY + windowHeight >= footerTop);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <footer
      className="relative flex flex-col items-center gap-6 bg-black text-neutral-50 py-4 px-4 sm:px-4 md:px-10 mt-16"
      ref={footerRef}
    >
      {/* {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed right-8 p-3 rounded-full bg-[#F5F5F5] shadow-lg transition-all z-50"
          style={{
            bottom: isAtFooter
              ? `${footerRef.current.offsetHeight + 20}px`
              : "20px",
            position: isAtFooter ? "absolute" : "fixed",
          }}
        >
          <Icon icon="icons/homeicons_arrow-up.png" />
        </button>
      )} */}
      <div className="w-full mx-auto grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-8 sm:gap-10">
        <div className="flex flex-col gap-3 md:gap-6">
          <h3 className="text-xl md:text-2xl font-bold">Exclusive</h3>
          <p className="font-poppins text-lg md:text-xl font-medium">
            Subscribe
          </p>
          <p className="font-poppins text-sm md:text-base">
            Get 10% off your first order
          </p>
          {submitted ? (
            <p className="text-green-400 mt-4">Thank you for subscribing!</p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="max-w-max font-poppins flex items-center ps-4 py-3 pe-3 gap-4 border-2 border-[#FAFAFA] rounded overflow-hidden"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-11/12 bg-black text-white text-sm md:text-base focus:outline-none"
              />
              <button
                type="submit"
                className="size-6 hover:text-gray-300 transition"
              >
                <SendHorizontal strokeWidth={1.5} />
              </button>
            </form>
          )}
        </div>
        <div className="flex flex-col gap-3 md:gap-6 font-poppins">
          <h3 className="text-lg md:text-xl font-medium">Support</h3>
          <ul className=" flex flex-col gap-2 md:gap-4 text-sm md:text-base">
            <li>
              <p className="text-sm md:text-base">
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </p>
            </li>{" "}
            <li>
              <p className="text-sm md:text-base">exclusive@gmail.com</p>
            </li>
            <li>
              <p className="text-sm md:text-base">+88015-88888-9999</p>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 md:gap-6 font-poppins">
          <h3 className="text-lg md:text-xl font-medium">Account</h3>
          <ul className=" flex flex-col gap-2 md:gap-4 text-sm md:text-base">
            <li>
              <a href="/myaccount"> My Account</a>
            </li>
            <li>
              <a href="/login"> Login / Register</a>
            </li>
            <li>
              <a href="/cart"> Cart</a>
            </li>
            <li>
              <a href="/wishlist"> Wishlist</a>
            </li>
            <li>
              <a href="/shop"> Shop</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 md:gap-6 font-poppins">
          <h3 className="text-lg md:text-xl font-medium">Quick Link</h3>
          <ul className=" flex flex-col gap-2 md:gap-4 text-sm md:text-base">
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Terms of Use</a>
            </li>
            <li>
              <a href="/">FAQ</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 md:gap-6 font-poppins">
          <h3 className="text-lg md:text-xl font-medium">Download App</h3>
          <div className="flex flex-col gap-2 md:gap-4">
            <p className="text-xs font-medium text-opacity-70">
              Save $3 with App New User Only
            </p>
            <div className="flex gap-2">
              <div className="size-20 border-2 border-white">
                <img src="images/footer/Qrcode.png" alt="Qr Code" />
              </div>
              <div className="flex flex-col justify-between">
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black border border-white rounded"
                >
                  <img
                    src="images/footer/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png"
                    alt="Google Play"
                  />
                </a>
                <a
                  href="https://www.apple.com/app-store/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black border border-white rounded"
                >
                  <img
                    src="images/footer/download-appstore.png"
                    alt="App Store"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="flex text-lg gap-6 text-white">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Icon
                icon="icons/social_media/Icon-Facebook.png"
                alt="Facebook"
                width={24}
                height={24}
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Icon
                icon="icons/social_media/Icon-Twitter.png"
                alt="Twitter"
                width={24}
                height={24}
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Icon
                icon="icons/social_media/icon-instagram.png"
                alt="instagram"
                width={24}
                height={24}
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Icon
                icon="icons/social_media/Icon-Linkedin.png"
                alt="Linkedin"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-end font-poppins text-xs text-white text-opacity-60 py-8">
        <p className="flex items-center gap-1">
          <Copyright size={20} strokeWidth={1.5} /> Copyright Rimel 2022. All
          right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
