import "./Laboratory.css";
import React from "react";
import Indikator from "./Components/indikator/Indikator";
import Webdesign  from "../../Components/Images/webdesign.png";
import Illustration from"../../Components/Images/illustration.png";
import Development from "../../Components/Images/development.png";
function Laboratory() {
    return (
        <div className="laboratory">
            <div className="indication-box">
                <div className="slogan-box">
                    <div className="skills">OUR SKILLS</div>
                    <div className="agency">modern digital creative agency</div>
                    <div className="redesign">If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration
                    </div>
                    <div className="block-indicator">
                        <img src={Illustration}></img>
                        <img src={Webdesign} ></img>
                        <img src={Development}></img>
                    </div>
                </div>
                <Indikator />
            </div>
            <div className="our-team">
                <div className="ot">OUR TEAM</div>
                <div className="moat">Meet Our Awesome Team</div>
            </div>
            <div className="team-photo">
                <div className="anna">
                    <div className="h-box">
                        <div>Anna Brown</div>
                        <div className="proffesion">Creative Director</div>
                    </div>

                </div>
                <div className="andy">
                    <div className="h-box">
                        <div>Andy Crown</div>
                        <div className="proffesion" >SEO manager</div>
                    </div>
                </div>
                <div className="katy">
                    <div className="h-box">
                        <div>Katy Necker</div>
                        <div className="proffesion">Designer</div>
                    </div>

                </div>
                <div className="margo">
                    <div className="h-box">
                        <div>Margo Kesslin</div>
                        <div className="proffesion">Developer</div>
                    </div>

                </div>
                <div className="kanye">
                    <div className="h-box">
                        <div>Kanye Jones</div>
                        <div className="proffesion">Art Director</div>
                    </div>


                </div>
                <div className="marta">
                    <div className="h-box">
                        <div>Marta White</div>
                        <div className="proffesion">Tester</div>
                    </div>
                </div>
            </div>
            <div className="teleport-button">
                <button className="orange">Start work</button>
            </div>
        </div>
        

    );
}
export default Laboratory;