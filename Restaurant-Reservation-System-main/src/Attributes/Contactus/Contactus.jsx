import React from 'react';
import './Contactus.css';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import {motion} from'framer-motion';

const Contactus = () => {
  return (
    <section className='contact section' id='contact'>
      

      <motion.div className='contact__container container grid'
       initial={{ opacity: 0, z: -50 }}
       animate={{ opacity: 1, z: 0 }}
       transition={{ duration: 0.9, delay: 0.2 }}
       >
        <div className='contact__card'>
          <MdEmail className='contact__card-icon' />
          <h3 className='contact__card-title'>Email us at </h3>
          <a href='mailto:archit.srivastava05498@gmail.com' className='contact__button'>
          archit.srivastava05498@gmail.com {' '}
            <MdEmail className='contact__button-icon' />
          </a>
        </div>

        <div className='contact__card'>
          <FaWhatsapp className='contact__card-icon' />
          <h3 className='contact__card-title'>Contact</h3>
          <a href='#' className='contact__button'>
          7007321259{' '}
            <FaWhatsapp className='contact__button-icon' />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contactus;

// import React from "react";
// function Contactus(){
//     return(
//         <div>
//             Contact us
//         </div>
//     )
// };

// export default Contactus;