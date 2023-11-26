import React, {useContext} from "react";
import StyleContext from "../../../contexts/StyleContext";
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import "./Slide1/Slide1.scss";
import "../../../assets/images/services/Albaniasss.png";

const responsive= {
  0: {
      items: 3,
  },
  568: {
      items: 5,
      itemsFit: 'contain',
  },
  1024: {
      items: 7,
      itemsFit: 'contain',
  }
}

const handleDragStart = (e) => e.preventDefault();



// const renderedItems = items.map((item, index) => (
//   <div key={index} className="m-auto my-auto h-100 justify-content-center align-items-center d-flex flex-column">
//     <img className="custom-icon m-auto" src={item.src} onDragStart={handleDragStart} role="presentation" />
//     <h5 className="mt-2 card-title">{item.name}</h5>
//   </div>
// ));


export default function SlidePrice({items,pathVariable}) {
  const {Langsar} = useContext(StyleContext);//Langsar.intro_content
  const {isDark} = useContext(StyleContext);
 console.log("pathVariable",pathVariable)
  const renderedItems = items.map((item, index) => (
    <div key={index} className="my-auto h-100 justify-content-center align-items-center d-flex flex-column">
      <img className="custom-icon m-auto" src={require(`${pathVariable}/${item.img}`)} onDragStart={handleDragStart} role="presentation" />
      <h5 className="mt-2 card-title">{item.name}</h5>
      <h6 className="mt-2 card-title">{item.price}</h6>
    </div>
  ));

  return (
  <>

    <AliceCarousel mouseTracking items={renderedItems} responsive={responsive}/>
  </>
  );
}
