import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {FaLocationArrow} from 'react-icons/fa'
import {FaLocationCrosshairs} from 'react-icons/fa6'
import {FiPhoneCall} from 'react-icons/fi'
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const {Langsar} = useContext(StyleContext);


  const {setpage1,setpage2} = useContext(StyleContext);


  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;

  const handleLinkClick = () => {
    setpage1(false);
    setpage2(false);
    
    // You can perform additional actions here if needed
  };
  const handleLinkClickcontact2 = (event) => {
    event.preventDefault();

    const targetId = event.target.getAttribute("href").substring(1); // Remove the "#" from the href
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        behavior: "smooth",
        top: targetElement.offsetTop,
      });
    }
  };
  const handleLinkClickcontact = (key1) => {

  };
  const handleLinkClickrights = () => {
    setpage1(true);
    setpage2(false);
    
    // You can perform additional actions here if needed
  };
// in this stage we have to handle  the tech stage 
  return (
    <Headroom className="shadow-lg">
      <div  className={isDark ? "d-flex dark-menu header rounded-lg shadow-lg" : "d-flex header rounded-lg shadow-lg"}>
     
      <a href="/" className=" d-none logo col-1 d-md-flex justify-content-center align-items-center ">
          <span className="ml-3 logo-name col-12">          <img  style={{ width:  '100px' }}
                            alt="man sitting on table"
                            src={require("../../assets/images/logo.png")}
                          ></img></span>
        </a>
      <div className="col-11">  
      <div class="wrap">
	    <div class="container">
				<div class="row justify-content-between">
					<div class="">
						<div class="row">
							<div class="col">
								<div class=" d-flex align-items-center justify-content-center">
									<div class="icon d-flex align-items-center justify-content-center"><span className="mx-2 rounded-circle border border-warning"><FaLocationCrosshairs className="m-2 m-md-3 fa-1x "/></span></div>
									<div class="text">{Langsar.header_loc}</div>
								</div>
							</div>
							<div class="col">
								<div class=" d-flex align-items-center justify-content-center">
                <div class="icon d-flex align-items-center justify-content-center"><span className="mx-2 rounded-circle border border-warning"><FiPhoneCall className="m-2 m-md-3 fa-1x "/></span></div>
									<div class="text"><span>{Langsar.header_num}</span></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
      <header className={isDark ? "dark-menu header rounded-lg" : "header rounded-lg"} >
       
      <a href="/" className="d-md-none logo col-1 d-flex justify-content-center align-items-center ">
          <span className="ml-3 logo-name col-12">          <img  style={{ width:  '100px' }}
                            alt="man sitting on table"
                            src={require("../../assets/images/logo.png")}
                          ></img></span>
        </a>

        
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >

          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {(
            <li>
              <a href="" onClick={handleLinkClickcontact('contactme')}>sss{Langsar.header1}</a>
            </li>
          )}
                    {(
            <li>
              <a href="" onClick={handleLinkClickrights}>{Langsar.header9}</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#services" onClick={handleLinkClick('services')}>{Langsar.header2}</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#brands" onClick={handleLinkClick('brands')}>{Langsar.header3}</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#whyus" onClick={handleLinkClick('whyus')}>{Langsar.header4}</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#services" onClick={handleLinkClick('services')}>{Langsar.header5}</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#table" onClick={handleLinkClick('table')}></a>
            </li>
          )}
          <li>
            <a href="#prices" onClick={handleLinkClick('prices')}>{Langsar.header7}</a>
          </li>
          <li>
            <a href="#contact" onClick={handleLinkClick('contact')}>{Langsar.header8}</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
      </div>
      </div>
    </Headroom>
  );
}
export default Header;
