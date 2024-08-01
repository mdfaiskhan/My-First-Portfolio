import React from 'react';
import './Abcd.css';

const Abcd = () => {
  return (
    <>
      <div className='abcd'>
        <div className="google-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d77.6309395!3d12.9539974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1713785958467!5m2!1sen!2sin"
            width="600"
            height="450"
       
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="texts">
          <h1>Registered Office :</h1>
          <h6>Bengaluru, Karnataka 5600**</h6>
        </div>
      </div>
    </>
  );
};

export default Abcd;
