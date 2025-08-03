import React from "react";
import ImgMeda from "../assets/meda.jpg";
import { NavLink } from "react-router-dom";

function NavbarComponent() {
  return (
    <div className="bg-[#007bff]">
      <nav className=" container mx-auto flex items-center justify-between">
        <img src={ImgMeda} alt="" className="size-[40px] rounded-full" />
        <h3 className="text-[25px] text-white italic ">Medin Jusufovic-Meda</h3>
        <div className="text-white text-[18px] font-semibold italic py-[20px]">
          <ul className=" flex items-center justify-between gap-[20px]">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"about"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"contact"}>Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavbarComponent;
