import React, {useContext} from "react";
import StyleContext from "../../contexts/StyleContext";
import {Fade} from "react-reveal";
import { Tabs, Tab } from "react-bootstrap";
import "./Techs.scss";
// reactstrap components
//<p><a href="#" class="btn-custom">Read more</a></p>

//<AiOutlineLaptop className="mx-1 fa-1x"/>
import {
  Container,
} from "reactstrap";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import {ImTablet} from 'react-icons/im'
import {IoPhonePortraitOutline} from 'react-icons/io5'
import {AiOutlineLaptop} from 'react-icons/ai'
import {BsSmartwatch} from 'react-icons/bs'
export default function Services() {
  const {Langsar} = useContext(StyleContext);//Langsar.intro_content
  const Demo = () => {
    return <div>Tab 4 using component screen readers</div>;
  };
  return (
    <Fade bottom duration={1000} distance="40px">
   <section className="ftco-section" id="services">
    	<div className="container-fluid ">
        <div className="greet-main">
    		<div className=" row justify-content-center pb-5 mb-3">
          <div className="col-md-7 heading-section text-center ftco-animate fadeInUp ftco-animated">
          	<span className="subheading">{Langsar.serv_title}</span>
            
            <h2>{Langsar.serv_sub}</h2>
          </div>
        </div>
    		<div className="row">
          <div className="col-md-4 services ftco-animate fadeInUp ftco-animated">
            <div className="d-block d-flex">
              <div className="icon d-flex justify-content-center align-items-center">
            		<span className="flaticon-car-service"></span>
              </div>
              
              <div className="media-body pl-3">
                <h3 className="heading">{Langsar.serv1}</h3>
                <p>{Langsar.serv1_exp}</p>
              </div>
            </div>
            <div className="d-block d-flex">
              <div className="icon d-flex justify-content-center align-items-center">
            		<span className="flaticon-tyre"></span>
              </div>
              <div className="media-body pl-3">
                <h3 className="heading">{Langsar.serv2}</h3>
                <p>{Langsar.serv2_exp}</p>
              </div>
            </div> 

          </div>
          <div className="col-md-4 services ftco-animate fadeInUp ftco-animated">
            <div className="d-block d-flex">
              <div className="icon d-flex justify-content-center align-items-center">
            		<span className="flaticon-battery"></span>
              </div>
              <div className="media-body pl-3">
                <h3 className="heading">{Langsar.serv3}</h3>
                <p>{Langsar.serv3_exp}</p>
              </div>
            </div> 
            <div className="d-block d-flex">
              <div className="icon d-flex justify-content-center align-items-center">
            		<span className="flaticon-car-engine"></span>
              </div>
              <div className="media-body pl-3">
                <h3 className="heading">{Langsar.serv4}</h3>
                <p>{Langsar.serv4_exp}</p>
              </div>
            </div>    
          </div>

          <div className="col-md-4 services ftco-animate fadeInUp ftco-animated">
            <div className="d-block d-flex">
              <div className="icon d-flex justify-content-center align-items-center">
            		<span className="flaticon-tow-truck"></span>
              </div>
              <div className="media-body pl-3">
                <h3 className="heading">{Langsar.serv5}</h3>
                <p>{Langsar.serv5_exp}</p>
              </div>
            </div>
            <div className="d-block d-flex">
              <div className="icon d-flex justify-content-center align-items-center">
            		<span className="flaticon-repair"></span>
              </div>
              <div className="media-body pl-3">
                <h3 className="heading">{Langsar.serv6}</h3>
                <p>{Langsar.serv6_exp}</p>
              </div>
            </div>       
          </div>
        </div>
        </div>
    	</div>
    </section>
  </Fade>
  );
}
//in this stage we have to add a new tech that can adjust