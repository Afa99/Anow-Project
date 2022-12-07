import React from "react";
import "./Futer.css";

function Futer() {
    return (
        <div className="anow-page">
            <div className="anow-box">
                <div className="anow">
                    anow
                    <div className="numbers-futer">
                        <p>+ (0712) 819 79 555</p> <p>| M:</p> <p>info@example.com</p>
                    </div>
                </div>
                <div className="hpb-container">
                    <div className="home-box">
                        <div className="title-home">
                            Home

                        </div>
                        <div className="home-portfolio">
                            <div>Home Portfolio</div>
                            <div>Home Agency</div>
                            <div>Home Architecture</div>
                        </div>
                    </div>

                    <div className="portfolio-box">
                        <div className="title-portfolio">
                            <div>Portfolio</div>
                        </div>
                        <div>Masonry Portfolio</div>
                        <div>Grid Portfolio</div>
                        <div>Metro Portfolio</div>
                        <div>Service Details</div>
                    </div>
                    <div className="blog-box">
                        <div className="title-blog">
                            <div>Blog</div>
                        </div>
                        <div>Blog Style 1</div>
                        <div>Blog Style 2</div>
                        <div>Blog Style 3</div>
                        <div>Licensing</div>
                    </div>
                </div>
            </div>
            <div className="rules">
                <div>© Anow. All Rights Reserved 2022 — Designed by</div>
                <div className="digital-bit">128.digital.</div>
                <div>Powered by</div>
                <div className="author">Webflow</div>
            </div>
        </div>
    )
}
export default Futer;