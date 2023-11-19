import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {illustration, contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import {
  Col,
} from "reactstrap";
export default function Contact() {
  const {isDark} = useContext(StyleContext);
  const {Langsar} = useContext(StyleContext);//Langsar.intro_content


  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
     <div className="row">
          <div className="col d-flex justify-content-center align-items-center">
          <Col sm="3" xs="6">
            <img
alt="..."
              className="img-fluid rounded-circle shadow"
              src={require("../../assets/images/smart watch.jpg")}
              style={{width: "300px", height: "300px" }}
            />
                        <small className="d-block text-uppercase font-weight-bold mb-4">
         
            </small>
          </Col> </div>
          <div className="col">
            <h1 className="heading contact-title">{Langsar.contactInfo_title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {Langsar.contactInfo_subtitle}
            </p>
            <div
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              {contactInfo.number && (
                <>
                  <a
                    className="contact-detail"
                    href={"tel:" + Langsar.contactInfo_number}
                  >
                    {Langsar.contactInfo_number}
                  </a>
                  <br />
                  <br />
                </>
              )}
              <a
                className="contact-detail-email"
                href={"mailto:" + Langsar.contactInfo_email_address}
              >
                {Langsar.contactInfo_email_address}
              </a>
              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
          </div>

         
        </div>
      </div>
    </Fade>
  );
}
