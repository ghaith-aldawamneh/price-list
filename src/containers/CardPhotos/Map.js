import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import {Fade} from "react-reveal";
const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};
const center = {
  lat: 7.2905715, // default latitude
  lng: 80.6337262, // default longitude
};

const App = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: '',
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
    <section className="ftco-section">
       <div className="container-fluid ">
         <div className="greet-main">
    <div>
      <GoogleMap
      mapContainerStyle={{ width: '100%', height: `50vh`}}
       
        zoom={19}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
    </div>
    	</div>
    </section>
  </Fade>
  );
};

export default App;

