import React from "react";
import {Fade} from "react-reveal";
import { Tabs, Tab } from "react-bootstrap";
import "./Prices.scss";
// reactstrap components
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
  const Demo = () => {
    return <div>Tab 4 using component screen readers</div>;
  };
  return (
    <Fade bottom duration={1000} distance="40px">
    <section className="ftco-section">
    	<div className="container-fluid ">
        <div className="greet-main">
        <div className="row justify-content-center pb-5 mb-3">
          <div className="col-md-7 heading-section text-center ftco-animate fadeInUp ftco-animated">
          	<span className="subheading">Price &amp; Plans</span>
            <h2>Pricing</h2>
          </div>
        </div>
    		<div className="row">
    			<div className="col-md-6 col-lg-3 ftco-animate fadeInUp ftco-animated">
	          <div className="block-7">
	            <div className="text-center">
            	<h4 className="excerpt d-block font-weight-bold">First PMS</h4>
	            <span className="price"><h6 className="number">$78.98</h6></span>
	            
	            <div className="pricing-text">
	              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
	            </div>
	            </div>
	          </div>
	        </div>


			<div className="col-md-6 col-lg-3 ftco-animate fadeInUp ftco-animated">
	          <div className="block-7">
	            <div className="text-center">
            	<h4 className="excerpt d-block font-weight-bold">First PMS</h4>
	            <span className="price"><h6 className="number">$78.98</h6></span>
	            
	            <div className="pricing-text">
	              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
	            </div>
	            </div>
	          </div>
	        </div>


			<div className="col-md-6 col-lg-3 ftco-animate fadeInUp ftco-animated">
	          <div className="block-7">
	            <div className="text-center">
            	<h4 className="excerpt d-block font-weight-bold">First PMS</h4>
	            <span className="price"><h6 className="number">$78.98</h6></span>
	            
	            <div className="pricing-text">
	              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
	            </div>
	            </div>
	          </div>
	        </div>


			<div className="col-md-6 col-lg-3 ftco-animate fadeInUp ftco-animated">
	          <div className="block-7">
	            <div className="text-center">
            	<h4 className="excerpt d-block font-weight-bold">First PMS</h4>
	            <span className="price"><h6 className="number">$78.98</h6></span>
	            
	            <div className="pricing-text">
	              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
	            </div>
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