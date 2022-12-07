import "./TextButton.css";
import React from "react";

function TextButton() {
    return (
        <div className="text-button">
            <div className="wrapp-box">
                <div className="works">LATEST WORKS</div>
                <div className="look">take a look around our portfolio.</div>
            </div>
            <div className="button-box">
                <div className="button-home">
                <button className="button">View More</button>

                </div>
                <div className="logoButton">works</div>
            </div>
        </div>
    );
}
export default TextButton;