import React from "react";
import Footer from "../Footer/Footer";
import { RiGraduationCapLine } from "react-icons/ri";
import { SiInternetcomputer } from "react-icons/si";
import { LuPenLine } from "react-icons/lu";

const Right = () => {
  return (
    <div className="flex h-full flex-1 flex-col md:pl-[260px]">
      <main className="relative h-full w-full tracking-wide flex flex-col overflow-hidden items-stretch flex-1">
        <div className="flex-1 overflow-hidden">
          <div className="flex flex-col items-center text-sm dark:bg-slate-500 h-screen">
            <div className="text-gray-800 w-full md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col px-6 dark:text-gray-100">
              <h1 className="text-4xl font-semibold text-center mt-5 sm:mt-[20vh] ml-auto mr-auto">
                Mario ChatBot
              </h1>
              <div className="md:flex items-start text-center gap-3.5 mt-12">
                {[
                  {
                    icon: <SiInternetcomputer />,
                    title: "Tech",
                    subTitle: [
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae fugit quod aliquid qui natus nulla fuga placeat. Unde mollitia rem optio, pariatur officia quia eius ex ut in iste praesentium? ",
                    ],
                    hover: true,
                  },
                  {
                    icon: <RiGraduationCapLine />,
                    title: "Educations",
                    subTitle: [
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae fugit quod aliquid qui natus nulla fuga placeat. Unde mollitia rem optio, pariatur officia quia eius ex ut in iste praesentium? ",
                    ],
                    hover: false,
                  },
                  {
                    icon: <LuPenLine />,
                    title: "Take a Note",
                    subTitle: [
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae fugit quod aliquid qui natus nulla fuga placeat. Unde mollitia rem optio, pariatur officia quia eius ex ut in iste praesentium? ",
                    ],
                    hover: false,
                  },
                ].map((item, index) => (
                  <div
                    className="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1"
                    key={index}
                  >
                    <h2 className="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2">
                      {item.icon}
                      {item.title}
                    </h2>
                    <ul className="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
                      {item.subTitle.map((subItem, subIndex) => (
                        <li
                          className={`w-full bg-gray-50 dark:bg-white/5 rounded-md p-3 ${
                            item.hover
                              ? "hover:bg-gray-200 dark:hover:bg-gray-900 cursor-pointer"
                              : "cursor-text"
                          }`}
                          key={subIndex}
                        >
                          {subItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full h-48 flex-shrink-0"></div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Right;
