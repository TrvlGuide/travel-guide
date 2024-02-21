import React, { useState } from 'react';
import { Button } from '../Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot, faPlane} from '@fortawesome/free-solid-svg-icons'
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { 
        APIProvider,
        Map,
        AdvancedMarker,
        Pin,
        InfoWindow,
        useAdvancedMarkerRef

         } from '@vis.gl/react-google-maps';
import { useEffect } from 'react';
import { ReactSVG } from 'react-svg';




export default function Destinations() {

  const properties = [
    {
      address: "215 Emily St, MountainView, CA",
      description: "Single family house with modern design",

      position: {
        lat: 37.50024109655184,
        lng: -122.28528451834352,
      },
    },
    {
      address: "Driftwoods Action Park and Cafe",
      description: "Off-Road Sports and Outdoor Recreation Venue",

      position: {
        lat: 14.15760187205638,
        lng: 120.90330720296967
      }
      
    },
    {
      address: "Siglo Paraiso Resort Farm",
      description: "Private Farm Resort That is Exclusive for You and Your Loved Ones.",

      position: {
        lat: 14.163995345464922,
        lng: 120.8904970346804
      }
      
    }
  ];

  function pinImg() {
    const icon = document.createElement("img");
    icon.src ="../images/plane-solid.svg";
    return icon;
  }
  const [infowindowOpen1, setInfowindowOpen1] = useState(false);
  const [infowindowOpen2, setInfowindowOpen2] = useState(false);
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [isContentVisible, setContentVisible] = useState(true);
  const [activeButton, setActiveButton] = useState('Indang'); // Set the default active button
  const [mapType, setMapType] = useState('destinations'); // New state to track map type
  const [isButtonClicked, setButtonClicked] = useState(false);
  const handleButtonClick = (buttonName, type) => {
    setActiveButton(buttonName);
    setMapType(type); // Set the map type
    setButtonClicked(true);
    setTimeout(() => {
      setButtonClicked(false);
    }, 100);
  };

  const everything = (buttonName) => {
    handleButtonClick(buttonName);
    handleMapTypeToggle();
  }
  const handleMapTypeToggle = () => {
    setMapType((prevMapType) =>
      prevMapType === 'accommodations' ? 'accomodations' : 'destinations'
    );
  };

  const handleAccommodationsToggle = () => {
    setMapType('accommodations');
  };

  const handleDestinationsToggle = () => {
    setMapType('destinations');
  };

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setContentVisible(!isContentVisible);
      setButtonClicked(false);
    }, 10); // Adjust the delay as needed
  
    return () => clearTimeout(timer);
  }, [activeButton]);


const setContentVisibility = () => {
  setContentVisible(!isContentVisible);
}
  
const center = {lat: 14.153059856204539, lng: 120.90277126727229}
const latlong = (lat,lng) => {
  return '{lat:' +lat +', lng:'+lng +'}'
}
const hotel = {
  color: '#3498db',/* Choose your preferred color */
  fontSize: '24px'/* Choose your preferred size */
};
const destination = {
  color: '#FFA500',
  fontSize: '24px',

};
const expandText = {
  display: "flex",
  justifyContent: 'center',
  alignItems: 'center'  
};


return (
  <APIProvider apiKey='AIzaSyC8kczNdBy9nt3qzpB1u0UCVguAsH_hU0Y  '>
    <div className='destinations-container'>

    <div onClick={() => setContentVisible(!isContentVisible)} className={`destinations-content ${isContentVisible ? 'active' : ''}`}>
      <div className={`expand ${!isContentVisible? 'active' : ''}`} style={expandText}>Click to Expand</div>
      <div className={`destinations-title ${isContentVisible ? 'active' : ''}`}>
        <h2>Places</h2>
      </div>
      <div className={`destination-buttons ${isContentVisible ? 'active' : ''}`}>
        <Button
          id={`btns ${activeButton === 'Indang' ? 'active' : ''}`}
          link='Destinations'
          buttonSize='btn--large'
          buttonStyle={activeButton === 'Indang' ? 'btn--primary' : 'btn--outline'}
          onClick={() => 
            everything('Indang')
        }
          
        >
          Indang
        </Button>
        <Button
          id={`btns ${activeButton === 'Amadeo' ? 'active' : ''}`}
          link='Destinations'
          buttonSize='btn--large'
          buttonStyle={activeButton === 'Amadeo' ? 'btn--primary' : 'btn--outline'}
          onClick={() =>everything('Amadeo')}
        >
          Amadeo
        </Button>
        <Button
          id={`btns ${activeButton === 'Tagaytay' ? 'active' : ''}`}
          link='Destinations'
          buttonSize='btn--large'
          buttonStyle={activeButton === 'Tagaytay' ? 'btn--primary' : 'btn--outline'}
          onClick={() =>  everything('Tagaytay')}
        >
          Tagaytay
        </Button>
        <Button
          id={`btns ${activeButton === 'Alfonso' ? 'active' : ''}`}
          link='Destinations'
          buttonSize='btn--large'
          buttonStyle={activeButton === 'Alfonso' ? 'btn--primary' : 'btn--outline'}
          onClick={() =>  everything('Alfonso')}
        >
          Alfonso
        </Button>
      </div>
    </div>
      


    </div>
        <div className="map1 active">
        <Map 
          zoom={12} 
          center = {{lat:14.191760936999954, lng:120.8727514189682}} 
          mapId='7221de5946eae6f5' 
          gestureHandling={'greedy'}
          disableDefaultUI={true}>

             {/* DESTINATIONS */}
             
             <AdvancedMarker ref={markerRef} className='pin' position={{lat: 14.157482118744753, lng: 120.90333919075216}} onClick={() => {
    console.log('Mouse over event triggered');
    setInfowindowOpen1(!infowindowOpen1);
  }} >
              <Pin glyph={pinImg()} glyphColor='white'/>
              
              {infowindowOpen1 && (
        <InfoWindow
          anchor={marker}
          maxWidth={200}
          onCloseClick={() => setInfowindowOpen1(false)}>
            OTIN
        </InfoWindow>
      )}
          </AdvancedMarker> 

          <AdvancedMarker className='pin'position={{lat:14.163885720325474, lng:120.89050506103825}}onClick={() => {
    console.log('Mouse over event triggered');
    setInfowindowOpen2(!infowindowOpen2);
  }} >
              <Pin glyph={pinImg()} glyphColor='white'/>
              
              {infowindowOpen2 && (
        <InfoWindow
          position={{lat:14.163885720325474, lng:120.89050506103825}}
          pixelOffset={{height:-40}}
          maxWidth={200}
          onCloseClick={() => setInfowindowOpen2(false)}>
            OTIN
        </InfoWindow>
      )}
          </AdvancedMarker> 

          <AdvancedMarker className='pin'position={{lat:14.146800384565335, lng:120.89704937831564}}>
               <Pin glyph={pinImg()} glyphColor='white'/>
              
          </AdvancedMarker> 

          <AdvancedMarker className='pin'position={{lat:14.262583801094756, lng:120.71782499610825}}>
               <Pin glyph={pinImg()} glyphColor='white'/>
              
          </AdvancedMarker> 

          <AdvancedMarker className='pin'position={{lat:14.146712000151966, lng:120.95665085377667}}>
               <Pin glyph={pinImg()} glyphColor='white'/>
              
          </AdvancedMarker> 

          <AdvancedMarker className='pin'position={{lat:14.149757059716062, lng:120.90392949610707}}>
               <Pin glyph={pinImg()} glyphColor='white'/>
              
          </AdvancedMarker> 
          
          </Map>
        </div>
        <div className={`map1 ${activeButton === 'Indang' && mapType === 'destinations' ? 'active' : ''}`}>
          
          </div>


        <div className={`map1 ${activeButton === 'Amadeo' && mapType === 'destinations' ? 'active' : ''}`}>

          </div>


        <div className={`map1 ${activeButton === 'Tagaytay' && mapType === 'destinations' ? 'active' : ''}`}>
          
          </div>



        <div className={`map1 ${activeButton === 'Alfonso' && mapType === 'destinations' ? 'active' : ''}`}>
          
          </div>
    </APIProvider>
  );
}