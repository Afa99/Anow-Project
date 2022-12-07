import React from 'react';
import "./Portfolio.css";
import Strategy from './Components/strategy/Strategy';
import Marketing from "./Components/marketing/Marketing";
import Rectangle from './Components/rectangle/Rectangle';
import TextButton from './Components/textButton/TextButton';
import Coloboration from './Components/wrapper/Coloboration';

    function Portfolio (){ 
  return (
    <div className='portfolio'>
        <div className='dci-img'>
            <div className='digital'>
               <div className='lampa'></div> 
               <Coloboration/>
            </div>
            <div className='strategy'>
                <div className='purple'>
                </div>
                 <Strategy/>
            </div>
            <div className='marketing'>
              <div className='radar'></div>
              <Marketing/>
            </div>
        </div>
        <Rectangle/>
        <TextButton/>
    </div>
  );
}
export default Portfolio;