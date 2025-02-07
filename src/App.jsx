import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Trust from "./components/Trust";
// import Seo from "./components/Seo";
import Why from "./components/Why";
import CaseStudy from "./components/CaseStudy";
import Recognized from "./components/Recognized";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";

const App = () => {
  return (
    <div className="w-full">
      <Navbar />
      <main className="w-full min-h-screen">
        <Hero />
        <Trust />
        {/* <Seo /> */}
        <Why />
        <CaseStudy />
        <Recognized />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </div>
  );
};

export default App;
