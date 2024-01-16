import React, { useEffect, useState } from 'react';
import { Button } from '../Button';


function Home() {
  const [isLoaded, setIsLoaded] = useState(false); // New state variable

  useEffect(() => {
    // Set isLoaded to true every time the component is accessed
    setIsLoaded(true);

    // Remove transition styles when the component is unmounted
    return () => setIsLoaded(false);
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div className={`home-container ${isLoaded ? 'loaded' : ''}`}>
      <img className='home-background' src="https://github.com/TrvlGuide/travel-guide/blob/5613784b988849fa0f42de4b5b85bc5b4764c3e0/public/images/home-background.jpg" alt="" />
      <div className='title'>
        <h2>Travel Guide</h2>
        <p>Exploring Various Eco-Friendly Destinations in Cavite</p>
      </div>

      <div className='buttons'>
        <Button className='btns' link='Destinations' buttonSize='btn--large' buttonStyle='btn--primary'>
          Destinations
        </Button>
        <Button className='btns' link='Feedback' buttonSize='btn--large' buttonStyle='btn--outline'>
          Feedback
        </Button>
      </div>
    </div>
  );
}

export default Home;