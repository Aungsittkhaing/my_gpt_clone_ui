import React, { useState } from "react";
import { Left, Right } from "./components";
import { MdOutlineMenu } from "react-icons/md";
import { FaPlus } from "react-icons/fa";

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="sticky top-0 z-10 flex items-center border-b border-white/20 bg-gray-800 pl-1 pt-1 text-gray-200 sm:pl-3 md:hidden">
        <button
          type="button"
          className={`-ml-0.5 -mt-0.5 inline-flex h-10 w-10 items-center outline-none justify-center rounded-md focus:ring-1 focus:ring-white ${
            !show && "!ring-0"
          } dark:hover:text-white text-gray-100`}
          onClick={() => setShow(!show)}
        >
          <span className="sr-only">Open sidebar</span>
          <MdOutlineMenu />
        </button>
        <h1 className="flex-1 text-center text-base font-normal">New chat</h1>
        <button type="button" className="px-3">
          <FaPlus />
        </button>
      </div>
      <Left />
      <Right />
    </div>
  );
};

export default App;
