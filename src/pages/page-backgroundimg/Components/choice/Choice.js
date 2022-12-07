import classNames from "classnames";
import "./Choice.css";
import React from "react";


    function Choice ({type, name })  {
        return(
            <div className={classNames('butt-box', type && `butt-box--${type}`)}>
                <div className={classNames("differents", type && `differents--${type}`)}>{name}</div>
                <button className="choice"></button>
            </div>
        );
    }
    export default Choice; 