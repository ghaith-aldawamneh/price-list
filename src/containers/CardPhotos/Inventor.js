import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {Langsar} = useContext(StyleContext);//Langsar.intro_content
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <section className="greet-main mt-5 " id="greeting">
      <h1
                className={isDark ? "dark-mode greeting-text mb-3" : "greeting-text mb-3"}
              >
                <span className="wave-emoji">{emoji("👋")}</span>
                {" "}
                {Langsar.inventor}{" "}
                <span className="wave-emoji">{emoji("🔌")}</span>
                <span className="wave-emoji">{emoji("📱")}</span>
                <span className="wave-emoji">{emoji("⚡️")}</span>
              </h1>

        <div className="greeting-main mt-md-1 mt-5">

          <div className="">
            {illustration.animated ? (
                            <img
                            alt="man sitting on table"
                            src={require("../../assets/images/inventor.png")}
                          ></img>
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/developerActivity.svg")}
              ></img>
            )}
          </div>
        </div>
      </section>
    </Fade>
  );
}
