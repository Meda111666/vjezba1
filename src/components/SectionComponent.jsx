import React from "react";
// style
import "../index.css";
// icons
import { FaWordpressSimple } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { MdCss } from "react-icons/md";

function SectionComponent() {
  return (
    <div className="container mx-auto ">
      {/* naslov */}
      <h3 className="text-center my-[100px] text-[30px] text-[#007bff] font-bold italic drop-shadow-xl/25 overflow-hidden">
        O meni
      </h3>
      {/* sekcija1 */}
      <section className="w-[90%]  lg:w-[90%] about flex items-center mx-auto justify-center lg:border-8 lg:border-[#eee] p-[5px] lg:p-[20px] gap-[10px] lg:gap-[20px] rounded-[20px]  drop-shadow-xl/25 overflow-hidden bg-[100%] lg:bg-cover">
        <div className="w-[50%] h-[50%] flex flex-col items-center  justify-between gap-[20px] ">
          <p className=" text-center text-[18px] lg:text-[22px] p-[10px] text-white italic drop-shadow-xl/25 overflow-hidden ">
            Ja sam strastveni web developer sa fokusom na React i modernim web
            tehnologijama.
          </p>
        </div>

        <div className="bg-transparent rounded-br-xl  h-[20%]drop-shadow-xl/40 overflow-hidden rounded-2xl text-white w-[50%] flex flex-col   p-[20px]">
          <div className="p-[40px] flex flex-col mx-auto items-center justify-between text-center">
            <h4 className="mask-b-to-25 text-[20px] lg:text-[28px] text-center font-semibold italic  lg:my-[20px] ">
              Moje vještine
            </h4>
            <ul className="text-[16px] lg:text-[18px] ">
              <FaWordpressSimple size={20} className="mx-auto" />
              <li className="mask-b-to-25 my-[20px]">WordPress</li>
              <IoLogoJavascript size={20} className="mx-auto" />
              <li className="mask-b-to-25 my-[20px]">Java Script</li>
              <FaReact size={20} className="mx-auto" />
              <li className="mask-b-to-25 my-[20px]">React</li>
              <FaHtml5 size={20} className="mx-auto" />
              <MdCss size={20} className="mx-auto" />
              <li className="mask-b-to-25 my-[20px]">HTML i CSS</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SectionComponent;
