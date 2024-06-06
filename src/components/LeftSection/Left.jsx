import React from "react";
import { BsDiscord, BsPencilSquare } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { MdLogout, MdOutlineLightMode } from "react-icons/md";

const Left = () => {
  return (
    <div className="hidden bg-gray-600 md:fixed md:inset-y-0 md:flex md:w-[260px] md:flex-col">
      <div className="flex h-full min-h-0 flex-col">
        <div className="flex w-full h-full flex-1 items-start border-white/20">
          <nav className="flex h-full flex-1 flex-col space-y-1 p-2">
            <a className="flex p-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white text-sm flex-shrink-0 border border-white/20 cursor-pointer">
              <FaPlus />
              New Chat
            </a>
            <div className="flex-col flex-1 overflow-y-auto border-b border-white/20">
              <div className="flex flex-col gap-2 text-gray-100 text-sm"></div>
            </div>
            {[
              {
                icon: <MdOutlineLightMode />,
                text: "Light mode",
              },
              { icon: <BsDiscord />, text: "My Ai discord" },
              { icon: <BsPencilSquare />, text: "Update and FAQ" },
              { icon: <MdLogout />, text: "Log out" },
            ].map((item, index) => (
              <a
                className="flex items-center p-3 gap3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm"
                key={index}
              >
                {item.icon}
                {item.text}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Left;
