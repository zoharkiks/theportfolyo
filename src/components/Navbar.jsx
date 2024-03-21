"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "./Button";

const Navbar = () => {
  return (
    <nav className="fixed z-10 flex items-center justify-between w-full p-5 ">
      <span className="text-4xl font-medium cursor-pointer !w-max">J.Doe</span>

      {/* Hamburger menu */}
      <label className="md:hidden" for="check">
        <input type="checkbox" id="check" />
        <span></span>
        <span></span>
        <span></span>
      </label>

      <div className="items-center justify-center hidden gap-10 md:flex">
        {/* Nav Links */}
        <div className="flex gap-4 mr-10">
          <Link href={"/"}>
            <span>Home</span>
          </Link>

          <Link href={"/"}>
            <span>Services</span>
          </Link>

          <Link href={"/"}>
            <span>About</span>
          </Link>

          <Link href={"/"}>
            <span>Project</span>
          </Link>

          <Link href={"/"}>
            <span>Review</span>
          </Link>
        </div>
        <Button>Let's Talk</Button>
      </div>
    </nav>
  );
};

export default Navbar;
