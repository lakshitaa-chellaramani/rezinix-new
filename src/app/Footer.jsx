// app/components/Footer.tsx
import React from "react";
import { FaFacebookF, FaGithub, FaTwitter, FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-6 md:px-20 py-12 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
        {/* About Us */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">About Us</h3>
          <p className="text-sm leading-relaxed text-gray-400">
            We&apos;re a team of designers, engineers, and innovators building AI
            tools that empower anyone to turn imagination into stunning
            visuals—faster, smarter, and effortlessly.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-orange-500 font-semibold text-lg mb-4">
            Useful Links
          </h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-orange-400">About</a></li>
            <li><a href="#" className="hover:text-orange-400">Services</a></li>
            <li><a href="#" className="hover:text-orange-400">Team</a></li>
            <li><a href="#" className="hover:text-orange-400">Prices</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-orange-500 font-semibold text-lg mb-4">Help</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-orange-400">Customer Support</a></li>
            <li><a href="#" className="hover:text-orange-400">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-orange-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-orange-400">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-orange-500 font-semibold text-lg mb-4">
            Connect With Us
          </h3>
          <ul className="space-y-2 text-sm">
            <li>327, V Mall, Thakur Complex, Kandivali (E), Mumbai 400101, India.</li>
            <li>+91 98206 02655</li>
            <li>
              contactus@rezinix.ai
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-gray-400">
        <p>© 2024 All Right Reserved.</p>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black transition">
            <FaFacebookF />
          </a>
          <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black transition">
            <FaGithub />
          </a>
          <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black transition">
            <FaTwitter />
          </a>
          <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black transition">
            <FaGoogle />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
