import React from "react";
import "../../Components/Images/About-us.svg";
import "../page-about/About.css";
import Build from "./components/build/Build";
import Logo from "./components/logo/Logo";
import PhotoBox from "./components/photobox/PhotoBox";
import Wrapper from "./components/wrapper/Wrapper";
function About() {
  return (
    <div className="about-container">
      <Logo />
      <div className="build-box">
        <Build />
        <div className="flex-box">
          <Wrapper />
        </div>
      </div>
      <PhotoBox/>
    </div>
  );
}
export default About;
