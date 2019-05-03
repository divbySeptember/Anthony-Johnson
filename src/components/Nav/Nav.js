import React from 'react';
import './Nav.scss';


const Nav = () => {
    return (
        <nav className="navContainer">
            <div className="logoContainer">
                <div className="logoIcon">
                    <i class="fab fa-superpowers"></i>
                </div>
                
                <div className="logoText">
                    <h2>Anthony <span>Jarod</span></h2>
                    <h3>Full Stack Developer</h3>
                </div>
            </div>
            <div className="mainNav">
                <div className="Navi">
                    <a href="#" >Home</a>
                    <a href="#" >Portfolio</a>
                    <a href="#" >Contact</a>
                </div>
                <div className="line1"></div>
                <div className="Icons">
                    <i class="fab fa-github-square"></i>
                    <i class="fab fa-twitter-square"></i>
                    <i class="fab fa-linkedin"></i>
                </div>
            </div>
        </nav>
    )
}





export default Nav