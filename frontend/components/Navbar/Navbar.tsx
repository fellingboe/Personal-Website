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
            <li className="p-4 rounded-md hover:bg-gray-600">
                <Link href="/">
                  <p>Home</p>
                </Link>
              </li>
              <li className="p-4 rounded-md hover:bg-gray-600">
                <Link href="/shop">
                  <p>Shop</p>
                </Link>
              </li>
              <li className="p-4 rounded-md hover:bg-gray-600">
                <Link href="/aboutMe">
                  <p>About Me</p>
                </Link>
              </li>
              <li className="p-4 rounded-md hover:bg-gray-600">
                <Link href="/contactMe">
                  <p>Contact Me</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default Navbar;
