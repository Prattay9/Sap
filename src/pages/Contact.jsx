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
  const [values, setValues] = useState({
    name: '',
    contact: '',
    email: '',
    
});
const handleInput = (e) => {
  const { name, value } = e.target;
  setValues({
      ...values,
      [name]: value
  });
};
const handleSubmit = async (e) => {
  e.preventDefault();
  const endpoint = '/';
  try {
    const response = await axios.post(endpoint, values, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = response.data;
    if (response.status === 200) {
      console.log('User registered in successfully');
    }
  } catch (error) {
    console.log(error.response.data.error || error.response.data);
  }
};
  
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
              <form method="POST"  onSubmit={handleSubmit} className="my-con-form">
                <img className='con-image' src={Image6} alt="" />
                <div className="con-1">
                  <h3>Request for Enquiry</h3>

                  <div className="con-field">
                    <input
                      name="name"
                      type="text"
                      required
                      spellCheck="false"
                      onChange={handleInput}
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
                      onChange={handleInput}
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
                      onChange={handleInput}
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