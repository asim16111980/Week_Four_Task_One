import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <footer className="flex flex-col items-center bg-black text[#FAFAFA] py-4 px-2 sm:px-4">
      <div className="mx-auto grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 sm:grid-cols-2 sm:gap-10">
        <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">Exclusive</h2>
      <h3 className="text-lg font-medium">Subscribe</h3>
      <p className="text-sm">Get 10% off your first order</p>
      {submitted ? (
        <p className="text-green-400 mt-4">Thank you for subscribing!</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex items-center border-2 border-[#FAFAFA] rounded overflow-hidden">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 p-2 bg-black text-white focus:outline-none"
          />
          <button type="submit" className="p-2 bg-white text-black hover:bg-gray-300 transition">
            ➤
          </button>
        </form>
      )}
    </div>
        <div>
          <h3 className="text-xl font-bold">Exclusive</h3>
          <p className="mt-2 text-lg font-medium">Subscribe</p>
          <p className="mt-2 text-lg font-medium">Get 10% off your first order</p>
          <div className="mt-3 flex items-center border border-gray-500 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 bg-transparent outline-none text-white placeholder-gray-400"
            />
            <button className="px-4 py-2 bg-green-500 hover:bg-green-600">&rarr;</button>
          </div>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-lg font-bold">Support</h3>
          <p className="text-sm mt-2">111 Bijoy Sarani, Dhaka, Bangladesh</p>
          <p className="text-sm">exclusive@gmail.com</p>
          <p className="text-sm">+88015-88888-9999</p>
        </div>

        {/* Account Section */}
        <div>
          <h3 className="text-lg font-bold">Account</h3>
          <ul className="text-sm mt-2 space-y-1">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold">Quick Link</h3>
          <ul className="text-sm mt-2 space-y-1">
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Social & Download Section */}
        <div>
          <h3 className="text-lg font-bold">Download App</h3>
          <p className="text-sm mt-2">Save $3 with App New User Only</p>
          <div className="flex space-x-2 mt-3">
            <div className="bg-gray-700 p-2 rounded-lg">QR</div>
            <div className="space-y-2">
              <button className="bg-white text-black px-3 py-1 rounded">Google Play</button>
              <button className="bg-white text-black px-3 py-1 rounded">App Store</button>
            </div>
          </div>
          <div className="flex space-x-3 mt-4 text-lg">
            {/* <FaFacebookF className="hover:text-gray-400 cursor-pointer" />
            <FaTwitter className="hover:text-gray-400 cursor-pointer" />
            <FaInstagram className="hover:text-gray-400 cursor-pointer" />
            <FaLinkedinIn className="hover:text-gray-400 cursor-pointer" /> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
