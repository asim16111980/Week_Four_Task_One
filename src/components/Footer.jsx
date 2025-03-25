import { useState, useRef, useEffect,useLayoutEffect } from "react";
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

        // إظهار الزر عند التمرير لأسفل
        setIsVisible(scrollY > 200);

        // إذا وصل إلى الفوتر، اجعله يتوقف عند حافته العلوية
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
      className="relative flex flex-col items-center gap-10 bg-black text-[#FAFAFA] py-4 px-2 sm:px-4"
      ref={footerRef}
    >
    {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed right-8 p-3 rounded-full bg-[#F5F5F5] shadow-lg transition-all z-50"
          style={{
            bottom: isAtFooter ? `${footerRef.current.offsetHeight + 20}px` : "20px",
            position: isAtFooter ? "absolute" : "fixed",
          }}
        >
          <Icon icon="/public/icons/home/icons_arrow-up.png" />
        </button>
      )}
      <div className="w-full mx-auto grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 sm:gap-10">
        <div className="flex flex-col gap-2 pe-4">
          <h3 className="text-xl font-bold">Exclusive</h3>
          <p className="font-['poppins'] text-lg font-medium">Subscribe</p>
          <p className="font-['poppins'] text-sm">
            Get 10% off your first order
          </p>
          {submitted ? (
            <p className="text-green-400 mt-4">Thank you for subscribing!</p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="font-['poppins'] flex items-center ps-4 py-3 pe-3 gap-4 border-2 border-[#FAFAFA] rounded overflow-hidden"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-11/12 bg-black text-white focus:outline-none"
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
        <div className="flex flex-col gap-2 font-['poppins']">
          <h3 className="text-lg font-medium">Support</h3>
          <p className="text-sm">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p className="text-sm">exclusive@gmail.com</p>
          <p className="text-sm">+88015-88888-9999</p>
        </div>
        <div className="flex flex-col gap-2 font-['poppins']">
          <h3 className="text-lg font-medium">Account</h3>
          <ul className=" flex flex-col gap-4 text-sm">
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
        <div className="flex flex-col gap-2 font-['poppins']">
          <h3 className="text-lg font-medium">Quick Link</h3>
          <ul className=" flex flex-col gap-4 text-sm">
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
        <div className="flex flex-col gap-2 font-['poppins']">
          <h3 className="text-lg font-medium">Download App</h3>
          <div className="flex flex-col gap-2">
            <p className="text-xs font-medium text-opacity-70">
              Save $3 with App New User Only
            </p>
            <div className="flex gap-2">
              <div className="size-20 border-2 border-white">
                <img src="/public/images/footer/Qrcode.png" alt="Qr Code" />
              </div>
              <div className="flex flex-col justify-between">
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black border border-white rounded"
                >
                  <img
                    src="/public/images/footer/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png"
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
                    src="/public/images/footer/download-appstore.png"
                    alt="App Store"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="flex text-lg gap-6 text-white">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Icon
                icon="/public/icons/social_media/Icon-Facebook.png"
                alt="Facebook"
                width={24}
                height={24}
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Icon
                icon="/public/icons/social_media/Icon-Twitter.png"
                alt="Twitter"
                width={24}
                height={24}
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Icon
                icon="/public/icons/social_media/icon-instagram.png"
                alt="instagram"
                width={24}
                height={24}
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Icon
                icon="/public/icons/social_media/Icon-Linkedin.png"
                alt="Linkedin"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-end font-['poppins'] text-xs text-white text-opacity-60 py-8">
        <p className="flex items-center gap-1">
          <Copyright size={20} strokeWidth={1.5} /> Copyright Rimel 2022. All
          right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
