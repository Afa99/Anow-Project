import React from "react";
import "./Feedback.css"

    function Feedback(){
        return(
            <div className="feedback">
                <div className="district">
                    <div className="address">
                        address
                        <div className="lokations">
                         14 tottenham road,
                         london, england
                        </div>
                    </div>
                    <div className="information-letter">
                         information
                        <div className="lokations">
                         info@yourdomain.com
                         (+68) 12004509
                        </div>
                    </div>
                </div>
                <div className="your-info">
                   <div className="input-box">
                     <input className="your-name" placeholder="Your name*"/>
                     <input className="your-email"  placeholder="Your e-mail*"/>
                   </div>
                   <div className="big-imput">
                        <input className="large-imput" placeholder="Your message*"/>
                   </div>  
                   <div className="amber-box-butt">
                   <button className="amber-button">Send Message</button>  
                   </div>
                   
                </div>
                 
            </div>
        )
    }
    export default Feedback;