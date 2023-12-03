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

  //in this line we add a new line 
  const {Langsar} = useContext(StyleContext);//Langsar.intro_content
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <section className="greet-main mt-md-1 mt-5 " id="greeting">
        <div className="greeting-main mt-md-1 mt-5">
          <div className="greeting-text-div mt-5">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {Langsar.intro_heading}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >          <div className="">
              {illustration.animated ? (
                              <img
                              alt="man sitting on table"
                              src={require("../../assets/images/cover.jpg")}
                            ></img>
              ) : (
                <img
                  alt="man sitting on table"
                  src={require("../../assets/images/developerActivity.svg")}
                ></img>
              )}
            </div>
                {Langsar.intro_content}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text={Langsar.contactme} href="#contact" />

              </div>
            </div>
          </div>

        </div>
      </section>
    </Fade>
  );
}

