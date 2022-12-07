import React from "react";
import Amber from "./Components/Amber/amber/Amber";
import PhotoNews from "./Components/photo-news/PhotoNews";
import Feedback from "./Components/feedback/Feedback";
import "./Email.css";
    function Email (){
        return(
            <div className="email-page">
                <Amber/>
                 <div className="news">  
                   our interactive news
                 </div>
                 <div className="photo-design">
                    <div className="greenland">
                        <div className="greenland-img"></div>
                     <PhotoNews title="lifestyle design" text="insights from interviewing the community"/>
                    </div>
                    <div className="sleep">
                        <div className="sleep-img"></div>
                     <PhotoNews title="lifestyle design" text="excelent company and opportunities"/>
                    </div>
                    <div className="bike">
                        <div className="bike-img"></div>
                     <PhotoNews title="lifestyle" text="ways to increase your website"/>
                    </div>
                    
                    


                </div>
                    <Feedback/>
            </div>
            
        )
    }
    export default Email;