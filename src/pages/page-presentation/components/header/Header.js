import React, { useState } from "react";
import "../header/Header.css";



function Header() {
    // const [showAnow, setShowAnow] = useState(true)
    return (
        <div className="container">

            {/* <div className="anow-title-box" onClick={() => setShowAnow(!showAnow)}>

                {showAnow && <span>anow</span>}

            </div> */}
            <div className="anow-title-box">
                    anow
            </div>

            <section class="top-nav">
                <div className="anow-title-box-media">
                    anow
                </div>
                <input id="menu-toggle" type="checkbox" />
                <label class='menu-button-container' for="menu-toggle">
                    <div class='menu-button'></div>
                </label>
                <ul class="menu">
                    <li> <span className="color">demos</span> </li>
                    <li>about us</li>
                    <li>portfolio</li>
                    <li>team</li>
                    <li>news</li>
                    <li>contact</li>
                    <li>other page </li>
                </ul>
            </section>


            <div className="button-container">
                <a href="/" className="head head-color">demos</a>
                <button className="head">about us</button>
                <button className="head">portfolio</button>
                <button className="head">team</button>
                <button className="head">news</button>
                <button className="head">contact</button>
                <button className="head head-button">other pages</button>
            </div>
        </div>
    )
};

export default Header;
