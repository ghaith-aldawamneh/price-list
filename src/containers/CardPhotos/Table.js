import React ,{useState,useContext}from "react";
import StyleContext from "../../contexts/StyleContext";
import Select, { components } from 'react-select';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import {Fade} from "react-reveal";
import "./Table.scss";
// reactstrap components
import {ImTablet} from 'react-icons/im'
import {IoPhonePortraitOutline} from 'react-icons/io5'
import {AiOutlineLaptop} from 'react-icons/ai'
import {BsSmartwatch} from 'react-icons/bs'
import SlidePrice from "./path/SlidePrice"
import {Data} from "./path/Data"
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

export default function Services() {
  const {Langsar} = useContext(StyleContext);//Langsar.intro_content
  const [selectedType, setSelectedType] = useState(null);
  const [selectedSubtype, setSelectedSubtype] = useState(null);

  const filteredProducts = Langsar.Data.filter((product) => {
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
          <h3 className="card-title my-3">Products Slide</h3>
         <SlidePrice items={filteredProducts} pathVariable={"./img"} />
          <h3 className="card-title">Some of the Products</h3>
          <Select
  options={Langsar.type.map((element) => ({
    ...element,
    icon: `./path/icon/${element.label}.png`, // Provide the path to the corresponding icon
  }))}
  className="my-3"
  components={{ Option: CustomOption }} // Use the custom option component
  onChange={handleTypeChange}
  value={selectedType}
  defaultValue={Langsar.type.length > 0 ? { label: Langsar.type[0].label, value: Langsar.type[0].value } : null}
  // ...
/>
          <h3 className="card-title">Select a Type</h3>
          <Select
  options={Langsar.subtype.map((element) => ({
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
                        <a className="justify-content-center align-items-center" href="invoice.html">{product.price}</a>
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
                  <h3 className="card-title my-4">Web Services</h3>
                  <SlidePrice items={filteredProducts} pathVariable={"./img"} />
                  <h3 className="card-title my-4">Health services</h3>
                  <SlidePrice items={filteredProducts} pathVariable={"./img"} />
                  <h3 className="card-title my-4">Universities Acceptance</h3>
                  <SlidePrice items={filteredProducts} pathVariable={"./img"} />



                </div>
  </Fade>
  );
}
//in this stage we have to add a new tech that can adjust