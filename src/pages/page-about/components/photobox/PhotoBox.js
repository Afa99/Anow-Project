import React from "react";
import "../photobox/PhotoBox.css";
function PhotoBox() {
  return (
    <div className="photo-box">
      <div className="img-container"></div>
      <div className="info">
        <div className="prewiev">
          “ Our mission is to produce the <span className="color-orange">highest quality</span> work for every
          clients, on every project with full of energy we have ”
        </div>
          <div className="photographer">
            <div className="frankie">Frankie Kao</div>
            <div className="adp">ART DIRECTOR PAO</div>
          </div>
      </div>
    </div>
  );
}
export default PhotoBox;
