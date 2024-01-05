import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto flex flex-wrap justify-between">
          {/* Footer Section 1 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4 sm:mb-0">
            <h2 className="text-lg font-semibold mb-4">About Us</h2>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          {/* Footer Section 2 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4 sm:mb-0">
            <h2 className="text-lg font-semibold mb-4">Contact</h2>
            <p>Email: info@example.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>

          {/* Footer Section 3 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4 sm:mb-0">
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-400">
                Facebook
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                Twitter
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                Instagram
              </a>
            </div>
          </div>

          {/* Footer Section 4 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4 sm:mb-0">
            <h2 className="text-lg font-semibold mb-4">Subscribe</h2>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 mr-2"
              />
              <button className="bg-pink-600 hover:bg-pink-400 duration-700 text-white px-4 py-2">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-700 pt-4">
          <p className="text-center text-gray-500">
            © 2024 Your Company. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
