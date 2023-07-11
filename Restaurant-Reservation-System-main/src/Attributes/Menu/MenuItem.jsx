import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.css';

const MenuItem = ({title,price,tags,subtitle}) => (
  
    <div className="container">
      
            
          <ul id="ulmenu" className="list-group ">
            <li className="list-group-item " >{title} <span id="cost">~{price}</span>
            <li id="subtitle" className="fs-6">{tags}{subtitle} </li></li>
            
          </ul>
        </div>
        
      
  );


export default MenuItem;
