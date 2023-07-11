import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.css';
import { DinnerData } from '../../constant';
import MenuItem from './MenuItem';
import {motion} from 'framer-motion';


const Dinner = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, z: -50 }}
    animate={{ opacity: 1, z: 0 }}
    transition={{ duration: 0.9, delay: 0.2 }}
    className="container bg-image">
       {/* <img id="menulogo"src={image.logo} alt="app_logo" /> */}
      <h1 id="app__header-h1" className="text-center mt-4">Lunch Menu</h1>
      <div id="bder">
        <div className="row bg-transparent">
          <div className="col-md-6">
            <h2 id="app_header-h2" className="mt-4">Starters</h2>
            {DinnerData.starter.map((starter, index) => (
              <MenuItem
                key={starter.title + index}
                title={starter.title}
                price={starter.price}
                tags={starter.tags}
              />
            ))}
          </div>

          <div className="col-md-6">
            <h2 id="app_header-h2" className="mt-4">Main Course</h2>
            {DinnerData.main.map((main, index) => (
              <MenuItem
                key={main.title + index}
                title={main.title}
                price={main.price}
                tags={main.tags}
              />
            ))}
          </div>

          <div className="col-md-6">
            <h2 id="app_header-h2" className="mt-4">Sides</h2>
            {DinnerData.sides.map((sides, index) => (
              <MenuItem
                key={sides.title + index}
                title={sides.title}
                price={sides.price}
                subtitle={sides.subtitle}
              />
            ))}
          </div>

          <div className="col-md-6">
            <h2 id="app_header-h2" className="mt-4">Desserts</h2>
            {DinnerData.desserts.map((desserts, index) => (
              <MenuItem
                key={desserts.title + index}
                title={desserts.title}
                price={desserts.price}
                subtitle={desserts.subtitle}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Dinner;