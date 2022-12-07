import "./BackgroundImg.css";
import React from "react";
import Choice from "./Components/choice/Choice";

    function BackgroundImg (){
        return(
            <div className="background">
                <div className="photo__box">
                    <div className="top">
                            <Choice name="Crazy Max"/>
                    </div>
                    <div className="bottom">
                        <Choice name="Stylish House"/>
                    </div>
                </div>
                <div className="center-img">
                 <Choice name="Oblique House" type="long" />
                </div>
                <div className="photo-container">
                    <div className="graffity" >
                        <Choice name="Differents" /> 
                    </div>
                    <div className="top">
                        <Choice name="Bag"/>
                    </div>
                </div>
            </div>
        );
    }
    export default BackgroundImg;