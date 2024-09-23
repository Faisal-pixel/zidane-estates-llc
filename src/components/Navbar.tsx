"use client";
import { Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-lg font-bold">Zidane Estates LLC</h1>
          </div>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer z-30 md:hidden"
          >
            {!isOpen ? <Menu /> : <X />}
          </div>

          {/* MEDIUM SCREEN AND ABOVE */}
          <div className="hidden space-x-5 md:flex">
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
            <div className="relative flex">
              <Search className="w-4 h-4 self-center" />
              <input
                className="px-3 py-2 outline-none"
                type="search"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
        <div className="mb-[10px] border-t border-black mt-1" />
      </nav>
      
        <nav className={`max-w-[90%] mx-auto fixed flex flex-col z-20 h-full w-full bg-white transform transition-all duration-500 -translate-y-[150%] opacity-0 ${isOpen && "translate-y-0 opacity-100"}  md:hidden"`}>
          {
            isOpen && (
              <div className="">
                <div className="relative flex">
            <Search className="w-4 h-4 self-center" />
            <input
              className="px-3 py-2 w-full outline-none"
              type="search"
              placeholder="Search..."
            />
          </div>
          <div>
            <ul className="flex flex-col items-center space-y-5">
              {navItems.map((item) => (
                <li key={item.href} className="text-xl">
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
            )
          }
        </nav>
    </>
  );
};

export default Navbar;
