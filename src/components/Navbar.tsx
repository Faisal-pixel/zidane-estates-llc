"use client";
import { motion } from "framer-motion";
import { Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/book-online", label: "Book Online" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 2,
        ease: "easeOut",
      }}
    >
      <nav className="hidden w-full md:block border-b border-b-black pb-1">
        <div className="flex justify-between items-center w-full px-3">
          <h1 className="text-lg font-semibold my-3 font-syne ">
            ZIDANE ESTATES LLC
          </h1>

          <div className="flex">
            <ul className="flex gap-7 self-center items-center">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    passHref
                    className={`font-questrial text-black text-base font-light ${
                      pathname === item.href ? "text-[#170DF2]" : "text-black"
                    } hover:text-[#170DF2]`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              <div className="relative ml-5 flex gap-x-3 ">
                <Search className="w-4 h-4 self-center" />

                <input
                  className="py-2 outline-none text-black placeholder:black"
                  type="search"
                  placeholder="Search..."
                />
              </div>
            </ul>
          </div>
        </div>
      </nav>

      <nav className="md:hidden">
        <div className="flex mx-4 justify-between md:mx-0 ">
          <h1 className="text-xl font-semibold font-syne ">
            ZIDANE ESTATES LLC
          </h1>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer z-50 md:hidden"
          >
            {!isOpen ? <Menu /> : <X />}
          </div>
        </div>

        <div
          className={`w-full h-screen bg-white fixed z-40 top-0 left-0 transform transition-all duration-1000 ${
            isOpen
              ? "translate-y-0 opacity-100"
              : "opacity-0 -translate-y-[150%]"
          }`}
        >
          <div className="flex flex-col mt-12 mx-5 h-full">
            <div className="relative flex">
              <Search className="w-4 h-4 self-center" />
              <input
                className="px-3 py-2 outline-none w-full"
                type="search"
                placeholder="Search..."
              />
            </div>

            <ul className="flex flex-col self-center mt-4 gap-y-6">
              {navItems.map((item) => (
                <li key={item.href} className="text-center text-xl">
                  <Link
                    href={item.href}
                    passHref
                    className={`${
                      pathname === item.href ? "text-blue-500" : "text-black"
                    } hover:text-blue-500`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </motion.div>
  );
};

export default Navbar;
