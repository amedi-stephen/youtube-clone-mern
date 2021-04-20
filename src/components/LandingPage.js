import React from "react";
import MainSection from "./MainSection";
import Sidebar from "./Sidebar";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="content-wrapper">
        <Sidebar />
        <MainSection />
      </div>
    </div>
  );
};

export default LandingPage;
