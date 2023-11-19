import React, {useContext} from "react";
import "./SplashScreen.css";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import {greeting, splashScreen} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function SplashScreen() {
  const {isDark} = useContext(StyleContext);
  return (
    <div className={isDark ? "dark-mode splash-container" : "splash-container"}>

      <div className="splash-title-container">
      <span className="ml-3 logo-name col-12">          <img  style={{ width:  '200px' }}
                            alt="man sitting on table"
                            src={require("../../assets/images/logo.png")}
                          ></img></span>
      </div>
    </div>
  );
}
