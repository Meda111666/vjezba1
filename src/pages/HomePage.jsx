import React from "react";
import Footer from "../components/Footer";
import HeaderComponent from "../components/HeaderComponent";
import Section2Component from "../components/Section2Component";
import SectionComponent from "../components/SectionComponent";

function HomePage() {
  return (
    <div>
      <HeaderComponent
        title="Dobrodošli na Moju Prezentaciju"
        subtitle="Predstavljam se u najboljem svjetlu!"
      />
      <SectionComponent />
      <Section2Component />

      <Footer />
    </div>
  );
}

export default HomePage;
