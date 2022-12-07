import React from "react";
import "./PhotoNews.css";

    function PhotoNews({title, text}){
        return(
            <div className="img-design">
                <div className="lifestyle">
                 {title}

                 <div className="rectangle-square"></div>
                 <div className="data"> March 11, 2022</div>
                </div>
                <div className="opportunity">
                {text}
                </div>
                <div className="view-orange">
                    view more
                </div>
               
            </div>

        )
    }
    export default PhotoNews;