import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from '../images/Contact.png';
import Image6 from '../images/form pic.jpeg'
import './Contact.css';
import Whatsapp from '../components/Whatsapp.';
import axios from 'axios';
import { useState } from 'react';

const Contact = () => {

  
  return (
    <>
      <Navbar />
      <Whatsapp/>
      <div className='contact'>        
        <div className="con-right">
          <div className="con-content">
            <h3>GET IN TOUCH</h3><hr /><br />
            <h1>Contact Us</h1>
            <p>Contact us for questions, technical assistance, or collaboration opportunities via the contact information provided.</p>
            <div className="info1"  style={{ display:'flex', gap:'1vw'}}>
              <i className="ri-phone-fill"></i>
              <p>+91 86172 59790</p>              
            </div>
            <div className="info1" style={{ display:'flex', gap:'1vw'}}>
              <i className="ri-mail-line"></i>
              <p>mailtilak321@rediffmail.com</p>  
           </div>            
          </div>
        </div><hr />
        
        <div className="con-left">
        <div className="con-form">
              <form method="POST"  className="my-con-form">
                <img className='con-image' src={Image6} alt="" />
                <div className="con-1">
                  <h3>Request for Enquiry</h3>

                  <div className="con-field">
                    <input
                      name="name"
                      type="text"
                      required
                      spellCheck="false"
                      pattern="[A-Za-z\s]+"
                      title="Please enter only letters and spaces"
                    />
                    <label>Your Name</label>
                  </div>

                  <div className="con-field">
                    <input
                      name="contact"
                      type="text"
                      required
                      pattern="\d{10}"
                      title="Please enter a 10-digit phone number"
                    />
                    <label>Your Phone Number</label>
                  </div>

                  <div className="con-field">
                    <input
                      name="email"
                      type="email"
                      required
                    />
                    <label>Your Email Id</label>
                  </div>

                  <button className="con-btn" type='submit'>Submit</button>
                </div>
              </form>
           </div>
          
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact;