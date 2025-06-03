import React from "react";
import Link from "next/link";

const Navbar = () => {
  {/*Not everything actually links to stuff yet*/}
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
                <Link href="/test">
                  <p>Test</p>
                </Link>
              </li>
              <li className="p-4 rounded-md hover:bg-gray-600">
                <Link href="/calendar">
                  <p>Calendar</p>
                </Link>
              </li>
              <li className="p-4 rounded-md hover:bg-gray-600">
                <Link href="/contacts">
                  <p>Contacts</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default Navbar;
