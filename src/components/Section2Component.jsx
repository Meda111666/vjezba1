import React from "react";
import Link from "react-dom";
import FormComponent from "../components/FormComponent";

function Section2Component() {
  return (
    <div>
      <section className="w-[80%] flex flex-col items-center container mx-auto my-[40px] border border-blue-700 bg-gray-200 p-[40px] drop-shadow-xl/40 overflow-hidden rounded-2xl">
        <h2 className=" text-[25px] font-bold italic">Kontakt:</h2>
        <p className="text-[20px] font-semibold italic">
          Ako imate pitanja, slobodno me kontaktirajte!
        </p>
        <p>
          <p>
            {" "}
            Email:
            <a href="mailto:vas.email@example.com" className="text-blue-700">
              jusufovicmedin@gmail.com
            </a>
          </p>
          <p>
            Tel:
            <a href="tel:+387 62 239 661" className="text-blue-700">
              +387 62 239 661
            </a>
          </p>
        </p>
      </section>
      <FormComponent />
    </div>
  );
}

export default Section2Component;
