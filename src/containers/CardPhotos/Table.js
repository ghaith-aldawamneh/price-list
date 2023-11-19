import React ,{useState}from "react";
import Select, { components } from 'react-select';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';

import {Fade} from "react-reveal";
import { Tabs, Tab } from "react-bootstrap";
import "./Table.scss";
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
import Slide1 from "./path/Slide1/Slide1"
//../../Data  
const CustomOption = (props) => (
  <components.Option {...props}>
    <img 
    className="custom-icon"
    src={require("./path/icon/Albaniasss.png")} 
    alt={props.label} />
    {props.label}
  </components.Option>
);
const CustomOption2 = (props) => (
  <components.Option {...props}>
    <img 
    className="custom-icon"
    src={require("./path/icon/Albaniasss.png")} 
    alt={props.label} />
    {props.label}
  </components.Option>
);

  

  const type = [
    { label: "Bags", value: "bags", img: "./path/icon/Albaniasss.png" },
    { label: "Print", value: "print", img: "./path/icon/Albaniasss.png" },
    // Add more type as needed
  ];

  const subtype = [
    { label: "Subtype 1", value: "subtype1", img: "/Albaniasss.png", type: ["bags"] },
    { label: "Subtype 2", value: "subtype2", img: "./path/img/Albaniasss.png", type: ["Print"] },
    // Add more subtype as needed
  ];

  const productsBySubtype = [
      { id: 1, name: "Product 1", price: 20, options: ["Option A", "Option B"], img: "Albaniasss.png", type: ["bags"], subtype: ["subtype1"] },
      { id: 2, name: "Product 2", price: 30,options: ["Option C", "Option D"], img: "Albaniasss.png", type: ["print"], subtype: ["subtype1"] },
      { id: 3, name: "Product 3", price: 25, options: ["Option E", "Option F"], img: "Albaniasss.png", type: ["bags"], subtype: ["subtype2"] },
     { id: 4, name: "Product 4", price: 35, options: ["Option G", "Option H"], img: "Albaniasss.png", type: ["print"], subtype: ["subtype2"] },
   ]

export default function Services() {
  const [selectedType, setSelectedType] = useState(null);
  const [selectedSubtype, setSelectedSubtype] = useState(null);


  

  
  
  const filteredProducts = productsBySubtype.filter((product) => {
    // Show all products if neither type nor subtype is selected
    if (!selectedType && !selectedSubtype) {
      return true;
    }

    // Filter products based on selected options
    if (selectedSubtype) {
      // If subtype is selected, filter by subtype
      return product.subtype.includes(selectedSubtype.value);
    } else if (selectedType) {
      // If no subtype is selected but type is selected, filter by type
      return product.type.includes(selectedType.value);
    }
  });



  const handleTypeChange = (selectedOption) => {
    setSelectedType(selectedOption);
    // Reset selected subtype when the type changes
    setSelectedSubtype(null);
  };

  const handleSubtypeChange = (selectedOption) => {
    setSelectedSubtype(selectedOption);
  };


  return (
    
    <Fade bottom duration={1000} distance="40px">
          <div className="container-fluid greet-main1" id="table">
          
         <Slide1/>
          <h3 className="card-title">All products</h3>
          <Select
  options={type.map((element) => ({
    ...element,
    icon: `./path/icon/${element.label}.png`, // Provide the path to the corresponding icon
  }))}
  className="my-3"
  components={{ Option: CustomOption }} // Use the custom option component
  onChange={handleTypeChange}
  value={selectedType}
  defaultValue={type.length > 0 ? { label: type[0].label, value: type[0].value } : null}
  // ...
/>
          <h3 className="card-title">Select a Type</h3>
          <Select
  options={subtype.map((element) => ({
    ...element,
    icon: `./path/icon/${element.label}.png`, // Provide the path to the corresponding icon
  }))}
  className="my-3"
  components={{ Option: CustomOption }} // Use the custom option component
  onChange={handleSubtypeChange}
  value={selectedSubtype}
  // ...
/>
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Products List</h3>
                  </div>
                  <div className="table-responsive">
                    <table className="table card-table table-vcenter text-nowrap">
                      <thead>
                        <tr>
                        <th>                      <div className="m-auto my-auto h-100 justify-content-center align-items-center d-flex">
                        <h5 className="justify-content-center align-items-center " href="invoice.html">Product</h5>
                      </div></th>

                          <th>                      <div className="m-auto my-auto h-100 justify-content-center align-items-center d-flex">
                        <h5 className="justify-content-center align-items-center " href="invoice.html">Price</h5>
                      </div></th>
                      <th>                      <div className="m-auto my-auto h-100 justify-content-center align-items-center d-flex">
                        <h5 className="justify-content-center align-items-center " href="invoice.html">Options</h5>
                      </div></th>
                        </tr>
                      </thead>
                      <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <img className="custom-icon-list" src={require(`./path/img/${product.img}`)} alt={product.name} />
                      <span className="text-muted">{product.name}</span>
                    </td>
                    <td>
                      <div className="m-auto my-auto h-100 justify-content-center align-items-center d-flex">
                        <a className="justify-content-center align-items-center" href="invoice.html">{product.name}</a>
                      </div>
                    </td>
                    <td>
                      <div className="container-fluid">
                        <div className="row justify-content-center align-items-center">
                          <div className="dropdown">
                            {/* Add the appropriate dropdown or selection component here */}
                            {/* For example: */}
                            <Select options={product.options.map((option) => ({ label: option, value: option }))}
                            defaultValue={{ label: product.options[0], value: product.options[0] }}
                            />
                       
                          </div>
                          <div className="col-md-4"></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
                    </table>
                  </div>
                  </div>
                </div>
  </Fade>
  );
}
//in this stage we have to add a new tech that can adjust

