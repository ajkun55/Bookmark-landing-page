import { useState } from "react";
import Button from "./Button";
import Icons from "./Icons";

function Navbar() {
  // adding the states
  const [isActive, setIsActive] = useState(false);
  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const list = ["features", "pricing", "contact"];

  const mobileList = (
    <ul className="fixed inset-0 z-[10] bg-Very-Dark-Blue uppercase">
      {list.map((l) => (
        <li
          key={l}
          className="border-Grayish-Blue mx-auto w-5/6 cursor-pointer border-y py-4 text-white first:mt-[12vh]"
        >
          {l}
        </li>
      ))}
      <button className="mt-8 w-5/6 border-2 py-2 uppercase text-white">
        Login
      </button>

      <div className="mt-[40vh]">
        <Icons />
      </div>
    </ul>
  );

  const deskList = (
    <ul className="hidden items-center md:flex">
      {list.map((l) => (
        <li
          key={l}
          className="hover:text-Soft-Red mx-6 cursor-pointer py-4 uppercase text-Very-Dark-Blue"
        >
          {l}
        </li>
      ))}
      <button className="bg-Soft-Red hover:bg-light-gray hover:text-Soft-Red hover:border-Soft-Red ml-4 h-12 rounded-md px-6 uppercase text-white hover:border-2">
        Login
      </button>
    </ul>
  );

  return (
    <header className="header mx-auto w-5/6 max-w-[1110px] py-8 md:px-0">
      <nav className="flex items-center justify-between">
        <img src="/images/logo-bookmark.svg" alt="" className="z-20" />
        {isActive && mobileList}
        {isActive ? (
          <img
            src="/images/icon-close.svg"
            className="z-20 cursor-pointer md:hidden"
            alt=""
            onClick={toggleActiveClass}
          />
        ) : (
          <img
            src="/images/icon-hamburger.svg"
            className="cursor-pointer md:hidden"
            alt=""
            onClick={toggleActiveClass}
          />
        )}
        {deskList}
      </nav>
    </header>
  );
}
export default Navbar;
