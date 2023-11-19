



  import React, {useContext} from "react";
import StyleContext from "../../../../contexts/StyleContext";
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import "./Slide1.scss";

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

const items = [
  {
    src: require("./images/Albaniasss.png"),
    text: "Description 1",
  },
  {
    src: require("./images/Albaniasss.png"),
    text: "Description 1",
  },
  {
    src: require("./images/Albaniasss.png"),
    text: "Description 1",
  },
  {
    src: require("./images/Albaniasss.png"),
    text: "Description 1",
  },
  {
    src: require("./images/Albaniasss.png"),
    text: "Description 1",
  },
  {
    src: require("./images/Albaniasss.png"),
    text: "Description 1",
  },
    {
    src: require("./images/Albaniasss.png"),
    text: "Description 1",
  },
  {
    src: require("./images/Albaniasss.png"),
    text: "Description 1",
  },
  {
    src: require("./images/Albaniasss.png"),
    text: "Description 1",
  },
  // Add more items as needed
];



const renderedItems = items.map((item, index) => (
  <div key={index} className="m-auto my-auto h-100 justify-content-center align-items-center d-flex flex-column">
    <img className="custom-icon m-auto" src={item.src} onDragStart={handleDragStart} role="presentation" />
    <h5 className="mt-2 card-title">{item.text}</h5>
  </div>
));


export default function Slide1() {
  const {Langsar} = useContext(StyleContext);//Langsar.intro_content
  const {isDark} = useContext(StyleContext);
  return (
  <>
    <h3 className="card-title my-3">All products</h3>
    <AliceCarousel mouseTracking items={renderedItems} responsive={responsive}/>
  </>
  );
}
