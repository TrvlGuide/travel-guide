import React, { useState } from 'react';
import { Button } from '../Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { 
        APIProvider,
        Map,
        AdvancedMarker,
        Pin,
        InfoWindow
         } from '@vis.gl/react-google-maps';
import { useEffect } from 'react';
import { ReactSVG } from 'react-svg';



export default function Destinations() {
  const [isContentVisible, setContentVisible] = useState(false);
  const [activeButton, setActiveButton] = useState('Indang'); // Set the default active button
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setContentVisible(true);
    }, 10); // Adjust the delay as needed
  
    return () => clearTimeout(timer);
  }, [activeButton]);
const setContentVisibility = () => {
  setContentVisible(!isContentVisible);
}
  
const center = {lat: 14.153059856204539, lng: 120.90277126727229}

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
  <APIProvider apiKey='AIzaSyC8kczNdBy9nt3qzpB1u0UCVguAsH_hU0Y'>
    <div className='destinations-container'>

    <div onClick={() => setContentVisible(!isContentVisible)} className={`destinations-content ${isContentVisible ? 'active' : ''}`}>
      <div className={`expand ${!isContentVisible? 'active' : ''}`} style={expandText}>Click to Expand</div>
      <div className={`destinations-title ${isContentVisible ? 'active' : ''}`}>
        <h2>Places</h2>
      </div>
      <div className={`destination-buttons ${isContentVisible ? 'active' : ''}`}>
        <Button
          className={`btns ${activeButton === 'Indang' ? 'active' : ''}`}
          link='Destinations'
          buttonSize='btn--large'
          buttonStyle={activeButton === 'Indang' ? 'btn--primary' : 'btn--outline'}
          onClick={() => 
            handleButtonClick('Indang')
           
        }
          
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
    </div>
      

    <div className='filter-buttons'>
        <Button className='btns' link='Destinations' buttonSize='btn--medium' buttonStyle='btn--primary'>
        Accomodations
        </Button>
        <Button className='btns' link='Destinations' buttonSize='btn--medium' buttonStyle='btn--primary'>
        Destinations
        </Button>
      </div>
       <div className={`map1 ${activeButton === 'Indang' ? 'active' : ''}`}>
          <Map 
          zoom={12} 
          center = {{lat:14.191760936999954, lng:120.8727514189682}} 
          mapId='7221de5946eae6f5' 
          gestureHandling={'greedy'}
          disableDefaultUI={true}>

            {/* ACCOMMODATIONS */}
            <AdvancedMarker className='pin' position={{lat:14.167903123721212, lng:120.86264725377701}}>
            <FontAwesomeIcon icon={faBed} style={hotel}/>
            </AdvancedMarker>
          <AdvancedMarker className='pin' position={{lat:14.229933523566482, lng:120.8581316684386}}>
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 
          <AdvancedMarker className='pin' position={{lat:14.163392840364416, lng:120.90023876727227}}>
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 
          <AdvancedMarker className='pin' position={{lat:14.164086437051198, lng:120.89050639610716}}>
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 
          <AdvancedMarker className='pin'position={{lat:14.15399523015372, lng:120.87749620960246}}>
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 

          {/* DESTINATIONS */}

          <AdvancedMarker className='pin'position={{lat:14.157482118744753, lng:120.90333919075216}}>
              <box-icon name='plane-alt' type='solid' color='#ffa500' style={{fontSize: '24px'}}></box-icon>
          </AdvancedMarker> 

          <AdvancedMarker className='pin'position={{lat:14.163885720325474, lng:120.89050506103825}}>
              <box-icon name='plane-alt' type='solid' color='#ffa500' style={{fontSize: '24px'}}></box-icon>
          </AdvancedMarker> 
          </Map>
      
        </div>

        <div className={`map1 ${activeButton === 'Amadeo' ? 'active' : ''}` } >
          <Map zoom={12} center = {center} mapId='7221de5946eae6f5' gestureHandling={'greedy'}
          disableDefaultUI={true}>
            <AdvancedMarker className='pin' position={{lat:14.182462219192988, lng:120.92996380960277}}>
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 
          <AdvancedMarker className='pin' position={{lat:14.169448442105283, lng:120.9221518672723}}>
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 
          <AdvancedMarker className='pin' position={{lat:14.163392840364416, lng:120.90023876727227}}>
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 
          <AdvancedMarker className='pin' position={{lat:14.132858782210544, lng:120.93606756727192}}>
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 
          <AdvancedMarker className='pin'position={{lat:14.15399523015372, lng:120.87749620960246}}>
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 
          </Map>
      
        </div>

        <div className={`map1 ${activeButton === 'Tagaytay' ? 'active' : ''}`} >
          <Map zoom={12} center = {center} mapId='7221de5946eae6f5' gestureHandling={'greedy'}
          disableDefaultUI={true}>
            <AdvancedMarker className='pin' position={{lat:14.131216782136892, lng:121.01367392309753}}>
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 
          <AdvancedMarker className='pin' position={{lat:14.115665981440268, lng:120.96260516727182}}>
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 
          <AdvancedMarker className='pin' position={{lat:14.133567670052054, lng:121.01652879610687}}>
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 
          <AdvancedMarker className='pin' position={{lat: 14.112093520801116, lng:120.9593291041479}}>
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 
          <AdvancedMarker className='pin'position={{lat:14.136562084287528, lng:120.98507507715965}}>
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 

          <AdvancedMarker className='pin'position={{lat:14.125888347170022, lng:120.96977286836119}}>
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 

          <AdvancedMarker className='pin'position={{lat:14.103406266193264, lng:120.94857424102703}}>
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 


          <AdvancedMarker className='pin'position={{lat:14.10287675286715, lng:120.94231528616781}}>
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 


          <AdvancedMarker className='pin'position={{lat:14.09957288537583, lng:120.92447582800935}}>
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 

          <AdvancedMarker className='pin'position={{lat: 14.1225128897527, lng:120.99028225490974}}>
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 

          <AdvancedMarker className='pin'position={{lat: 14.094367678814606, lng:120.94110084823643}}>
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 

          <AdvancedMarker className='pin'position={{lat:14.124709994630447, lng:120.97000517434583}}>
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 

          <AdvancedMarker className='pin'position={{lat:14.123860983071408, lng:120.9920135255544}}>
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 

          <AdvancedMarker className='pin'position={{lat:14.134842313299137, lng:121.00933329188564}}>
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 

          <AdvancedMarker className='pin'position={{lat:14.098333538820276, lng:120.93069679610639}}>
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 

          <AdvancedMarker className='pin'position={{lat:14.098333538820276, lng:120.93069679610639}}>
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 
          

          <AdvancedMarker className='pin'position={{lat:14.11679468376443, lng:120.96331882061106}}>
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 

          <AdvancedMarker className='pin'position={{lat:14.099919040888485, lng:120.92705654653221}}>
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 
          

          <AdvancedMarker className='pin'position={{lat:14.479075320352461, lng:120.89704945500662}}>
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 

          <AdvancedMarker className='pin'position={{lat:14.122150646924188, lng:120.93436288263167}}>
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 


          <AdvancedMarker className='pin'position={{lat:14.100179942254613, lng:120.9282860249411}}>
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 

          <AdvancedMarker className='pin'position={{lat:14.091609113025708, lng:120.9031320567728}}>
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 

          <AdvancedMarker className='pin'position={{lat:14.120870880004206, lng:120.96836796144338}}>
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 

          <AdvancedMarker className='pin'position={{lat:14.103370091777608, lng:120.95109378383691}}>
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 
          
          <AdvancedMarker className='pin'position={{lat:14.09477409218269, lng:120.94103775494801}}>
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 


          <AdvancedMarker className='pin'position={{lat:14.103201923857384, lng:120.9375369639269}}>
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 

          <AdvancedMarker className='pin'position={{lat:14.13653441652928, lng:120.98476984926525}}>
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 

          <AdvancedMarker className='pin'position={{lat:14.115840688376762, lng:120.96257095135995}}>
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 

          <AdvancedMarker className='pin'position={{lat:14.114802146317174, lng:120.96102292216388}}> 
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 

          <AdvancedMarker className='pin'position={{lat:14.118193040251846, lng:120.96382890663693}}> 
          {/* tentative nordic smthn */}
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 

          <AdvancedMarker className='pin'position={{lat:14.124160182944156, lng:120.99083755500233}}> 
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 

          <AdvancedMarker className='pin'position={{lat:14.405423286770858, lng:120.99087776667395}}> 
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 


          <AdvancedMarker className='pin'position={{lat:14.097709546184163, lng:120.942498140535}}> 
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 


          <AdvancedMarker className='pin'position={{lat:14.108355334048197, lng:120.95561966667249}}> 
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 


          <AdvancedMarker className='pin'position={{lat:14.095408464033257, lng:120.9346753298723}}> 
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 

          <AdvancedMarker className='pin'position={{lat:14.08743978249131, lng:120.8973817433453}}> 
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 

          <AdvancedMarker className='pin'position={{lat:14.099758405112821, lng:120.92617753106407}}> 
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 

          <AdvancedMarker className='pin'position={{lat:14.097057283355749, lng:120.91656372750438}}> 
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 

          <AdvancedMarker className='pin'position={{lat:14.12601232633816, lng:120.99674418064419}}> 
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 

          <AdvancedMarker className='pin'position={{lat:14.118815336616024, lng:120.94503214248125}}> 
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 

          <AdvancedMarker className='pin'position={{lat:14.126171092591314, lng:120.97769737694698 }}> 
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 

          <AdvancedMarker className='pin'position={{lat:14.102092488923507, lng:120.94975328007062 }}> 
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 


          <AdvancedMarker className='pin'position={{lat:14.10328729577424, lng:120.93599123407148 }}> 
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 

          <AdvancedMarker className='pin'position={{lat:14.10180699170764, lng:120.94849451765776 }}> 
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 

          <AdvancedMarker className='pin'position={{lat:14.115930456475295, lng:120.96286504284078 }}> 
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 

          <AdvancedMarker className='pin'position={{lat:14.09968884145714, lng:120.91794069610643 }}> 
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 

          <AdvancedMarker className='pin'position={{lat:14.101408771166966, lng:120.94757972373746 }}> 
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 

          <AdvancedMarker className='pin'position={{lat:14.126691302557992, lng:120.97235237342109 }}> 
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 
          </Map>

          
      
        </div>


        <div className={`map1 ${activeButton === 'Alfonso' ? 'active' : ''}`} gestureHandling={'greedy'}
          disableDefaultUI={true}>
          <Map zoom={12} center = {center} mapId='7221de5946eae6f5' gestureHandling={'greedy'}
          disableDefaultUI={true}>
            <AdvancedMarker className='pin' position={{lat:14.079708534319122, lng:120.84574831353434}}>
            <FontAwesomeIcon icon={faBed} style={hotel}/>
            
          </AdvancedMarker> 
          <AdvancedMarker className='pin' position={{lat:14.083397157883269, lng:120.84567394345163}}>
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 
          <AdvancedMarker className='pin' position={{lat:14.076915300136024, lng:120.86614583303222}}>
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 
          <AdvancedMarker className='pin' position={{lat:14.08547943089959, lng:120.87598082134294}}>
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 
          <AdvancedMarker className='pin'position={{lat:14.127425300746848, lng:120.84857437323056}}>
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker>
          <AdvancedMarker className='pin'position={{lat:14.09942135991592, lng:120.85563736463389}}>
            <FontAwesomeIcon icon={faBed} style={hotel}/>
          </AdvancedMarker> 
          </Map>
      
        </div>


      
    </div>
    </APIProvider>
  );
}