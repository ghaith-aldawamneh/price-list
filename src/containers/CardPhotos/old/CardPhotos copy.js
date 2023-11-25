import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Card,
  CardImg,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function CardPhotos() {
  return (
    <Container className="container-lg">
      <>dfewfewf</>
    <Row>
      <Col className="mb-5 mb-md-0" md="6">
        <Card className="card-lift--hover shadow border-0">
    
        <CardImg  style={{ width:  '80px' }}
                            alt="man sitting on table"
                            src={require("../../assets/images/google.png")}
                            /><p>google</p>
     
        </Card>
      </Col>
      <Col className="mb-5 mb-lg-0" md="6">
        <Card className="card-lift--hover shadow border-0">
     
          <CardImg  style={{ width:  '80px' }}
                            alt="man sitting on table"
                            src={require("../../assets/images/google.png")}
                            /><p>google</p>
      
        </Card>
      </Col>
    </Row>
  </Container>
  );
}
