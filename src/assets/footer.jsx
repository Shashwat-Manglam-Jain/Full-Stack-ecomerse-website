import React from 'react';

import './item.css'
const Footer = () => {
  return (
    <div>
      <style>
    
      </style>
      <div className="whole">
        <div className="section">
          <h2 className="us text-lg">
            Ready to get started?<br />
            Talk to us today
          </h2>
          <button className=" w-28 h-14 bg-[#1f2937] text-white  hover:bg-[#f63667ff] hover:text-white">GET STARTED</button>
        </div>
        
        <div className="shas">
          <div className="jain">
            <h2 className="man text-xl mb-3">Engineer Shashwat Jain</h2>
            <p className="para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, debitis at perspiciatis optio earum illum porro quisquam! Voluptatum ea incidunt, et ex facere obcaecati dicta.
            </p>
          </div>

          <div className="sub">
            <h2 className="up mb-5 text-lg">Subscribe to stay connected</h2>
            <input type="email" placeholder="Your E-Mail" required autoComplete="off" />
            <button className="btn mt-5 bg-[#f63667ff]">SUBSCRIBE</button>
          </div>

          <div className="follow">
            <h2 className='text-lg'>Follow US</h2>
            <div className="icons mt-8">
              <i class="fa-brands fa-youtube fa-sm "></i> 
              <i class="fa-brands fa-instagram fa-sm  "></i>
              <i class="fa-brands fa-whatsapp fa-sm "></i>
            </div>
          </div>

          <div className="call">
            <h2 className='text-lg mb-3'>Call Us</h2>
           
            +91 942442XXXX
          </div>
        </div>

        <hr />

        <div className="two">
          <div className="date">
            <h2 className="wat text-base">
              @ {new Date().getDate()}/{new Date().getMonth()}/{new Date().getFullYear()} Shashwat.M.Jain.
              <br />
              All Rights Reserved
            </h2>
          </div>
          <div className="privacy text-base">
            <h2 className="poli">Privacy Policy</h2>
            <h2 className="terms">TERMS & CONDITIONS</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
