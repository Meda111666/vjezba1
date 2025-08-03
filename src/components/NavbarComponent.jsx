import React from "react";
import ImgMeda from "../assets/meda.jpg";
import { NavLink } from "react-router-dom";

function NavbarComponent() {
  const navLink = [
    { path: "/", title: "Home" },
    { path: "about", title: "About" },
    { path: "contact", title: "Contact" },
  ];
  return (
    <div className="bg-[#007bff]">
      <nav className=" container mx-auto flex items-center justify-between">
        <div className="flex flex-col items-center my-[10px]">
          <img
            src={ImgMeda}
            alt="medaSlika"
            className="size-[40px] rounded-full"
          />
          <h3 className="text-[18px] text-white italic ">
            Medin Jusufovic-Meda
          </h3>
        </div>

        <div className="text-white text-[18px] font-semibold italic py-[20px]">
          <ul className=" flex items-center justify-between gap-[20px]">
            {navLink.map((nav, index) => (
              <li key={index}>
                <NavLink to={nav.path}>{nav.title}</NavLink>
              </li>
            ))}
            {/* <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"about"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"contact"}>Contact</NavLink>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavbarComponent;
