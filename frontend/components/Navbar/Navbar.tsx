import React from "react";
import Link from "next/link";

const Navbar = () => {
  {/*This is for the Navbar across the top of the page
    Currently only the actual words link to the page - Should be whole box that links */}
  return (
      <div className="text-xl w-full h-15 bg-gray-500 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">

            <ul className="hidden md:flex gap-x-1 text-white">
              <li>
                  <Link href="/" className="block p-4 rounded-md hover:bg-gray-600">
                    <p>Home</p>
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="block p-4 rounded-md hover:bg-gray-600">
                    <p>Shop</p>
                  </Link>
                </li>
                <li>
                  <Link href="/aboutMe" className="block p-4 rounded-md hover:bg-gray-600">
                    <p>About Me</p>
                  </Link>
                </li>
                <li >
                  <Link href="/contactMe" className="block p-4 rounded-md hover:bg-gray-600">
                    <button>
                      Contact Me
                    </button>
                  </Link>
                </li>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default Navbar;
