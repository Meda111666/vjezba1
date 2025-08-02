import React from "react";

function HeaderComponent({ title, subtitle }) {
  return (
    <div className="container w-[90%] lg:w-[960px] mt-[20px] mx-auto  bg-[#fff] drop-shadow-xl/40 overflow-hidden rounded-2xl   ">
      <header className="py-[40px] px-[20px] text-center bg-[#007bff] text-white overflow-hidden">
        <h1 className="text-[48px] scale-x-110 font-extrabold p-[20px]">
          {title}
        </h1>
        <p className="text-[22px]   p-[20px] ">{subtitle}</p>
      </header>
    </div>
  );
}

export default HeaderComponent;
