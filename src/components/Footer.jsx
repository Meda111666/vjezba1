import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer className=" mx-auto mt-[100px] text-center bg-[#007bff] text-white">
        <p>&copy; {currentYear} Moja prezentacija.Sva prava zadržana</p>
      </footer>
    </div>
  );
}

export default Footer;
