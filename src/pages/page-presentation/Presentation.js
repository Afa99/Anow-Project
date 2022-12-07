import React from "react";
import "../page-presentation/Presentation.css";

function Presentation() {
  return (
    <div className="image-box">
        <div className="wrapper">
          <div className="z-index-container"> 
            <div className="text-design">design is thinking</div>
            <div className="text-visual">made visual</div>
          </div>
         <div className="z-index-buttons ">
          <button className="orange">Start Now</button>
          <button className="black">See More</button>
         </div>
          <div className="circle"></div>
       </div>
        <div className="image-container">
          <div className="saturn"></div>
          <div className="ximg"></div>
          <div className="marg__picture"></div>
          <div className="xpicture"></div>
          <div className="botttom_picture"></div>
        </div>   
    </div>

  );
}
export default Presentation;
