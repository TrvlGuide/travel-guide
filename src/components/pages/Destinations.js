import React, { useState } from 'react';
import { Button } from '../Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { 
        APIProvider,
        Map,
        AdvancedMarker,
        Pin,
        InfoWindow
         } from '@vis.gl/react-google-maps';
import { useEffect } from 'react';



export default function Destinations() {
  
  const [activeButton, setActiveButton] = useState('Indang'); // Set the default active button
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  
const center = {lat: 14.153059856204539, lng: 120.90277126727229}


return (
  <APIProvider apiKey='AIzaSyC8kczNdBy9nt3qzpB1u0UCVguAsH_hU0Y'>
    <div className='destinations-container'>
      <div className="destinations-title">
        <h2>Destinations</h2>
      </div>

      <div className='destination-buttons'>
        <Button
          className={`btns ${activeButton === 'Indang' ? 'active' : ''}`}
          link='Destinations'
          buttonSize='btn--large'
          buttonStyle={activeButton === 'Indang' ? 'btn--primary' : 'btn--outline'}
          onClick={() => handleButtonClick('Indang')}
        >
          Indang
        </Button>
        <Button
          className={`btns ${activeButton === 'Amadeo' ? 'active' : ''}`}
          link='Destinations'
          buttonSize='btn--large'
          buttonStyle={activeButton === 'Amadeo' ? 'btn--primary' : 'btn--outline'}
          onClick={() => handleButtonClick('Amadeo')}
        >
          Amadeo
        </Button>
        <Button
          className={`btns ${activeButton === 'Tagaytay' ? 'active' : ''}`}
          link='Destinations'
          buttonSize='btn--large'
          buttonStyle={activeButton === 'Tagaytay' ? 'btn--primary' : 'btn--outline'}
          onClick={() => handleButtonClick('Tagaytay')}
        >
          Tagaytay
        </Button>
        <Button
          className={`btns ${activeButton === 'Alfonso' ? 'active' : ''}`}
          link='Destinations'
          buttonSize='btn--large'
          buttonStyle={activeButton === 'Alfonso' ? 'btn--primary' : 'btn--outline'}
          onClick={() => handleButtonClick('Alfonso')}
        >
          Alfonso
        </Button>
      </div>
      
        <div className={`map1 ${activeButton === 'Indang' ? 'active' : ''}`}>
          <Map zoom={12} center = {center} mapId='7221de5946eae6f5'>
            <AdvancedMarker className='pin' position={{lat:14.167903123721212, lng:120.86264725377701}}>
            <Pin/>
          </AdvancedMarker> 
          <AdvancedMarker className='pin' position={{lat:14.229933523566482, lng:120.8581316684386}}>
            <Pin/>
          </AdvancedMarker> 
          <AdvancedMarker className='pin' position={{lat:14.163392840364416, lng:120.90023876727227}}>
            <Pin/>
          </AdvancedMarker> 
          <AdvancedMarker className='pin' position={{lat:14.164086437051198, lng:120.89050639610716}}>
            <Pin/>
          </AdvancedMarker> 
          <AdvancedMarker className='pin'position={{lat:14.15399523015372, lng:120.87749620960246}}>
            <Pin/>
          </AdvancedMarker> 
          </Map>
      
        </div>

        <div className={`map1 ${activeButton === 'Amadeo' ? 'active' : ''}`}>
          <Map zoom={12} center = {center} mapId='7221de5946eae6f5'>
            <AdvancedMarker className='pin' position={{lat:14.182462219192988, lng:120.92996380960277}}>
            <Pin/>
          </AdvancedMarker> 
          <AdvancedMarker className='pin' position={{lat:14.169448442105283, lng:120.9221518672723}}>
            <Pin/>
          </AdvancedMarker> 
          <AdvancedMarker className='pin' position={{lat:14.163392840364416, lng:120.90023876727227}}>
            <Pin/>
          </AdvancedMarker> 
          <AdvancedMarker className='pin' position={{lat:14.132858782210544, lng:120.93606756727192}}>
            <Pin/>
          </AdvancedMarker> 
          <AdvancedMarker className='pin'position={{lat:14.15399523015372, lng:120.87749620960246}}>
            <Pin/>
          </AdvancedMarker> 
          </Map>
      
        </div>


      
    </div>
    </APIProvider>
  );
}