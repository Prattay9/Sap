import React from 'react'
import Navbar from '../components/Navbar'
import Image from '../images/form pic.jpeg'
import Footer from '../components/Footer'
import './Home.css';
import { useState } from 'react';
import axios from 'react';
import Whatsapp from '../components/Whatsapp.';

const Home = () => {
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
    <Navbar/>  
    <Whatsapp/>
        
        <div className="home-main">
          <div className="home-form">
              <form method="POST" onSubmit={handleSubmit} className="my-form">
                <img className='home-image' src={Image} alt="" />
                <div className="home-1">
                  <h3>Request for Enquiry</h3>

                  <div className="input-field">
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

                  <div className="input-field">
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

                  <div className="input-field">
                    <input
                      name="email"
                      type="email"
                      required
                      onChange={handleInput}
                    />
                    <label>Your Email Id</label>
                  </div>
                  <button className="home-btn">Submit</button>
                </div>
              </form>
           </div>
           

        
      <div className="home-coursed">
        <div className="highlight">
          <h3>Instructor-Led Training Parameters</h3>
          <h1>Course Highlights</h1>
          <div className='home-point'>
            <div className='point1'>
              <ul>
                <li> Instructor-led Online Training</li>
                <li> Certified & Experienced Trainers</li>
                <li> Lifetime e-Learning Access</li>
              </ul>
            </div>
            <div className='point2'>
            <ul>
                <li> Project Based Learning</li>
                <li> Course Completion Certificate</li>
                <li> 24x7 After Training Support</li>
              </ul>
            </div>
          </div>
        </div>
        

        <div className="home-content">
          <h1>SAP IBP Training Course Overview</h1>
          <p>SAP IBP (Integrated Business Planning) helps the enterprises in overcoming challenges, such as planning gaps, lack of customer-centric approaches, insufficient data analytics, and inefficient supply chain. The SAP IBP training program helps the participants in knowing SAP IBP solution, its components, and associated business processes. At Multisoft Systems, SAP experts enable the participants to deal with this robust cloud-based next-generation planning solution powered by SAP HANA. The SAP IBP professionals are highly demanded in IT, software development, chemical, food processing, semiconductors, automotive, and manufacturing industries.
            <br /><br />
            SAP IBP (Integrated Business Planning) is a SAP HANA-powered cloud-based solution that focuses on inventory, sales, financial, and supply planning processes.  The SAP IBP certification training course will provide in-depth knowledge and understanding of SAP IBP supply chain solutions, its components, and all the associated business processes. Learn from a team of global SAP certified trainers and earn a globally recognized training certificate.
          </p>
          <h2>SAP IBP Online Training</h2>
          <ul>
            <li>25 Hrs. Instructor-led Training</li>
            <li>Recorded Videos After Training</li>
            <li>Digital Learning Material</li>
            <li>Course Completion Certificate</li>
            <li>Lifetime e-Learning Access</li>
            <li>24x7 After Training Support</li>
          </ul>
        </div>

        <div className="home-head">
          <div className="home-heading-for-all">
            <h1>Curriculum Designed by Experts</h1>
            <div className='head-point'>
              <h3>SAP IBP Training Course Objective</h3>
              <div className="home-drop-down" id='a'>
                <ul>
                  <li>The participants will understand the SAP IBP Platform value proposition, and its applications, including Inventory, Demand, Response & Supply, and Control Tower.
                  </li>
                  <li>The participants will understand the technical aspects of the IBP solutions, such as IBP Configuration and IBP Integration.</li>
                </ul>
              </div>              
            </div>
          </div>
          <div className="home-heading-for-all">
          <h1>Course Prerequisite</h1>
            <div className='head-point'>
              <h3>SAP IBP Training Prerequisite</h3>
              <div className="home-drop-down" id='a1'>
                <ul>
                  <li>The aspirants of this course should carry basic knowledge of the Supply Chain Planning domain and a basic understanding of SAP Supply Chain Planning solutions, such as SAP Advanced Planning & Optimization APO.
                  </li>                  
                </ul>
              </div>              
            </div>
          </div>
          <div className="home-heading-for-all">
          <h1>Course Target Audience</h1>
            <div className='head-point'>
              <h3>SAP IBP Training Target Audience</h3>
              <div className="home-drop-down">
                <ul>
                  <li>SCM Practice Managers at SAP Implementation Providers</li>
                  <li>Business Planners or IT Team Members at Customer Organizations</li>
                  <li>Students who are looking to jumpstart their career in SAP/Supply Chain</li>
                  <li>SAP SCM (APO) Practitioners who are looking to ramp-up on IBP</li>
                </ul>
              </div>              
            </div>
          </div>

          <div className="home-heading-for-all">            
          <h1>Course Content</h1>
            <div className='head-point'>
              <h3>Module 1: SAP Integrated Business Planning</h3>
              <div className="home-drop-down">
                <ul>
                  <li>Outlining the SAP Integrated Business Planning Solution Strategy</li>
                  <li>Positioning SAP Integrated Business Planning Among Other Supply Chain Areas</li>
                  <li>Describing the Architecture of SAP Integrated Business Planning Powered by HANA</li>
                  <li>Explaining SAP Integrated Business Planning Powered by HANA Out- of-the-Box Content</li>
                </ul>
              </div>              
            </div>

            <div className='head-point'>
              <h3>Module 2: User Interface</h3>
              <div className="home-drop-down">
                <ul>
                  <li>Navigating in the SAP Integrated Business Planning Web UI</li>
                  <li>Creating an SAP Fiori Persona</li>
                  <li>Navigating in the SAP Integrated Business Planning Microsoft Excel UI</li>
                  <li>Modeling a Business Process Using SAP Integrated Business Planning</li>                 
                </ul>
              </div>              
            </div>

            <div className='head-point'>
              <h3>Module 3: Configuration</h3>
              <div className="home-drop-down">
                <ul>
                  <li>Using Configuration to Model a Business</li>
                  <li>Creating an Attribute</li>
                  <li>Creating a Simple Master Data Type</li>
                  <li>Compounding a Master Data Type</li>
                  <li>Creating a Time Profile</li>
                  <li>Creating a Planning Area</li>
                  <li>Creating a Planning Level</li>
                  <li>Creating a Key Figure</li>
                  <li>Writing a Key Figure Calculation</li>
                  <li>Creating a Version</li>
                </ul>
              </div>              
            </div>

            <div className='head-point'>
              <h3>Module 4: Model Activation</h3>
              <div className="home-drop-down">
                <ul>
                  <li>Activating a Planning Area</li>
                  <li>Creating a Reason Code</li>
                </ul>
              </div>              
            </div>

            <div className='head-point'>
              <h3>Module 5: Cloud Security</h3>
              <div className="home-drop-down">
                <ul>
                  <li>Outlining Cloud Security</li>
                </ul>
              </div>              
            </div>

            <div className='head-point'>
              <h3>Module 6: Data Integration</h3>
              <div className="home-drop-down">
                <ul>
                  <li>Identifying Data Import Options</li>
                  <li>Importing Data Using the SAP Integrated Business Planning Web UI</li>
                </ul>
              </div>              
            </div>

            <div className='head-point'>
              <h3>Module 7: User Administration</h3>
              <div className="home-drop-down">
                <ul>
                  <li>Creating User Access in the SAP Integrated Business Planning Application</li>
                  <li>Creating a Visibility Filter</li>
                  <li>Creating Use Preferences</li>
                </ul>
              </div>              
            </div>

            <div className='head-point'>
              <h3>Module 8: Microsoft Excel Planning and Reporting</h3>
              <div className="home-drop-down">
                <ul>
                  <li>Creating a Microsoft Excel Template and Favorite</li>
                  <li>Performing a Simulation</li>
                  <li>Formatting a Planning View</li>
                </ul>
              </div>              
            </div>

            <div className='head-point'>
              <h3>Module 9: Analytics and Reporting</h3>
              <div className="home-drop-down">
                <ul>
                  <li>Identifying Data Import Options</li>
                  <li>Creating a Drill Down</li>
                </ul>
              </div>              
            </div>

            <div className='head-point'>
              <h3>Module 10: Disaggregation</h3>
              <div className="home-drop-down">
                <ul>
                  <li>Incorporating Disaggregation Methods in SAP Integrated Business Planning</li>
                </ul>
              </div>              
            </div>

            <div className='head-point'>
              <h3>Module 10: Disaggregation</h3>
              <div className="home-drop-down">
                <ul>
                  <li>Incorporating Disaggregation Methods in SAP Integrated Business Planning</li>
                </ul>
              </div>              
            </div>

            <div className='head-point'>
              <h3>Module 11: Active Object Deletion</h3>
              <div className="home-drop-down">
                <ul>
                  <li>Deleting an Active Object</li>
                </ul>
              </div>              
            </div>
            
            <div className='head-point'>
              <h3>Module 13: Helper Key Figure</h3>
              <div className="home-drop-down">
                <ul>
                  <li>Creating a Helper Key Figure</li>                  
                </ul>
              </div>              
            </div>

            <div className='head-point'>
              <h3>Module 14: Statistical Forecasting</h3>
              <div className="home-drop-down">
                <ul>
                  <li>Managing a Forecast Model</li>
                  <li>Identifying Global Configuration Options</li>
                  <li>SAP2 Master Data Objects</li>
                  <li>Analyzing the SAP2 Model</li>
                  <li>Key Figures with Other Periodicities</li>
                  <li>Creating a Key Figure Using Other Periodicities</li>
                  <li>Naming Conventions</li>
                  <li>Using SAP Preferred Naming Conventions</li>
                  <li>Change History</li>
                  <li>Configuring and Using Change History</li>
                  <li>Collaboration</li>
                  <li>Creating a Jam Group</li>
                  <li>Creating a Task</li>
                </ul>
              </div>              
            </div>            
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
    
  )
  
}

export default Home;