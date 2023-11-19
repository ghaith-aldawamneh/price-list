import React, {lazy} from "react";
import {Fade} from "react-reveal";
import { Tabs, Tab } from "react-bootstrap";
import "./Services.scss";
// reactstrap components
import {
  Container,
} from "reactstrap";
import {FaLocationArrow} from 'react-icons/fa'
import {FaLocationCrosshairs} from 'react-icons/fa6'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import {ImTablet} from 'react-icons/im'
import {IoPhonePortraitOutline} from 'react-icons/io5'
import {AiOutlineLaptop} from 'react-icons/ai'
import {BsSmartwatch} from 'react-icons/bs'
export default function Services() {
  
 // const ServicesSub = lazy(() =>
  //import("./ServicesSub")
//);
  const Demo = () => {
    return <div>Tab 4 using component screen readers</div>;
  };
  return (
    <Fade bottom duration={1000} distance="40px">
    <div className="container-fluid" id="services">
      <div className="d-block ">
    <div  className="greet-main">
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
    <div className="row flex-grow justify-content-center ">
        <div >
          <Nav variant="pills" className="flex-grow justify-content-between" >
            <Nav.Item className="col-md-3 col-6 ">
              <Nav.Link eventKey="first" className="d-flex justify-content-center align-items-center btn-danger">
                <IoPhonePortraitOutline className="m-md-3 fa-3x "/>

                <h2>Handy</h2></Nav.Link>
            </Nav.Item>
            <Nav.Item className="col-md-3 col-6">
              <Nav.Link eventKey="second" className="d-flex justify-content-center align-items-center ">
                <ImTablet className="m-md-3 fa-3x"/>
                <h2>Tablet</h2></Nav.Link>
            </Nav.Item>
            <Nav.Item className="col-md-3 col-6">
              <Nav.Link eventKey="third" className="d-flex justify-content-center align-items-center">
                <AiOutlineLaptop className="m-md-3 fa-3x"/>
                <h2>Laptop</h2></Nav.Link>
            </Nav.Item>
            <Nav.Item className="col-md-3 col-6">
              <Nav.Link eventKey="forth" className="d-flex justify-content-center align-items-center">
                <BsSmartwatch className="m-md-3 fa-3x"/>
                <h2>Watch</h2></Nav.Link>
            </Nav.Item>
          </Nav>
          </div>
        </div>
        <Col>
          <Tab.Content className="row justify-content-center">
            <Tab.Pane eventKey="first" >
              <div className="position-relative">
              <div className="position-absolute container-fluid row">
              <div className="col-5  zindex-dropdown ">



									<div className="flex_j "><div className="custom-e zindex-tooltip"><FaLocationCrosshairs className="m-2 m-md-3 fa-1x  "/></div>
                  <div className="mx-2 text fw-bold zindex-tooltip text-white-50">721 New York NY 10016</div>
                  </div>
                  
                  <div className="flex_j "><div className="custom-e zindex-tooltip"><FaLocationCrosshairs className="m-2 m-md-3 fa-1x  "/></div>
                  <div className="mx-2 text fw-bold zindex-tooltip text-white-50">721 New York NY 10016</div>
                  </div>


              </div>

              </div>


               <img className=""
                            alt="man sitting on table"
                            src={require("../../assets/images/phone.jpg")}>
                            </img>
                            
                           </div>
                          </Tab.Pane>
            <Tab.Pane eventKey="second"> <img 
                            alt="man sitting on table"
                            src={require("../../assets/images/Tablet.jpg")}></img></Tab.Pane>
            <Tab.Pane eventKey="third"> <img  
                            alt="man sitting on table"
                            src={require("../../assets/images/laptop.jpg")}></img></Tab.Pane>
            <Tab.Pane eventKey="forth"> <img  
                            alt="man sitting on table"
                            src={require("../../assets/images/smart watch.jpg")}></img></Tab.Pane>
            <Tab.Pane eventKey="third">Second tab content</Tab.Pane>
          </Tab.Content>
        </Col>
    </Tab.Container></div></div></div>
  </Fade>
  );
}
//in this stage we have to add a new tech that can adjust