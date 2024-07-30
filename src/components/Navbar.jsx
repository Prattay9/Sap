import React from 'react';
import './Navbar.css';
import { useNavigate } from "react-router-dom";
import sap from '../images/sap.png'
const Navbar = () => {
    const navigate = useNavigate();
    const onSearch = () => {
        navigate('/')
    }
    const onGo = () => {
        navigate('/contact')
    }
    const onRun = () => {
        navigate('/about')
    }
    const onChange = () => {
        const x = document.querySelector('.nav-items1');
        x.style.display = x.style.display === "none" ? "grid" : "none";
    };
    
  return (
    <>
    <div className="nav">
    <div className="navbar">
            <div className='nav-title'>98</div>
            <div className='lalu'>
                <span className='span' onClick={onChange}><i class="ri-menu-line"></i></span>
                <div className="nav-items">
                    <a href="" onClick={onSearch}>Home</a>            
                    <a href="" onClick={onGo}>Contact</a>                    
                    <a href="" onClick={onRun}>About</a>                
                </div>
            </div>
        </div>
        <div className="nav-items1">
            <a href="" onClick={onSearch}>Home</a>           
            <a href="" onClick={onGo}>Contact</a>                    
            <a href="" onClick={onRun}>About</a>                
        </div>

        <div className="nav-pic">
            <img src={sap} alt="" />
        </div>
    </div>
        
    </>
  )
}

export default Navbar