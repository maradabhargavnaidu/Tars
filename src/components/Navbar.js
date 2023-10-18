import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ modefunc, dark }) => {
  const [navMenuToggle, setNavMenuToggle] = useState(false);

  return (
    <nav className={"text-gray-800 bg-white dark:bg-gray-800 fixed w-full"}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setNavMenuToggle(!navMenuToggle)}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center dark:text-white">
              <Link to="/" className={"font-bold text-2xl "}>
                Image Gallery
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <a
                  href="#"
                  className={
                    "  rounded-md px-3 py-2 text-sm font-medium " +
                    (dark ? "text-white" : "text-gray-700")
                  }
                  aria-current="page"
                >
                  Explore
                </a>
                <a
                  href="#"
                  className={
                    " hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium " +
                    (dark ? "text-white" : "text-gray-700")
                  }
                >
                  Collection
                </a>
                <a
                  href="#"
                  className={
                    " hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium " +
                    (dark ? "text-white" : "text-gray-700")
                  }
                >
                  Community
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* <!-- Profile dropdown --> */}
            <div className="relative ml-3">
              <div onClick={() => modefunc()} className="cursor-pointer">
                {dark ? (
                  <div className="flex items-center font-bold gap-2 text-gray-200">
                    Dark mode
                    <i class={"fa-solid fa-toggle-on text-4xl"}></i>
                  </div>
                ) : (
                  <div className="flex items-center text-black gap-2 font-bold">
                    Light mode
                    <i class={"fa-solid fa-toggle-off text-4xl text-black"}></i>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div className={`sm:hidden ${navMenuToggle ? "" : "hidden"}`}>
        <div className="space-y-1 px-2 pb-3 pt-2">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          <a
            href="#"
            className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Explore
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Collection
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Community
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
