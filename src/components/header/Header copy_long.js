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

  const styleContext = useContext(StyleContext);
  const {setpage1,setpage2,setpage33,setpage4,setpage5,setpage6,setpage7,setpage8,setpage9} = useContext(StyleContext);


  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;

  const handleLinkClick = (s) => {
    setpage1(false);setpage2(false);setpage33(false);setpage4(false);setpage5(false);setpage6(false);setpage7(false);setpage8(false);;setpage9(false);
    if(s=='1'){setpage1(true);}if(s=='2'){setpage2(true);}
    if(s=='3'){setpage33(true);}if(s=='4'){setpage4(true);}
    if(s=='5'){setpage5(true);}if(s=='6'){setpage6(true);}
    if(s=='7'){setpage7(true);}if(s=='8'){setpage8(true);}
    if(s=='9'){setpage9(true);}
    
    // You can perform additional actions here if needed
  };
  const handleLinkClickcontact = () => {
    console.log("page1zz")
    console.log("page1",styleContext.page1)
    styleContext.setpage1(true);
    styleContext.setpage2(true);setpage33(false);setpage4(false);setpage5(false);setpage6(false);setpage7(false);setpage8(false);;setpage9(false);
    console.log("page1",styleContext.page1)
    // You can perform additional actions here if needed
  };
  const handleLinkClickrights = () => {
    setpage1(false);
    setpage2(true);
    
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
              <a href="" onClick={handleLinkClickcontact}>{Langsar.header1}</a>
            </li>
          )}
                    {(
            <li>
              <a href="" onClick={handleLinkClickcontact}>{Langsar.header9}</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#services" onClick={handleLinkClick('3')}>{Langsar.header2}</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#brands" onClick={handleLinkClick('4')}>{Langsar.header3}</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#whyus" onClick={handleLinkClick('5')}>{Langsar.header4}</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#services" onClick={handleLinkClick('6')}>{Langsar.header5}</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#table" onClick={handleLinkClick('7')}>{Langsar.header6}</a>
            </li>
          )}
          <li>
            <a href="#prices" onClick={handleLinkClick('8')}>{Langsar.header7}</a>
          </li>
          <li>
            <a href="#contact" onClick={handleLinkClick('9')}>{Langsar.header8}</a>
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
