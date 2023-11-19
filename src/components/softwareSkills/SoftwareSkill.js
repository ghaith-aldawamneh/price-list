import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
                <li className="software-skill-inline" >
          <img  style={{ width:  '80px' }}
                            alt="man sitting on table"
                            src={require("../../assets/images/google.png")}
                          ></img><p className="fw-bold" style={{fontSize:"13px"}}>Google</p></li>
                                          <li className="software-skill-inline" >
          <img  style={{ width:  '100px' }}
                            alt="man sitting on table"
                            src={require("../../assets/images/samsung.png")}
                          ></img><p className="fw-bold" style={{fontSize:"13px"}}>Samsung</p></li>
                                          <li className="software-skill-inline" >
          <img  style={{ width:  '100px' }}
                            alt="man sitting on table"
                            src={require("../../assets/images/sony.png")}
                          ></img><p className="fw-bold" style={{fontSize:"13px"}}>Sony</p></li>
<li className="software-skill-inline" >
          <img  style={{ width:  '100px' }}
                            alt="man sitting on table"
                            src={require("../../assets/images/oppo.png")}
                          ></img><p className="fw-bold" style={{fontSize:"13px"}}>Oppo</p></li>


<li className="software-skill-inline" >
          <img  style={{ width:  '100px' }}
                            alt="man sitting on table"
                            src={require("../../assets/images/asus.png")}
                          ></img><p className="fw-bold" style={{fontSize:"13px"}}>ASUS</p></li>


<li className="software-skill-inline" >
          <img  style={{ width:  '70px' }}
                            alt="man sitting on table"
                            src={require("../../assets/images/zte.png")}
                          ></img><p className="fw-bold" style={{fontSize:"13px"}}>ZTE</p></li>


<li className="software-skill-inline" >
          <img  style={{ width:  '70px' }}
                            alt="man sitting on table"
                            src={require("../../assets/images/huawei.png")}
                          ></img><p className="fw-bold" style={{fontSize:"13px"}}>Huawei</p></li>

<li className="software-skill-inline" >
          <img  style={{ width:  '50px' }}
                            alt="man sitting on table"
                            src={require("../../assets/images/xiaomi.png")}
                          ></img><p className="fw-bold" style={{fontSize:"13px"}}>Xiaomi</p></li>

<li className="software-skill-inline" >
          <img  style={{ width:  '50px' }}
                            alt="man sitting on table"
                            src={require("../../assets/images/apple3.png")}
                          ></img><p className="fw-bold" style={{fontSize:"13px"}}>Apple</p></li>
        </ul>
        <ul className="dev-icons">

                
              


        </ul>
      </div>
    </div>
  );
}
