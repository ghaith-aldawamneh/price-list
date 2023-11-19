import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplaysLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";



export default function Skills() {
  const {Langsar} = useContext(StyleContext);//Langsar.intro_content
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  
  return (
    <section className={isDark ? "dark-mode main" : "main"} id="brands">
      <div className="skills-main-div">
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {Langsar.brands_title}{" "}
            </h1>
  
            <SoftwareSkill />
            <div>
                  <p
                    className={
                      isDark
                        ? "dark-mode subTitle skills-text"
                        : "subTitle skills-text"
                    }
                  >
                   
                  </p>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
