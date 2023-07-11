import React from 'react';
import './Header.css';
import {motion} from "framer-motion";
import Slideshow from './Slideshow';
import {Link} from 'react-router-dom';


const Header = () => {
  
  return (
    <motion.div 
    initial={{ opacity: 0,y:50 }}
            animate={{ opacity: 1 ,y:0}}
            transition={{ 
                duration: 0.9,delay:0.2}}
    className="app__header app__wrapper section__padding" >
      
      <div className="app__wrapper_info">
        <div className="text-container">
          <h1 className="app__header-h1">"Enjoy your Food"</h1>
          <p id='p1' className="text-black">All great deeds and all great thoughts have a ridiculous beginning. Great works are often born on a street corner or in a restaurant's revolving door
          </p>
          <Link to="/booknow" className="btn2">
              Book Now
            </Link>
        </div>
       
        
       
      </div>
  
    </motion.div>
  );
};

export default Header;
