"use client";
import { Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from 'framer-motion';

// type Props = {
//     links: string[]
// }

const navItems = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/book-online", label: "Book Online" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <motion.nav
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
      className="hidden w-full md:block">
        <div className="flex justify-between items-center w-full">
          <div className="md:w-[25.8rem] pl-3">
            <h1
              className="text-lg font-black my-3 font-syne"
              style={{ lineHeight: "1em" }}
            >
              ZIDANE ESTATES LLC
            </h1>
          </div>

          <div className="flex">
            <ul className="flex space-x-7 self-center">
              {navItems.map((item) => (
                <li key={item.href}>
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
            <div className="relative ml-9 flex gap-x-2  w-">
              <Search className="w-4 h-4 self-center" />
              
                <input
                  className="py-2 w-1/2 outline-none"
                  type="search"
                  placeholder="Search..."
                />
              
            </div>
          </div>
        </div>
        <div className="mb-[10px] border-t border-black mt-1" />
      </motion.nav>

      <nav className="flex mx-4 justify-between md:mx-0 md:hidden">
        <div>
          <h1 className="text-lg font-bold">Zidane Estates LLC</h1>
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer z-50 md:hidden"
        >
          {!isOpen ? <Menu /> : <X />}
        </div>
      </nav>

      <div
        className={`w-full h-screen bg-white fixed z-40 top-0 left-0 transform transition-all duration-1000 md:hidden ${
          isOpen ? "translate-y-0 opacity-100" : "opacity-0 -translate-y-[150%]"
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
    </>
  );
};

export default Navbar;
